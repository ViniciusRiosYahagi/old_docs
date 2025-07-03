import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      name: formData.get("name"),
      description: formData.get("description"),
    };

    const response = await fetch("http://localhost:8000/documents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return 
    }

    throw redirect(303, "/");
  },
};
