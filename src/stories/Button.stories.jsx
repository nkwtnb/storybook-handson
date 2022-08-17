import React from 'react';
import { render, within } from '@testing-library/react'
import { Button } from './Button';
import { expect } from '@storybook/jest';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button/test',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button11',
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button1',
};

Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  expect(1).toBe(1);
}