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
    static from(iter){
        let newGroup = new Group()
        iter.map(x => newGroup.add(x))
        console.log(newGroup)
        return newGroup

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