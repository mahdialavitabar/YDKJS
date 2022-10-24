class Widget {
  constructor(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
  render($where) {
    if (this.$elem) {
      this.$elem
        .css({
          width: this.width + "px",
          height: this.height + "px",
        })
        .appendTo($where);
    }
  }
}
class Button extends Widget {
  constructor(width, height, label) {
    super(width, height);
    this.label = label || "Default";
    (this.$elem = $("<bottun>")), text(this.label);
  }
  render($where) {
    super($where);
    this.$elem.click(this.onClick.bind(this));
  }
  onClick(evt) {
    console.log("Button'" + this.label + "'clicked!");
  }
}

$(document).ready(function () {
  var $body = $(document.body);
  var btn1 = new Button(125, 30, "Hello");
  var btn2 = new Button(150, 40, "World");
  btn1.render($body);
  btn2.render($body);
});
