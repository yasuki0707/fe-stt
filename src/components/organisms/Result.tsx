import { styled } from '@linaria/react';
import React from 'react';

import { Tile } from '@/components/molecules/Tile';
import { TSearchResult } from '@/types/apis/searchResult';

export const Result = ({ results }: { results: TSearchResult }) => {
  // TODO: 整形
  if (!results.processedText) {
    return <>オーディオファイルをテキストに変換できませんでした</>;
  }
  if (!results.processedText.length) {
    return <>抽出結果がありません</>;
  }
  const fixedResults = {} as any;
  for (const r of results.processedText) {
    if (fixedResults[r.keyWord]) {
      fixedResults[r.keyWord].push({ pos: r.pos, redundantKeyWord: r.redundantKeyWord });
    } else {
      fixedResults[r.keyWord] = [{ pos: r.pos, redundantKeyWord: r.redundantKeyWord }];
    }
  }

  return (
    <Wrapper>
      {Object.keys(fixedResults).map((x, i) => {
        return (
          <div key={i}>
            抽出ワード: <span style={{ fontWeight: 'bold' }}>{x}</span>
            {fixedResults[x].map((_: any, j: number) => (
              <div key={j}>
                <Tile
                  pos={fixedResults[x][j].pos}
                  redundantKeyWord={fixedResults[x][j].redundantKeyWord}
                  textLength={results.length}
                  keywordLength={x.length}
                />
              </div>
            ))}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f4f4f4;
  padding: 16px 0px 0px 0px;
  position: relative;
  // & > span:nth-child(1) {
  //   font-size: 1.2em;
  //   font-weight: bold;
  //   // margin: 0px 0px 0px 16px;
  // }
  // & > span:nth-child(2) {
  //   color: #0f62fe;
  //   float: right;
  //   width: 100px;
  // }
`;
