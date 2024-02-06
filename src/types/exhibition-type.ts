export type Exhibition = {
  id: number;
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  isWished: boolean;
  date: {
    started: string;
    ended: string;
  };
};
