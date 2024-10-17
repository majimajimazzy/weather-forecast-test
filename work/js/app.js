const el = document.getElementById("city-select");
const enter = document.getElementById("get-weather");
enter.addEventListener("click",function(){
  const elValue = el.value;
  const firstSentence = "https://www.jma.go.jp/bosai/forecast/data/forecast/";
  const lastSentence = ".json";
  const jsonUrl = firstSentence + elValue + lastSentence;
  fetch(jsonUrl)
  .then(response => response.json())
  .then(weather => {
    const one = document.getElementById("publishingOffice");
    one.lastElementChild.textContent = weather[0].publishingOffice;
    const two = document.getElementById("reportDatetime");
    two.lastElementChild.textContent = weather[0].reportDatetime;
    const three = document.getElementById("targetArea");
    three.lastElementChild.textContent = weather[0].timeSeries[0].areas[0].area.name;
    const four = document.getElementById("todayHighTemperature");
    four.lastElementChild.textContent = weather[1].tempAverage.areas[0].max+"℃";
    const five = document.getElementById("todayLowTemperature");
    five.lastElementChild.textContent = weather[1].tempAverage.areas[0].min+"℃";
    const six = document.getElementById("today");
    six.lastElementChild.textContent = weather[0].timeSeries[0].areas[0].weathers[0];
    const seven = document.getElementById("tomorrow");
    seven.lastElementChild.textContent = weather[0].timeSeries[0].areas[0].weathers[1];
    const eight = document.getElementById("dayAfterTomorrow");
    eight.lastElementChild.textContent = weather[0].timeSeries[0].areas[0].weathers[2];
  })
  .catch(error => console.error('エラー:', error));
})