import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";
import "./ContactListItem.scss";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className="Item">
      <p>
        {name}: {number}
      </p>
      <button
        className="Item__button"
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
