import { createClient } from "@supabase/supabase-js";



export async function GET() {
  try {
    const { data, error } =
      await supabase
        .from("tenant_modules")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      modules: data || [],
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
