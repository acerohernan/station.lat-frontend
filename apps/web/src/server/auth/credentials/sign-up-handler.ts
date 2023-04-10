import { NextApiHandler } from "next";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/server/db";

const Credentials = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(8, { message: "The password need to have 8 caracters minimun" }),
  name: z.string().min(8, { message: "Please enter your valid full name" }),
});

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    /* Validate the input */
    const validBody = Credentials.safeParse(req.body);

    if (!validBody.success) {
      return res.status(400).json({ errors: [...validBody.error.issues.map((issue) => issue.message)] });
    }

    /* Verify if the user not exists */
    const { email, name, password } = req.body as z.infer<typeof Credentials>;

    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    /* Encypt the password */
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    /* Create the user in the database */
    const userCreated = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    await prisma.credentials.create({
      data: {
        password: encryptedPassword,
        user: {
          connect: { id: userCreated.id },
        },
      },
    });

    return res.status(200).json({ message: "Success" });
  }

  return res.status(404).json({ error: "Not found" });
};

export default handler;
