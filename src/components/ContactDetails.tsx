import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import Spinner from "./ui-ux/Spinner";
import useSingleContact from "../CONTEXT_GHL_CRUD/hooks/contacts/useSingleContact";
import useDeleteContact from "../CONTEXT_GHL_CRUD/hooks/contacts/useDeleteContact";
import { useEffect, useState } from "react";
import { Contact } from "../CONTEXT_GHL_CRUD/services/contactService";
import useEditContact from "../CONTEXT_GHL_CRUD/hooks/contacts/useEditContact";
import { useForm } from "react-hook-form";

const ContactDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // SINGLE HOOK BASED ON CONTEXT
  const { contact, isLoading, error } = useSingleContact(params.id);

  // DELETE CONTACT W/ CONTEXT/REDUCER
  const { deleteContact } = useDeleteContact();

  const deleteItem = async (id: string = "") => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteContact(id);
        console.log("Todo deleted successfully");
        navigate("/contacts");
      } catch (err) {
        console.log("An error occurred:", err);
      }
    } else {
      console.log("Deletion cancelled");
    }
  };

  // EDITING CONTACT W/ CONTEXT/REDUCER
  const { register, handleSubmit, setValue } = useForm<Contact>();
  const { editContact } = useEditContact();

  useEffect(() => {
    if (contact) {
      setValue("firstName", contact.firstName || "");
      setValue("lastName", contact.lastName || "");
      setValue("email", contact.email || "");
      setValue("phone", contact.phone || "");
      setValue("companyName", contact?.companyName || "");
    }
  }, [contact, setValue]);

  const onSubmit = (contact: Contact) => {
    setIsEditing(false);
    if (params.id) {
      const userWithId = { ...contact, id: params.id };
      editContact(userWithId);
    }
  };

  if (isLoading) return <Spinner />;

  if (error) return <h1>A Moose error has occured! </h1>;

  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={""}>
        <Box className="py-8 px-5">
          <span className="font-extrabold text-primary">User ID:</span>{" "}
          <span className="text-secondary font-bold ml-5">{params.id}</span>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <label className="">
              <h4 className="font-extrabold text-primary mt-3">First Name: </h4>
              <hr className="w-48 h-1 bg-primary border-0 rounded my-2" />
              <span className="font-extrabold text-secondary mb-3 form-control">
                <input
                  className="input input-primary"
                  {...register("firstName")}
                  disabled={!isEditing}
                />
              </span>
            </label>

            <label className="">
              <h4 className="font-extrabold text-primary">Last Name: </h4>
              <hr className="w-48 h-1 bg-primary border-0 rounded my-2" />
              <span className="font-extrabold text-secondary mb-3 form-control">
                <input
                  className="input input-primary"
                  {...register("lastName")}
                  disabled={!isEditing}
                />
              </span>
            </label>

            <label className="form-control">
              <h4 className="font-extrabold text-primary">Email: </h4>
              <hr className="w-48 h-1 bg-primary border-0 rounded my-2" />
              <span className="font-extrabold text-secondary mb-3 form-control">
                <input
                  className="input input-primary"
                  {...register("email")}
                  disabled={!isEditing}
                />
              </span>
            </label>

            <label className="form-control">
              <h4 className="font-extrabold text-primary">Phone: </h4>
              <hr className="w-48 h-1 bg-primary border-0 rounded my-2" />
              <span className="font-extrabold text-secondary mb-3 form-control">
                <input
                  className="input input-primary"
                  {...register("phone")}
                  disabled={!isEditing}
                />
              </span>
            </label>

            <label className="form-control">
              <h4 className="font-extrabold text-primary">Company Name: </h4>
              <hr className="w-48 h-1 bg-primary border-0 rounded my-2" />
              <span className="font-extrabold text-secondary mb-3 form-control">
                <input
                  className="input input-primary"
                  {...register("companyName")}
                  disabled={!isEditing}
                />
              </span>
            </label>

            {isEditing && (
              <div className="form-control">
                <button className="btn mt-5" type="submit">
                  Save
                </button>
              </div>
            )}
          </form>
          {!isEditing && (
            <div className="form-control">
              <button
                className="btn mt-5"
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
            onClick={() => deleteItem(contact?.id)}
          >
            Delete
          </button>
        </Box>
      </Container>
    </Main>
  );
};

export default ContactDetails;
