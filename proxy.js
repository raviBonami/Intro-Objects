
// Helps us to define function handlers which will perform some different task than the actual in-built working
// basically getter and setters but improved functionslity
// if someone tries getting or setting an object's property, these proxies will act as intermediate b/w them
// takes in object whose properties we want to monitor and a handler object whch will have get or set (or both)
// to intercept any getting and setting of property

const handlerFunc = {
    get(target, key){
        return key in target ? target[key] : "custom result"
    },

    set: function(target, key){
        if(key in target){
            return true
        }else{
            return 'No such property exists'
        }
    }
}

const p = new Proxy({}, handlerFunc)
p.first = 1;
p.second = 20;

console.log(p.first +  " " + p.second)  // will give 1 20
console.log(p.third)    // will give "custom result" instead of undefined
// we can do validation to these props