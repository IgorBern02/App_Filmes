import { memo } from "react";
import "./style.scss";

const ModalNavbar = memo(() => {
  return (
    <div className="navbar">
      <h1 className="title_navbar">Filmes</h1>
    </div>
  );
});

const Navbar = () => {
  return <ModalNavbar />;
};

export default memo(Navbar);
