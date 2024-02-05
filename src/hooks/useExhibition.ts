import { useSuspenseQuery } from '@tanstack/react-query';

import { getExhibitions } from '@/apis/exhibition';

const exhibitionQuerykey = {
  all: () => ['exhibitions'],
} as const;

export function useExhibition() {
  const { data: exhibitions } = useSuspenseQuery({
    queryKey: exhibitionQuerykey.all(),
    queryFn: getExhibitions,
  });

  return exhibitions;
}
