import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

// GET all posts
router.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET a post by ID
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });
    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST create a new post
router.post("/", async (req: Request, res: Response) => {
  const { title, content, userId } = req.body;
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        userId: parseInt(userId, 10),
      },
    });
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT update a post by ID
router.put("/:id", async (req: Request, res: Response) => {
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

// DELETE a post by ID
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as postsRouter };
