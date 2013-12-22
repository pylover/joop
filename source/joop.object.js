

Class('joop.Object',{
	__init__ : function(){ /* coyote.Object */},
	callSuper: function(cls,functionName,args){
		return cls.prototype[functionName].apply(this,args);
	},
	__repr__: function(){
		return this.__class__.__name__;
	},
	isInstanceOf: function (cls){
		return this.__class__.isSubclassOf(cls);
	}
}).StaticMembers({
	isSubclassOf: function (cls){
		if (this.__name__ == cls.__name__) return true;
		for (var index in this.__base_classes__){
			var base = this.__base_classes__[index]; 
			if ( base.isSubclassOf.apply(base,[cls])){
				return true;
			}
		}
		return false;
	}
});