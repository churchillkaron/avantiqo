import { buildLocalizedPrompt } from "@/lib/localization/buildLocalizedPrompt";

export async function POST(request) {
  try {
    const body = await request.json();

    const { locale = "en", page = "platform", sourceText = "" } = body;

    if (!sourceText) {
      return Response.json(
        { error: "Missing sourceText" },
        { status: 400 }
      );
    }

    const prompt = buildLocalizedPrompt({
      locale,
      page,
      sourceText,
    });

    return Response.json({
      success: true,
      locale,
      page,
      prompt,
    });
  } catch (err) {
    return Response.json(
      {
        error: "Localization failed",
        details: err.message,
      },
      { status: 500 }
    );
  }
}
