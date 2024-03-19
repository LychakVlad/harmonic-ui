import "./Button.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: "primary" | "outline" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  children,
  buttonStyle = "primary",
  size = "sm",

  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const isLoadingClass = isLoading && `btn--loading`;
  const classNames = `btn btn--${buttonStyle} btn--${size} ${isLoadingClass}`;

  return (
    <button className={classNames} {...props} disabled={disabled}>
      {isLoading ? (
        <div className="is-loading-block">
          <div className="spinner" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
