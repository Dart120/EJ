class Group{
    constructor(){
        this.values = []
    }
    add = (value) => {
        console.log(value)
        return this.values.includes(value) ? 'Value already exixts' : this.values.push(value)

        }
    delete = (value) => {
        return this.values.includes(value) ? this.values = this.values.filter(x => !(x === value)) : 'Value not in group'

    }
    has = (value) => {
        return this.values.includes(value)

    }
    [Symbol.iterator](){
        return new GroupIterator(this)
    }
    static from(iter){
        let newGroup = new Group()
        iter.map(x => newGroup.add(x))
        console.log(newGroup)
        return newGroup

    }

}

class GroupIterator{
    constructor(group){
        this.index = 0
        this.value = group.values[this.index]
        
    }
    next(){
        if (this.index === group.values.length-1) return {done: true}
        let status = {
            value: this.value,
        }
        this.index++
        return {status,done:false}
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
hasOwnProperty = Symbol("fuck")
let map = {one: true, two: true, hasOwnProperty: true};

console.log(map[hasOwnProperty]);

 