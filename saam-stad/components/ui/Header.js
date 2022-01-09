import Head from "next/head";
import Nav from "../nav/Nav";
import Banner from "./banner";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  function getDisplayNameForPath(pathname) {
    console.log(pathname);
    if (pathname === "/about") return "ABOUT US";
    if (pathname === "/services") return "SERVICES";
    if (pathname === "/contact") return "LET'S TALK";
    return undefined;
  }

  const displayName = getDisplayNameForPath(router.pathname);
  return (
    <>
      <Head>
        <title>SAAM stad</title>
        <meta
          name="description"
          content="SAAM stad is a multidisciplinary team working at the intersection of innovation, society, economy, and sustainability"
        />
        <link rel="icon" href="/icon.webp" />
      </Head>
      <Nav />
      {displayName && <Banner bannerTitle={displayName} />}
    </>
  );
};
export default Header;
