import dbConnect from "@/lib/db";
import { InvalidValueError } from "@/lib/error";
import { generatePasswordHash } from "@/lib/password";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const payload = await request.json();
    const { firstName, lastName, email, password } = parseUserInput(payload);

    const passwordHash = await generatePasswordHash(password);

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: "Email address already exists" },
        { status: 400 }
      );
    }

    const user = { firstName, lastName, email, passwordHash };
    const newUser = await UserModel.create(user);

    return Response.json({ result: newUser });
  } catch (e) {
    if (e instanceof InvalidValueError) {
      return Response.json({ message: e.message }, { status: 400 });
    }

    console.error(e);
    return Response.json(
      { message: "failed to register new user" },
      { status: 500 }
    );
  }
}

function isValidString(inputString: any) {
  return (
    inputString &&
    typeof inputString === "string" &&
    inputString.trim().length > 0
  );
}

function parseUserInput(payload: any) {
  const { firstName, lastName, email, password } = payload;

  if (!isValidString(firstName)) {
    throw new InvalidValueError("please provide a valid first name");
  }

  if (!isValidString(lastName)) {
    throw new InvalidValueError("please provide a valid last name");
  }

  if (!isValidString(email)) {
    throw new InvalidValueError("please provide a valid email");
  }

  if (!isValidString(password)) {
    throw new InvalidValueError("please provide a valid password");
  }

  return {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    password: password.trim(),
  };
}
