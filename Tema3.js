
function Animal (name, n_legs, greet) {
    this.name = name;
    this.n_legs = n_legs;
    this.constructor.prototype.greet = greet;
}
Animal.prototype.greet = "greet";

Animal.prototype.say_hello = function ()
    {
    console.log (this.greet);
    }

let a1 = new Animal ("pig", 4, "oink");
let a2 = new Animal ("fox", 4, "ningning");

a1.say_hello ();
a2.say_hello ();

a1.say_hello = function () {
    console.log ("oink");
}

a1.say_hello ();

let a3 = new Animal ("squirrel", 2, "inkink");
a3.greet = "ikk";
a3.say_hello ();