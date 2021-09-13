import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";
import "./Filter.scss";

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      <p className="Filter__title">Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (e) =>
    dispatch(contactActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
