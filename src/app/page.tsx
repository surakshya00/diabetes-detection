import { Box, Button, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box
      as="main"
      bgColor="#121212"
      bgGradient="linear(to-r, gray.800, #121212)"
      color="white"
      minH="100vh"
      p="5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap="5" w="100%">
        <Box>
          <Heading size="xl">Diabetes Detector</Heading>
          <Heading size="sm">
            CSCI 475: Introduction to Machine Learning
          </Heading>
          <Divider my="3" maxW="600px" />
          <Box maxW="800px" fontSize="sm">
            <Text>
              In recent years, the prevalence of diabetes has witnessed a
              significant rise on a global scale. According to the World Health
              Organization (WHO), an estimated 422 million individuals worldwide
              have diabetes, and this number is expected to escalate to 642
              million by 2040 [WHO]. Diabetes not only poses a considerable
              threat to an individual&apos;s overall well-being but also exerts
              a substantial burden on healthcare systems and economies. It is
              imperative to develop effective tools and methodologies that
              empower individuals to assess their risk of developing diabetes
              and take proactive measures towards its prevention.
            </Text>
            <Text mt="2">
              This project aims to develop a machine learning-based predictive
              model to evaluate an individual&apos;s diabetes risk using
              lifestyle habits and related features. By leveraging diverse data
              including dietary patterns, physical activity, and biometric
              indicators, I strive to create a precise predictive tool. This
              study&apos;s goal is to enable individuals to assess their risk of
              diabetes, promoting proactive health management and disease
              prevention.
            </Text>

            <Text mt="2" fontSize="xs">
              Made with &lt;3 by{" "}
              <Box as="span" color="teal">
                <NextLink href="https://github.com/surakshya00" target="_blank">
                  Surakshya Aryal
                </NextLink>
              </Box>
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="md" textAlign="center" my="5">
            Get Started
          </Heading>
          <Box w="100%" my="3">
            <NextLink href="/login" style={{ width: "100%", display: "block" }}>
              <Button display="block" colorScheme="teal" w="100%">
                Log In
              </Button>
            </NextLink>
          </Box>

          <Box w="100%" my="3">
            <NextLink
              href="/signup"
              style={{ width: "100%", display: "block" }}
            >
              <Button display="block" colorScheme="teal" w="100%">
                Sign Up
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
