import { render } from "react-dom";
import * as React from "react";
// @ts-ignore
import * as Clock from "react-live-clock/src/index.js";

const printPdf: boolean = new URLSearchParams(window.location.search).has(
  "print-pdf"
);

if (!printPdf) {
  const clockDiv = document.createElement("div");
  clockDiv.id = "clock";
  document.body.appendChild(clockDiv);

  render(
    React.createElement(() => (
      <div
        style={{
          position: "fixed",
          fontSize: "4rem",
          fontFamily: "sans-serif",
          opacity: 0.5,
          padding: "2rem"
        }}
      >
        <Clock format={"HH:mm"} ticking={true} />
      </div>
    )),
    document.getElementById("clock")
  );
}
