import { User } from "../entities";
import APIClient from "../services/apiClient";

export default new APIClient<User>("/v1/users");
