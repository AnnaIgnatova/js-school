import createSnowFlake from "./createSnowflake";

const startSnow = (state: boolean) => {
  const bg = document.querySelector(".tree-bg") as HTMLElement;

  if (!state) {
    const snowfall = document.createElement("div");
    snowfall.className = "snowfall";
    bg.prepend(snowfall);
  }

  const interval = setInterval(() => {
    if (!state) {
      createSnowFlake();
    } else {
      clearInterval(interval);
      bg?.removeChild(bg.children[0]);
    }
  }, 50);
};

export default startSnow;
