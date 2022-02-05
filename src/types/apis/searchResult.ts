type TProcessedText = {
  keyWord: string;
  pos: number;
  redundantKeyWord: string;
};

export type TSearchResult = {
  processedText: TProcessedText[];
  length: number;
};
