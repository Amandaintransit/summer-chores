



function fellAsleep() {
  return Math.random() < 0.6;
}


function mowYard(name) {
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
  }, 2000);
});
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

    if (fellAsleep()) {
      resolve(`${name} fell asleep after mowing the yard.`);

    } else {
      reject(`${name} finished using the weed eater.`);
      callback();
    }
  }, 1500);
});
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (fellAsleep()) {
      resolve(`${name} fell asleep after weed eating the yard.`);
    }       else {
      reject(`${name} finished trimming the hedges.`);
      
    }
  }, 1000);
});
}

function collectWood(name) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (fellAsleep()) {
      resolve(`${name} fell asleep after trimming the hedges.`);
    } else {
      reject(`${name} finished collecting wood.`);
      
    }
  }, 2500);
});
}

function waterGarden(name) {

    return new Promise((resolve, reject) => {

  setTimeout(() => {
        if (fellAsleep()) {
      resolve(`${name} fell asleep after collecting wood.`);
    } else {
      reject(`${name} finished watering the garden.`);
      
    }
  }, 500);
});
}

function doSummerChores(name='') {
   
  mowYard().then(value => {console.log(value); return weedEat()})
  .then(value => {console.log(value); return trimHedges()})
  .then(value => {console.log(value); return collectWood()})
  .then(value => {console.log(value); return waterGarden()})
  .then(value => {console.log(value); console.log(`${name} finished all their chores!`)})
  .catch(error => console.error(error))}

  doSummerChores("Amanda");
  