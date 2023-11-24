import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { authenticateUser } from "@/app/middleware/auth";

const testHasMockData = true;

async function getMockDiabetesResult() {
  if (testHasMockData) {
    return {
      hasDiabetes: Math.random() < 0.5,
      timestamp: new Date().toISOString(),
    };
  }

  return null;
}

export async function GET() {
  return await authenticateUser(async (_) => {
    const data = await getMockDiabetesResult();
    if (data) {
      return Response.json({ result: data });
    }

    return Response.json(
      { message: "No result found" },
      {
        status: 404,
      }
    );
  });
}
