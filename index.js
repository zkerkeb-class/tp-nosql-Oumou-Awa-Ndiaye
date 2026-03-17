import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './connect.js';

import pokemonRoutes from './routes/pokemons.js';
import authRoutes from './routes/auth.js';
import teamRoutes from './routes/teams.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static('assets'));

app.use('/api/pokemons', pokemonRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);

app.get('/', (req, res) => {
  res.send('API Pokémon opérationnelle !');
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();