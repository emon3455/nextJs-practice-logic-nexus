import db from "@/db.json";

import { NextResponse } from "next/server"

export const GET =(request)=>{

    let categories = db.categories;

    return NextResponse.json(categories);
}