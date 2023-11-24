import { RSSItem } from "@/app/api/feed/route";
import { Divider, Heading, Text, Link } from "@chakra-ui/react";

function parsePubDate(pubDate: string): string {
  const parsedDate = new Date(pubDate);

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
  const date = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

export default function Card({ title, link, description, pubDate }: RSSItem) {
  return (
    <Link
      href={link}
      target="_blank"
      h="100%"
      bgColor="gray.700"
      borderRadius="lg"
      p="5"
      _hover={{
        textTransform: "none",
      }}
    >
      <Heading size="sm">{title}</Heading>

      <Text fontSize="xs" mt="1">
        {parsePubDate(pubDate)}
      </Text>
      <Divider my="2" />
      <Text fontSize="xs">{description}</Text>
    </Link>
  );
}
