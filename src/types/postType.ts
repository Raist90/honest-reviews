import { MetaType } from "./metaType";

type PrimaryAuthor = {
  name: string;
  profile_image: string;
  slug: string;
};

type PrimaryTag = {
  accent_color: string;
  name: string;
  slug: string;
};

type Tag = {
  name: string;
  id: string;
};

export type PostType = {
  dateFormatted: string;
  excerpt: string;
  feature_image: string;
  html: string;
  id: string;
  meta: MetaType;
  meta_description: string;
  meta_title: string;
  primary_author: PrimaryAuthor;
  primary_tag: PrimaryTag;
  published_at: string;
  slug: string;
  tags: Tag[];
  title: string;
};
