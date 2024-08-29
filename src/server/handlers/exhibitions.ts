import { http, HttpResponse } from 'msw';

import { exhibitions, exhibitions as exhibitionsData } from '../db';

export const handlers = [
  http.get('/exhibitions', () => {
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');

    const exhibitions = exhibitionsData.map((exhibition) => {
      const isWished = wishes.includes(exhibition.id);

      return { ...exhibition, isWished };
    });

    return HttpResponse.json(exhibitions);
  }),

  http.get('/exhibitions/:id', ({ params }) => {
    let { id } = params;

    const exhibitionId = Number(id);
    const exhibition = exhibitions.find((exhibition) => exhibition.id === exhibitionId);

    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    const isWished = wishes.includes(exhibition?.id);

    return HttpResponse.json({ ...exhibition, isWished });
  }),
];
