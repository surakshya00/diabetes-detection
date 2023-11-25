"use client";

import { Box, Stat, StatHelpText, StatNumber } from "@chakra-ui/react";

interface StatsProps {
  label: String;
  number: String;
}

export default function Stats({ label, number }: StatsProps) {
  return (
    <Box borderRadius="lg" bgColor="gray.800" p="5">
      <Stat>
        <StatNumber>{number}</StatNumber>
        <StatHelpText fontSize="xs" mt="3">
          {label}
        </StatHelpText>
      </Stat>
    </Box>
  );
}
