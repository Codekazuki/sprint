import "./index.css";
import logo from "./assets/kazuki.jpg";

const Navbar = () => {
  return (
    <section className="nav">
      <img className="logo" src={logo} alt="here is it" />
      <button>hello</button>
    </section>
  );
};
export default Navbar;
