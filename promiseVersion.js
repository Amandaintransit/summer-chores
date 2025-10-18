



function stayedAwake() {
  return Math.random() < 0.7;
}


function mowYard(name) {
  
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
            
  }, 2000);
});
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

    if (stayedAwake()) {
      resolve(`${name} finished using the weed eater.`);
    
    } else {
      reject(`${name} fell asleep after mowing the yard.`);
         
    }
  }, 1500);
});
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (stayedAwake()) {
      resolve(`${name} finished trimming the hedges.`);
    }       else {
      reject(`${name} fell asleep after weed eating the yard.`);
      
    }
  }, 1000);
});
}

function collectWood(name) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (stayedAwake()) {
     resolve(`${name} finished collecting wood.`);
      
    } else {
      reject(`${name} fell asleep after trimming the hedges.`);
      
    }
  }, 2500);
});
}

function waterGarden(name) {

    return new Promise((resolve, reject) => {

  setTimeout(() => {
        if (stayedAwake()) {
      resolve(`${name} finished watering the garden.`);  
      
    } else {
      reject(`${name} fell asleep after collecting wood.`);
      
    }
  }, 500);
});
}

function doSummerChores(name = ''){
   
  mowYard(name).then(value => {console.log(value); return weedEat(name)})
  .then(value => {console.log(value); return trimHedges(name)})
  .then(value => {console.log(value); return collectWood(name)})
  .then(value => {console.log(value); return waterGarden(name)})
  .then(value => {console.log(value); console.log(`${name} finished all their chores!`)})
  
    .catch(error => console.error(error));
}
doSummerChores("Amanda");
 