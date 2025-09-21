import "./NotFound.css"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
function NotFound() {
  const {t,i18n} = useTranslation()
  useEffect(()=>{
    i18n.changeLanguage("ar")
  },[])
  return (
    <div>{t("NotFound")}</div>
  )
}

export default NotFound