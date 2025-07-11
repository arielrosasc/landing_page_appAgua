import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Universidad de Colima" className="logo-img" />
    </header>
  );
}

export default Header;
