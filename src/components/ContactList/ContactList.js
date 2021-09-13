import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem";
import "./ContactList.scss";

const ContactList = ({ contacts }) => {
  return (
    <ul className="ContactList">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const filteredItems = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  console.log(filter);
  return {
    contacts: filteredItems(items, filter),
  };
};

export default connect(mapStateToProps)(ContactList);
