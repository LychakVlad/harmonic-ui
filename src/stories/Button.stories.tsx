import { StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Press me!",
  buttonStyle: "primary",
};

export const AllSizes = () => (
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
