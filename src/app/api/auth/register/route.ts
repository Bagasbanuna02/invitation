"use server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Fungsi untuk generate kode unik
function generateUniqueCode(length: number = 8): string {
  const chars = "0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
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

    // Cek apakah email sudah terdaftar
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already registered",
        },
        {
          status: 400,
        }
      );
    }

    // Generate unique code and make sure it's not already in the DB
    let uniqueCode = "";
    let isUnique = false;

    while (!isUnique) {
      uniqueCode = generateUniqueCode();
      const existingUser = await prisma.user.findFirst({
        where: {
          code: uniqueCode,
        },
      });

      if (!existingUser) {
        isUnique = true;
      }
    }
    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with uniqueCode
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        code: uniqueCode,
      },
    });

    console.log(user);

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
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
