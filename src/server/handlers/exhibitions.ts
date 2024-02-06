import { http, HttpResponse } from 'msw';

import { exhibitions as exhibitionsData } from '../db';

export const handlers = [
  http.get('/exhibitions', () => {
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');

    const exhibitions = exhibitionsData.map((exhibition) => {
      const isWished = wishes.includes(exhibition.id);

      return { ...exhibition, isWished };
    });

    return HttpResponse.json(exhibitions);
  }),
];
