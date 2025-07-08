import type { PageServerLoad } from './$types';
import type { DocumentProps } from '$lib/types/types'

export const load: PageServerLoad = async ({ params, fetch }) => {
  const response = await fetch(`http://localhost:8000/documents/${params.id}`);
  const data: DocumentProps = await response.json();

  if (!response.ok) {
    throw new Error("Item not found");
  }

  return {
    document: data 
  }
};

