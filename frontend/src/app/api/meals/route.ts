import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const url = `${BACKEND_URL}/meals?${searchParams}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({
      status: 500,
      error: error instanceof Error ? error.message : "Failed to fetch meals",
    });
  }
}
