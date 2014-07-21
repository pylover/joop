
'use strict';

// Add ECMA262-5 method binding if not supported natively
//
if (!Function.prototype.hasOwnProperty('bind')) {
    Function.prototype.bind = function (owner) {
        var that = this,
            args = Array.prototype.slice.call(arguments, 1);
        if (arguments.length <= 1) {
            return function () {
                return that.apply(owner, arguments);
            };
        }
        return function () {
            return that.apply(owner, arguments.length === 0 ? args : args.concat(Array.prototype.slice.call(arguments)));
        };

    };
}

// Add ECMA262-5 string trim if not supported natively
//
if (!String.prototype.hasOwnProperty('trim')) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    };
}

// Add ECMA262-5 Array methods if not supported natively
//
if (!Array.prototype.hasOwnProperty('indexOf')) {
    Array.prototype.indexOf = function (find, i) {
        var n;
        /*i is optional*/
        if (i === undefined) { i = 0; }
        if (i < 0) { i += this.length; }
        if (i < 0) { i = 0; }
        for (n = this.length; i < n; i += 1) {
            if (this.hasOwnProperty(i) && this[i] === find) {
                return i;
            }
        }
        return -1;
    };
}
if (!Array.prototype.hasOwnProperty('lastIndexOf')) {
    Array.prototype.lastIndexOf = function (find, i) {
        /*i is opt*/
        if (i === undefined) { i = this.length - 1; }
        if (i < 0) { i += this.length; }
        if (i > this.length - 1) { i = this.length - 1; }
        for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
            if (i in this && this[i]===find)
                return i;
        return -1;
    };
}
if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach= function(action, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}
if (!('map' in Array.prototype)) {
    Array.prototype.map= function(mapper, that /*opt*/) {
        var other= new Array(this.length);
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                other[i]= mapper.call(that, this[i], i, this);
        return other;
    };
}
if (!('filter' in Array.prototype)) {
    Array.prototype.filter= function(filter, that /*opt*/) {
        var other= [], v;
        for (var i=0, n= this.length; i<n; i++)
            if (i in this && filter.call(that, v= this[i], i, this))
                other.push(v);
        return other;
    };
}
if (!('every' in Array.prototype)) {
    Array.prototype.every= function(tester, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this && !tester.call(that, this[i], i, this))
                return false;
        return true;
    };
}
if (!('some' in Array.prototype)) {
    Array.prototype.some= function(tester, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this && tester.call(that, this[i], i, this))
                return true;
        return false;
    };
}

if (!Object.create) {
    Object.create = (function(){
        function F(){}

        return function(o){
            if (arguments.length != 1) {
                throw new Error('Object.create implementation only accepts one parameter.');
            }
            F.prototype = o;
            return new F()
        }
    })()
}