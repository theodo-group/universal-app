import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    name: "callum",
  };

  return NextResponse.json(response);
}
