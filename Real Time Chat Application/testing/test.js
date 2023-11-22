const fruits = [];

const add = (data) => {
    fruits.push(data);
}

const get = () => {
    return fruits;
}

module.exports = {add, get};