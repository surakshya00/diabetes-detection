import { DiabetesResult } from "./summary";

export async function predictDiabetes(payload: any) {
  const response = await fetch("/api/predict", {
    body: JSON.stringify({ ...payload }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response) {
    const responseJSON = await response.json();
    if (!response.ok) {
      throw responseJSON?.message || "Failed to run prediction";
    }

    return responseJSON?.result as DiabetesResult;
  }

  throw "Failed to run prediction";
}
