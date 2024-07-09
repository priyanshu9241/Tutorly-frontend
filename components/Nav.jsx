import Link from "next/link";
import { BookIcon } from "@/components/svg";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container md:pl-4  py-6 md:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl"
          prefetch={false}
        >
          <BookIcon className="w-6 h-6" />
          Tutorly
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/find"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Find a Tutor
          </Link>
          <Link
            href="tutor-signup"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Become a Tutor
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            className="hover:underline underline-offset-4"
            href="#"
            prefetch={false}
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="sign-in" prefetch={false}>
            <Button variant="pro" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="sign-up" prefetch={false}>
            <Button variant="pro" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
