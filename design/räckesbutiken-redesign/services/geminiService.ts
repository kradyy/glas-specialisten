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
                Du är "RäckeBot", en vänlig och kunnig assistent för Räckesbutiken.se.
                Vi säljer högkvalitativa glasräcken, rostfria räcken och handledare.
                Din ton är varm, professionell och hjälpsam (tänk svensk designkonsult).
                
                Produktinfo Context:
                - Alu Modern: Prisvärt, stilrent, aluminiumstolpar.
                - Rostfritt: Klassiskt, robust, tidlöst.
                - Stolpfria: Lyxigt, fri utsikt, tungt glas.
                - Vindskydd: Höj- och sänkbart, perfekt för blåsiga uteplatser (Cafe au Lä).
                
                Mål: Hjälp kunden välja stil, förklara hur man mäter sin balkong, eller svara på fraktfrågor (Fri frakt över 5000 SEK).
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