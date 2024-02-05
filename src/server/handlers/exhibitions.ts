import { http, HttpResponse } from 'msw';

import { exhibitions } from '../db';

export const handlers = [http.get('/exhibitions', () => HttpResponse.json(exhibitions))];
