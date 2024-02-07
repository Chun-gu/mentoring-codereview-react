import type { Exhibition } from '@/types/exhibition-type';

export async function getWishes(): Promise<Array<Exhibition>> {
  const response = await fetch('/user/me/wishes', { method: 'GET' });

  if (!response.ok) throw new Error('GET /user/me/wishes');
  const wishes = response.json();

  return wishes;
}

export async function addWish(exhibitionId: number): Promise<{ exhibitionId: number }> {
  const response = await fetch('/wishes', {
    method: 'POST',
    body: JSON.stringify({ exhibitionId }),
  });
  if (!response.ok) throw new Error('POST /wishes');
  const data = await response.json();

  return data;
}

export async function deleteWish(exhibitionId: number): Promise<{ exhibitionId: number }> {
  const response = await fetch('/wishes', {
    method: 'DELETE',
    body: JSON.stringify({ exhibitionId }),
  });
  if (!response.ok) throw new Error('DELETE /wishes');
  const data = await response.json();

  return data;
}
