import { useContext, useState } from "react";
import userService, { User } from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";

const useUpdateUser = () => {
  const { state, dispatch } = useContext(UserContext);

  const updateUser = async (user: User) => {
    try {
      const res = await userService.update(user);
      dispatch({ type: "UPDATE_USER", payload: res.data });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err.message });
      }
    }
  };

  return { updateUser, error: state.error, isLoading: state.isLoading };
};

export default useUpdateUser;
