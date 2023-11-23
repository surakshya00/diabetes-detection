const testHasMockData = false;
const testHasDiabetes = false;

async function getMockDiabetesResult() {
  if (testHasMockData) {
    return {
      hasDiabetes: testHasDiabetes,
      generatedTimestamp: new Date().toISOString(),
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
