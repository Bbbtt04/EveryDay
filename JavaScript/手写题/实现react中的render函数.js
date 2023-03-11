function render(vnode) {
  if (typeof vnode === 'number') {
    vnode = String(vnode)
  }

  if (typeof vnode === 'string') {
    return document.createTextNode(vnode)
  }

  let dom = document.createElement(vnode.tag)
  if (vnode.attrs) {
    Object.keys(vnode.attrs).map(key => {
      let value = vnode.attrs[key]
      dom.setAttribute(key, value)
    })
  }
  vnode.children && vnode.children.map(item => {
    dom.appendChild(render(item))
  })
  return dom
}
