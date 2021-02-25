import { useState } from 'react';
import '../modal/Modal.css';
import { CustomDialog, useDialog } from 'react-st-modal';

// The element to be shown in the modal window
function Modal() {
  // use this hook to control the dialog
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>gia ca</div>

    </div>
  );
}

export default Modal;