const showSize = () => {
  const { files: fileElements } = document.getElementById("file");
  if (!fileElements.length) return;

  const file = Array.from(fileElements);
  const size = files.recude((prev, next) => ({ size: prev.size + next.size }), {
    size: 0,
  });
  debugger;
};

const onload = () => {
  console.log("loaded!");
};

window.onload = onload;
