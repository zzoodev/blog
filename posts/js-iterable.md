---
title: 이터러블객체와 유사배열
category: javascript
subCategory: basic
description: 이터러블과 유사배열이 뭔지? 어떻게 다른지?
date: 2022-08-15
---

# 이터러블 객체란?

쉽게말해 for...of 문으로 순회할수있는 객체를 말합니다. 배열이 대표적인 이터러블입니다.  
평범한 객체를 이터러블로 만드려면 객체에 Symbol.iterator라는 내장 메서드를 꼭 만들어야합니다.  
또한 내장 메서드 Symbol.iterator 엄격한 규칙이 있는 메서드 입니다. 평범한 객체 range를 이터러블로 바꿔주는 코드는 다음과 같습니다.

```js
let range = {
  from: 1,
  to: 5,
};
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  alert(num);
}
```

# 이터러블객체와 유사배열

- 이터러블 객체는 Symbol.iterator 메서드가 꼭 존재합니다.
- 유사배열은 인덱스와 length프로퍼티가 있는 객체입니다.
- 이터러블과 유사배열은 배열이 아니기 때문에 배열전용 메서드(push, pop)을 지원하지 않습니다.
- Array.from() 범용 메서드는 이터러블객체또는 유사배열을 받아 진짜 배열로 만들어줍니다.

```js
Array.from(obj[, mapFn, thisArg])
```

Array.from() 두번째 인수에 mapping 함수를 넣어주면 새로운 배열의 각 요소에 매핑을 해줍니다.

**요약**

- 이터러블엔 메서드 Symbol.iterator가 반드시 구현되어 있어야 합니다.
- 이터레이터엔 객체 {done: Boolean, value: any}을 반환하는 메서드 next()가 반드시 구현되어 있어야 합니다. 여기서 done:true은 반복이 끝났음을 의미하고 그렇지 않은 경우엔 value가 다음 값이 됩니다.
- Array.from() 범용 메서드를 사용하면 이터러블객체와 유사배열을 진짜 배열로 만들어줍니다. 2번째 인자에 mapping하는 함수를 넣어주면 mapping도 됩니다.
