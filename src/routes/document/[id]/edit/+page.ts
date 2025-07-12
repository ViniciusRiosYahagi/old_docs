import type { PageServerLoad } from "./$types";
import { api } from "$lib/api/axios";
import type { DocumentProps } from "$lib/types/types";

export const load: PageServerLoad = async ({ params }) => {
  const response = await api.get(`/documents/${params.id}`);
  const data: DocumentProps = response.data;

  if (!response.data) {
    throw new Error("Document not found");
  }

  return { data };
};
