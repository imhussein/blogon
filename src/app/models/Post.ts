import { Observable } from 'rxjs';

export default interface Post {
  $key?: string;
  title?: string;
  details?: string;
  image?: string;
  createdAt: number;
}