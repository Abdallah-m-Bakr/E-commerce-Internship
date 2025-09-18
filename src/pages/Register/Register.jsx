import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("❌ كلمة المرور غير متطابقة");
      return;
    }

    // هنا تقدر تبعت البيانات للـ API أو Redux
    alert("✅ تم التسجيل بنجاح!");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg border-0"
        style={{ maxWidth: "450px", width: "100%", borderRadius: "20px" }}
      >
        <h3 className="text-center mb-4 fw-bold" style={{ color: "#49BFAA" }}>
          <i className="fas fa-user-plus me-2"></i>
          Register
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Full Name
            </label>
            <div className="input-group">
              <span className="input-group-text text-white" style={{ background: "#49BFAA" }}>
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

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

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirm" className="form-label fw-semibold">
              Confirm Password
            </label>
            <div className="input-group">
              <span className="input-group-text text-white" style={{ background: "#49BFAA" }}>
                <i className="fas fa-check"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder="Confirm password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
            <i className="fas fa-user-plus me-2"></i>
            Register
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/login" style={{ color: "#49BFAA", fontWeight: "bold" }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
