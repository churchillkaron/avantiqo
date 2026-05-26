import { createClient } from "@supabase/supabase-js";



export async function GET() {
  try {
    const { data, error } =
      await supabase
        .from("tenants")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      tenants: data || [],
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
