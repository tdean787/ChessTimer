const setTimeButton = document.querySelector("#set-time");

function saveTimeControls() {
  localStorage.clear();
  let selectedTimeControl = Number(
    document.querySelector("#timeControlSelect").value
  );
  localStorage.setItem("timeControl", selectedTimeControl);
}
setTimeButton.addEventListener("click", saveTimeControls);
