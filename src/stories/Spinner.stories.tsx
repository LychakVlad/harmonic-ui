import { StoryFn } from "@storybook/react";
import Spinner, { SpinnerProps } from "../components/Spinner/Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Base = Template.bind({});
