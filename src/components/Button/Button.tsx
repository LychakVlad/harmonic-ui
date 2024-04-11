import Spinner from "../Spinner/Spinner";
import "./Button.scss";
import React from "react";

export interface CommonProps {
  children: React.ReactNode;
  buttonStyle: "primary" | "outline" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
}

export interface ButtonProps extends CommonProps {
  type?: "button" | "submit" | "reset";
}

export interface LinkProps extends CommonProps {
  target?: string;
  rel?: string;
}

const ButtonComponent = ({
  children,
  buttonStyle = "primary",
  size = "sm",
  disabled = false,
  isLoading = false,
  type,
  ...props
}: ButtonProps) => {
  const isLoadingClass = isLoading ? "btn--loading" : "";
  const classNames = `btn btn--${buttonStyle} btn--${size} ${isLoadingClass}`;

  return (
    <button className={classNames} {...props} disabled={disabled} type={type}>
      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Spinner spinerStyle={buttonStyle} size={size} disabled={disabled} />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

const Link = ({
  children,
  buttonStyle = "primary",
  size = "sm",
  href,
  ...props
}: LinkProps) => {
  const classNames = `btn btn--${buttonStyle} btn--${size}`;

  return (
    <a className={classNames} {...props} href={href}>
      {children}
    </a>
  );
};

const Button = ({
  children,
  buttonStyle = "primary",
  size = "sm",
  disabled = false,
  isLoading = false,
  href,
  ...props
}: ButtonProps | LinkProps) => {
  if (href) {
    return (
      <Link {...props} buttonStyle={buttonStyle} size={size} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <ButtonComponent
      buttonStyle={buttonStyle}
      size={size}
      disabled={disabled}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
