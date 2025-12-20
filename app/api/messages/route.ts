import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

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

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Nama dan pesan wajib diisi' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('portfolio-kelas');
    const collection = db.collection('messages');

    // function to format date
    const formattedDate = formatDate(new Date());

    const result = await collection.insertOne({
      name,
      message,
      message_date: formattedDate,
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Gagal menyimpan data' },
      { status: 500 }
    );
  }
}




