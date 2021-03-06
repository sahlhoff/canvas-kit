import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox checked={checked} label="I agree to the terms" onChange={handleChange} />;
};
