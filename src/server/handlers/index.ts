import { handlers as exhibitionHandlers } from './exhibition';
import { handlers as passthroughHandlers } from './passthrough';

export const handlers = [...exhibitionHandlers, ...passthroughHandlers];
