import express from 'express';
import { PrismaClient } from '../generated/prisma/client';
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

app.use(cors())
app.use(express.json());


app.get('/api/todo', async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});
app.post('/api/todo', async (req, res) => {
  const { title} = req.body;
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
    }
}
);


app.listen(3000, () => 
  console.log('Server is running on port 3000'),
)