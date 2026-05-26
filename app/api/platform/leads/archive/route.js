import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.lead_id) {
      return Response.json(
        {
          success: false,
          message: "lead_id required",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await supabase
        .from("organization_leads")
        .update({
          status: "archived",
        })
        .eq("id", body.lead_id)
        .select()
        .single();

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
      lead: data,
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
