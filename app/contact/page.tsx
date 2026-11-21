import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with us",
};

export default function Contact() {
  return (
    <h1 className="m-5 text-center text-3xl font-bold">
      Welcome to the Contact Page
    </h1>
  );
}
