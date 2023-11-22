const users = [];

const addUser = ({id, name, room}) => {
    
    name = name.trim();
    room = room.trim();

    const present = users.find((user) => {
        return user.name === name && user.room === room;
    })
    if(present){
        return {error : 'Username is taken'};
    }
    const user = {id, name , room};
    
    users.push(user);
    console.log(users);
    
    return {user};
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id;
    })
    if(index != -1){
        users.splice(index, 1);
    }

}

const getUser = (id) => {
    // console.log(users);
    
    const u = users.find((user) => user.id === id);
    return u;
}

const getUserInRoom = (room) => {

}

console.log(users);

module.exports = {addUser, removeUser, getUser};