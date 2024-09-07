import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import Classes from "./Header.module.css";
export const Header = () => {
  return (
    <header className={Classes.header}>
      <Link href="/" className={Classes.logo}>
        <Image src={logoImg} alt="platr with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={Classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Communities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
