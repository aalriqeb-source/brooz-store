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

// مخزن مؤقت للمستخدمين لتجربة التسجيل والدخول محلياً
const users = [];

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
    return res.status(400).json({ message: 'البريد الإلكتروني وكلمة المرور مطلوبان' });
  }
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'هذا البريد مسجل مسبقاً' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, name, email, passwordHash: hashedPassword };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, email }, JWT_SECRET, { expiresIn: '7d' });
  res.status(201).json({
    message: 'تم إنشاء الحساب بنجاح',
    user: { id: newUser.id, name, email },
    token,
  });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'البريد الإلكتروني وكلمة المرور مطلوبان' });
  }
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  res.json({
    message: 'تم تسجيل الدخول بنجاح',
    user: { id: user.id, name: user.name, email: user.email },
    token,
  });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});