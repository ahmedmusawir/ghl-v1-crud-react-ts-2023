import { useContext, useEffect, useState } from "react";
import { CanceledError } from "../../services/apiClient";
import userService, { User } from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";

const useUsers = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    dispatch({ type: "FETCH_USERS_START" });
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        dispatch({ type: "FETCH_USERS", payload: res.data.users });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: err.message });
        if (err instanceof CanceledError) return;
      });

    // Clean up
    // return () => cancel();
  }, [dispatch]);

  // return state;
  return { users: state.users, error: state.error, isLoading: state.isLoading };
};

export default useUsers;
