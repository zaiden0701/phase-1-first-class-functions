function receivesAFunction(day){
    console.log(day())
}

function returnsANamedFunction(){
    return function learnSomething(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}
