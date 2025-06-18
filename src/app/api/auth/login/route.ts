import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

// Ambil secret key dari environment variable
const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password!);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password",
        },
        {
          status: 401,
        }
      );
    }

    // Buat payload JWT
    const token = await new SignJWT({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      code: user.code,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d") // Token kadaluarsa dalam 24 jam
      .sign(secretKey);

    // Kirim token via cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          code: user.code,
        },
      },
      {
        status: 200,
      }
    );

    // Simpan token di cookie
    response.cookies.set(process.env.NEXT_PUBLIC_SEASON_KEY!, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Hanya HTTPS di production
      maxAge: 60 * 60 * 24, // 1 hari
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error || (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
}
