'use strict';

function myName (name) {
    let message = 'hello my name is' + name;
    return message;
};    

let assert = require ('chai').assert

describe('myName', function() {
    it("получаем фразу с новым именем", function(){
        assert.typeOf(myName('Sergey'), 'string')
    });
});