import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function generateOrganizationId() {
  return (
    "ORG-" +
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
}

export async function POST(req) {
  try {

    const body = await req.json();

    const organizationId = generateOrganizationId();

    const {
      company,
      contact,
      email,
      phone,
      website,
      industry,
      country,
      city,
      currency,
      locations,
      employees,
      revenue,
      challenges,
      modules,
      estimatedPrice,
    } = body;

    const { error: leadError } = await supabase
      .from("organization_leads")
      .insert({
        organization_id: organizationId,
        company,
        contact,
        email,
        phone,
        website,
        industry,
        country,
        city,
        currency,
        locations,
        employees,
        revenue,
        challenges,
        estimated_monthly_price: estimatedPrice,
      });

    if (leadError) {
      console.error(leadError);

      return NextResponse.json(
        {
          success: false,
          error: leadError.message,
        },
        { status: 500 }
      );
    }

    const moduleRows = [];

    Object.keys(modules).forEach((key) => {

      if (modules[key].enabled) {

        moduleRows.push({
          organization_id: organizationId,
          module_key: key,
          module_name: modules[key].name,
          monthly_price: modules[key].price,
          enabled: true,
        });
      }
    });

    if (moduleRows.length > 0) {

      const { error: moduleError } = await supabase
        .from("organization_modules")
        .insert(moduleRows);

      if (moduleError) {
        console.error(moduleError);
      }
    }

    const { error: deploymentError } = await supabase
      .from("deployment_requests")
      .insert({
        organization_id: organizationId,
        estimated_monthly_price: estimatedPrice,
      });

    if (deploymentError) {
      console.error(deploymentError);
    }

    return NextResponse.json({
      success: true,
      organizationId,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}