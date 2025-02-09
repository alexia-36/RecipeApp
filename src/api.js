import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export default async function getRecipeFromAi(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(",");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: "You are a recipe asistant" },
        {
          role: "user",
          content: `I have ${ingredientsString}.Please recomand a recipe.`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }
}
