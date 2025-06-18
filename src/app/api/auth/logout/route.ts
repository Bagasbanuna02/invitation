/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Hapus cookie auth_token dengan mengaturnya expired
  const response = NextResponse.json(
    {
      success: true,
      message: "Logout successful",
    },
    {
      status: 200,
    }
  );

  // Set cookie auth_token dengan masa berlaku 0 (menghapus cookie)
  response.cookies.set(process.env.NEXT_PUBLIC_SEASON_KEY!, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
