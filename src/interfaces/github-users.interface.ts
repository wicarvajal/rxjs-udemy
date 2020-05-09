import { UserItem } from './github-user-item.interface';

export interface GithubUsers {
  total_count:        number;
  incomplete_results: boolean;
  items:              UserItem[];
}
