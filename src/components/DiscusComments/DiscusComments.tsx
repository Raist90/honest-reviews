"use client";
import { PostType } from "@/types";
import { DiscussionEmbed } from "disqus-react";

type DisqusCommentsProps = {
  post: PostType
  className?: string
}

export const DisqusComments: React.FC<DisqusCommentsProps> = ({ post, ...rest }) => {
  const disqusShortname = "raist";
  const disqusConfig = {
    url: process.env.APP_URL,
    identifier: post.id, // Single post id
    title: post.title, // Single post title
  };
  return (
    <div {...rest}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
