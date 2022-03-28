import { Link } from "react-router-dom";

const BurgerMenuLink = ({ handleCloseMenu, to, children }) => {
  return (
    <Link onClick={handleCloseMenu} to={to}>
      {children}
    </Link>
  );
};

export default BurgerMenuLink;
