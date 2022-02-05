import { styled } from '@linaria/react';
import { Tile as CarbonTile } from 'carbon-components-react';
import React from 'react';

interface Prop<T> {
  pos: number;
  redundantKeyWord: string;
  textLength: number;
  keywordLength: number;
}

export const Tile: <T>(props: Prop<T>) => React.ReactElement<Prop<T>> = (props) => {
  const highlightedKeywordPos = (pos: number, textLength: number, keywordLength: number) => {
    if (pos <= 5) {
      return pos - 1;
    } else if (pos + keywordLength - 1 > textLength - 5) {
      return 6 - 1;
    } else {
      return 6 - 1;
    }
  };
  const hkp = highlightedKeywordPos(props.pos, props.textLength, props.keywordLength);
  return (
    <div>
      <CarbonTile>
        <span>位置: {props.pos}</span>
        <br />
        <span>
          前後5文字: {props.redundantKeyWord.substr(0, hkp)}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {props.redundantKeyWord.substr(hkp, props.keywordLength)}
          </span>
          {props.redundantKeyWord.substr(hkp + props.keywordLength)}
        </span>
      </CarbonTile>
    </div>
  );
};

const InnerWrapper = styled.div`
  margin-left: 10px;
  & > div:nth-child(2) {
    line-height: 1.5;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4px;
  & > p:nth-child(2) {
    text-align: right;
  }
`;
