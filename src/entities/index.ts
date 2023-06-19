export interface User {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: {
    type: string;
    role: string;
    locationIds: string[];
  };
}

export interface UsersData {
  users: User[];
}
