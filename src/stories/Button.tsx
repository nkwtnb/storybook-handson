import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({label}: {label: string}) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
    >
      {label}
    </button>
  );
};
