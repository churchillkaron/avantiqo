import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(
  request
) {
  try {
    const body =
      await request.json();

    const email =
      body.email?.trim();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email required.",
        },
        {
          status: 400,
        }
      );
    }

    const {
      data: user,
      error,
    } = await supabase
      .from("tenant_users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "User not found.",
        },
        {
          status: 401,
        }
      );
    }

    const role =
      user.role ||
      "customer";

    let redirect =
      "/platform";

    if (
      role ===
        "super_admin" ||
      role === "admin"
    ) {
      redirect =
        "/admin/dashboard";
    }

    if (
      role === "finance"
    ) {
      redirect =
        "/admin/billing";
    }

    if (
      role === "support"
    ) {
      redirect =
        "/admin/tenants";
    }

    const response =
      NextResponse.json({
        success: true,
        redirect,
      });

    response.cookies.set(
      "admin_role",
      role,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          60 * 60 * 24 * 7,
      }
    );

    response.cookies.set(
      "user_id",
      user.id,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          60 * 60 * 24 * 7,
      }
    );

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}
