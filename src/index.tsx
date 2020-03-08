import * as React from "react";

import renderSlides from "reveal-react-wrapper";
import slides from "./slides";
import "./extras/BarrelRoller";
import "./extras/Clock";
import "reveal.js/css/theme/simple.css";
import "reveal.js/lib/css/monokai.css";
import "./style-overrides.css";

renderSlides(slides, {
  dependencies: [
    { src: "plugin/markdown/marked.js" },
    { src: "plugin/markdown/markdown.js" },
    { src: "plugin/highlight/highlight.js" },
    { src: "plugin/notes/notes.js" },
    { src: "plugin/zoom-js/zoom.js" }
  ],
  hash: true,
  pdfSeparateFragments: false
});

require("script-loader!reveal.js-notes-pointer/notes-pointer.js");
