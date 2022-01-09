import classes from "./AboutBody.module.css";

const AboutBody = () => {
  return (
    <div className={classes.body}>
      <p className={classes.center}>
        <b>SAAM</b> means ‘together’ in Afrikaans
      </p>
      <p className={classes.center}>
        <b>stad</b> means ‘city’ in Dutch
      </p>
      <p>
        <b>SAAM stad</b> is a multidisciplinary team working at the intersection
        of innovation, society, economy, and sustainability. Driven by the goal
        of shaping cities together, we collaborate with communities,
        governments, businesses and institutions to develop roadmaps addressing
        today’s wicked urban challenges
      </p>
      <p>
        We strengthen innovation processes and resources{" "}
        <i className={classes.boldItalics}>today</i>, so they can build a better{" "}
        <i className={classes.boldItalics}>tomorrow</i>. By supporting projects
        in creating societal value throughout the process of innovation,{" "}
        <b>SAAM stad</b> supports the transition from disruptive to constructive
        approaches.
      </p>
      <p>
        The fusion of our expertise in architecture, communications and research
        combined with shared knowledge in urban management and development
        stimulates <b>SAAM stad</b>&apos;s holistic approach towards today’s
        most pressing urban challenges.
      </p>
    </div>
  );
};
export default AboutBody;
