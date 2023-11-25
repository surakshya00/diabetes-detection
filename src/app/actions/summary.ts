export interface DiabetesResult {
  hasDiabetes: boolean;
  timestamp: string;
}

export async function GetLatestResult() {
  const response = await fetch("/api/result");
  if (response) {
    const responseData = await response.json();
    if (!response.ok) {
      throw responseData?.message || "failed to get latest result";
    }
    return responseData.result as DiabetesResult;
  }
  throw "failed to get latest result";
}
