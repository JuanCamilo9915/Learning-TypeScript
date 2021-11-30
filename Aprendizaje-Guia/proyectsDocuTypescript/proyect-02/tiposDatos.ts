let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

//Tipos e datos en funciones
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

//greet(17); Genera error, debido al tipo de dato del valor que se le está pasando a la función, no es el esperado por está misma.

/*De esta manera se establece la función de tipo número,
por lo tanto el valor a retornar de está corresponde a un número y no puede ser distinto de este tipo de dato*/
function getFavoriteNumber(): number {
    return 17;
}

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//el parámetro last es opcional, por tanto se identifica con el signo de ?
function printName(obj: { first: string; last?: string }) {
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printName2(obj2: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
  //Object is possibly 'undefined'.

        if(obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

//Unión de tipos
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  //printId({ myID: 22342 });//Al pasar un objeto como valor a la función lo recha, debido que está recibe
  //                        solo enteros o Cadenas


  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  //Alias de tipos
  type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord2(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

  //Alias de unión
  type ID = number | string;

  interface Point2 {
    x: number;
    y: number;
  }
   
  function printCoord3(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });