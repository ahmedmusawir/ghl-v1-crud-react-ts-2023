import { useContext, useEffect, useState } from "react";
import { CanceledError } from "../../services/apiClient";
import userService, { User } from "../../services/userService";
import { UserContext } from "../../contexts/UserContext";

const useSingleUser = (id: string = "") => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    // Try to find the user in the state
    const user = state.users.find((user) => user.id === id);

    if (user) {
      // If the user is in the state, use that
      dispatch({ type: "FETCH_USER", payload: user });
    } else {
      // Otherwise, fall back to an API call
      dispatch({ type: "FETCH_USERS_START" });

      const { request, cancel } = userService.get<User>(id);

      request
        .then((res) => {
          dispatch({ type: "FETCH_USER", payload: res.data });
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          dispatch({ type: "FETCH_USERS_ERROR", payload: err.message });
        });

      // Clean up
      return () => cancel();
    }
  }, [id, dispatch, state.users]);

  return { user: state.user, error: state.error, isLoading: state.isLoading };
};

export default useSingleUser;
