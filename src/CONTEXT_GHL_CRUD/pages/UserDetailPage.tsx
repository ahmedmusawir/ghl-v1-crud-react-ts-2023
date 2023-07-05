import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../components/ui-ux/Spinner";
import useDeleteContact from "../hooks/contacts/useDeleteContact";
import useSingleUser from "../hooks/users/useSingleUser";
import useUpdateUser from "../hooks/users/useUpdateUser";
import { User } from "../services/userService";

const UserDetailPage = () => {
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const { user, isLoading, error } = useSingleUser(params.id);
  // console.log("User:", user);
  // console.log("isEditing", isEditing);

  // EDITING CONTACT
  const { register, handleSubmit, setValue } = useForm<User>();
  const { updateUser } = useUpdateUser();

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName || "");
      setValue("lastName", user.lastName || "");
      setValue("email", user.email || "");
      setValue("phone", user.phone || "");
      setValue("roles.role", user?.roles?.role || "");
    }
  }, [user, setValue]);

  const onSubmit = (user: User) => {
    setIsEditing(false);
    if (params.id) {
      const userWithId = { ...user, id: params.id };
      updateUser(userWithId);
    }
  };

  // DELETING CONTACT
  const { deleteContact } = useDeleteContact();

  const deleteItem = async (id: string = "") => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteContact(id);
        console.log("Todo deleted successfully");
        navigate("/users");
      } catch (err) {
        console.log("An error occurred:", err);
      }
    } else {
      console.log("Deletion cancelled");
    }
  };

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  if (!user) return <div>No user found</div>;

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={""}>
        <Box className="p-7 prose max-w-none">
          <h3>
            <span className="font-extrabold text-primary">User ID:</span>{" "}
            {params.id}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="form-control">
            {/* <form className="form-control"> */}
            <h3>
              <label>
                First Name:{" "}
                <input
                  className="input input-primary"
                  {...register("firstName")}
                  disabled={!isEditing}
                />
              </label>
            </h3>
            <h3>
              <label>
                Last Name:{" "}
                <input
                  className="input input-primary"
                  {...register("lastName")}
                  disabled={!isEditing}
                />
              </label>
            </h3>
            <h3>
              <label>
                Email:{" "}
                <input
                  className="input input-primary"
                  {...register("email")}
                  disabled={!isEditing}
                />
              </label>
            </h3>
            <h3>
              <label>
                Phone:{" "}
                <input
                  className="input input-primary"
                  {...register("phone")}
                  disabled={!isEditing}
                />
              </label>
            </h3>
            <h3>
              <label>
                User Role:{" "}
                <input
                  className="input input-primary"
                  {...register("roles.role")}
                  disabled={!isEditing}
                />
              </label>
            </h3>
            {isEditing && (
              <button className="btn" type="submit">
                Save
              </button>
            )}
          </form>
          {!isEditing && (
            <div className="form-control">
              <button
                className="btn"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </div>
          )}
        </Box>
        <Box className="p-7 prose max-w-none">
          <button
            className="btn btn-error"
            onClick={() => deleteItem(user?.id)}
          >
            Delete
          </button>
        </Box>
      </Container>
    </Main>
  );
};

export default UserDetailPage;
