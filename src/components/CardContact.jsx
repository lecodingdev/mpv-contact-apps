import PropTypes from 'prop-types';
import React from 'react';

function CardContact(props) {
  return (
    <div className="card shadow-sm radius">
      <div className="card-body">
        <h5>{props.contact.name}</h5>
        <p>{props.contact.email}</p>
        <p>{props.contact.phonenumber}</p>
        <p>category: {props.contact.category}</p>
      </div>
    </div>
  );
}

CardContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
};

export default CardContact;
