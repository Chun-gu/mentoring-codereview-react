import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getExhibition, getExhibitions } from '@/apis/exhibition';
import { addWish, deleteWish, getWishes } from '@/apis/wish';

const exhibitionQuerykey = {
  all: () => ['exhibitions'],
  detail: (id: number) => [...exhibitionQuerykey.all(), id],
  wishes: () => ['wishes'],
} as const;

export function useExhibition() {
  const { data: exhibitions } = useQuery({
    queryKey: exhibitionQuerykey.all(),
    queryFn: getExhibitions,
  });

  return exhibitions;
}

export function useGetExhibitionQuery(id: number) {
  const { data: exhibition } = useQuery({
    queryKey: exhibitionQuerykey.detail(id),
    queryFn: () => getExhibition(id),
  });

  return exhibition;
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
