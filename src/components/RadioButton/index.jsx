import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RadioButton.css';

function RadioButton() {
  const [checked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <button type="button" className="radio-button" onClick={handleCheck}>
      {checked ? (
        <FontAwesomeIcon icon={faCircleDot} />
      ) : (
        <FontAwesomeIcon icon={faCircle} />
      )}
    </button>
  );
}

export default RadioButton;
