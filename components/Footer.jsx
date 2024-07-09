import Link from "next/link";
import React from "react";
import { BookIcon } from "@/components/svg";
export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <BookIcon className="w-6 h-6" />
          Tutorly
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Find a Tutor
          </Link>
          <Link
            href="#"
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
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="text-muted-foreground text-sm">
          &copy; 2024 Tutorly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
