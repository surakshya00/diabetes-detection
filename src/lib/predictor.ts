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

// TODO: Infer ML model to predict diabetes for given data
export async function predictDiabetes(
  features: PredictionData
): Promise<Boolean> {
  return Math.random() < 0.5;
}
