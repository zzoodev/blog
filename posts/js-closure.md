---
title: 클로저
category: javascript
subCategory: basic
description: 비공개 변수를 가질 수 있는 환경에 있는 함수
date: 2022-08-12
---

# 클로저란?

클로저란 비공개 변수를 가지는 함수를 말합니다. 함수내 변수를 함부로 바꿀수 없는 폐쇠적인 함수입니다.

```js
const makeClosure = function () {
  const name = "zzoo";
  return function () {
    console.log(name);
  };
};
const closure = makeClosure(); // function () { console.log(name); }
closure(); // 'zzoo';
```

여기서 makeClosure함수가 리턴하는 함수가 클로저 함수입니다. 클로저함수에서 name을 생성하지도 매개변수도 아니지만 실행컨텍스트문법으로 스코프체인을 따라 상위 스코프인 name변수에 접근합니다.

# 클로저 예제로 유명한 카운터 함수

```js
const counter = () => {
  let count = 0;
  return {
    plus: () => {
      count += 1;
    },
    minus: () => {
      count -= 1;
    },
    show: () => {
      alert(count);
    },
  };
};

const closure = counter();
```

**핵심 포인트**

- 자바스크립트에서 사용자를 통제하기 위한 기본적인 방법이 클로저입니다.
- 비공개 변수를 만들고 변수를 바꿀수있는 메소드만 제공하면 사용자는 메소드로만 변수를 바꿀 수 있습니다.
