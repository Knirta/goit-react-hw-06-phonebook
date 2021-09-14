import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

import "./Filter.scss";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <p className="Filter__title">Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) =>
          dispatch(contactActions.changeFilter(e.currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
