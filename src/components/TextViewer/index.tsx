import React from "react";
import { useTextState } from "../../context";

const TextViewer = () => {

const {html} = useTextState();

  return (
    <React.Fragment>
      <div className="textviewer">
        <span dangerouslySetInnerHTML={{__html: html}}></span>
      </div>
    </React.Fragment>
  );
};

export default TextViewer;