interface User {
  id: string;
  bio: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  username: string | undefined;
  name: string | undefined;
}

interface Urls {
  small: string;
  regular: string;
}

export interface DataAttribute {
  id: number;
  user: User;
  urls: Urls;
  likes: number | undefined;
  width: number | undefined;
}
