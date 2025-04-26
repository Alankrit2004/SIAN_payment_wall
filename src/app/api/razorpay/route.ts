import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount, name, email } = await req.json();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100, // Amount in paisa
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
    notes: {
      name: name,
      email: email,
    },
  };

  try {
    const order = await razorpay.orders.create(options);
    return NextResponse.json({ order });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
