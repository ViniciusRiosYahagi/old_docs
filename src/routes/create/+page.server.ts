import { api } from "$lib/api/axios";
import { validateDocument } from "$lib/utils/validateDocument";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as Record<string, string>

    const errors = validateDocument(data)
    if (errors.length) return fail(400, { errors })

    const response = await api.post("/documents", data)
  
    if (!response.data) {
      errors.push("Server Error");
      return fail(400, {errors});
    }

    redirect(303, "/");
  },
};
