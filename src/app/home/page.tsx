"use client";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Introduction from "../components/diabetes-intro";

export default function Home() {
  return (
    <Box as="main" bgColor="#121212" textColor="white" p="5" minH="100vh">
      <Box mt="5">
        <Heading>Diabetes Detector</Heading>
      </Box>

      <Divider borderColor="gray.400" w="100%" maxW="400px" my="5" />

      <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap="5">
        <Box p="5" bgColor="gray.700" w="100%" borderRadius="lg">
          <Introduction />
        </Box>

        <Box py="50" bgColor="gray.800" w="100%" borderRadius="lg"></Box>
      </Grid>
    </Box>
  );
}
