// to hide notification bar when cross is clicked
const notifiBar = document.querySelector(".notificationBar");
function handleHide() {
  notifiBar.style.display = "none";
}

const labLinkTag = document.querySelector("#labTag");
const labContainer = document.querySelector(".mainLabContainer");

labLinkTag.addEventListener("mouseover", () => {
  labContainer.classList.add("active");
});
labContainer.addEventListener("mouseover", () => {
  labContainer.classList.add("active");
});

labLinkTag.addEventListener("mouseout", () => {
  labContainer.classList.remove("active");
});
labContainer.addEventListener("mouseout", () => {
  labContainer.classList.remove("active");
});
