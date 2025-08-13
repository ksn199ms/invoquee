import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-center text-white/80 mb-8">
          Please enter your details to log in
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                {showPassword ? <EyeOff size={20} color='black'/> : <Eye size={20} color='black' />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-white/80 text-sm">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="accent-white w-4 h-4 rounded mr-2"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 hover:shadow-lg hover:shadow-indigo-300/50"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-white/80 text-sm mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-white font-semibold hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
