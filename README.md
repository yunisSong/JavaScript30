


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
#### 1. 获取当前时间

```
const date = new Date();
```

#### 2. 定时器调用
`setDate` 是定时调用的方法，`1000` 是调用的时间间隔（毫秒）

```
setInterval(setDate, 1000);
```
#### 3. 视图动画变换

```
hourHand.style.transform = `rotate(${hourDegrees}deg)`;
```

#### 4. 设置视图动画变化的锚点

```
transform-origin: 100%;
```
### 03 - CSS Variables
#### 1. 声明 css 变量

```
:root {
  --base: #fff;
  --blur: 10px;
  --padding: 10px;
}
```

> `:root` 表示全局变量，所有的选择器都可以读取他们。
>  变量以 `--` 开头，与其他正式的 css 属性没有什么不同，只是没有默认值。
#### 2. 使用 css 变量

```
img {
      padding: var(--padding);
      background: var(--base);
      filter: blur(var(--blur));
    }
```

`var(--padding)` 读取变量 `--padding` 的值。

#### 3. 元素的值集合

```
<input id="spacing"  data-sizing="px">
```

形如  `data-px`,`data-size` 之类的属性，都存储在  `this.dataset `中，可以通过 `this.dataset.px` 获取属性值

#### 4. 选择器的多个选择条件

```
const inputs = document.querySelectorAll('.controls input');
```
选择 `class` 为 `controls` 下的 `input` 元素。

### 04 - Array Cardio Day 1
#### 数组 filter

```
const t = inventors.filter(function (e) {
  if (e.year >= 1500 && e.year < 1600) {
    return true;
  }else {
    return false;
  }
});

const t = inventors.filter(function (e) {
  if (e.year >= 1500 && e.year < 1600) {
    return true;
  }
});

const t = inventors.filter(e => {
  if (e.year >= 1500 && e.year < 1600) {
    return true;
  }
});

const t1 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
        
```

#### 数组 sort

```
const sortLastName = people.sort(function (a,b) {
  const [afrist,alast] =a.split(", ");
  const [bfrist,blast] = b.split(", ");
  if (afrist> bfrist) {
    return -1;
  }else {
    return 1;
  }
});

const oldList = inventors.sort((a,b) => ((a.passed - a.year) > (b.passed - b.year) ? 1 : -1));

const sortLastName = people.sort(function (a,b) {
  const [afrist,alast] =a.split(", ");
  const [bfrist,blast] = b.split(", ");
  if (afrist> bfrist) {
    return -1;
  }else {
    return 1;
  }
});
```
#### 数组 map

```
const fullName = inventors.map(e => (e.first + " " + e.last));
const fullName1 = inventors.map(e => `${e.first} ${e.last}`);
```
#### 数组 Reduce


```
const totalLive = inventors.reduce((a,e) => {
      return (a + (e.passed - e.year));
    }, 0);
const totalLive1 = inventors.reduce((a,e) => (a + (e.passed - e.year)), 0);

const sumInstances = data.reduce(function (object,ins){
  if (!object[ins]) {
    object[ins] = 0;
  }
  object[ins]++;
  return object;
}
```

### 05 - Flex Panel Gallery
介绍 `Flex` 写的好的文章。
* [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
* [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
* [iOS 上的 FlexBox 布局](https://juejin.im/post/5a33a6926fb9a045104a8d3c?utm_source=weibo&utm_campaign=user#heading-4)

#### 子元素高度与父元素一致

vh:相对于视窗的高度，那么vw:则是相对于视窗的高度

```
 min-height: 100vh;
 //宽度与父元素一致
 width:100%;
```
#### 图片拉伸方式

```
background-size: cover;
```
#### flex-direction

flex-direction属性决定主轴的方向（即项目的排列方向）。

* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

####  flex
`flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为0 1 auto。后两个属性可选。
##### flex-grow
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
##### flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
##### flex-basis
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

#### justify-content
justify-content属性定义了项目在主轴上的对齐方式。

* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 06 - Type Ahead

#### 异步请求网络数据

```
fetch（address，callback）；

```

#### json => model

```
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```

#### 正则表达式替换字符串

```
    const regex = new RegExp(wordToMatch, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);

```

    
    
### 07 - Array Cardio Day 2

### some
只要数组中有一个条件服务，即为真

```
const some = people.some(person => (new Date().getFullYear() - person.year) >= 19);
```

### every
数组中所有的元素都符合条件，才为真

```
const every = people.every(person => (new Date().getFullYear() - person.year) >= 19);
```
### find
查找服务条件的元素

```
const comment = comments.find(comment => comment.id === 823423);
```

### findIndex
查找符合条件的元素的 index

```
const index = comments.findIndex(comment => comment.id === 823423);
```

### 根据index删除特定的元素

```
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // delete the comment with the ID of 823423
    const last = comments.splice(index, 1);
```
`last` 返回删除的元素，`comments` 变为移除  `index` 后 `1` 位元素的数组。

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