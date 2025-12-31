import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

// Format date to "DD/MM/YYYY HH:MM:SS"
function formatDateWIB(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = fmt.formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) map[p.type] = p.value;

  return `${map.day}/${map.month}/${map.year} ${map.hour}:${map.minute}:${map.second}`;
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

    const formattedDate = formatDateWIB(new Date());


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
