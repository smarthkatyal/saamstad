import classes from "./Layout.module.css";
import Header from "../ui/Header";
import Footer from "../footer/Footer";
function Layout(props) {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
