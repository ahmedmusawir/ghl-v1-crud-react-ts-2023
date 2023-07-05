import { useContext, useState } from "react";
import userService, { User } from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";

const useAddUser = () => {
  const { state, dispatch } = useContext(UserContext);

  const addUser = async (user: User) => {
    dispatch({ type: "FETCH_USERS_START" });
    try {
      const res = await userService.post(user);
      // console.log("User Inserted:", res.data);
      dispatch({ type: "ADD_USER", payload: res.data });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err.message });
      }
    }
  };

  return { addUser, error: state.error, isLoading: state.isLoading };
  // return { addUser };
};

export default useAddUser;
