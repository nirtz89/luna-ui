import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './';
import { ELunaButtonColors, ELunaButtonVariants } from './types';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Fly me to the moon',
    type: 'button',
    variant: ELunaButtonVariants.REGULAR,
    color: ELunaButtonColors.PRIMARY,
    shadowed: false,
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: Object.values(ELunaButtonVariants) },
    color: { control: 'select', options: Object.values(ELunaButtonColors) },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    shadowed: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Outlined: Story = { args: { variant: ELunaButtonVariants.OUTLINED } };
export const Ghost: Story = { args: { variant: ELunaButtonVariants.GHOST } };
export const Shadowed: Story = { args: { shadowed: true } };
export const Danger: Story = { args: { color: ELunaButtonColors.DANGER } };
export const Success: Story = { args: { color: ELunaButtonColors.SUCCESS } };
export const Warning: Story = { args: { color: ELunaButtonColors.WARN } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      {Object.values(ELunaButtonVariants).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {Object.values(ELunaButtonColors).map((color) => (
            <Button {...args} key={color} variant={variant} color={color}>
              {color} {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
