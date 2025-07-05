import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const errors: string[] = [];

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;

    if (title.length < 3) {
      errors.push("Title has to be least of length 3 characters.");
    }

    if (content.length < 100) {
      errors.push("Description has to be least of length 100 characters.");
    }

    if (category.length < 3) {
      errors.push("Category has to be least of length 3 characters.");
    }

    if (author.length < 3) {
      errors.push("Name has to be least of length 3 characters.");
    }

    if (errors.length) {
      return fail(400, { errors });
    }

    const response = await fetch("http://localhost:8000/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        category,
        author,
      }),
    });

    if (!response.ok) {
      errors.push("Server Error");
      return fail(400, {errors});
    }

    throw redirect(303, "/");
  },
};
