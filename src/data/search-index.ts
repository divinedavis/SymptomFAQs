import { symptoms } from './symptoms';

export const searchIndex = symptoms.flatMap((s) =>
  s.tags.map((tag) => ({ tag, slug: s.slug, name: s.name }))
);
