// src/app/landing/payment-international.tsx
"use client";

export default function PaymentInternational() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold text-center">Complete Your International Payment</h1>
        <button className="w-full bg-black text-white p-3 rounded-lg">
          Pay with Stripe / Paypal
        </button>
      </div>
    </div>
  );
}
