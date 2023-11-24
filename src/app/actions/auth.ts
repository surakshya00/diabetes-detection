export async function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const response = await fetch("/api/auth/register", {
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response) {
    const responseJSON = await response.json();
    if (!response.ok) {
      throw responseJSON?.message || "Failed to register user";
    }

    return responseJSON?.result;
  }

  throw "Failed to register user";
}
