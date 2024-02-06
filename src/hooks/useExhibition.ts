import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { getExhibitions } from '@/apis/exhibition';
import { addWish, deleteWish } from '@/apis/wish';

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

export function useAddWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exhibitionQuerykey.all() });
    },
  });

  return { addWish: mutate };
}

export function useDeleteWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exhibitionQuerykey.all() });
    },
  });

  return { deleteWish: mutate };
}
