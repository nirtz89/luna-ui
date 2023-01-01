import { Meta, Story } from "@storybook/react";
import Button from "./";
import { LunaButtonProps } from "./types";

export default {
  title: "Components/User Interface/Button",
  component: Button,
} as Meta;

const Template: Story<LunaButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Fly me to the moon" };
