import './index.styl'

module.exports = {
  bind() {
    this.el.setAttribute(this.name, this.expression)

    switch (this.expression) {
      case 'bottom':
        /*
        if (isIOS && !isWechat)
          this.el.style.position = 'fixed'
        */
        break
    }
  },

  update() {},

  unbind() {}
}
