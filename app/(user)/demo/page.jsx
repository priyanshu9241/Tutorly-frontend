
"use client"
import React from "react";
import { useEffect } from "react";
export default function page() {
  let img;
  async function fetchImg() {
    img = await fetch("https://ui-avatars.com/api/?name=John+Doe");
  }
  useEffect(() => {
    fetchImg;
  }, []);
  useEffect(() => {
   console.log(img)
  }, [img]);
  return (
    <div>
      page
      <img src="https://ui-avatars.com/api/?name=John+Doe" alt="user" />
    </div>
  );
}
