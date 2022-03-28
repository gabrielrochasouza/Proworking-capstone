import { Link } from "react-router-dom";
import { NavigatorContainerDiv } from "./style.js";

import {
  AiOutlineHome,
  AiFillDashboard,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { BiRegistered } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

import { useLocation } from "react-router-dom";
import { useAuthenticated } from "../../providers/authenticated/index.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

let lastScrollTop = 0;

const eventOnScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollType = false;
  if (scrollTop > lastScrollTop) {
    scrollType = true;
  } else {
    scrollType = false;
  }
  lastScrollTop = scrollTop;
  return scrollType;
};

const BottomNavigator = () => {
  const location = useLocation();
  const { authenticated, setAuthenticated } = useAuthenticated();
  const [upOrDown, setUpOrDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setUpOrDown(eventOnScroll()));
    return () =>
      window.removeEventListener("scroll", () => setUpOrDown(eventOnScroll()));
  }, []);

  const menuAuthenticated = [
    {
      title: "Home",
      path: "/",
      Icon: AiOutlineHome,
    },
    {
      title: "Serviços",
      path: "/services",
      Icon: MdWorkOutline,
    },
    {
      title: "Sobre nós",
      path: "/aboutus",
      Icon: IoIosPeople,
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      Icon: AiFillDashboard,
    },
    {
      title: "Sair",
      path: "/",
      Icon: AiOutlineLogout,
    },
  ];
  const menuNotAuthenticated = [
    {
      title: "Home",
      path: "/",
      Icon: AiOutlineHome,
    },
    {
      title: "Serviços",
      path: "/services",
      Icon: MdWorkOutline,
    },
    {
      title: "Entrar",
      path: "/login",
      Icon: FiLogIn,
    },
    {
      title: "Cadastro",
      path: "/register",
      Icon: BiRegistered,
    },
    {
      title: "Sobre nós",
      path: "/aboutus",
      Icon: IoIosPeople,
    },
  ];

  return (
    <NavigatorContainerDiv upOrDown={upOrDown}>
      <nav>
        <ul>
          {authenticated
            ? menuAuthenticated.map(({ title, Icon, path }) => (
                <li key={title}>
                  <Link
                    to={path}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      if (title === "Sair") {
                        setAuthenticated(false);
                        localStorage.clear();
                        toast("Você foi deslogado");
                      }
                    }}
                    className={
                      title !== "Sair" && location.pathname === path
                        ? "selected"
                        : ""
                    }
                  >
                    <div>
                      <p>
                        <Icon />
                      </p>
                    </div>
                    <span>{title}</span>
                  </Link>
                </li>
              ))
            : menuNotAuthenticated.map(({ title, Icon, path }) => (
                <li key={title}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={path}
                    className={location.pathname === path ? "selected" : ""}
                  >
                    <div>
                      <p>
                        <Icon />
                      </p>
                    </div>
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
        </ul>
      </nav>
    </NavigatorContainerDiv>
  );
};

export default BottomNavigator;
