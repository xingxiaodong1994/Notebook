tween.js使用指南
1. 缓动函数速查表http://www.xuanfengge.com/easeing/easeing/
2. gitHub搜索tween.js(https://github.com/tweenjs/tween.js)
3. npm install @tweenjs/tween.js
```js
<script src="./node_modules/@tweenjs/tween.js/src/Tween.js"></script>
```
4. 
```js
 function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    var coords = { y: 0 }; //当前位置
    var tween = new TWEEN.Tween(coords)
            .to({ y: 200 }, 1000) //移动到的位置
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动函数
            .onUpdate(function() { 
               console.log( coords.y );
            })
            .start(); 
    }()
```