import { authenticateUser } from "@/app/middleware/auth";
import { InvalidValueError } from "@/lib/error";
import { PredictionData, predictDiabetes } from "@/lib/predictor";
import User from "@/models/User";

export async function POST(request: Request) {
  return await authenticateUser(async (email: string) => {
    try {
      const payload = await request.json();
      const features = parsePayload(payload);

      const predictedValue = await predictDiabetes(features);
      const resultTimestamp = new Date().toISOString();

      const diabetesResult = {
        hasDiabetes: predictedValue,
        timestamp: resultTimestamp,
      };

      await User.findOneAndUpdate({ email }, { diabetesResult });

      return Response.json({ result: diabetesResult });
    } catch (e) {
      if (e instanceof InvalidValueError) {
        return Response.json({ message: e.message }, { status: 400 });
      }

      console.error(e);
      return Response.json(
        { message: "failed to predict for the user" },
        { status: 500 }
      );
    }
  });
}

function parsePayload(payload: any) {
  const result: PredictionData = {
    highBP: payload["highBP"],
    highChol: payload["highChol"],
    cholCheck: payload["cholCheck"],
    bmi: payload["bmi"],
    stroke: payload["stroke"],
    heartDiseaseOrAttack: payload["heartDiseaseOrAttack"],
    genHlth: payload["genHlth"],
    smoker: payload["smoker"],
    physActivity: payload["physActivity"],
    fruits: payload["fruits"],
    veggies: payload["veggies"],
    hvyAlcoholConsump: payload["hvyAlcoholConsump"],
    diffWalk: payload["diffWalk"],
    mentHlth: payload["mentHlth"],
    physHlth: payload["physHlth"],
    anyHealthcare: payload["anyHealthcare"],
    noDocBcCost: payload["noDocBcCost"],
    sex: payload["sex"],
    age: payload["age"],
    education: payload["education"],
    income: payload["income"],
  };

  Object.entries(result).forEach(([key, value]) => {
    if (value === undefined) {
      throw new InvalidValueError(`please provide a value for ${key}`);
    }
  });

  return result;
}
