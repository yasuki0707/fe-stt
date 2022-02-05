import { styled } from '@linaria/react';
import { Search, SearchProps } from 'carbon-components-react';
import React from 'react';

import { Button } from '@/components/atoms/Button';

export const Searchbox = ({
  size = 'sm',
  onButtonClick,
  onInputChange
}: {
  size?: SearchProps['size'];
  onButtonClick?: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const props = {
    labelText: '',
    size: size,
    placeholder: '抽出したい文字列を入力してください',
    onChange: onInputChange
  };
  return (
    <Wrapper>
      <Search {...props} />
      <Button label={'文字列抽出'} onClick={onButtonClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px 16px 16px 16px;
`;
