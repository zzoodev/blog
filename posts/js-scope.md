---
title: 함수의 스코프와 렉시컬 스코프
category: javascript
subCategory: basic
description: 함수의 스코프에 대해
date: 2022-08-04
---

# 스코프란?

변수가 사용될 수 있는 범위입니다.  
내부함수에서 외부함수 또는 전역변수를 사용할 수 있지만 외부함수에서 내부함수의 변수에는 접근할 수 없습니다.

```js
const num1 = 1;

function inner() {
  const num2 = 2;
  console.log(num3);
  function inner2() {
    const num3 = 3;
    console.log(num2);
  }
}
inner();
```

inner2함수에서 외부함수에있는 변수인 num2에는 접근 가능하지만  
inner함수에서 내부함수에있는 변수인 num3에는 접그 불가능합니다.

# 스코프 체인

여기서 스코프 체인이라는 개념을 알아야 합니다.
함수안에서 변수에 접근하면 처음에는 함수안에있는 변수를 찾고 존재하지않으면 다음 외부함수에 있는 변수를 찾습니다.
변수를 찾을때가지 외부함수로 접근하지만 내부함수로 접근하지 않습니다.

# 렉시컬 스코핑

함수의 스코프는 선언할때가 아니라 생성할 때 생깁니다.

```js
var name = "zero";
function log() {
  console.log(name);
}

function wrapper() {
  var name = "nero";
  log();
}
wrapper();
```

wrapper 함수안에서 아무리 log()를 실행해도 전역변수인 name이 찍히는 이유입니다.
log() 가 실행될때가 아니라 선언되는 시점에서 스코프가 결정됩니다.

**핵심 포인트**

- 스코프는 선언할때 생긴다. 헷갈리면 함수가 실행되는 코드에서 그 함수를 명시한 코드로 넘어가서 보자.
- 전역변수를 만드는 일을 지양하자. 변수값이 쉽게 덮힐 수 있다.
