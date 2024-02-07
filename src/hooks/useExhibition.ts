import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { getExhibitions } from '@/apis/exhibition';
import { addWish, deleteWish, getWishes } from '@/apis/wish';

const exhibitionQuerykey = {
  all: () => ['exhibitions'],
  wishes: () => ['wishes'],
} as const;

export function useExhibition() {
  const { data: exhibitions } = useQuery({
    queryKey: exhibitionQuerykey.all(),
    queryFn: getExhibitions,
  });

  return exhibitions;
}

export function useGetWishesQuery() {
  const { data: wishes } = useQuery({
    queryKey: exhibitionQuerykey.wishes(),
    queryFn: getWishes,
  });

  return wishes;
}

export function useAddWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: exhibitionQuerykey.all() });
      queryClient.invalidateQueries({ queryKey: exhibitionQuerykey.wishes() });
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
      queryClient.invalidateQueries({ queryKey: exhibitionQuerykey.wishes() });
    },
  });

  return { deleteWish: mutate };
}
