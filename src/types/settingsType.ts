type Navigation = {
  label: string;
  url: string;
};

export type SettingsType = {
  title: string;
  description: string;
  logo: string;
  icon: string;
  accent_color: string | null;
  cover_image: string;
  facebook: string;
  twitter: string;
  lang: string;
  timezone: string;
  codeinjection_head: string | null;
  codeinjection_foot: string | null;
  navigation: Navigation[];
  secondary_navigation: Navigation[] | [];
  meta_title: string;
  meta_description: string;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  members_support_address: string;
  url: string;
};

