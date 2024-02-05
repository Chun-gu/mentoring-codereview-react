import { handlers as exhibitionHandlers } from './exhibitions';
import { handlers as passthroughHandlers } from './passthrough';

export const handlers = [...exhibitionHandlers, ...passthroughHandlers];
