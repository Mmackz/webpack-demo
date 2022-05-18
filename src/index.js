import _ from "lodash";
import myName from './myName';
import './style.css';

document.body.appendChild(
   (function () {
      const element = document.createElement("h1");
      element.classList.add("hello");
      return (element.innerHTML = _.join(["Hello", myName("world")], " ")), element;
   })()
);
