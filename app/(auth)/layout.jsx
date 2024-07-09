"use client";
import React from "react";
import { usePathname } from "next/navigation";
import frameImg from "@/public/frame.png";
export default function layout({ children }) {
  const pathname = usePathname();
  // console.log(pathname);
  const imgPath = pathname === "/sign-up" ? "/signup.webp" : "/login.webp";
  return (
    <div className="bg-muted h-screen">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem]">
            {pathname === "/sign-up"
              ? "Join the millions learning new skills with Tutorly"
              : "Welcome Back"}
          </h1>
          <div className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <p>Education to future-proof your career</p>
            <span className="font-edu-sa font-bold italic text-red-700">
              Build skills for today, tomorrow, and beyond
            </span>
          </div>
          {children}
        </div>
        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
          <img
            src="/frame.png"
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
          />
          <img
            src={imgPath}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 z-10"
          />
        </div>
      </div>
    </div>
  );
}
