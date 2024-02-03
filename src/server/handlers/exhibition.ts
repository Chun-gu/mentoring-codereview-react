import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/exhibitions', () => {
    return HttpResponse.json({ data: 'working' });
  }),
];
