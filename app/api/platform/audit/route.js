import { createClient } from "@supabase/supabase-js";



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
