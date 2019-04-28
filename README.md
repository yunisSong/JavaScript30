# JavaScript30

Javascript30是在Github上看到的一个旨在使用纯Js来进行练习，原项目地址是[wesbos-JavaScript30](https://github.com/wesbos/JavaScript30)，感谢  wesbos 提供的非常优秀的教程。这里主要记录学习的过程中学到的东西。

### 01 - JavaScript Drum Kit
#### 1. 根据 元素名称、元素属性值 查找元素

```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
```
#### 2. 根据元素 class、属性值查找元素

```
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
```
#### 3. class 添加。删除值

```
key.classList.add('playing');
e.target.classList.remove('playing');
```

#### 4. 查找 class 为 key 的全部元素

```
const keys = Array.from(document.querySelectorAll('.key'));
```
#### 5. 添加监听事件

```
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
```
### 02 - JS and CSS Clock
### 03 - CSS Variables
### 04 - Array Cardio Day 1
### 05 - Flex Panel Gallery
### 06 - Type Ahead
### 07 - Array Cardio Day 2
### 08 - Fun with HTML5 Canvas
### 09 - Dev Tools Domination
### 10 - Hold Shift and Check Checkboxes
### 11 - Custom Video Player
### 12 - Key Sequence Detection
### 13 - Slide in on Scroll
### 14 - JavaScript References VS Copying
### 15 - LocalStorage
### 16 - Mouse Move Shadow
### 17 - Sort Without Articles
### 18 - Adding Up Times with Reduce
### 19 - Webcam Fun
### 20 - Speech Detection
### 21 - Geolocation
### 22 - Follow Along Link Highlighter
### 23 - Speech Synthesis
### 24 - Sticky Nav
### 25 - Event Capture, Propagation, Bubbling and Once
### 26 - Stripe Follow Along Nav
### 27 - Click and Drag
### 28 - Video Speed Controller
### 29 - Countdown Timer
### 30 - Whack A Mole