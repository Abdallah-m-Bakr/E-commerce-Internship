import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // import css file
import { useTranslation } from "react-i18next";
const Register = () => {

  const{t,i18n}=useTranslation();
  useEffect(()=>{
    i18n.changeLanguage("ar")
  },[i18n])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed!");
      }

      const data = await res.json();
      console.log("✅ User created:", data);

      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong during registration!");
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="register-card card p-4 shadow-lg border-0">
        <h3 className="text-center mb-4 fw-bold register-title">
          <i className="fas fa-user-plus me-2"></i>
          {t("Register")}
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              {t("Full Name")}
            </label>
            <div className="input-group">
              <span className="input-group-text icon-box">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder={t("Enter your full name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              {t("Email Address")}
            </label>
            <div className="input-group">
              <span className="input-group-text icon-box">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={t("Enter email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              {t("Password")}
            </label>
            <div className="input-group">
              <span className="input-group-text icon-box">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder={t("Enter password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirm" className="form-label fw-semibold">
              {t("Confirm Password")}
            </label>
            <div className="input-group">
              <span className="input-group-text icon-box">
                <i className="fas fa-check"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder={t("Confirm Password")}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Button */}
          <button type="submit" className="btn register-btn w-100 fw-bold">
            <i className="fas fa-user-plus me-2"></i>
            {t("Register")}
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center mt-3">
          {t("Already have an account")}?{" "}
          <a href="/login" className="login-link">
            {t("Login")}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
