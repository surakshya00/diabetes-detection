"use client"
import { Box, Button, Center, Divider, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import React from "react";


export default function Signup() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <main>
      <Box width={"100%"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgColor={"black"}>
        <Stack spacing={3} backgroundColor={"gray.700"} width={"90%"} maxW={"400px"} p={5} borderRadius={"lg"}>
          <Input variant='outline' placeholder="First Name" size="lg" color={"white"}/>
          <Input variant='outline' placeholder="Last Name" size="lg" color={"white"}/>
          <Input variant='outline' placeholder="Enter Email" size="lg" color={"white"}/>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter Password'
              color={"white"}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme='teal'>Sign Up</Button>
          <Divider orientation='horizontal' />
          <Button colorScheme='teal' variant={"link"}>Existing User? Log in</Button>
        </Stack>
      </Box>

    </main>
  );
}
