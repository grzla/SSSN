export interface Post {
  post_id: number;
  user_id: number;
  content: string;
  likes: number;
  created_at: Date;
}
export interface FeedPostProps {
  post: Post;
}