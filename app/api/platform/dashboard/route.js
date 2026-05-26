import { createClient } from "@supabase/supabase-js";



export async function GET() {
  try {
    const [
      leadsResult,
      tenantsResult,
      usersResult,
      subscriptionsResult,
      modulesResult,
    ] = await Promise.all([
      supabase
        .from("organization_leads")
        .select("*", {
          count: "exact",
          head: true,
        }),

      supabase
        .from("tenants")
        .select("*", {
          count: "exact",
          head: true,
        }),

      supabase
        .from("tenant_users")
        .select("*", {
          count: "exact",
          head: true,
        }),

      supabase
        .from("subscriptions")
        .select("*"),

      supabase
        .from("tenant_modules")
        .select("*", {
          count: "exact",
          head: true,
        }),
    ]);

    const subscriptions =
      subscriptionsResult.data || [];

      const currency =
  subscriptions[0]?.currency ||
  "THB";

const currencySymbol =
  currency === "THB"
    ? "฿"
    : currency === "USD"
    ? "$"
    : currency === "EUR"
    ? "€"
    : currency;

    const mrr =
      subscriptions.reduce(
        (sum, item) =>
          sum +
          Number(
            item.final_monthly_total || 0
          ),
        0
      );

    return Response.json({
      success: true,

      stats: {
        leads:
          leadsResult.count || 0,

        tenants:
          tenantsResult.count || 0,

        users:
          usersResult.count || 0,

        modules:
          modulesResult.count || 0,

        subscriptions:
          subscriptions.length,

        monthlyRevenue: mrr,
currency,
currencySymbol,

      },
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
