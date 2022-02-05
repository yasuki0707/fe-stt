import { Button as CarbonButton, ButtonKind, ButtonSize } from 'carbon-components-react';
import React from 'react';

export const Button = ({
  href = '',
  label,
  kind = 'primary',
  size = 'sm',
  onClick
}: {
  href?: string;
  label: string;
  kind?: ButtonKind;
  size?: ButtonSize;
  onClick?: () => void;
}) => {
  return (
    <CarbonButton href={href} kind={kind} size={size} onClick={onClick}>
      {label}
    </CarbonButton>
  );
};
