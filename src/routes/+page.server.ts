import type { DocumentProps } from "$lib/types/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {

  const response = await fetch("http://localhost:8000/documents")
  const data: DocumentProps[] = await response.json()

  if (!response.ok) {
    throw new Error("Error to load data")
  }

  return {
    documents: data  
  }
}