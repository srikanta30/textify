import React from "react";
import { MdUpload } from "react-icons/md";
import { saveText, useTextDispatch, useTextState } from "../../context";

const Uploader = () => {

  const dispatch = useTextDispatch();
  const {count} = useTextState();

  const readFile = (e: any) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const textFile = /text.*/;

    if (file.type.match(textFile)) {
      reader.onloadend = (e: any) => {
        saveText(dispatch, e.target.result);
      };
      reader.readAsText(file);
    } else {
      console.log("Error!");
    }
  };

  return (
    <React.Fragment>
      <div className="upload_counter">
        <label className="uploader">
          <input type="file" onInput={readFile} accept=".txt" />
          Upload File
          <MdUpload />
        </label>
        <div>
          Found: {count} times.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Uploader;
