const doABarrelRoll = () => {
  const a = "-webkit-";
  const b = "transform:rotate(1turn);";
  const c = "transition:2s;";

  document.body.setAttribute("style", a + b + a + c + b + c);
  setTimeout(() => {
    document.body.setAttribute("style", "");
  }, 3000);
};

document.onkeydown = e => {
  if (e.key === "r") {
    doABarrelRoll();
  } else {
    return;
  }
};
