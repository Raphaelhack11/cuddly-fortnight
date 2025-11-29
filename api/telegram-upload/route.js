import { NextResponse } from 'next/server';
import axios from 'axios';
import FormData from 'form-data';

export async function POST(req) {
  const body = await req.formData();
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const image = body.get('image');
  const buffer = Buffer.from(await image.arrayBuffer());

  const fd = new FormData();
  fd.append('chat_id', CHAT_ID);
  fd.append('caption', `New purchase: ${body.get('truckName')}`);
  fd.append('photo', buffer, image.name);

  await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, fd, { headers: fd.getHeaders() });

  return NextResponse.json({ ok:true });
}
