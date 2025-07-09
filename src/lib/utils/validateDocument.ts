export function validateDocument({ title, content, category, author }: Record<string, string>) {
  const errors: string[] = [];

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

  return errors
}
