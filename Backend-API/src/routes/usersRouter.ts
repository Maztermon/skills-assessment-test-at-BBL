import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

// GET all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a user by ID
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST create a new user
router.post("/", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT update a user by ID
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        name,
        email,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PATCH update a post by ID
router.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        title,
        content,
      },
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE a user by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET all posts of a specific user
router.get("/:id/posts", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        posts: true,
      },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user.posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as usersRouter };
