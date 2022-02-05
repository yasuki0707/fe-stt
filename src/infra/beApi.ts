import { get } from '@/infra/baseApi';
import { TSearchResult } from '@/types/apis/searchResult';

export const getText = async (keywords: string, lang: string) => {
  const path = `/`;

  const config = {
    params: {
      keywords: keywords,
      lang: lang
    }
  };

  return await get<TSearchResult>(path, config);
};
