import type { Snippet } from "svelte";

export interface DocumentProps {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  created_at: string;
  updated_at: string;
}

export interface ButtonProps {
  href?: string;
  type?: string
  onclick?: (key: Event) => void
  children: Snippet;
}