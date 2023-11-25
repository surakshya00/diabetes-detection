import { Divider, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

interface FormTileProps {
  question: string;
  boxShadow?: string;
  children: React.ReactNode;
}

export default function FormTile({
  question,
  boxShadow,
  children,
}: FormTileProps) {
  return (
    <GridItem bgColor="gray.900" p="5" borderRadius="xl" boxShadow={boxShadow}>
      <Heading size="sm">{question}</Heading>
      <Divider my="2" />
      {children}
    </GridItem>
  );
}
