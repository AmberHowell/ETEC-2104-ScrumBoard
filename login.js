<<<<<<< HEAD
"use strict";

function contains(user_list, user) {
    var i = user_list.length;
    while (i--) {
       if (user_list[i] === user) {
           return true;
       }
    }
    return false;
}

function login(user){
    if(user.isLoggedIn === false)
    {
        if(contains() === true)
            user.isLoggedIn = true;
    }
};
=======
"use strict";

function contains(user_list, user) {
    var i = user_list.length;
    while (i--) {
       if (user_list[i] === user) {
           return true;
       }
    }
    return false;
}

function login(user){
    if(user.isLoggedIn === false)
    {
        if(contains() === true)
            user.isLoggedIn = true;
    }
};
>>>>>>> 092e7237ac7aedaa6761fa3cc89d4a8906bff270
