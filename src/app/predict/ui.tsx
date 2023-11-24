"use client";

import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Link,
  Heading,
  Select,
} from "@chakra-ui/react";
import NextLink from "next/link";
import FormTile from "./tile";
import { useState } from "react";

export default function PredictUI() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <Box as="main" bgColor="#121212" color="white" p="5" minH="100vh">
      <Button
        as={NextLink}
        href="/dashboard"
        maxW="100px"
        variant="outline"
        colorScheme="teal"
        leftIcon={<ArrowBackIcon />}
        display="block"
        textAlign="center"
        verticalAlign="center"
        lineHeight="40px"
        height="40px"
      >
        Back
      </Button>

      <Box
        my={["25px", null, "50px"]}
        bgColor="gray.800"
        bgGradient="linear(to-br, gray.700, gray.600)"
        px="5"
        py="2"
        borderRadius="lg"
      >
        <Heading>Health</Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={5}
          my="5"
        >
          <FormTile question="Do you have high Blood Pressure?">
            <RadioGroup name="highBP">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Do you have high Blood Cholestrol?">
            <RadioGroup name="highChol">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Have you checked for cholestrol in last 5 years?">
            <RadioGroup name="cholCheck">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="What is you BMI?">
            <Input type="number" min="0" max="100" placeholder="BMI Value" />

            <Text fontSize="sm" color="teal" mt="2">
              <Link
                href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
                isExternal
              >
                BMI Calculator <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </FormTile>

          <FormTile question="Have you ever had a stroke?">
            <RadioGroup name="stroke">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Do you have/had Coronary Heart Disease (CHD) or Myocardial Infarction (MI)?">
            <RadioGroup name="heartDiseaseOrAttack">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Would you say that in general your health is:">
            <RadioGroup name="genHlth">
              <Stack>
                <Radio value="1">Excellent</Radio>
                <Radio value="2">Very Good</Radio>
                <Radio value="3">Good</Radio>
                <Radio value="4">Fair</Radio>
                <Radio value="5">Poor</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>
        </Grid>
      </Box>

      <Box
        my={["25px", null, "50px"]}
        bgColor="gray.800"
        bgGradient="linear(to-br, gray.700, gray.600)"
        px="5"
        py="2"
        borderRadius="lg"
      >
        <Heading size="lg">Lifestyle</Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={5}
          my="5"
        >
          <FormTile question="Have you smoked at least 100 cigarettes in your entire life?">
            <RadioGroup name="smoker">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Did you do any physical activity in the last 30 days (excluding job)?">
            <RadioGroup name="physActivity">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Do you consume fruits at least one time a day?">
            <RadioGroup name="fruits">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Do you consume vegetables at least one time a day?">
            <RadioGroup name="veggies">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Are you a heavy drinker?">
            <RadioGroup name="hvyAlcoholConsump">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Do you have serious difficulty walking or climbing stairs?">
            <RadioGroup name="diffWalk">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="For how many days during the past 30 days was your mental health not good?">
            <Input
              type="number"
              min="1"
              max="30"
              placeholder="Total Days"
              name="mentHlth"
            />
            <Text fontSize="xs" mt="2">
              Includes stress, depression, and problems with emotions
            </Text>
          </FormTile>

          <FormTile question="For how many days during the past 30 days was your physical health not good?">
            <Input
              type="number"
              min="1"
              max="30"
              placeholder="Total Days"
              name="physHlth"
            />
            <Text fontSize="xs" mt="2">
              Includes physical illness and injury
            </Text>
          </FormTile>
        </Grid>
      </Box>

      <Box
        my={["25px", null, "50px"]}
        bgColor="gray.800"
        bgGradient="linear(to-br, gray.700, gray.600)"
        px="5"
        py="2"
        borderRadius="lg"
      >
        <Heading>Healthcare</Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={5}
          my="5"
        >
          <FormTile question="Do you have any kind of health care coverage?">
            <RadioGroup name="anyHealthcare">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?">
            <RadioGroup name="noDocBcCost">
              <Stack>
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>
        </Grid>
      </Box>

      <Box
        my={["25px", null, "50px"]}
        bgColor="gray.800"
        bgGradient="linear(to-br, gray.700, gray.600)"
        px="5"
        py="2"
        borderRadius="lg"
      >
        <Heading>Demographics</Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={5}
          my="5"
        >
          <FormTile question="What is you gender?">
            <RadioGroup name="sex">
              <Stack>
                <Radio value="1">Male</Radio>
                <Radio value="0">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormTile>

          <FormTile question="What is your age?">
            <Select
              name="age"
              placeholder="Pick age group"
              color="white"
              sx={{
                "> option": {
                  background: "#121212",
                  color: "white",
                },
              }}
            >
              <option value="1">18-24</option>
              <option value="2">25-29</option>
              <option value="3">30-34</option>
              <option value="4">35-39</option>
              <option value="5">40-44</option>
              <option value="6">45-49</option>
              <option value="7">50-54</option>
              <option value="8">55-59</option>
              <option value="9">60-64</option>
              <option value="10">64-69</option>
              <option value="11">70-74</option>
              <option value="12">75-79</option>
              <option value="13">80 or older</option>
              <option value="14">Refuse to Answer</option>
            </Select>
          </FormTile>

          <FormTile question="What is your education Level?">
            <Select
              name="education"
              placeholder="Pick Education Level"
              sx={{
                "> option": {
                  background: "#121212",
                  color: "white",
                },
              }}
            >
              <option value="1">
                Never attended school or only kindergarten
              </option>
              <option value="2">Grades 1 through 8 (Elementary)</option>
              <option value="3">Grades 9 through 11 (Some high school)</option>
              <option value="4">Grade 12 or GED (High school graduate)</option>
              <option value="5">
                College 1 year to 3 years (Some college or technical school)
              </option>
              <option value="6">
                College 4 years or more (College graduate)
              </option>
            </Select>
          </FormTile>

          <FormTile question="What is your income?">
            <Select
              name="income"
              placeholder="Pick Income Level"
              color="white"
              sx={{
                "> option": {
                  background: "#121212",
                  color: "white",
                },
              }}
            >
              <option value="1">&lt; $10,000</option>
              <option value="2">$10,000 - $14,999</option>
              <option value="3">$15,000 - $19,999</option>
              <option value="4">$20,000 - $24,999</option>
              <option value="5">$25,000 - $34,999</option>
              <option value="6">$35,000 - $49,999</option>
              <option value="7">$50,000 - $74,999</option>
              <option value="8">&gt; $75,000</option>
            </Select>
          </FormTile>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          colorScheme="teal"
          isLoading={loading}
          loadingText="Analysing"
          onClick={handleSubmit}
        >
          Predict Now
        </Button>
      </Box>
    </Box>
  );
}
