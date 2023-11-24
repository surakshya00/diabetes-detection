"use client";
import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const searchParams = useSearchParams();
  const toast = useToast();

  useEffect(() => {
    const errorCode = searchParams.get("error");
    switch (errorCode) {
      case "CredentialsSignin":
        setError("Invalid email/password credentials");
        break;
      default:
        setError("");
    }
  }, [searchParams]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Login failed",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    setLoading(true);
    signIn("credentials", {
      username,
      password,
      callbackUrl: "/dashboard",
    })
      .then(() => {
        toast({
          title: "Login Success",
          description: "Successfully logged in",
          status: "success",
          duration: 3000,
          isClosable: true,
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
          <Box>
            <Input
              variant="outline"
              placeholder="Enter email"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="lg"
              color="white"
              mb="3"
            />
            <InputGroup size="md" mb="3">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                color="white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="teal"
              w="100%"
              onClick={handleLogin}
              isLoading={loading}
            >
              Log in
            </Button>
          </Box>
          <Button colorScheme="teal" variant={"link"}>
            Forgot Password?
          </Button>
          <Divider orientation="horizontal" />
          <NextLink href="/signup" passHref>
            <Button colorScheme="teal" variant="link" mx="auto" display="block">
              New User? Create an Account
            </Button>
          </NextLink>
        </Stack>
      </Box>
    </main>
  );
}
