import React from "react";
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
  buttonStyle: "danger",
};
