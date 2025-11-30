import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[] = []) => {
  const client = getClient();
  if (!client) {
    throw new Error("API key missing. Please configure your API key.");
  }

  try {
    const model = client.models;
    // Using flash model for quick responses suitable for a chat widget
    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
            role: "user",
            parts: [{ text: `
                Du är "GlasBot", en vänlig och kunnig assistent för Glasräcken demo.
                Vi säljer högkvalitativ, skräddarsytt anpassat glas för hem och projekt.
                Din ton är varm, professionell och hjälpsam (tänk svensk designkonsult).

                Produktinfo Context:
                - Anpassat Glas: Personligt designat, skräddarsytt efter dina behov.
                - Rostfritt Glas: Klassisk elegans, robust och tidlös design.
                - Glas Design: Modernt och stilrent, med många anpassningsalternativ.
                - Vindskydd: Höj- och sänkbart, perfekt för blåsiga platser.

                Mål: Hjälp kunden välja glasdesign, förklara hur man mäter sitt projekt, eller svara på fraktfrågor (Fri frakt över 5000 SEK).
                Svara alltid på Svenska.
                Håll svaren korta (max 3 meningar) om inte kunden ber om detaljerade instruktioner.

                Användarfråga: ${message}
            ` }]
        }
      ]
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};