import { styled } from '@linaria/react';
import React, { useState } from 'react';

import { Loading } from '@/components/molecules/Loading';
import { LanguageSelect, TRadioButtonValue } from '@/components/organisms/LanguageSelect';
import { Result } from '@/components/organisms/Result';
import { Searchbox } from '@/components/organisms/Searchbox';
import { getText } from '@/infra/beApi';
import { TSearchResult } from '@/types/apis/searchResult';

const Index = () => {
  const [keywords, setKeywords] = useState<string>('');
  const [lang, setLanguage] = useState<string>('ja');
  const [results, setResult] = useState<TSearchResult>({ processedText: [], length: 0 });
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    // テキストがない時はAPIキックせず
    if (!keywords) return;
    if (loading) return;

    setResult({ processedText: [], length: 0 });
    setLoading(true);

    const searchText = keywords.replace(/　/g, ' ').trim(); // 全角スペースを半角に修正
    const res = await getText(searchText, lang);
    if (res.code !== 200) {
      console.log('取得できませんでした');
      return;
    }
    console.log('processedText:', res.data.processedText);
    setResult(res.data);
    setLoading(false);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setKeywords(e.target.value);
  const onChangeSelect = (newSelection: TRadioButtonValue, name: string, e: React.ChangeEvent<HTMLInputElement>) =>
    setLanguage(e.target.value);

  return (
    <Wrapper>
      <LanguageSelect onChange={onChangeSelect} />
      <Searchbox size="xl" onButtonClick={onClick} onInputChange={onChangeSearch} />
      {loading && <Loading width={50} height={50} heightOff={0} />}
      {!loading && <Result results={results} />}
    </Wrapper>
  );
};
export default Index;

const Wrapper = styled.div`
  // display: flex;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  & > div:nth-child(1) {
    // background-color: #e0e0e0;
  }
  // & > div:nth-child(2) {
  //   background-color: #f3f3f3;
  //   width: 100%;
  // }
`;
