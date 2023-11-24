import { Parser } from "xml2js";

const parser = new Parser();

const RSS_FEED_URL =
  "https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/rss";

const feedCount = 4;

export interface RSSItem {
  guid: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

interface RawRSSGuid {
  _: string;
  $: any;
}

interface RawRSSItem {
  title: string[];
  link: string[];
  description: string[];
  pubDate: string[];
  guid: RawRSSGuid[];
}

interface RawRSSChannel {
  title: string[];
  link: string[];
  description: string[];
  language: string[];
  item: RawRSSItem[];
}

interface RawRSSFeed {
  rss: {
    $: any;
    channel: RawRSSChannel[];
  };
}

function parseRSSFeed(data: RawRSSFeed) {
  const result: RSSItem[] = [];

  data.rss.channel.forEach((channel) => {
    channel.item.forEach((item) => {
      const parsedData = {
        title: item.title?.[0] || "",
        link: item.link?.[0] || "",
        description: item.description?.[0] || "",
        pubDate: item.pubDate?.[0] || "",
        guid: item.guid?.[0]?._ || "",
      };
      result.push(parsedData);
    });
  });

  return result;
}

export async function GET() {
  try {
    const response = await fetch(RSS_FEED_URL);
    if (response) {
      const responseData = await response.text();
      if (!response.ok) {
        const message = responseData || "Failed to get latest news";
        return Response.json({ message }, { status: 500 });
      }

      // parse XML to JSON
      const responseJSON = await parser.parseStringPromise(responseData);
      const feed = parseRSSFeed(responseJSON as RawRSSFeed);
      return Response.json({ data: feed.slice(0, feedCount) });
    }

    throw "Failed to get latest news";
  } catch (e) {
    return Response.json(
      { message: "Failed to get the news feed" },
      { status: 500 }
    );
  }
}
