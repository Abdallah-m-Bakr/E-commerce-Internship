import "./Profile.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function Profile() {
  const { t,i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("ar");
  },[i18n]);
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card profile-card shadow-lg border-0">
        <div className="profile-header text-center p-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg" // 👈 صورة البروفايل
            alt="User"
            className="profile-img rounded-circle mb-3"
          />
          <h4 className="mb-0">{t("John Doe")}</h4>
          <p className="text-muted">@johndoe</p>
        </div>
        <div className="card-body">
          <h6 className="fw-bold mb-3">{t("Profile Info")}</h6>
          <ul className="list-unstyled mb-4">
            <li className="mb-2">
              <i className="fas fa-envelope me-2 text-success"></i>
              johndoe@email.com
            </li>
            <li className="mb-2">
              <i className="fas fa-phone me-2 text-success"></i>
              +1 234 567 890
            </li>
            <li className="mb-2">
              <i className="fas fa-map-marker-alt me-2 text-success"></i>
              {t("New York, USA")}
            </li>
          </ul>

          <div className="d-flex justify-content-between">
            <button className="btn btn-success w-100 me-2">
              <i className="fas fa-edit me-2"></i>{t("Edit Profile")}
            </button>
            <button className="btn btn-outline-danger w-100">
              <i className="fas fa-sign-out-alt me-2"></i>{t("Logout")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
