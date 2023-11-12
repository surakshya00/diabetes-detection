import { Box, Button, Center, Divider, Input, Stack } from "@chakra-ui/react";

export default function Login() {
  return (
    <main>
      <Box width={"100%"} height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} bgColor={"black"}>
        <Stack spacing={3} backgroundColor={"gray.700"} width={300} p={5} borderRadius={"lg"}>
          <Input variant='outline' placeholder="Enter Email" size="lg" />
          <Input placeholder="Enter Password" size="lg" />
          <Button colorScheme='teal'>Log in</Button>
          <Button colorScheme='teal' variant={"link"}>Forgot Password?</Button>
          <Divider orientation='horizontal' />
          <Button colorScheme='teal' variant={"link"}>New User? Create an Account</Button>
        </Stack>
      </Box>

    </main>
  );
}
