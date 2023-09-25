import { NextResponse } from "next/server";
import { rent } from "./rent";

export async function GET(request: Request) {
  return NextResponse.json(rent)
}
