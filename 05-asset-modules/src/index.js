import helloword from './hello-word'

import imgsrc from './assets/1.png'
helloword()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)