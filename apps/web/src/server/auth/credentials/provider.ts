import CredentialsNextAuthProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "../../db";

const CredentialsProvider = () =>
  CredentialsNextAuthProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text", placeholder: "test@test.com" },
      password: { label: "Password", type: "password", placeholder: "*******" },
    },
    async authorize(credentials) {
      const { email, password } = credentials as unknown as { email: string; password: string };

      const user = await prisma.user.findUnique({ where: { email } });

      console.log(user);

      if (!user) throw new Error("Invalid credentials!");

      /* Compare password */
      const credentialsFromDB = await prisma.credentials.findUnique({ where: { userId: user.id } });

      const isValid = bcrypt.compareSync(password, credentialsFromDB?.password || "");

      if (!isValid) throw new Error("The credentials are invalid!");

      return user;
    },
  });

export default CredentialsProvider;
