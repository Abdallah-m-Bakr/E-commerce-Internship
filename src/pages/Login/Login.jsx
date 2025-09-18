import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@test.com" && password === "123456") {
      navigate("/");
    } else {
      alert("❌ بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg border-0 animate__animated animate__fadeInDown"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "20px" }}
      >
        <h3
          className="text-center mb-4 fw-bold"
          style={{ color: "#49BFAA" }}
        >
          <i className="fas fa-sign-in-alt me-2"></i>
          Login
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <div className="input-group">
              <span className="input-group-text text-white" style={{ background: "#49BFAA" }}>
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <span className="input-group-text text-white" style={{ background: "#49BFAA" }}>
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
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              backgroundColor: "#49BFAA",
              color: "#fff",
              borderRadius: "30px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <i className="fas fa-sign-in-alt me-2"></i>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
