import create from "./httpService";

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

export default create("/v1/users/?locationId=4rKuULHASyQ99nwdL1XH");
