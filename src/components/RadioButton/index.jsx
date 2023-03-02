import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RadioButton.css';
import PropTypes from 'prop-types';

function RadioButton({ type, radioFilter, handleRadio }) {
  const checked = type === radioFilter;
  return (
    <button
      type="button"
      className="radio-button"
      onClick={() => handleRadio(type)}
    >
      {checked ? (
        <FontAwesomeIcon icon={faCircleDot} />
      ) : (
        <FontAwesomeIcon icon={faCircle} />
      )}
    </button>
  );
}

export default RadioButton;

RadioButton.propTypes = {
  type: PropTypes.string.isRequired,
  radioFilter: PropTypes.string.isRequired,
  handleRadio: PropTypes.func.isRequired,
};
