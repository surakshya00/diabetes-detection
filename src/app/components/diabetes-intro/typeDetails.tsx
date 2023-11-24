"use client";

import { Box, Heading, Text } from "@chakra-ui/react";

interface TypeDetailsProps {
  title: String;
  description: String;
}

export default function TypeDetails({ title, description }: TypeDetailsProps) {
  return (
    <Box borderRadius="lg" bgColor="gray.800" p="5">
      <Heading as="h2" size="sm" mb="2">
        {title}
      </Heading>
      <Text fontSize="xs">{description}</Text>
    </Box>
  );
}
