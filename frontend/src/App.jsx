import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function HomePlaceholder() {
  const token = localStorage.getItem('token');
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-3">Brooz E-Commerce Store</h1>
      <p className="text-gray-600 mb-6">
        {token ? 'You are logged in with a valid JWT session.' : 'Browse as Guest or sign in to your account.'}
      </p>
      <div className="flex gap-4">
        {!token ? (
          <>
            <Link to="/login" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Log In
            </Link>
            <Link to="/register" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Sign Up
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePlaceholder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}