"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
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
        <Stats
          label="Diagnosed cases are Type 2 diabetes"
          number="90% to 95%"
        />
      </SimpleGrid>

      <Box my="5">
        <Heading size="md" mb="2">
          Types of Diabetes
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <Heading as="h2" size="md">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Type 1 Diabetes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb="4" fontSize="sm">
              This occurs when the immune system mistakenly attacks and destroys
              the insulin-producing beta cells in the pancreas. As a result, the
              body produces little to no insulin. Type 1 diabetes is usually
              diagnosed in children and young adults. People with type 1
              diabetes need to take insulin regularly to manage their blood
              sugar levels.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Heading as="h2" size="md">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Type 2 Diabetes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb="4" fontSize="sm">
              This is more common and often develops in adulthood. In type 2
              diabetes, the body either does not produce enough insulin or does
              not use it effectively, a condition known as insulin resistance.
              Lifestyle factors such as obesity, lack of physical activity, and
              genetic predisposition can contribute to the development of type 2
              diabetes. Initially, it can often be managed with lifestyle
              changes, oral medications, or injectable medications, and in some
              cases, insulin may be required.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
