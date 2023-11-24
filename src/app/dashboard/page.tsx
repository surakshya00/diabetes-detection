"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Introduction from "../components/diabetes-intro";
import ResultSummary from "../components/result-summary";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DiabetesFeed from "../components/diabetes-feed";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <Box as="main" bgColor="#121212" color="white" p="5" minH="100vh">
      <Box
        mt="5"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Heading>Diabetes Detector</Heading>
        <Button
          size="sm"
          colorScheme="teal"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign Out
        </Button>
      </Box>

      <Divider borderColor="gray.400" w="100%" maxW="400px" my="5" />

      <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap="5">
        <Box
          p="5"
          bgGradient="linear(to-r, gray.700, gray.600)"
          w="100%"
          borderRadius="lg"
        >
          <Introduction />
        </Box>

        <Grid templateColumns="1fr" gap="5">
          <GridItem w="100%" rowSpan={6}>
            <ResultSummary />
          </GridItem>

          <GridItem
            py="50"
            bgGradient="linear(to-l, blue.500, blue.400)"
            w="100%"
            borderRadius="lg"
            rowSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Heading>
              Predict Risk <ArrowForwardIcon />
            </Heading>
          </GridItem>
        </Grid>
      </Grid>

      <Box mt={[5, null, "50px"]}>
        <Heading size="md">Diabetes Discoveries and Practice</Heading>
        <DiabetesFeed />
      </Box>
    </Box>
  );
}
