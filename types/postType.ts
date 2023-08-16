interface PrimaryAuthor {
  name: string;
  profile_image: string;
  slug: string;
}

interface PrimaryTag {
  accent_color: string;
  name: string;
  slug: string;
}

interface Tag {
  name: string;
  id: string;
}

export interface PostType {
  dateFormatted: string;
  feature_image: string;
  meta_description: string;
  meta_title: string;
  primary_author: PrimaryAuthor;
  primary_tag: PrimaryTag;
  published_at: string;
  slug: string;
  tag: Tag[];
  title: string;
}
