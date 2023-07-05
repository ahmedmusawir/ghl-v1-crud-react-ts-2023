import { User } from "../services/userService";

export type UserState = {
  user: User | null;
  users: User[];
  isLoading: boolean;
  error: string | null;
};

export type UserAction =
  | { type: "FETCH_USER"; payload: User }
  | { type: "FETCH_USERS"; payload: User[] }
  | { type: "ADD_USER"; payload: User }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: string }
  | { type: "FETCH_USERS_START" }
  | { type: "FETCH_USERS_ERROR"; payload: string };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_USER":
      return { ...state, user: action.payload, isLoading: false, error: null };
    case "FETCH_USERS":
      console.log("USERS IN REDUCER:", action.payload);
      return { ...state, users: action.payload, isLoading: false };
    case "FETCH_USERS_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        isLoading: false,
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        isLoading: false,
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        isLoading: false,
      };
    default:
      return state;
  }
};
