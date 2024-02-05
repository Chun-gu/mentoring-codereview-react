import { useQuery } from '@tanstack/react-query';

import ExhibitionCard from '@/components/exhibition-card';
import type { Exhibition } from '@/types/exhibition-type';

export default function ExhibitionList() {
  const { data: exhibitions } = useQuery({
    queryKey: ['exhibitions'],
    queryFn: async (): Promise<Array<Exhibition>> => {
      const response = await fetch('/exhibitions', {
        method: 'GET',
      });
      if (!response.ok) throw new Error('GET /exhibitions');
      const exhibitions = response.json();

      return exhibitions;
    },
  });

  // TODO: handle when length === 0
  return (
    <ul className="flex flex-col gap-2 p-2">
      {exhibitions?.map((exhibition) => (
        <li key={exhibition.id} className="contents">
          <ExhibitionCard exhibition={exhibition} />
        </li>
      ))}
    </ul>
  );
}
