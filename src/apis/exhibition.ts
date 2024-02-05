import type { Exhibition } from '@/types/exhibition-type';

export async function getExhibitions(): Promise<Array<Exhibition>> {
  const response = await fetch('/exhibitions', {
    method: 'GET',
  });
  if (!response.ok) throw new Error('GET /exhibitions');
  const exhibitions = response.json();

  return exhibitions;
}
