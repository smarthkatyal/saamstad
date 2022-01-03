import classes from "./Banner.module.css";

const Banner = (props) => {
	return (
		<h1 className={classes.bannerTitle}>{props.bannerTitle}</h1>
	);
}

export default Banner;