const dayTime2 = document.getElementById("dayTime2");
const hoursTime2 = document.getElementById("hoursTime2");
const minutesTime2 = document.getElementById("minutesTime2");
const secondTime2 = document.getElementById("secondTime2");

setInterval(() => {
  var secondsExpiration = secondTime2.innerText;
  secondTime2.innerText = String(--secondsExpiration).padStart(2, "0");
  if (secondTime2.innerText - 1 === -2) {
    var minutesExpiration = minutesTime2.innerText;
    minutesTime2.innerText = String(--minutesExpiration).padStart(2, "0");
    secondTime2.innerText = "59";
  }
  if (minutesTime2.innerText - 1 === -2) {
    var hoursExpiration = hoursTime2.innerText;
    hoursTime2.innerText = String(--hoursExpiration).padStart(2, "0");
    minutesTime2.innerText = "59";
  }
  if (hoursTime2.innerText - 1 === -2) {
    var dayExpiration = dayTime2.innerText;
    dayTime2.innerText = String(--dayExpiration).padStart(2, "0");
    hoursTime2.innerText = "23";
  }

  if (
    secondTime2.innerText === "00" &&
    minutesTime2.innerText === "00" &&
    hoursTime2.innerText === "00" &&
    dayTime2.innerText === "00"
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
