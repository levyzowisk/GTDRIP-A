import logoHeader from "../../assets/svgs/logo-header.svg";
import "./style.css";

export default function Logo() {
  return (
    <div className="logo-container"> {/* Adicionei um contêiner para a logo */}
      <img className="logo-header" src={logoHeader} alt="logo-header" />
    </div>
  );
}
