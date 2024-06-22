export interface Post {
  post_id: number;
  username: string;
  content: string;
  likes: number;
  created_at: Date;
}
export interface FeedPostProps {
  post: Post;
}