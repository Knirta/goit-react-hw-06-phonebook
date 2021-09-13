import { v4 as uuidv4 } from "uuid";
import actionTypes from "./contacts-types";

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: filter,
});

const contactActions = { addContact, deleteContact, changeFilter };

export default contactActions;
