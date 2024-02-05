import ExhibitionCard from '@/components/exhibition-card';
import { useExhibition } from '@/hooks/useExhibition';

export default function ExhibitionList() {
  const exhibitions = useExhibition();

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
