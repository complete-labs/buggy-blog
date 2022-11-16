import Author from "./author";
import { Tier } from "./tier";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tier: Tier;
};

export default PostType;
