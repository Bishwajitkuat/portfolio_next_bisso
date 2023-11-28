import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>From: {name}</h1>
    <h3>Email: {email}</h3>
    <h4> Subject: {subject}</h4>
    <p>Message: {message}</p>
  </div>
);
