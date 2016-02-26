app.service('calculator', function(){
  var that = this;
  this.parser = function(name){
    return name ? that[name] : that.noFunk;
  };
  this.add = function (one, two){
    return one + two;
  };
  this.subtract = function (one, two){
    return one - two;
  }
  this.multiply = function (one, two){
    return one * two;
  }
  this.divide = function (one, two){
    return one / two;
  }
  this.power = function (one, two){
    return Math.pow(one, two);
  }
  this.noFunk = function(){
    return "Select a damn math"
  }
})


app.service('todo', function(){
  this.itemCounter = 0;
  this.list = {};
  var that = this;

  this.getList = function(){
    return that.list;
  };

  this.setItem = function(newItem){
    that.list[this.itemCounter] = {
      'name' : newItem,
      'toggled' : false
    };
    this.itemCounter++;
  };

  this.removeItem = function(itemId){
    delete that.list[itemId]
  };

  this.updateItem = function(itemId, newName){
    that.list[itemId].name = newName;
    that.list[itemId].toggled = !that.list[itemId].toggled;
  };

  this.toggle = function(itemId){
    that.list[itemId].toggled = !that.list[itemId].toggled;
  }

  this.isToggled = function(itemId){
    return this.list[itemId].toggled;
  }



})
