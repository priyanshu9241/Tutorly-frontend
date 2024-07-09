"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Tab from "@/components/Tab";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";

export default function SignupForm() {
  const router = useRouter();
  const { user,setUser } = useUserContext();

  // student or tutor
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { Name, email, password, confirmPassword, phone } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };
    console.log(signupData);  
    const reqUrl =
      process.env.NEXT_PUBLIC_API_URL +
      (accountType === "tutor"
        ? "/api/v1/tutorsAuth/register"
        : "/api/v1/studentsAuth/register");
    console.log(reqUrl);
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    const data = await res.json();
    setUser(data)
    router.push("/my-sessions")

    // Setting signup data to state
    // To be used after otp verification
    // dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    // dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      Name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    setAccountType("student");
  };

  return (
    <div>
      {/* Tab */}
      <Tab role={accountType} setRole={setAccountType} />
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className=" flex gap-x-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="Name"
              value={Name}
              onChange={handleOnChange}
              placeholder="Enter name"
              className="form-style w-full"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full"
          />
        </label>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
            Phone number <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="phone"
            value={phone}
            onChange={handleOnChange}
            placeholder="Enter your Phone number"
            className="form-style w-full"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
