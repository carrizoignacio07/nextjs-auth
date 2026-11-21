import Link from "next/link";
import NavBar from "./NavBar";

export default function Footer() {
  return (
    <footer className="py-2 px-5 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold">My App</h1>
      </Link>
      <NavBar></NavBar>
    </footer>
  );
}
