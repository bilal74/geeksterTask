const animals = [
    { name: "Milo", type: "cat", eyes: 2 },
    { name: "Peluza", type: "cat", eyes: 2 },
    { name: "Yummy", type: "cat", eyes: 2 },
    { name: "Doggy", type: "dog", eyes: 2 },
    { name: "Sammy", type: "dog", eyes: 2 },
  ];
  
  // map(): iterate through the array: it will return a new array.
  // filter(): // return true .
  // reduce(): // get a single value as an output.
  
  const higherOrderFunctionsModule = (function () {
    const init = function () {
      //Get all animals (map)
      console.log("---");
      console.log("all animals (map)");
      console.log(getAnimals);
      //Get all animals (forEach)
      console.log("---");
      console.log("all animals (forEach)");
      console.log(getAnimals2);
      //Get only dogs
      console.log("---");
      console.log("only dogs");
      console.log(dogs);
      //Get only sammy
      console.log("---");
      console.log("only one item");
      console.log(sammy);
      //Get all the names together
      console.log("---");
      console.log("fusionAnimals");
      console.log(fusionedAnimals);
      //Check if some of the animals are cats
      console.log("---");
      console.log("check if there are cats");
      console.log(thereAreCats);
      //Check if all the items are dogs
      console.log("---");
      console.log("check if ALL are dogs");
      console.log(areAllDogs);
      //Get all dogs and fusion them
      console.log("---");
      console.log("Merge the dogs and fusion them");
      console.log(getDogsAndFusionThem);
    };
  
    // map
    const getAnimals = animals.map(
      (animal) => `${animal.name} is a ${animal.type}`
    );
  
    // forEach
    const getAnimals2 = animals.forEach(
      (animal) => `${animal.name} is a ${animal.type}`
    );
  
    //filter
    const dogs = animals.filter((animal) => animal.type === "dog");
  
    //find
    const sammy = animals.find((animal) => animal.name === "Sammy");
  
    // reduce
    const fusionedAnimals = animals.reduce(
      (newName, animal) => newName + animal.name,
      ""
    );
  
    //some
    const thereAreCats = animals.some((animal) => animal.type === "cat");
  
    //every
    const areAllDogs = animals.every((animal) => animal.type === "dog");
  
    // chained method example
  
    const getDogsAndFusionThem = animals
      .filter((animal) => animal.type === "dog")
      .reduce((newName, animal) => newName + animal.name, "");
  
    init();
  })();