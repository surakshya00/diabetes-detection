import { authenticateUser } from "@/app/middleware/auth";
import User from "@/models/User";

export async function GET() {
  return await authenticateUser(async (email: string) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return Response.json({ message: "user not found" }, { status: 401 });
      }

      if (user.diabetesResult && user.diabetesResult.timestamp) {
        return Response.json({ result: user.diabetesResult });
      }

      return Response.json({ message: "No result found" }, { status: 404 });
    } catch (e) {
      console.error(e);
      return Response.json(
        { message: "failed to get latest result" },
        { status: 500 }
      );
    }
  });
}
