"use client";

import { GetLatestResult } from "@/app/actions/summary";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

function getColorScheme(error: Error | null, data: any) {
  const result = {
    bgColor: "gray.800",
    textColor: "white",
  };

  if (error) {
    result.bgColor = "orange.400";
    result.textColor = "black";
    return result;
  }

  if (data) {
    result.bgColor = data.hasDiabetes ? "red" : "green";
  }

  return result;
}

export default function ResultSummary() {
  const { isPending, error, data } = useQuery({
    queryKey: ["diabetesResult"],
    queryFn: GetLatestResult,
    retry: false,
  });

  const { bgColor, textColor } = getColorScheme(error, data);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      h="100%"
      bgColor={bgColor}
      textColor={textColor}
      borderRadius="lg"
    >
      {isPending && (
        <>
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            mx="auto"
          />

          <Text fontSize="xl" my="5">
            Getting latest result
          </Text>
        </>
      )}

      {error && (
        <>
          <InfoOutlineIcon fontSize="4xl" />

          <Text fontSize="xl" my="5">
            {String(error) || "Failed to get result"}
          </Text>
        </>
      )}
    </Box>
  );
}
