function add(a: number,b: number)
{
    return a + b;
}

type Person = {
    name: string,
    age: number
}

let people: Person[];

people = [
    {
        name: 'Max',
        age: 24
    },
    {
        name: 'Pradipta',
        age: 56
    }
]

console.log(add(2,5));

let a: number | string;

a = 25;