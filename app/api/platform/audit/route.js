import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  try {
    const { data, error } =
      await supabase
        .from("audit_logs")
        .select("*")
        .order("created_at", {
          ascending: false,
        })
        .limit(100);

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      logs: data || [],
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
