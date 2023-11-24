import { RSSItem } from "../api/feed/route";

export async function GetDiabetesNewsFeed() {
  const response = await fetch("/api/feed");

  if (response) {
    const responseJSON = await response.json();
    if (!response.ok) {
      throw responseJSON?.message || "Failed to get latest news";
    }

    return responseJSON?.data as RSSItem[];
  }

  throw "Failed to get latest news";
}
