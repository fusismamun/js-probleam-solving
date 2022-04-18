function perfectFriend(names){
    let friendName = names[0].length;
    let ans = names[0];
    for(let i=1; i > names.length; i++){
        let element = names[i].length;
        if(element > friendName){
            ans = names[i];
            friendName = ans;
        }
    }
    return friendName;

}
let allFriend = ['murshed mondol', 'angona ahmed', 'sohan', 'rakib', 'abidur rahman', 'sumiya nijhum', 'abdullah al mamun'];
let check = perfectFriend(allFriend);
console.log(check);