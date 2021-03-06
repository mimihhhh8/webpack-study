import helloword from './hello-word'

import imgsrc1 from './assets/1.png'
import imgsrc2 from './assets/duck.svg'
import exampleTxt from './assets/example.txt'
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