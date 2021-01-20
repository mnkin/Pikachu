import string from "./css.js";

const player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerText = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      //为了确保原型的方法被篡改
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; //拿到的是字符串"play"
        document.querySelector(key).onclick = player[value]; //把value当作key获取对应的方法
      }
    }
  },
  run: () => {
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    } else {
      player.n += 1;
      player.ui.demo.innerText = string.substring(0, player.n);
      player.ui.demo2.innerHTML = string.substring(0, player.n);
      player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    }
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
