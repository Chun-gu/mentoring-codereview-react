import { useExhibition } from '@/hooks/useExhibition';

import ExhibitionListEmpty from './exhibition-list-empty';
import ExhibitionListItem from './exhibition-list-item';

export default function ExhibitionList() {
  const exhibitions = useExhibition();

  return exhibitions?.length === 0 ? (
    <ExhibitionListEmpty />
  ) : (
    <ul className="flex h-full flex-col gap-2 overflow-y-auto p-2">
      {exhibitions?.map((exhibition) => (
        <ExhibitionListItem key={exhibition.id} exhibition={exhibition} />
      ))}
    </ul>
  );
}
