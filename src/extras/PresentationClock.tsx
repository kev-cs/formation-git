import { render } from "react-dom";
import * as React from "react";
import { FunctionComponent } from "react";
import Clock from "react-live-clock";

const PresentationClock: FunctionComponent = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      fontSize: "4rem",
      fontFamily: "sans-serif",
      opacity: 0.5,
      padding: "2rem"
    }}
  >
    <Clock format={"HH:mm"} ticking={true} />
  </div>
);

const renderClockInBody = () => {
  const clockDiv = document.createElement("div");
  clockDiv.id = "clock";
  document.body.appendChild(clockDiv);

  render(<PresentationClock />, clockDiv);
};

export default renderClockInBody;
