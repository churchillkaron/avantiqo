import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return Response.json(
        {
          error: "Missing Supabase environment variables",
        },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      serviceRoleKey
    );

    const body = await req.json();

    return Response.json({
      success: true,
      message: "Route working",
      body,
    });

  } catch (err) {

    return Response.json(
      {
        error: "Server error",
        details: err.message,
      },
      { status: 500 }
    );

  }
}
