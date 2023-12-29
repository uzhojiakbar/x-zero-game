// X O game

const katakchalar = document.getElementById("katakchalar");
const yurishNavbati = document.getElementById("yurishNavbati");
const navbat = document.getElementById("navbat");
const title = document.getElementById("title");

let KataklarArr = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

let winnersIndex = [99, 99, 99];

let yurishlarSoni = 0;

let run = 1;

const YurishNavbati = (son = yurishlarSoni) => {
  yurishNavbati.innerHTML = "";
  if (yurishlarSoni >= 9) {
    yurishNavbati.innerHTML = "Navbat Qolmadi";
  } else {
    if (son % 2 === 0) {
      yurishNavbati.innerHTML = "X";
      return 1;
    } else {
      yurishNavbati.innerHTML = "O";
      return 0;
    }
  }
};

const getElements = () => {
  katakchalar.innerHTML = "";
  KataklarArr.map((v, i) => {
    katakchalar.innerHTML += `
    <div
        onclick="setXorO(${v},${i})"

        class="katak
        ${YurishNavbati(yurishlarSoni - 1) == 0 ? "red" : ""}
        ${YurishNavbati(yurishlarSoni - 1) == 1 ? "green" : ""}

        ${yurishlarSoni == 0 ? "red" : ""}
        ${yurishlarSoni == 1 ? "green" : ""}

        ${
          i == winnersIndex[0] || i == winnersIndex[1] || i == winnersIndex[2]
            ? "yellow"
            : ""
        }
        "

    >
    ${v === 1 ? "X" : v === 0 ? "O" : ""}
    </div>`;
  });

  if (winnersIndex[0] !== 99) {
  }
  YurishNavbati(yurishlarSoni);
};

const setXorO = (v, i) => {
  if (run) {
    if (KataklarArr[i] !== 1 && KataklarArr[i] !== 0) {
      KataklarArr[i] = YurishNavbati(yurishlarSoni);
      yurishlarSoni++;
      getElements();
      YurishNavbati(yurishlarSoni);
      Winner();
    }
  }
};

const Win = (durrangmi, winners) => {
  if (!durrangmi) {
    title.innerHTML = `${
      YurishNavbati(yurishlarSoni - 1) == 1
        ? `<span class="x">X</span>`
        : `<span class="o">O</span>`
    } O'yinchi yutdi`;
    winnersIndex = winners;
  } else {
    title.innerHTML = `<span class="x">DURRANG</span>`;
  }
  yurishlarSoni = 0;

  getElements();
  run = 0;
};

const Winner = () => {
  if (
    KataklarArr[0] == KataklarArr[1] &&
    KataklarArr[0] == KataklarArr[2] &&
    KataklarArr[0] !== undefined
  ) {
    Win(0, [0, 1, 2]);
  } else if (
    KataklarArr[3] == KataklarArr[4] &&
    KataklarArr[3] == KataklarArr[5] &&
    KataklarArr[3] !== undefined
  ) {
    Win(0, [3, 4, 5]);
  } else if (
    KataklarArr[6] == KataklarArr[7] &&
    KataklarArr[6] == KataklarArr[8] &&
    KataklarArr[6] !== undefined
  ) {
    Win(0, [6, 7, 8]);
  } else if (
    KataklarArr[0] == KataklarArr[4] &&
    KataklarArr[0] == KataklarArr[8] &&
    KataklarArr[0] !== undefined
  ) {
    Win(0, [0, 4, 8]);
  } else if (
    KataklarArr[2] == KataklarArr[4] &&
    KataklarArr[2] == KataklarArr[6] &&
    KataklarArr[2] !== undefined
  ) {
    Win(0, [2, 4, 6]);
  } else if (
    KataklarArr[0] == KataklarArr[3] &&
    KataklarArr[0] == KataklarArr[6] &&
    KataklarArr[0] !== undefined
  ) {
    Win(0, [0, 3, 6]);
  } else if (
    KataklarArr[1] == KataklarArr[4] &&
    KataklarArr[1] == KataklarArr[7] &&
    KataklarArr[1] !== undefined
  ) {
    Win(0, [1, 4, 7]);
  } else if (
    KataklarArr[2] == KataklarArr[5] &&
    KataklarArr[2] == KataklarArr[8] &&
    KataklarArr[2] !== undefined
  ) {
    Win(0, [2, 5, 8]);
  }

  if (yurishlarSoni >= 9) {
    Win(1);
  }
};

const Restart = () => {
  KataklarArr = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  winnersIndex = [99, 99, 99];
  yurishlarSoni = 0;
  run = 1;

  getElements();
};

getElements();
