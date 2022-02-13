import { post } from '@/infra/baseApi';
import { TSearchResult } from '@/types/apis/searchResult';

export const getText = async (keywords: string, lang: string, file: File) => {
  const path = `/`;

  const config = {
    params: {
      keywords: keywords,
      lang: lang
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  const form = new FormData();
  form.append('audio_file', file);

  return await post<TSearchResult>(path, form, config);
};
