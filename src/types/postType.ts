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

type PostType = {
  dateFormatted: string;
  excerpt: string;
  id: string;
  feature_image: string;
  meta_description: string;
  meta_title: string;
  primary_author: PrimaryAuthor;
  primary_tag: PrimaryTag;
  published_at: string;
  slug: string;
  tag: Tag[];
  title: string;
};

export default PostType;
