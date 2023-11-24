"use client";

import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Stats from "./stats";
import TypeDetails from "./typeDetails";

export default function Introduction() {
  return (
    <Box>
      <Heading size="md" mb="2">
        Introduction
      </Heading>
      <Text fontSize="sm">
        Diabetes is a chronic medical condition that occurs when the body cannot
        properly regulate blood sugar (glucose) levels. Glucose is the main
        source of energy for the cells in the body, and its levels are typically
        controlled by insulin, a hormone produced by the pancreas.
      </Text>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={5} my="5">
        <Stats label="Currently Diagnosed in US" number="29.1 million" />
        <Stats label="Average Annual Medical Expenses" number="$13,700" />
        <Stats label="High risk of developing diabetes" number="1 in 3" />
        <Stats
          label="Diagnosed cases are Type 2 diabetes"
          number="90% to 95%"
        />
      </SimpleGrid>

      <Heading mt="5" size="md" mb="2">
        Types of Diabetes
      </Heading>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} mt="5">
        <TypeDetails
          title="Type 1 Diabetes"
          description="This occurs when the immune system mistakenly attacks and destroys
              the insulin-producing beta cells in the pancreas. As a result, the
              body produces little to no insulin. Type 1 diabetes is usually
              diagnosed in children and young adults. People with type 1
              diabetes need to take insulin regularly to manage their blood
              sugar levels."
        />
        <TypeDetails
          title="Type 2 Diabetes"
          description="This is more common and often develops in adulthood. In type 2
          diabetes, the body either does not produce enough insulin or does
          not use it effectively, a condition known as insulin resistance.
          Lifestyle factors such as obesity, lack of physical activity, and
          genetic predisposition can contribute to the development of type 2
          diabetes. Initially, it can often be managed with lifestyle
          changes, oral medications, or injectable medications, and in some
          cases, insulin may be required."
        />
      </SimpleGrid>
    </Box>
  );
}
