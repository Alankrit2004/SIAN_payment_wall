"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirect based on country
    if (formData.country.toLowerCase() === "india") {
      router.push("/landing/payment-india");
    } else {
      router.push("/landing/payment-international");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-1/2 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center p-12">
        <img src="/sian_logo.jpg" alt="logo" className="h-26 w-26 rounded-lg mb-4" />
        <h1 className="text-4xl font-bold text-center mb-4">
          Siesta Innovations<br />& Applications Network
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Community for creating novel ideas and work on projects as a team. 
        </p>
      </div>

      {/* Right panel */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
        {/* <img src="src\sian_logo.jpg" alt="logo" className="h-8 mb-6" /> */}
        <h2 className="text-2xl font-semibold mb-2">Welcome to SIAN!</h2>
        <p className="text-gray-500 mb-6">Please enter the following details.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2">
            Submit →
          </Button>
        </form>
      </div>
    </div>
  );
}