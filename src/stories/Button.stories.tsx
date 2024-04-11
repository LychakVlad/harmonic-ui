import { StoryFn } from "@storybook/react";
import Button, { ButtonProps, LinkProps } from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<ButtonProps | LinkProps> = (args) => (
  <Button {...args} />
);

export const BaseButton = Template.bind({});
BaseButton.args = {
  children: "Press me!",
  buttonStyle: "primary",
  type: "submit",
};

export const BaseLink = Template.bind({});
BaseLink.args = {
  children: "Go to main page!",
  buttonStyle: "primary",
  href: "/",
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Press me!",
  buttonStyle: "primary",
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  buttonStyle: "primary",
  disabled: true,
};

export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <Button buttonStyle="primary" size="lg">
      Press me!
    </Button>
    <Button buttonStyle="primary" size="md">
      Press me!
    </Button>
    <Button buttonStyle="primary" size="sm">
      Press me!
    </Button>
  </div>
);

export const Types = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <Button buttonStyle="primary" size="md">
      Press me!
    </Button>
    <Button buttonStyle="outline" size="md">
      Press me!
    </Button>
    <Button buttonStyle="danger" size="md">
      Press me!
    </Button>
    <Button buttonStyle="success" size="md">
      Press me!
    </Button>
    <Button buttonStyle="warning" size="md">
      Press me!
    </Button>
  </div>
);
