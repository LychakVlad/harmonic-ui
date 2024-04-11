import "./Spinner.scss";

export interface SpinnerProps {
  spinerStyle: "primary" | "outline" | "danger" | "success" | "warning";
  size: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Spinner = ({ spinerStyle, size, disabled }: SpinnerProps) => {
  const classNames = `spinner spinner--${spinerStyle} spinner--${size} ${
    spinerStyle === "outline" && disabled ? "spinner--outline-disabled" : ""
  }`;

  return <div className={classNames} />;
};

export default Spinner;
