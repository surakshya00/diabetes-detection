"use client";
import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { registerUser } from "../actions/auth";
import { redirect } from "next/navigation";
import { useToast } from "@chakra-ui/react";

export default function SignupUI() {
  const [show, setShow] = React.useState(false);
  const handlePasswordClick = () => setShow(!show);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const toast = useToast();

  useEffect(() => {
    if (user) {
      toast({
        title: "Registered User",
        description: "Redirecting to login page",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      redirect("/login");
    }
  }, [user, toast]);

  const handleSubmit = () => {
    setLoading(true);
    registerUser(firstName, lastName, email, password)
      .then((newUser) => {
        setUser(newUser);
      })
      .catch((e) => {
        console.error(e);
        toast({
          title: "Error creating user",
          description: String(e),
          status: "error",
          isClosable: true,
          duration: 5000,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"black"}
      >
        <Stack
          spacing={3}
          backgroundColor={"gray.700"}
          width={"90%"}
          maxW={"400px"}
          p={5}
          borderRadius={"lg"}
        >
          <Input
            variant="outline"
            placeholder="First Name"
            size="lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            color={"white"}
          />
          <Input
            variant="outline"
            placeholder="Last Name"
            size="lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            color={"white"}
          />
          <Input
            variant="outline"
            placeholder="Enter Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color={"white"}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color={"white"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="teal" isLoading={loading} onClick={handleSubmit}>
            Sign Up
          </Button>
          <Divider orientation="horizontal" />
          <NextLink href="/login" passHref>
            <Button
              colorScheme="teal"
              mx={"auto"}
              display={"block"}
              variant={"link"}
            >
              Existing User? Log in
            </Button>
          </NextLink>
        </Stack>
      </Box>
    </main>
  );
}
