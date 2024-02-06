import { http, HttpResponse } from 'msw';

import type { Exhibition } from '@/types/exhibition-type';

type AddWishParams = {};
type AddWishRequestBody = { exhibitionId: number };
type AddWishResponseBody = { wishedExhibitionId: number };

type DeleteWishParams = {};
type DeleteWishRequestBody = { exhibitionId: number };
type DeleteWishResponseBody = { deletedExhibitionId: number };

export const handlers = [
  http.post<AddWishParams, AddWishRequestBody, AddWishResponseBody, '/wishes'>(
    '/wishes',
    async ({ request }) => {
      const { exhibitionId } = await request.json();

      const wishes = JSON.parse(localStorage.getItem('wishes') || '[]') as Array<Exhibition>;
      const newWishes = Array.from(new Set([...wishes, exhibitionId]));

      localStorage.setItem('wishes', JSON.stringify(newWishes));

      return HttpResponse.json({ wishedExhibitionId: exhibitionId });
    },
  ),
  http.delete<DeleteWishParams, DeleteWishRequestBody, DeleteWishResponseBody, '/wishes'>(
    '/wishes',
    async ({ request }) => {
      const { exhibitionId } = await request.json();

      const wishes = JSON.parse(localStorage.getItem('wishes') || '[]') as Array<Exhibition>;
      const newWishes = wishes.filter(({ id }) => id !== exhibitionId);

      localStorage.setItem('wishes', JSON.stringify(newWishes));

      return HttpResponse.json({ deletedExhibitionId: exhibitionId });
    },
  ),
];