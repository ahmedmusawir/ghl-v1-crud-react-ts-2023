import { useContext, useState } from "react";
import userService from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";

const useDeleteUser = (id: string = "") => {
  const { state, dispatch } = useContext(UserContext);

  const deleteUser = async (id: string = "") => {
    // setIsLoading(true);
    dispatch({ type: "FETCH_USERS_START" });

    try {
      const res = await userService.delete(id);
      // console.log("Deleted User:", res.data);
      dispatch({ type: "REMOVE_USER", payload: id });

      // setIsLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err.message });
      }
    }
  };

  return { deleteUser, error: state.error, isLoading: state.isLoading };
};

export default useDeleteUser;
