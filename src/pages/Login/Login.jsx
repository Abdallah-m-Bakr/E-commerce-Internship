import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // fakestoreapi uses "username"
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        alert("❌ Invalid login credentials");
        return;
      }

      const data = await res.json();
      console.log("✅ Login success:", data);

      if (data.token) {
        localStorage.setItem("token", data.token); // save token
        alert("✅ Logged in successfully!");
        navigate("/");
      } else {
        alert("❌ Invalid login response");
      }
    } catch {
      alert("❌ Error during login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">
          <i className="fas fa-sign-in-alt me-2"></i>
          Login
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="btn login-btn w-100 fw-bold">
            <i className="fas fa-sign-in-alt me-2"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
