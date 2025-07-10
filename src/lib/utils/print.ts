  export function printPage() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }