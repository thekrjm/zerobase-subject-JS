const AnalogClock = $container => {
  // do something!

  //creatElement 리팩토링
  const makeDOMwithProperties = (domType, propertyMap) => {
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
      dom[key] = propertyMap[key];
    });
    return dom;
  }

  //appendChild 리팩토링
  const appendChildrenList = (target, childrenList) => {
    if (!Array.isArray(childrenList)) return;
    childrenList.forEach((children) => {
      target.appendChild(children);
    });
  };

  const secondElement = makeDOMwithProperties('div', {
    className: 'hand second',
  });
  const minuteElement = makeDOMwithProperties('div', {
    className: 'hand minute',
  });
  const hourElement = makeDOMwithProperties('div', {
    className: 'hand hour',
  });

  const timeElmentList = []
  for (let i = 0; i < 12; i++) {
    const timeElement = makeDOMwithProperties('div', {
      className: `time time${i + 1}`,
    });
    timeElement.innerHTML = '|'
    timeElmentList.push(timeElement)
  }

  appendChildrenList($container, [
    secondElement, hourElement, minuteElement,
    ...timeElmentList
  ]);

  setInterval(() => {
    const day = new Date();
    const hour = day.getHours()
    const minute = day.getMinutes()
    const second = day.getSeconds()

    const degHourEachOne = 360 / 12 // 1시간당 변경 각도
    const degMinuteEachOne = 360 / 60 // 1분당 변경 각도
    const degSecondEachOne = 360 / 60 // 1초당 변경 각도

    const degHour = hour * degHourEachOne + minute * (360 / 12 / 60);
    const degMinute = minute * degMinuteEachOne;
    const degSecond = second * degSecondEachOne;

    const hourEl = $container.querySelector('.hour');
    const minuteEl = $container.querySelector('.minute');
    const secondEl = $container.querySelector('.second');

    hourEl.style.setProperty('--deg', degHour)
    minuteEl.style.setProperty('--deg', degMinute)
    secondEl.style.setProperty('--deg', degSecond)
  }, 1000)
};
export default AnalogClock;
