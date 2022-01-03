import classes from "./ServicesBody.module.css";

const ServicesBody = () => {
  return (
    <div className={classes.services}>
      <h3 className={classes.listHeader}>Our services include:</h3>
      <div className={classes.list}>
        <ul>
          <li>Strategy Development for urban innovation projects</li>
          <li>Project Development and Management</li>
          <li>Policy and Data Analysis</li>
          <li>Knowledge Capturing and Sharing</li>
          <li>Research and Strategic Communication</li>
          <li>Multi-stakeholder Network Management</li>
          <li>Feasibility Assessments for urban development projects</li>
        </ul>
      </div>
      <h3 className={classes.listHeader}>Our Focus Areas:</h3>
      <div className={classes.list}>
        <ul>
          <li>Urban Development</li>
          <li>Urban Innovation</li>
          <li>Socio-economic resilience</li>
          <li>Urban Economic Development: Innovation & Entrepreneurship</li>
          <li>Smart Cities</li>
          <li>Circular Cities and Sustainability</li>
        </ul>
      </div>
    </div>
  );
};
export default ServicesBody;
