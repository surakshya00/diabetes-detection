import { Input, Stack } from "@chakra-ui/react";

export default function Login() {
  return (
    <main>
      <h1>Authentication Page</h1>
      <Stack spacing={3} width={300}>
        <Input placeholder="large size" size="lg" />
        <Input placeholder="large size" size="lg" />
      </Stack>
    </main>
  );
}
