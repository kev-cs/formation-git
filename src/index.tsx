import * as React from "react";
import { utils } from "react-revealjs-wrapper";

import renderClockInBody from "./extras/PresentationClock";
import "./extras/BarrelRoller";

import "reveal.js/css/theme/simple.css";
import "reveal.js/lib/css/monokai.css";
import "./style-overrides.css";

import Slides from "./slides";

document.title = "Formation Git - partie 1";

utils.renderSlides(Slides, {
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

const isNotPrintPdfPage: boolean = !new URLSearchParams(
  window.location.search
).has("print-pdf");
if (isNotPrintPdfPage) renderClockInBody();

require("script-loader!reveal.js-notes-pointer/notes-pointer.js");
