import React from "react";
import ContactForm from "./contact-form";
import ContactDetail from "./contact-detail";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="px-4 md:px-16 pt-8 md:pt-12  text-gray-800 grid justify-center m-auto md:max-w-[724px]">
        <ContactForm />
        <ContactDetail />
      </div>
    </div>
  );
}
