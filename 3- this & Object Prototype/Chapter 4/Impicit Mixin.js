var Something = {
  cool: function () {
    this.greeting = "Hello World";
    this.count = this.count ? this.count + 1 : 1;
  },
};
Something.cool();
Something.greeting; //"Hello World"
Something.count; //1
var Another = {
  cool: function () {
    //implicit mixin of something to another
    Something.cool.call(this);
  },
};
Another.cool();
Another.greeting; //"Hello World"
Another.count; //1 not shared state with something
