interface UserPhotos {
  small: null | string;
  large: null | string
}

export interface UserTypes {
  name: string;
  id: number;
  photos: UserPhotos;
  status: null | string;
  followed: boolean;
}
export interface UsersData {
  items: UserTypes[];
  totalCount: number;
}