# reCAPTCHA v2 — Public Frontend Implementation Plan

**Project:** `hisd3-web-frontend`  
**Stack:** React + TanStack Router + `graphql-request`  
**Target Surface:** Contact Us form (public homepage)  
**Target File:** `src/features/public/home/contact-us-section.tsx`

---

## Phase B1: Package Installation

Install the reCAPTCHA React wrapper and its TypeScript types.

```bash
cd hisd3-web-frontend
npm install react-google-recaptcha
npm install -D @types/react-google-recaptcha
```

**Why these two packages:**
- `react-google-recaptcha` — provides the `<ReCAPTCHA>` widget component and a ref-based API to get/reset the token
- `@types/react-google-recaptcha` — TypeScript type definitions for the component and its ref methods

---

## Phase B2: Environment Configuration

#### [MODIFY] `.env`

Add the **site key** (this is the public key — safe to expose in frontend code):

```env
VITE_RECAPTCHA_SITE_KEY=6Lfqq5UsAAAAADs6M3L79YTlAYnrls1erB9AStXL
```

> [!IMPORTANT]
> The **secret key** must NEVER be in frontend code. It is already in the backend `.env` only.

---

## Phase B3: No Codegen Required

Unlike the admin frontend, the public site uses **raw `gql` tagged strings** with `graphql-request`. There is no type generation step.

The `CREATE_INQUIRY` mutation passes the entire form as `$payload: CreateInquiryInput!`. Since `captchaToken` is part of `CreateInquiryInput` in the backend schema, we just add it to the payload object in the `handleSubmit` function — no mutation string changes needed.

```graphql
# This mutation is already correct — no changes needed
mutation CreateInquiry($payload: CreateInquiryInput!) {
    createInquiry(createInquiryInput: $payload) {
        success
    }
}
```

---

## Phase B4: Contact Form Component — Full Integration

#### [MODIFY] `src/features/public/home/contact-us-section.tsx`

### Step 4.1 — Add Imports

```diff
 import { useState } from "react";
+import { useRef } from "react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { toast } from "sonner";
 import { gql } from "graphql-request";
 import { graphqlClient } from "@/lib/graphql-client";
+import ReCAPTCHA from "react-google-recaptcha";
```

### Step 4.2 — Add the CAPTCHA Ref inside `ContactUsSection`

```diff
 export function ContactUsSection() {
     const [isSubmitting, setIsSubmitting] = useState(false);
+    const recaptchaRef = useRef<ReCAPTCHA>(null);
     const [form, setForm] = useState({
         name: "",
         email: "",
         phone: "",
         hospitalOrClinic: "",
         message: "",
     });
```

### Step 4.3 — Read, Validate, and Pass the Token in `handleSubmit`

Token validation runs **before** `setIsSubmitting(true)` so the loading state is never triggered for incomplete CAPTCHA. The token is spread into the request payload. CAPTCHA resets on both success and failure so the user can re-submit.

```diff
     async function handleSubmit(e: React.FormEvent) {
         e.preventDefault();
+
+        // Guard: require CAPTCHA to be completed before submitting
+        const captchaToken = recaptchaRef.current?.getValue();
+        if (!captchaToken) {
+            toast.error("Please complete the CAPTCHA verification.");
+            return;
+        }
+
         setIsSubmitting(true);

         try {
             await graphqlClient.request(CREATE_INQUIRY, {
-                payload: form
+                payload: { ...form, captchaToken }
             });
             toast.success("Message sent successfully!");
             setForm({ name: "", email: "", phone: "", hospitalOrClinic: "", message: "" });
+            recaptchaRef.current?.reset();
         } catch (error) {
             console.error(error);
             toast.error("Failed to send message. Please try again.");
+            recaptchaRef.current?.reset();
         } finally {
             setIsSubmitting(false);
         }
     }
```

### Step 4.4 — Render the Widget in the Form

Place the widget between the message `<Textarea>` block and the submit `<Button>`. Centering it with `flex justify-center` keeps it visually balanced in the public site's layout.

```diff
             {/* Message Textarea block */}
             <div>
                 <label htmlFor="message" ...>Message</label>
                 <div className="mt-2.5">
                     <Textarea ... />
                 </div>
             </div>

+            {/* reCAPTCHA Widget */}
+            <div className="flex justify-center">
+                <ReCAPTCHA
+                    ref={recaptchaRef}
+                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
+                />
+            </div>

             {/* Submit Button */}
             <div>
                 <Button
                     type="submit"
                     className="w-full"
                     disabled={isSubmitting}
                 >
                     {isSubmitting ? "Sending..." : "Send Message"}
                 </Button>
             </div>
```

---

## Phase B5: Verification Checklist

Start the backend locally with `RECAPTCHA_SECRET_KEY` present in `.env`, then run the public frontend with `npm run dev`.

| Test | Expected Result |
|---|---|
| Navigate to the Contact Us section | reCAPTCHA checkbox widget appears between the message textarea and the "Send Message" button |
| Click "Send Message" without completing CAPTCHA | Error toast: "Please complete the CAPTCHA verification." — no network request sent |
| Complete CAPTCHA, fill form, click "Send Message" | Success toast "Message sent successfully!", form fields clear, CAPTCHA resets |
| Complete CAPTCHA, submit with an empty required field | Browser's native `required` validation fires — form not submitted |
| Complete CAPTCHA, submit but backend is down | Error toast "Failed to send message. Please try again.", CAPTCHA resets |
| Submit with a tampered/fake token (via DevTools) | Backend returns `ForbiddenException: CAPTCHA verification failed` |

---

## Files Summary

| Phase | Action | File |
|---|---|---|
| B1 | Install packages | `package.json` |
| B2 | Add `VITE_RECAPTCHA_SITE_KEY` | `.env` |
| B3 | No codegen needed | — |
| B4 | Integrate widget + token logic | `src/features/public/home/contact-us-section.tsx` |
