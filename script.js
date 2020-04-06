const ENGLISH_KEYS = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "◄", "▼", "►"];
const SHIFT_ENGLISH_KEYS = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "◄", "▼", "►"];
const RUSSIAN_KEYS = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "◄", "▼", "►"];
const SHIFT_RUSSIAN_KEYS = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "◄", "▼", "►"];
const IRREGULAR_KEYS = ["Backspace", "Tab", "Del", "CapsLock", "Enter", "Shift", "Shift", "Ctrl", "Win", "Alt", "", "Alt", "Ctrl"];
const CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

(function () {
  document.querySelector("body").insertAdjacentHTML("beforeend", "<textarea name=\"name\" id=\"textarea\"></textarea> <div id=\"keybord\"></div>");
  const keybord = document.querySelector("#keybord");
  keybord.insertAdjacentHTML("beforeend", "<div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"back irregular\"></div>");
  keybord.insertAdjacentHTML("beforeend", "<div class=\"tab irregular\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"irregular\"></div>");
  keybord.insertAdjacentHTML("beforeend", "<div class=\"caps irregular\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"shiftR-enter irregular\"></div>");
  keybord.insertAdjacentHTML("beforeend", "<div class=\"shift irregular\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"shiftR-enter irregular\"><div>");
  keybord.insertAdjacentHTML("beforeend", "<div class=\"irregular\"></div><div class=\"irregular\"></div><div class=\"alt irregular\"></div><div class=\"space irregular\"></div><div class=\"irregular\" id=\"altRight\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"regular-key\"></div><div class=\"irregular\"></div>");
  keybord.insertAdjacentHTML("beforebegin", "<p class = 'description'>Switch Language : Ctrl + Alt</p>");
  keybord.insertAdjacentHTML("afterend", "<p class = 'description'>Made with Windows</p>");
}());

const KEY_IRREGULAR = document.querySelectorAll(".irregular");
const KEY_REGULAR = document.querySelectorAll(".regular-key");
const TEXTAREA = document.getElementById("textarea");
let stateOfCaps = false;

(function () {
  !localStorage.getItem("lang") ? localStorage.setItem("lang", JSON.stringify(ENGLISH_KEYS)) : true;
  let i = 0;
  let j = 0;
  document.querySelectorAll("#keybord > div").forEach((item) => {
    item.setAttribute("code", CODE[i++]);
  });
  KEY_IRREGULAR.forEach((item) => {
    item.insertAdjacentText("afterbegin", IRREGULAR_KEYS[j++]);
  });
}());


function changeSymbols(array) {
  let i = 0;
  KEY_REGULAR.forEach((item) => {
    item.innerText = "";
  });
  KEY_REGULAR.forEach((item) => {
    item.insertAdjacentText("afterbegin", array[i++]);
  });
}
changeSymbols(JSON.parse(localStorage.getItem("lang")));


function changeRegister(state, array) {
  let i = 0;
  if (!state) {
    KEY_REGULAR.forEach((item) => {
      item.innerText = "";
    });
    KEY_REGULAR.forEach((item) => {
      item.insertAdjacentText("afterbegin", array[i++].toUpperCase());
    });
    stateOfCaps = true;
    document.querySelector(".caps").style.color = "blue";
  } else if (state) {
    KEY_REGULAR.forEach((item) => {
      item.innerText = "";
    });
    KEY_REGULAR.forEach((item) => {
      item.insertAdjacentText("afterbegin", array[i++]);
    });
    document.querySelector(".caps").style.color = "";
    stateOfCaps = false;
  }
}

