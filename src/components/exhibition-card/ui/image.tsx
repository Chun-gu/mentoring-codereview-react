import type { ComponentPropsWith } from '@/types';

import { useExhibitionContext } from '../use-exhibition-context';

type ImageProps = Omit<ComponentPropsWith<'img', 'noChildren'>, 'src'> & { alt: string };

export function Image({ alt, ...restProps }: ImageProps) {
  const { imageUrl } = useExhibitionContext('Image');

  return <img src={imageUrl} alt={alt} {...restProps} />;
}
