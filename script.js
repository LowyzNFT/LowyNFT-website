const model = document.querySelector("#lowyz-model");

model.addEventListener("load", () => {
  console.log("Lowyz 3D model loaded successfully.");
});

model.addEventListener("error", (event) => {
  console.error("The Lowyz 3D model could not be loaded.", event);
});