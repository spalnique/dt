import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(req: NextRequest) {
  try {
    const url = `${BACKEND_URL}/meals/${
      req.nextUrl.searchParams.get("id") || ""
    }`;

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
    console.error("Error in meal API route:", error);
    return NextResponse.json({ status: 500, error: "Failed to fetch meal" });
  }
}
