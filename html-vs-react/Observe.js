function Observer(o, property){
  var _this = this;
  var value = o[property];
  this.observers = [];
  
  this.Observe = function (notifyCallback){
      _this.observers.push(notifyCallback);
  }

  Object.defineProperty(o, property, {
      set: function(val){
          value = val;
          for(var i = 0; i < _this.observers.length; i++) _this.observers[i](val);
      },
      get: function(){
          return value;
      }
  });
}

export default Observer