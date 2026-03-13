"use client";
import * as z from "zod";
import { formSchema } from "../lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@apollo/client/react";
import { CREATE_INQUIRY } from "@/graphql/mutations";

type Schema = z.infer<typeof formSchema>;

export function ContactForm() {
  const [createInquiry, { loading, error: mutationError }] =
    useMutation(CREATE_INQUIRY);

  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      hospitalOrClinic: "",
      email: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (data: Schema) => {
    try {
      await createInquiry({
        variables: {
          createInquiryInput: data,
        },
      });
    } catch (error) {
      console.error("Mutation error:", error);
      throw error;
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h-full py-6 px-3"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
          >
            <Check className="size-8" />
          </motion.div>

          <h2 className="text-center text-2xl font-bold mb-2">Thank you</h2>

          <p className="text-center text-muted-foreground">
            Form submitted successfully, we will get back to you soon
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border max-w-3xl mx-auto bg-white"
    >
      <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
        <h2 className="mt-4 mb-1 font-bold text-2xl col-span-full">
          Contact us
        </h2>

        <p className="text-muted-foreground text-sm col-span-full mb-5">
          Please fill the form below to contact us
        </p>

        {/* Name */}
        <Field className="md:col-span-3">
          <FieldLabel>Name *</FieldLabel>
          <Input {...register("name")} placeholder="Enter your name" />
          {errors.name && <FieldError errors={[errors.name]} />}
        </Field>

        {/* Phone */}
        <Field className="md:col-span-3">
          <FieldLabel>Phone *</FieldLabel>
          <Input {...register("phone")} placeholder="Enter your phone number" />
          {errors.phone && <FieldError errors={[errors.phone]} />}
        </Field>

        {/* Hospital */}
        <Field className="md:col-span-3">
          <FieldLabel>Hospital/Clinic Name</FieldLabel>
          <Input
            {...register("hospitalOrClinic")}
            placeholder="Enter hospital/clinic name"
          />
        </Field>

        {/* Email */}
        <Field className="md:col-span-3">
          <FieldLabel>Email</FieldLabel>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <FieldError errors={[errors.email]} />}
        </Field>

        {/* Message */}
        <Field className="col-span-full">
          <FieldLabel>Message *</FieldLabel>
          <Textarea {...register("message")} placeholder="Enter your message" />
          {errors.message && <FieldError errors={[errors.message]} />}
        </Field>
      </FieldGroup>

      {mutationError && (
        <div className="mb-6 p-4 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>
            We couldn't submit your message. Please check your connection and
            try again.
          </p>
        </div>
      )}

      <div className="flex justify-end">
        <Button disabled={isSubmitting || loading}>
          {isSubmitting || loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
