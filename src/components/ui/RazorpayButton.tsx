"use client";

import { useState } from "react";

interface RazorpayButtonProps {
  name: string;
  email: string;
  amount: number;
}

export default function RazorpayButton({ name, email, amount }: RazorpayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, amount }),
      });

      const { order } = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "Glitch Hideout Community", // or whatever your brand is
        description: "Monthly Membership",
        order_id: order.id,
        handler: async function (response: any) {
          console.log("Payment Success:", response);

          // Here you can hit another API to store user in Supabase etc.
          // e.g., await fetch('/api/save-user', {...});
        },
        prefill: {
          name,
          email,
        },
        notes: {
          plan: "Monthly",
        },
        theme: {
          color: "#6366f1",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment Error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
    >
      {loading ? "Processing..." : `Pay ₹${amount}`}
    </button>
  );
}
