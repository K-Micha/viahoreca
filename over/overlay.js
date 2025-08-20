// overlay.js
document.addEventListener("DOMContentLoaded", () => {
  const blocker = document.createElement("div");
  blocker.id = "jsBlocker";
  blocker.style.cssText = `
    
    position: fixed;
    top: 0; left: 0;
    width: 99%;
    height: 100vh;
    background: rgba(1, 9, 29, 1);
    backgroundImg: url("./over/alt.png");
    color: white;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    text-align: center;
  `;

  blocker.innerHTML = `
    <h1>Coming Soon!</h1>
    <p>Diese Seite befindet sich noch im Aufbau!</p>
    <button style="
      padding: 10px 20px;
      font-size: 24px;
      margin-top: 20px;
      background: gold;
      color: black;
      border: none;
      cursor: pointer;
      font-weight: bold;
    ">—— Vorschau ——</button>
  `;

  blocker.querySelector("button").addEventListener("click", () => {
    blocker.remove();
  });

  document.body.appendChild(blocker);
});