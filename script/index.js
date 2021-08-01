function MyArrayProto() {

    this.push = function () {
      for(let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
  
      return this.length;
    }
    
    this.pop = function () {
        // my
        if (this.length === 0) {
          return;
        }
        const value = this[this.length-1];
        delete this[--this.length];
        return value;
    }
    
    this.shift = function () {
        // my
        if(this.length === 0) {
          return;
        }
        const value = this[0];
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i+1];
        }
        delete this[--this.length];
        return value;
    }
    
    this.unshift = function () {
        // my
        const addAmount = arguments.length;
        const newLength = addAmount + this.length;
        for(let i = newLength-1; i >= addAmount; i--) {
            this[i] = this[i-addAmount];
        }

        for (let i = 0; i < addAmount; i++) {
            this[i] = arguments[i];
        }

        this.length = newLength;

        return this.length;
    }
    
    this.concat = function () {
        let result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }

        for (let i = 0; i < arguments.length; i++) {
          result.push(arguments[i]);
        }

        return result;
    }

    this.reverse = function () {
      // my
      for (let i = 1; i <= this.length/2; i++) {
        [ this[i-1], this[this.length-i]] = [this[this.length-i], this[i-1]];
      }

      return this;
    }

    this.forEach = function (func) {
      // my
      for (let i = 0; i < this.length; i++) {
        func(this[i], i, this);
      }
    }

    this.map = function (func) {
      // my
      let result = new MyArray();
      for (let i = 0; i < this.length; i++) {
        result.push(func(this[i], i, this));
      }

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
  
  function MyArray (...args) {
    this.length = 0;

    this.push(...args);
  }

  MyArray.isMyArray = function(arg) {
    return arg instanceof MyArray;
  }

  MyArray.prototype = new MyArrayProto();
  
  const myArr = new MyArray(1,2,3,'test');
  // const myArr2 = new MyArray();