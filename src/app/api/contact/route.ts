import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("🔥 API CONTACT CALLED");

    // 1️⃣ Vérifier la clé
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is missing");
      return Response.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("📩 Form data:", body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 2️⃣ Envoi réel avec Resend
    const result = await resend.emails.send({
      from: "ACMEDIA <contact@acmedia.ma>", // OK pour test
      to: ["imanejam2@gmail.com"], // email de destination
      subject: subject || "New contact message",
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Resend response:", result);

    // 3️⃣ Vérification explicite
    if (result.error) {
      console.error("❌ Resend error:", result.error);
      return Response.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ API ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
