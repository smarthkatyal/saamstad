import classes from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <ul className={classes.footer}>
        <li>
          <a
            href="https://www.instagram.com/saam.stad/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/instagram.webp"
              alt="Link to Instagram Account: https://www.instagram.com/saam.stad/"
              width="28px"
              height="28px"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/saamstad"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/linkedin.webp"
              alt="Link to LinkedIn: https://www.linkedin.com/company/saamstad"
              width="28px"
              height="28px"
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Footer;
