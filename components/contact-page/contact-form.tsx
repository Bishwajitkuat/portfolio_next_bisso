import React, { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailDataSchema } from "@/lib/zod/email-schema";
import { z } from "zod";
import { toast } from "sonner";

type Inputs = z.infer<typeof EmailDataSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(EmailDataSchema),
  });

  const postForm: SubmitHandler<Inputs> = async (data) => {
    const validatedContacInfo = EmailDataSchema.safeParse(data);
    if (validatedContacInfo.success) {
      const res = await fetch("api/email", {
        method: "POST",
        body: JSON.stringify(validatedContacInfo.data),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      reset();
    } else if (validatedContacInfo.error) {
      toast.error(
        validatedContacInfo.error.flatten().fieldErrors.name?.join(", ")
      );
    }
  };

  return (
    <div className="pt-8">
      <h2 className="text-center text-xl pb-12">Send a message</h2>
      <form
        className="flex flex-col gap-6 justify-center"
        onSubmit={handleSubmit(postForm)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-sm shadow-sm px-2 py-1"
            placeholder="your full name"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-sm shadow-sm p-1"
            placeholder="example@example.com"
            type="text"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject">Subject</label>
          <input
            className="rounded-sm shadow-sm p-1"
            placeholder="subject of message"
            type="text"
            id="subject"
            {...register("subject", {
              required: "Subject is required",
            })}
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">message</label>
          <textarea
            className="p-2 min-h-[150px] md:min-h-[200px]"
            placeholder="Hello!, please write your message here!"
            id="message"
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className={
              isSubmitting
                ? `bg-gray-500 p-16  text-black py-2 rounded-full shadow-2xl`
                : `bg-[#5651e594] px-16 text-white py-2 rounded-full shadow-2xl hover:bg-[#5651e5]`
            }
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
