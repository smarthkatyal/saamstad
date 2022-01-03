import classes from './Nav.module.css'

const Nav = (props) => {
	return (
		<>
			<div className={classes.nav}>
				<img src='icon.webp' alt={'SAAM-Stad logo'}/>
				<h5>Shaping cities together</h5>
			</div>
		</>
	);
};
export default Nav;