import Style from './a.module.css'

console.log("A_Style", Style);
const div = document.createElement('div')

document.body.appendChild(div)

div.className = Style.footer
