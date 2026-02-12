
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIResponse = async (prompt: string) => {
  if (!API_KEY) return "API Key not found.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah pakar konservasi penyu profesional di Desa Banaran, Galur, Kulon Progo. 
        Anda membantu pengunjung website memahami pentingnya menjaga penyu, cara-cara pelestarian, dan menjawab pertanyaan seputar habitat penyu di Pantai Trisik. 
        Gunakan gaya bahasa yang ramah, edukatif, dan inspiratif.
        Jelaskan bahwa Pantai Trisik di Banaran adalah lokasi penting pendaratan penyu (terutama Penyu Hijau dan Penyu Lekang).`,
        temperature: 0.7,
      },
    });
    return response.text || "Maaf, saya sedang tidak bisa memproses permintaan Anda.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
};