document.addEventListener("keydown", (event) => {
  if (event) {
    CODE.forEach((item) => { item !== event.code ? null : document.querySelector(`[code="${event.code}"]`).classList.add("-focus"); });
  }

  if (event.code === "AltLeft") {
    if (event.ctrlKey) {
      if (localStorage.lang === JSON.stringify(RUSSIAN_KEYS)) {
        changeSymbols(ENGLISH_KEYS);
        document.querySelector(".caps").style.color = "";
        stateOfCaps = false;
        localStorage.lang = JSON.stringify(ENGLISH_KEYS);
      } else {
        changeSymbols(RUSSIAN_KEYS);
        document.querySelector(".caps").style.color = "";
        stateOfCaps = false;
        localStorage.lang = JSON.stringify(RUSSIAN_KEYS);
      }
    }
  }
});
document.addEventListener("keyup", (event) => {
  if (event) {
    CODE.forEach((item) => { item !== event.code ? null : document.querySelector(`[code="${event.code}"]`).classList.remove("-focus"); });
  }
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    localStorage.lang === JSON.stringify(RUSSIAN_KEYS) ? changeSymbols(RUSSIAN_KEYS) : changeSymbols(ENGLISH_KEYS);
  }
});


document.addEventListener("keydown", (event) => {
  const arrayOfSymbols = document.getElementById("textarea").value.split("");
  event.preventDefault();
  if (event) {
    CODE.forEach((item) => {
      if (item !== event.code) {
        return null;
      }
      switch (event.code) {
        case "ControlLeft":
          return null;
          break;
        case "Delete":
          return null;
          break;
        case "ControlRight":
          return null;
          break;
        case "AltRight":
          return null;
          break;
        case "MetaLeft":
          return null;
          break;
        case "AltLeft":
          return null;
          break;
        case "Enter":
          TEXTAREA.value += "\n";
          break;
        case "Tab":
          TEXTAREA.value += "  ";
          break;
        case "Backspace":
          arrayOfSymbols.pop();
          TEXTAREA.value = arrayOfSymbols.join("");
          break;
        case "Space":
          TEXTAREA.value += " ";
          break;
        case "CapsLock":
          changeRegister(stateOfCaps, JSON.parse(localStorage.lang));
          break;
        case "ShiftLeft":
        case "ShiftRight":
          localStorage.lang === JSON.stringify(RUSSIAN_KEYS) ? changeSymbols(SHIFT_RUSSIAN_KEYS) : changeSymbols(SHIFT_ENGLISH_KEYS);
          break;
        default:
          TEXTAREA.value += document.querySelector(`[code="${event.code}"]`).innerText;
      }
    });
  }
});


document.getElementById("keybord").addEventListener("mousedown", (event) => {
  const arrayOfSymbols = document.getElementById("textarea").value.split("");
  if (event.target.getAttribute("data") == null && event.target.getAttribute("code") == null) {
    return null;
  }
  switch (event.target.getAttribute("code")) {
    case "ControlLeft":
      return null;
      break;
    case "Delete":
      return null;
      break;
    case "ControlRight":
      return null;
      break;
    case "AltRight":
      return null;
      break;
    case "MetaLeft":
      return null;
      break;
    case "AltLeft":
      return null;
      break;
    case "Enter":
      TEXTAREA.value += "\n";
      break;
    case "Tab":
      TEXTAREA.value += "  ";
      break;
    case "Backspace":
      arrayOfSymbols.pop();
      TEXTAREA.value = arrayOfSymbols.join("");
      break;
    case "Space":
      TEXTAREA.value += " ";
      break;
    case "CapsLock":
      changeRegister(stateOfCaps, JSON.parse(localStorage.lang));
      break;
    case "ShiftLeft":
    case "ShiftRight":
      localStorage.lang === JSON.stringify(RUSSIAN_KEYS) ? changeSymbols(SHIFT_RUSSIAN_KEYS) : changeSymbols(SHIFT_ENGLISH_KEYS);
      break;
    default:
      TEXTAREA.value += document.querySelector(`[code="${event.target.getAttribute("code")}"]`).innerText;
  }
});

document.getElementById("keybord").onmouseup = function (event) {
  if (event.target.getAttribute("code") === "ShiftRight" || event.target.getAttribute("code") === "ShiftLeft") {
    changeSymbols(JSON.parse(localStorage.getItem("lang")));
  }
};
