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
import { getCsrfToken } from "next-auth/react";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [csrfToken, setCsrfToken] = React.useState("");
  useEffect(() => {
    getCsrfToken().then((token) => setCsrfToken(token || ""));
  });

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
          <Box as="form" method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Input
              variant="outline"
              placeholder="Enter email"
              name="username"
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
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="teal" type="submit" w="100%">
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
