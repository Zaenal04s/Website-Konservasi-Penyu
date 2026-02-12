
import { GoogleGenAI } from "@google/genai";

// Menggunakan Google GenAI SDK untuk interaksi asisten pakar penyu
export const getAIResponse = async (prompt: string) => {
  // Selalu gunakan named parameter untuk apiKey dan ambil langsung dari process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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

    // Mengambil teks output menggunakan properti .text (bukan metode .text())
    return response.text || "Maaf, saya sedang tidak bisa memproses permintaan Anda.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
};
