"use strict";
//возможные пути для Херсон-Москва:
const khrsnToMscw = ['Херсон - Киев - Москва', 'Херсон - Одесса - Киев - Москва'];
const khrsnToBrln = ['Херсон - Киев - Минск - Берлин', 'Херсон - Киев - Москва- Берлин'];

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
    // select.innerHTML = ""; - если нужно очистить список после выбора
    for(let i = 0; i < khrsnToMscw.length; i++) {
        let opt = khrsnToMscw[i];
        ways.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
    }
  }
  else if (choice === 'Kherson' && choice2 === 'Berlin') {
    for(let i = 0; i < khrsnToBrln.length; i++) {
      let opt2 = khrsnToBrln[i];
      ways.innerHTML += "<option value=\"" + opt2 + "\">" + opt2 + "</option>";
  }
  }
}



const showDistance = document.getElementById('distance');




btn.addEventListener('click', () => {
  if (ways.value === 'Херсон - Киев - Москва') {
    console.log(distance.khersonToKiyv + distance.KiyvToMoscow);
  } else if (ways.value === 'Херсон - Одесса - Киев - Москва') {
    console.log(distance.khersonToOdessa + distance.OdessaToKiyv + distance.KiyvToMoscow);
  } else if (ways.value === 'Херсон - Киев - Минск - Берлин') {
    console.log(distance.khersonToKiyv + distance.KiyvToMinsk + distance.MinskToBerlin);
  } else if (ways.value === 'Херсон - Киев - Москва- Берлин')  {
    console.log(distance.khersonToKiyv + distance.KiyvToMoscow + distance.MoscowToBerlin);
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
        "OdessaToKiyv": 473,
        "KiyvToMinsk": 527,
        "MinskToMoscow": 718,
        "MoscowToBerlin": 1814,
        "MinskToBerlin": 1112
};


