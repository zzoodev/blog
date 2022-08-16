---
title: golang
category: golang
subCategory: basic
description: go언어를 찍어먹어보자
date: 2022-08-16
---

# Go 언어 탐방기

1. 안녕하세요
2. 감사해요
3. 잘있어요

---

### 호호호호호호

안녕하세요\
처음쓰는 글인데 떨리네여\
잘됬으면 좋겠습니다\
하루하루 발전해나가겠습니다

```js
const dragStart = (event) => {
  const img = new Image();
  img.src = "../images/blank.png";
  event.dataTransfer.setDragImage(img, 0, 0);
  event.dataTransfer.effectAllowed = "move";
  setCoording(event.clientX);
  setFirstCoord(event.clientX);
};
const dragging = (event) => {
  setCoording(event.clientX);
  if (firstCoord > coording + 30) {
    setFirstCoord(event.clientX);
  }
  if (coording > firstCoord + 30) {
    setFirstCoord(event.clientX);
  }
};
const dragEnd = (event) => {
  setLastCoord(event.clientX);
};

useEffect(() => {
  if (firstCoord > coording + 30) {
    next(50);
  }
  if (coording > firstCoord + 30) {
    prev(50);
  }
}, [coording]);
// drag
```

### 위에 코드블럭이 잘될까?
