import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "Learn more about our company",
};
export default function About() {
  return (
    <h1 className="m-5 text-center text-3xl font-bold">
      Welcome to the About Page
    </h1>
  );
}
