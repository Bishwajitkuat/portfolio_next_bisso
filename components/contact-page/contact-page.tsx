import React from "react";
import ContactForm from "./contact-form";
import ContactDetail from "./contact-detail";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-8 grid justify-center md:pt-12 text-gray-800">
      <div className="grid gap-6 max-w-[600px] min-w-[300px] md:min-w-[500px] px-8">
        <ContactForm />
        <ContactDetail />
      </div>
    </div>
  );
}
