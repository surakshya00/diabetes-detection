import bcrypt from "bcrypt";

const saltRounds = 10;

export async function generatePasswordHash(password: string) {
  return bcrypt.hash(password, saltRounds);
}
