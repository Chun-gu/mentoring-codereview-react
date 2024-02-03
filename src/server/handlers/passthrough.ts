import { http, passthrough } from 'msw';

export const handlers = [
  http.get(/(manifest\.json|favicon\.ico|logo192\.png|^chrome-extension|\..*hot-update.*\.)/, () =>
    passthrough(),
  ),
];
