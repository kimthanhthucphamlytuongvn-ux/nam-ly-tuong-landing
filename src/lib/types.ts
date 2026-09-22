export type ProductCategory =
  | "tuoi"
  | "kho"
  | "gia-vi"
  | "che-bien"
  | "san-san";

export interface Product {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  desc: string;
  price: string;
  ocop?: boolean;
  icon: "mushroom" | "leaf";
}

export interface CategoryFilter {
  label: string;
  value: ProductCategory | "all";
}

export interface WorryItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  text: string;
}

export interface UspItem {
  num: string;
  title: string;
  desc: string;
  points: string[];
}

export interface ValueItem {
  letter: string;
  title: string;
  desc: string;
}

export interface OcopRow {
  n: string;
  label: string;
  isTotal?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}
