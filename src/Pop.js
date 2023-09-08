import React, { useState } from 'react';

function PopupButton(props) {
  const [showPopup, setShowPopup] = useState(false);

  function handleDelete() {
    // Call the del function here
    props.del();
    // Close the popup
    setShowPopup(false);
  }

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Delete</button>
      {showPopup && (
        <div>
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowPopup(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default PopupButton;
