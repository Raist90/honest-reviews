interface PrimaryAuthor {
  slug: string;
  profile_image: string;
  name: string;
}

interface PrimaryTag {
  accent_color: string;
  slug: string;
  name: string;
}

interface Tag {
  name: string;
  id: string;
}

export interface PostType {
  feature_image: string;
  slug: string;
  title: string;
  dateFormatted: string;
  primary_author: PrimaryAuthor;
  primary_tag: PrimaryTag;
  tag: Tag[];
}
