import React from "react";
import "./css/MainContent.css";
export default function MainContent(props) {
  return (
    <>
      <main>
        <div className="main-wrapper">{React.cloneElement(props.children)}</div>
      </main>
    </>
  );
}
