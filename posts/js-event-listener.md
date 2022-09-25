---
title: 이벤트리스너와 이벤트 버블링
category: javascript
subCategory: basic
description: 인터랙션의 핵심이자 UI/UX 개발의 기본인 이벤트리스너에 대해
date: 2022-08-24
---

# 이벤트리스너 (콜백함수)

이벤트 리스너는 이름 그대로 이벤트를 듣고 대기하고있는 함수입니다.
이벤트가 발생했을때 실행되는 함수죠.

```js
const onClick = () => {
  alert("im clicked !!");
};
document.querySelector("body", onClick);
```

onClick 함수가 이벤트 리스너입니다. body 뿐만아니라 html의 모든 태그에 적용되고 수많은 이벤트가 존재합니다.

# 이벤트 버블링

요소에 이벤트를 걸었을때 부모태그로 이벤트가 전파되는 현상을 말합니다.

```html
<div id="first">
  <div id="second">
    <div id="third"></div>
  </div>
</div>
```

위 html 구조에소 div.third 에 클릭 이벤트가 발생되면 second -> first 를 거치며 이벤트리스너가 발생합니다.

# 이벤트 객체

중요한 메소드로 stopPropagation, stopImmediatePropagation이 있습니다.  
stopPropagation 메소드는 태그에 이벤트 발생시 부모태그에게 이벤트가 전파되는것을 막아줍니다.  
stopImmediatePropagation 메소드는 클릭 이벤트 버블링을 막음과 동시에 같은 이벤트의 다른 콜백함수가 실행되는 것도 막아줍니다. (단 클릭이벤트 제외 다른이벤트를 막지는 못합니다.)
