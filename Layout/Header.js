
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Classes from "./Header.module.css";
import { usePathname } from "next/navigation";
import Meals from "@/app/meals/page";
import NavLink from "@/Components/Nav-Link/Nav-Link";
 

export const Header = () => {
  // console.log(params, "params")
  return (
    <header className={Classes.header}>
      <Link href="/" className={Classes.logo}>
        <Image src={logoImg} alt="platr with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink pathname={'meals'} classNameVal={'active'}>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink pathname={'community'} classNameVal={'active'}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
