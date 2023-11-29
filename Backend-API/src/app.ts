import express from "express";
import { PrismaClient } from "@prisma/client";
import { usersRouter } from "./routes/usersRouter";
import { postsRouter } from "./routes/postsRouter";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.on("close", () => {
  prisma.$disconnect();
});
