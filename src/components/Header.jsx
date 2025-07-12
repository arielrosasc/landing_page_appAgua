import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo Universidad de Colima" className="logo-img" />
      </div>
    </header>
  );
}

export default Header;
