export async function addWish(exhibitionId: number): Promise<{ exhibitionId: number }> {
  const response = await fetch('/wishes', {
    method: 'POST',
    body: JSON.stringify({ exhibitionId }),
  });
  if (!response.ok) throw new Error('POST /wishes');
  const data = await response.json();

  return data;
}
