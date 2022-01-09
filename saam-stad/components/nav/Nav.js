import classes from "./Nav.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = (props) => {
  return (
    <header>
      <div className={classes.nav}>
        <Image src="icon.webp" alt={"SAAM-Stad logo"} />
        <p>Shaping cities together</p>
        <nav>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/services">services</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Nav;
