"use client";
import * as z from "zod";
import { formSchema } from "../lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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

    const [createInquiry, { loading, error: mutationError }] = useMutation(CREATE_INQUIRY);

    const form = useForm<Schema>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            phone: "",
            hospitalOrClinic: "",
            email: "",
            message: "",
        },
    });
    const {
        formState: { isSubmitting, isSubmitSuccessful },
    } = form;

    const handleSubmit = form.handleSubmit(async (data: Schema) => {
        try {
            await createInquiry({
                variables: {
                    input: {
                        name: data.name,
                        phone: data.phone,
                        hospitalOrClinic: data.hospitalOrClinic,
                        email: data.email,
                        message: data.message,
                    },
                },
            });
        } catch (error) {
            console.error("Mutation error:", error);
            throw error; // Rethrow to prevent isSubmitSuccessful from being true
        }
    });

    if (isSubmitSuccessful) {
        return (
            <div className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
                    className="h-full py-6 px-3"
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                        }}
                        className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
                    >
                        <Check className="size-8" />
                    </motion.div>
                    <h2 className="text-center text-2xl text-pretty font-bold mb-2">
                        Thank you
                    </h2>
                    <p className="text-center text-lg text-pretty text-muted-foreground">
                        Form submitted successfully, we will get back to you soon
                    </p>
                </motion.div>
            </div>
        );
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border max-w-3xl mx-auto bg-white"
        >
            <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
                <h2 className="mt-4 mb-1 font-bold text-2xl tracking-tight col-span-full">
                    Contact us
                </h2>
                <p className="tracking-wide text-muted-foreground mb-5 text-wrap text-sm col-span-full">
                    Please fill the form below to contact us
                </p>

                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="name">Name *</FieldLabel>
                            <Input
                                {...field}
                                id="name"
                                type="text"
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your name"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="phone">Phone *</FieldLabel>
                            <Input
                                {...field}
                                id="phone"
                                type="text"
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your phone number"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="hospitalOrClinic"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="hospitalOrClinic">
                                Hospital/Clinic Name{""}
                            </FieldLabel>
                            <Input
                                {...field}
                                id="hospitalOrClinic"
                                type="text"
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter hospital/clinic name"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 md:col-span-3"
                        >
                            <FieldLabel htmlFor="email">Email </FieldLabel>
                            <Input
                                {...field}
                                id="email"
                                type="email"
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your email"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                            data-invalid={fieldState.invalid}
                            className="gap-1 col-span-full"
                        >
                            <FieldLabel htmlFor="message">Message *</FieldLabel>
                            <Textarea
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id="message"
                                placeholder="Enter your message"
                            />

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </FieldGroup>
            {mutationError && (
                <div className="mb-6 p-4 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>We couldn't submit your message. Please check your connection and try again.</p>
                </div>
            )}
            <div className="flex justify-end items-center w-full">
                <Button disabled={isSubmitting || loading}>
                    {isSubmitting || loading ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </form>
    );
}
