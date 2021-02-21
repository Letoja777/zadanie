"use strict";
//возможные пути для Херсон-Москва:
const options = ['Херсон - Киев - Москва', 'Херсон - Одесса - Киев - Москва'];

//Обьявляем все нужные для работы переменные:
const select = document.getElementById('listA'); //или document.querySelector('class');

const select2 = document.getElementById('listB');

const ways = document.getElementById("list2");

const btn = document.getElementById('button');

//вешаем обработчики события CHANGE в выпадающем списке:
select.addEventListener('change', setWay);
select2.addEventListener('change', setWay);

//создаём функцию, которая после выбора точки А и точки Б будет предлагать возможные пути:
function setWay() {
  const choice = select.value;
  const choice2 = select2.value;
  if (choice === 'Kherson' && choice2 === 'Moscow') {
    // select.innerHTML = "";
    for(let i = 0; i < options.length; i++) {
        let opt = options[i];
        ways.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }
  }
}

const showDistance = document.getElementById('distance');

btn.addEventListener('click', () => {
  if (ways.value === 'Херсон - Киев - Москва') {
    console.log(distance.khersonToKiyv + distance.KiyvToMoscow);
  } else if (ways.value === 'Херсон - Одесса - Киев - Москва') {
    console.log(distance.khersonToOdessa + distance.OdessaToKiyv + distance.KiyvToMoscow);
  }
    else {
      for (let i = 0; i < 1; i++) {
        if (ways.value == '' || ways.value == null) {
        alert('Сначала выберите маршрут');
      }
    }
  }
  });

const distance = {
        "khersonToKiyv": 548,
        "KiyvToMoscow": 860,
        "khersonToOdessa": 201,
        "OdessaToKiyv": 473
};


