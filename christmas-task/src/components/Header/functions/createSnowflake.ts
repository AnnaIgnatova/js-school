const createSnowFlake = () => {
  const bg = (document.querySelector(".snowfall") as HTMLElement) || "";
  if (bg) {
    const rigth = bg.getBoundingClientRect().right - 20;
    const left = bg.getBoundingClientRect().left;
    const size = Math.random() * (30 - 10) + 10;
    const snowFlake = document.createElement("div");

    snowFlake.classList.add("snowflake");
    snowFlake.style.left = Math.random() * (rigth - left) + "px";
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowFlake.style.opacity = `${Math.random()}`;
    snowFlake.style.width = `${size}px`;
    snowFlake.style.height = `${size}px`;

    bg.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 3000);
  }
};

export default createSnowFlake;
