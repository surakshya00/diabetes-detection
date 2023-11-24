import { GetDiabetesNewsFeed } from "@/app/actions/feed";
import { Box, Button, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import PlaceholderCell from "./placeholder";
import { NotAllowedIcon } from "@chakra-ui/icons";
import Card from "./card";

import NextLink from "next/link";

export default function DiabetesFeed() {
  const { isPending, error, data } = useQuery({
    queryKey: ["diabetesNewsFeed"],
    queryFn: GetDiabetesNewsFeed,
  });

  return (
    <Box>
      {isPending && (
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing="5">
          <PlaceholderCell />
          <PlaceholderCell />
          <PlaceholderCell />
          <PlaceholderCell />
        </SimpleGrid>
      )}

      {error && (
        <Box textAlign="center" my="5">
          <Text fontSize="xl">
            <NotAllowedIcon />
          </Text>
          <Text fontSize="lg">{String(error)}</Text>
        </Box>
      )}

      {data && (
        <Box>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing="5" my="5">
            {data.map((item) => {
              return <Card {...item} key={item.guid} />;
            })}
          </SimpleGrid>

          <Button
            colorScheme="teal"
            mx="auto"
            display="block"
            fontWeight="normal"
          >
            <NextLink
              href="https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice"
              target="_blank"
            >
              View More
            </NextLink>
          </Button>
        </Box>
      )}
    </Box>
  );
}
