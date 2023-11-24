import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface AuthCallbackFunc {
  (email: string): Promise<Response>;
}

export async function authenticateUser(callback: AuthCallbackFunc) {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    return await callback(session.user.email);
  }

  return Response.json(
    { message: "user is not authenticated" },
    { status: 401 }
  );
}
