import { Observable } from 'rxjs';

export default interface Post {
  title?: string;
  details?: string;
  image?: string;
  createdAt: number;
}