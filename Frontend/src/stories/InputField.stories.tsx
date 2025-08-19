import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import InputField from "../Component/inputfield";
import "../index.css";
import { useState } from "react";
const meta = {
  component: InputField,
  title: "Components/InputField",
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default State of Input Field
export const Primary: StoryObj<typeof InputField> = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <InputField
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value); 
           action("Email is")(value);
        }}
      />
    );
  },
  args: {
    label: "Email",
    placeholder: "Enter your email",
    variant: "filled",
  },
};

// Variant Type - "Filled"
export const Filled: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "filled",
  },
};
// Variant Type - "Outlined"
export const Outlined: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "outlined",
  },
};
// Variant Type - "Ghost"
export const Ghost: Story = {
  args: {
    label: "Nickname",
    placeholder: "Enter your nickname",
    variant: "ghost",
  },
};

// Size - "Small"
export const Small: Story = {
  args: {
    label: "Small Input",
    placeholder: "Small size",
    size: "sm",
  },
};
// Size - "Medium"
export const Medium: Story = {
  args: {
    label: "Medium Input",
    placeholder: "Medium size",
    size: "md",
  },
};
// Size - "Large"
export const Large: Story = {
  args: {
    label: "Large Input",
    placeholder: "Large size",
    size: "lg",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot type here",
    disabled: true,
  },
};

// Invalid state with error message
export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
    value: "suryaprataps471@gbhjhhj.com",
  },
};

// Helper text
export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    helperText: "Must be at least 8 characters",
  },
};

//loading state
export const Loading = {
  args: {
    label: "Username",
    placeholder: "Enter username...",
    loading: true,
  },
};
