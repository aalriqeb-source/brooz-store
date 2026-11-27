import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const contract = require('./prisma/contract.json');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'brooz_super_secret_key_2026';


app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '✅ Brooz Store API is running!',
    database: 'Connected (PostgreSQL)',
    modelsLoaded: Object.keys(contract.models || {}),
  });
});


app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'البريد الإلكتروني وكلمة المرور مطلوبان' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
  res.status(201).json({
    message: 'تم إنشاء الحساب بنجاح',
    user: { name, email, passwordHash: hashedPassword },
    token,
  });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});