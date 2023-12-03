import React from "react";
import ContactForm from "./contact-form";
import ContactDetail from "./contact-detail";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="md:px-16 pt-8 md:pt-12 md:max-w-[724px] text-gray-800 grid justify-stretch">
        <div className="px-4">
          <ContactForm />
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}
