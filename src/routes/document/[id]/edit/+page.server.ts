import { fail, redirect, type Actions } from "@sveltejs/kit";
import { validateDocument } from "$lib/utils/validateDocument";
import { api } from "$lib/api/axios";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const data = Object.fromEntries(formData.entries()) as Record<string, string>
    const id = formData.get("id") as string

    const errors = validateDocument(data)
    if (errors.length) return fail(400, { errors });

    const response = await api.put(`/documents/${id}/edit`, data)

    if (!response.data) {
      errors.push("Error to edit");
      return fail(400, { errors });
    }

    throw redirect(303, "/");
  },
};
