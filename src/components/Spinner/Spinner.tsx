import "./Spinner.scss";

export const Spinner = ({ spinerStyle = "primary", size = "sm" }) => {
  const classNames = `spinner spinner--${spinerStyle} spinner--${size}`;

  return <div className={classNames} />;
};

export default Spinner;
