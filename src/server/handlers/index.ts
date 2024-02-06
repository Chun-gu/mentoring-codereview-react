import { handlers as exhibitionHandlers } from './exhibitions';
import { handlers as passthroughHandlers } from './passthrough';
import { handlers as wishHandlers } from './wishes';

export const handlers = [...passthroughHandlers, ...exhibitionHandlers, ...wishHandlers];
