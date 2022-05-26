import classes from "./AboutBody.module.css";

const ContactBody = () => {
  return (
    <div className={classes.body}>
      <p className={classes.center}>Connect with us on:</p>
      <p className={classes.center}>
        <b>
          <a target="_blank" href="mailto:contact@saamstad.com">
            contact@saamstad.com
          </a>
        </b>
      </p>
    </div>
  );
};
export default ContactBody;
