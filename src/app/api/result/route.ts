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
}
