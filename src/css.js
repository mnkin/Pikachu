const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.skin *::before,
.skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
  }
  .nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 140px;
    margin-left: -12px;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms infinite linear;
  }
  .eye {
    border: 2px solid black;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -30px;
    background: #2e2e2e;
  }
  .eye::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid black;
    border-radius: 50%;
    background: white;
    transform: translateX(7px);
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 160px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -22px;
    z-index: 2;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top: none;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: rotate(-20deg) translateX(-54px);
  }
  .mouth .up .lip.right {
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: rotate(20deg) translateX(54px);
  }
  .mouth .down {
    width: 100%;
    height: 180px;
    position: absolute;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .circle {
    border: 3px solid black;
    width: 150px;
    height: 600px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #971d17;
    z-index: 1;
    overflow: hidden;
  }
  .mouth .down .circle .circle2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ec5f6e;
  }
  .face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    background: #d4391f;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }`;
export default string;
