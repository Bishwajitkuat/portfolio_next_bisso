import React from "react";
import ContactForm from "./contact-form";
import ContactDetail from "./contact-detail";

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className=" px-4 md:px-16 pt-8 md:pt-12 max-w-[724px] mx-auto text-gray-800">
        <div className="">
          <ContactForm />
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}
