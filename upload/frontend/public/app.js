let bytesAmount = 0;

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
};

const updateStatus = (size) => {
  const text = `Pending Bytes to Upload: <strong>${size}</strong>`;
  document.getElementById("size").innerHTML = text;
};

const showSize = () => {
  const { files: fileElements } = document.getElementById("file");
  if (!fileElements.length) return;

  const file = Array.from(fileElements);
  const { size } = files.reduce(
    (prev, next) => ({ size: prev.size + next.size }),
    {
      size: 0,
    }
  );
  bytesAmount = size;
  updateStatus(size);
};

const onload = () => {
  console.log("loaded!");
};

window.onload = onload;
window.showSize = showSize;
