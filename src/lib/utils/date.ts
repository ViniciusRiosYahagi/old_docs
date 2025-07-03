  export function formatDate(dateFromDb: string) {
    const date = new Date(dateFromDb)
    return date.toLocaleDateString("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }