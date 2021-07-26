function MyArrayProto() {

    this.push = function () {
      for(let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
  
      return this.length;
    }
    
    this.pop = function () {
        // my
        let value = this[this.length-1];
        delete this[this.length-1];
        this.length-=1;
        return value;
    }
    
    this.shift = function () {
        // my
        let value = this[0];
        for (let i = 0; i <= this.length-2; i++) {
            this[i] = this[i+1];
        }
        delete this[this.length-1];
        this.length-=1;
        return value;
    }
    
    this.unshift = function () {
        // my
        let addAmount = arguments.length;
        let newLength = addAmount + this.length;
        for(let i = newLength-1; i >= addAmount; i--) {
            this[i] = this[i-addAmount];
        }

        for (let i = 0; i < addAmount; i++) {
            this[i] = arguments[i];
        }

        this.length = newLength;
    }
    
    this.concat = function () {
        let result = {};
        for (let i = 0; i < this.length; i++) {
            result[i] = this[i];
        }

        for (let i = 0; i < arguments.length; i++) {
            result[this.length+i] = arguments[i];
        }

        result.length = this.length + arguments.length;

        return result;
    }

    this.reverse = function () {
      // my
      for (let i = 1; i <= this.length/2; i++) {
        [ this[i-1], this[this.length-i]] = [this[this.length-i], this[i-1]];
      }

      let result = {};

      for (let i = 0; i < this.length; i++) {
        result[i] = this[i];
      }

      result.length = this.length;

      return result;
    }

    this.forEach = function (func) {
      // my
      for (let i = 0; i < this.length; i++) {
        func(this[i], i, this);
      }
    }

    this.map = function (func) {
      // my
      let result = {};
      for (let i = 0; i < this.length; i++) {
        result[i] = func(this[i], i, this);
      }
      result.length = this.length;
      return result;
    }
  
    this.some = function (func) {
      for(let i = 0; i < this.length; i++) {
        const result = func(this[i], i, this);
        if(result) {
          return true;
        }
      }
      
      return false;
    }
  
    this.every = function (func) {
      for(let i = 0; i < this.length; i++) {
        const result = func(this[i], i, this);
        if(!result) {
          return false;
        }
      }
      
      return true;
    }
    
  }
  
  function MyArray () {
    this.length = 0;

    for(let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }

  MyArray.isMyArray = function(arg) {
    return arg instanceof MyArray;
  }
  
  const myArrProto = new MyArrayProto();
  
  MyArray.prototype = myArrProto;
  
  const myArr = new MyArray(1,2,3,'test');
  // const myArr2 = new MyArray();