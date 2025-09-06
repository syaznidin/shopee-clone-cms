import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
      <div className="max-w-md w-full mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Welcome Back!
      </h2>
      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
