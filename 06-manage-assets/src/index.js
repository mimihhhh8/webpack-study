import helloword from './hello-word'

import imgsrc1 from './assets/1.png'
import imgsrc2 from './assets/duck.svg'
import exampleTxt from './assets/example.txt'
import jpgImg from './assets/rose.jpg'
import './style.css'//p29 npx webpack打包时报错，此时需要安装css-loader
import './style.less'
helloword()

// asset/resource
const img1 = document.createElement('img')
img1.src = imgsrc1
document.body.appendChild(img1)


// asset/inline
const img2 = document.createElement('img')
img2.style.cssText="width:400px;height:400px"
img2.src = imgsrc2
document.body.appendChild(img2)

// asset/source
const block = document.createElement('div')
block.style.cssText="width:200px;height:200px;background:pink"
block.textContent = exampleTxt
document.body.appendChild(block)

// asset
const jpgDom = document.createElement('img')
jpgDom.src = jpgImg
document.body.appendChild(jpgDom)

// p29
document.body.classList.add('hello')//给body添加了class类名
// classList 属性返回元素的类名，作为 DOMTokenList 对象。
// classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它