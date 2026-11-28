import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'brooz_super_secret_key_2026';

// مسار فحص حالة السيرفر
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: '✅ Brooz Store API is running!',
    database: 'Connected (PostgreSQL)'
  });
});

// 1. مسار إنشاء حساب جديد (Register)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'يرجى تعبئة جميع الحقول المطلوبة' });
    }

    const existing = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'البريد الإلكتروني مستخدم بالفعل' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO "User" (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
      [name, email, hashedPassword, 'CUSTOMER']
    );

    const newUser = result.rows[0];
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'تم إنشاء الحساب بنجاح',
      user: newUser,
      token
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'حدث خطأ في السيرفر أثناء التسجيل' });
  }
});

// 2. مسار تسجيل الدخول (Login)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'يرجى إدخال البريد الإلكتروني وكلمة المرور' });
    }

    const result = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'تم تسجيل الدخول بنجاح',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'حدث خطأ في السيرفر أثناء تسجيل الدخول' });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`✅ Brooz Backend Server is running on port ${PORT}`);
});