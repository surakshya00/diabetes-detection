"use client";

import {
  Box,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Stats from "./stats";

export default function Introduction() {
  return (
    <Box>
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
        <Stats label="Diagnosed cases are Type 2 diabetes" number="90-95%" />
      </SimpleGrid>
    </Box>
  );
}
