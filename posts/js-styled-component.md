---
title: 자바스크립트로 Styled-component 만들기
category: javascript
subCategory: basic
description: 노마드코더 강의를 듣다가 리액트의 Styled-Component 가 자바스크립트 ES6문법을 사용한것을 알게되어 직접 만들어보았다.
date: 2022-07-21
thumnail: /images/posts/js/js-styled-component.png
---

# ES6 문법으로 Styled 함수를 만들어보자

```js
export const styled = (tag) => {
  const el = document.createElement(tag);
  return (css) => {
    const styles = css[0];
    return (text = "", attribute = undefined) => {
      el.innerText = text;
      el.style = styles;
      if (attribute) {
        for (const [key, value] of Object.entries(attribute)) {
          console.log(key);
          console.log(value);
          el.setAttribute(key, value);
        }
      }
      return el.outerHTML;
    };
  };
};
```

## 핵심 포인트

1. `` Template literals 이라고 불리는 이 벡틱기호로 ()함수실행 문법을 단축
2. 함수를 리턴하는 함수사용

벡틱 기호는 대부분의 프론트엔드 개발자가 string 안에 변수를 넣거나 텍스트 줄바꿈하기 위해서만 쓰는데 함수를 실행할때 () 괄호를 대체함과 동시에 arguments 도 넣어주는 효과가 있다.

기능적인 핵심은 styled() 함수가 style 텍스트를 인자로 받는 함수자체를 리턴하는데 styled()`` 함수 실행후 바로 벡틱을 써서 안에 문자열을 넣어주면 된다.

## 사용 예시

```js
import { styled } from "../utils/styled.js";
import { useState } from "../utils/useState.js";

const Li = styled("li")`
  color: red;
  height: 100px;
`;
const Btn = styled("button")`
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const List = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  window.setNumbers = () => setNumbers([...numbers, numbers.length + 1]);

  return `
    <ul>
      ${numbers.map((item) => Li(item)).join("")}
      ${Btn("버튼", { id: "add", onclick: "setNumbers()" })}
    </ul>
  `;
};
export default List;
```
