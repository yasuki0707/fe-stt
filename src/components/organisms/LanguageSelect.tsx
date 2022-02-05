import { styled } from '@linaria/react';
import { RadioButton, RadioButtonGroup, RadioButtonValue } from 'carbon-components-react';
import React from 'react';

export type TRadioButtonValue = RadioButtonValue;

export const LanguageSelect = ({
  onChange
}: {
  onChange?: (newSelection: TRadioButtonValue, name: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const props = {
    legendText: '言語を選択してください',
    name: '',
    defaultSelected: 'ja',
    onChange: onChange
  };
  return (
    <Wrapper>
      <RadioButtonGroup {...props}>
        <RadioButton labelText="日本語" value="ja" id="ja" />
        <RadioButton labelText="英語" value="en" id="en" />
      </RadioButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px 16px 16px;
`;
