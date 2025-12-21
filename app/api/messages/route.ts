import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

// Format date to "DD/MM/YYYY HH:MM:SS"
function formatDate(date: Date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  const h = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const s = date.getSeconds().toString().padStart(2, "0");
  return `${d}/${m}/${y} ${h}:${min}:${s}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // 🔹 Kumpulkan semua error
    const errors: string[] = [];

    if (!name || !name.trim()) {
      errors.push("Nama wajib diisi");
    } else if (name.trim().length < 3) {
      errors.push("Nama minimal 3 karakter");
    }

    if (!message || !message.trim()) {
      errors.push("Pesan wajib diisi");
    } else if (message.trim().length < 5) {
      errors.push("Pesan minimal 5 karakter");
    }

    // Jika ada error, kembalikan semua sekaligus
    if (errors.length > 0) {
      return NextResponse.json(
        {
          errorCode: "VALIDATION_ERROR",
          errors,
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio-kelas");
    const collection = db.collection("messages");

    const formattedDate = formatDate(new Date());

    const result = await collection.insertOne({
      name: name.trim(),
      message: message.trim(),
      message_date: formattedDate,
    });

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /messages error:", error);

    return NextResponse.json(
      {
        errorCode: "SERVER_ERROR",
        message: "Terjadi kesalahan pada server",
      },
      { status: 500 }
    );
  }
}
