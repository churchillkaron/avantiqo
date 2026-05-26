import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
      user: data.user,
      session: data.session,
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
