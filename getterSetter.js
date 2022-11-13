class person {
    constructor(name){
        this.name = name; //set name(name)
    }

    set name(val) {
        this._name = val;

    }
    get name() {
        return this._name.toUpperCase();
    }
}

const chizell = new person("chizell");

console.log(chizell.name);
