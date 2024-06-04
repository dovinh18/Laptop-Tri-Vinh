const dayTime3 = document.getElementById("dayTime3");
const hoursTime3 = document.getElementById("hoursTime3");
const minutesTime3 = document.getElementById("minutesTime3");
const secondTime3 = document.getElementById("secondTime3");

setInterval(() => {
  var secondsExpiration = secondTime3.innerText;
  secondTime3.innerText = String(--secondsExpiration).padStart(2, "0");
  if (secondTime.innerText - 1 === -2) {
    var minutesExpiration = minutesTime3.innerText;
    minutesTime3.innerText = String(--minutesExpiration).padStart(2, "0");
    secondTime3.innerText = "59";
  }
  if (minutesTime.innerText - 1 === -2) {
    var hoursExpiration = hoursTime3.innerText;
    hoursTime3.innerText = String(--hoursExpiration).padStart(2, "0");
    minutesTime3.innerText = "59";
  }
  if (hoursTime3.innerText - 1 === -2) {
    var dayExpiration = dayTime3.innerText;
    dayTime3.innerText = String(--dayExpiration).padStart(2, "0");
    hoursTime3.innerText = "23";
  }

  if (
    secondTime3.innerText === "00" &&
    minutesTime3.innerText === "00" &&
    hoursTime3.innerText === "00" &&
    dayTime3.innerText === "00"
  ) {
    document.getElementById("boxTime").remove();
    const notification = document.createElement("p");
    notification.innerText = "Chương Trình Sale Đã Kết Thúc !";
    Object.assign(notification.style, {
      "font-family": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      "font-size": "20px",
      "font-weight": "bolder",
      color: "red",
    });
    document.getElementById("boxContent").appendChild(notification);
  }
}, 1000);
