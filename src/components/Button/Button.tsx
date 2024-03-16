import "./Button.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: "blue" | "white";
  size?: "sm";
  hasBorder?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  children,
  color = "blue",
  size = "sm",
  hasBorder = true,
  disabled = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const hasBorderClass = hasBorder && `btn--border`;
  const isLoadingClass = isLoading && `btn--loading`;
  const classNames = `btn btn--${color} btn--${size} ${hasBorderClass} ${isLoadingClass}`;

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
