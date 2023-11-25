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
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  highBP: string;
  highChol: string;
  cholCheck: string;
  bmi: number;
  stroke: string;
  heartDiseaseOrAttack: string;
  genHlth: string;
  smoker: string;
  physActivity: string;
  fruits: string;
  veggies: string;
  hvyAlcoholConsump: string;
  diffWalk: string;
  mentHlth: number;
  physHlth: number;
}

const errorBoxShadow =
  "0 10px 15px -3px rgb(255 0 0 / 30%), 0 4px 6px -2px rgb(255 0 0 / 50%)";

export default function PredictUI() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  console.log(errors);

  return (
    <Box as="main" bgColor="#121212" color="white" p="5" minH="100vh">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
          <Heading textAlign="center" mb="3">
            Health
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={5}
            my="5"
          >
            <FormTile
              question="Do you have high Blood Pressure?"
              boxShadow={errors.highBP ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("highBP", { required: true })} value="1">
                    Yes
                  </Radio>
                  <Radio {...register("highBP", { required: true })} value="0">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Do you have high Blood Cholestrol?"
              boxShadow={errors.highChol ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("highChol", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("highChol", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Have you checked for cholestrol in last 5 years?"
              boxShadow={errors.cholCheck ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("cholCheck", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("cholCheck", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="What is you BMI?"
              boxShadow={errors.bmi ? errorBoxShadow : ""}
            >
              <Input
                type="number"
                {...register("bmi", {
                  required: true,
                  min: { value: 1, message: "BMI should be atleast 1" },
                  max: { value: 100, message: "BMI should be at most 100" },
                })}
                placeholder="BMI Value"
              />

              {errors.bmi && (
                <Text fontSize="xs" color="red.500" mt="2">
                  {errors.bmi.message}
                </Text>
              )}

              <Text fontSize="sm" color="teal" mt="2">
                <Link
                  href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
                  isExternal
                >
                  BMI Calculator <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </FormTile>

            <FormTile
              question="Have you ever had a stroke?"
              boxShadow={errors.stroke ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("stroke", { required: true })} value="1">
                    Yes
                  </Radio>
                  <Radio {...register("stroke", { required: true })} value="0">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Do you have/had Coronary Heart Disease (CHD) or Myocardial Infarction (MI)?"
              boxShadow={errors.heartDiseaseOrAttack ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("heartDiseaseOrAttack", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("heartDiseaseOrAttack", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Would you say that in general your health is:"
              boxShadow={errors.genHlth ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("genHlth", { required: true })} value="1">
                    Excellent
                  </Radio>
                  <Radio {...register("genHlth", { required: true })} value="2">
                    Very Good
                  </Radio>
                  <Radio {...register("genHlth", { required: true })} value="3">
                    Good
                  </Radio>
                  <Radio {...register("genHlth", { required: true })} value="4">
                    Fair
                  </Radio>
                  <Radio {...register("genHlth", { required: true })} value="5">
                    Poor
                  </Radio>
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
          <Heading textAlign="center" mb="3">
            Lifestyle
          </Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={5}
            my="5"
          >
            <FormTile
              question="Have you smoked at least 100 cigarettes in your entire life?"
              boxShadow={errors.smoker ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("smoker", { required: true })} value="1">
                    Yes
                  </Radio>
                  <Radio {...register("smoker", { required: true })} value="0">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Did you do any physical activity in the last 30 days (excluding job)?"
              boxShadow={errors.physActivity ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("physActivity", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("physActivity", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Do you consume fruits at least one time a day?"
              boxShadow={errors.fruits ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("fruits", { required: true })} value="1">
                    Yes
                  </Radio>
                  <Radio {...register("fruits", { required: true })} value="0">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Do you consume vegetables at least one time a day?"
              boxShadow={errors.veggies ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio {...register("veggies", { required: true })} value="1">
                    Yes
                  </Radio>
                  <Radio {...register("veggies", { required: true })} value="0">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Are you a heavy drinker?"
              boxShadow={errors.hvyAlcoholConsump ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("hvyAlcoholConsump", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("hvyAlcoholConsump", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="Do you have serious difficulty walking or climbing stairs?"
              boxShadow={errors.diffWalk ? errorBoxShadow : ""}
            >
              <RadioGroup>
                <Stack>
                  <Radio
                    {...register("diffWalk", { required: true })}
                    value="1"
                  >
                    Yes
                  </Radio>
                  <Radio
                    {...register("diffWalk", { required: true })}
                    value="0"
                  >
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormTile>

            <FormTile
              question="For how many days during the past 30 days was your mental health not good?"
              boxShadow={errors.mentHlth ? errorBoxShadow : ""}
            >
              <Input
                type="number"
                placeholder="Total Days"
                {...register("mentHlth", {
                  required: true,
                  min: { value: 0, message: "Days should be at least 0" },
                  max: { value: 30, message: "Days should be at most 30" },
                })}
              />

              {errors.mentHlth && (
                <Text fontSize="xs" color="red.500" mt="2">
                  {errors.mentHlth.message}
                </Text>
              )}

              <Text fontSize="xs" mt="2">
                Includes stress, depression, and problems with emotions
              </Text>
            </FormTile>

            <FormTile
              question="For how many days during the past 30 days was your physical health not good?"
              boxShadow={errors.physHlth ? errorBoxShadow : ""}
            >
              <Input
                type="number"
                min="1"
                max="30"
                placeholder="Total Days"
                {...register("physHlth", {
                  required: true,
                  min: { value: 0, message: "Days should be at least 0" },
                  max: { value: 30, message: "Days should be at most 30" },
                })}
              />
              {errors.physHlth && (
                <Text fontSize="xs" color="red.500" mt="2">
                  {errors.physHlth.message}
                </Text>
              )}
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
          <Heading textAlign="center" mb="3">
            Healthcare
          </Heading>
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
          <Heading textAlign="center" mb="3">
            Demographics
          </Heading>
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
                <option value="3">
                  Grades 9 through 11 (Some high school)
                </option>
                <option value="4">
                  Grade 12 or GED (High school graduate)
                </option>
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
            type="submit"
          >
            Predict Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
