import { slide as Menu } from "react-burger-menu";
import { Container } from "./styles";
import logo from "../../assets/svg/logoProWorking 2.svg";
import { Children, cloneElement, isValidElement, useState } from "react";

const BurgerMenu = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hideSvgs = (isOpen) => {
    const svgs = document.querySelectorAll("svg");

    svgs.forEach((svg) => {
      const coords = svg.getBoundingClientRect();

      if (coords.left <= 300) {
        svg.style.color = isOpen ? "transparent" : "";
      }
    });
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
    hideSvgs(state.isOpen);
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { handleCloseMenu });
    }
    return child;
  });

  return (
    <Container>
      <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <img src={logo} alt="Logo ProWorking" className="bm-logo" />
        {childrenWithProps}
      </Menu>
    </Container>
  );
};

export default BurgerMenu;
