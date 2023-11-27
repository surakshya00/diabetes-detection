const ML_SERVER_URL = process.env.ML_SERVER_URL!;

if (!ML_SERVER_URL) {
  throw new Error(
    "Please define the ML_SERVER_URL environment variable inside .env.local"
  );
}

export interface PredictionData {
  highBP: number;
  highChol: number;
  cholCheck: number;
  bmi: number;
  stroke: number;
  heartDiseaseOrAttack: number;
  genHlth: number;
  smoker: number;
  physActivity: number;
  fruits: number;
  veggies: number;
  hvyAlcoholConsump: number;
  diffWalk: number;
  mentHlth: number;
  physHlth: number;
  anyHealthcare: number;
  noDocBcCost: number;
  sex: number;
  age: number;
  education: number;
  income: number;
}

// Infer ML model to predict diabetes for given data
export async function predictDiabetes(
  features: PredictionData
): Promise<Boolean> {
  const url = `${ML_SERVER_URL}/predict`;

  console.info("sending request to ML service", url);
  const response = await fetch(url, {
    body: JSON.stringify({ ...features }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.info("got response from ML service");
  if (response) {
    const responseJSON = await response.json();
    if (!response.ok) {
      console.info(response);
      throw responseJSON?.message || "failed to predict for given features";
    }

    return responseJSON.hasDiabetes as boolean;
  }

  throw "no response received from the ML service";
}
