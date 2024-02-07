import { http, HttpResponse } from 'msw';

import type { Exhibition, Wish } from '@/types/exhibition-type';

import { exhibitions } from '../db';

type GetWishResponseBody = Array<Exhibition>;

type AddWishParams = {};
type AddWishRequestBody = { exhibitionId: number };
type AddWishResponseBody = { wishedExhibitionId: number };

type DeleteWishParams = {};
type DeleteWishRequestBody = { exhibitionId: number };
type DeleteWishResponseBody = { deletedExhibitionId: number };

// TODO: change route to /user/me/wishes
export const handlers = [
  http.get<{}, {}, GetWishResponseBody, '/user/me/wishes'>('/user/me/wishes', () => {
    const wishesData = JSON.parse(localStorage.getItem('wishes') || '[]') as Array<Wish>;
    const wishes = exhibitions
      .filter((exhibition) => wishesData.includes(exhibition.id))
      .map((wish) => ({ ...wish, isWished: true }));

    return HttpResponse.json(wishes);
  }),

  http.post<AddWishParams, AddWishRequestBody, AddWishResponseBody, '/wishes'>(
    '/wishes',
    async ({ request }) => {
      const { exhibitionId } = await request.json();

      const wishes = JSON.parse(localStorage.getItem('wishes') || '[]') as Array<Wish>;
      const newWishes = Array.from(new Set([...wishes, exhibitionId]));

      localStorage.setItem('wishes', JSON.stringify(newWishes));

      return HttpResponse.json({ wishedExhibitionId: exhibitionId });
    },
  ),

  http.delete<DeleteWishParams, DeleteWishRequestBody, DeleteWishResponseBody, '/wishes'>(
    '/wishes',
    async ({ request }) => {
      const { exhibitionId } = await request.json();

      const wishes = JSON.parse(localStorage.getItem('wishes') || '[]') as Array<Wish>;
      const newWishes = wishes.filter((wishId) => wishId !== exhibitionId);

      localStorage.setItem('wishes', JSON.stringify(newWishes));

      return HttpResponse.json({ deletedExhibitionId: exhibitionId });
    },
  ),
];
