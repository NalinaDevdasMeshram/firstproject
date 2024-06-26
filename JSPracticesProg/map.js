// ---------creating the map--------
// let map = new Map();
// --------initialized the map --------
// let fruits = new Map([
//     ["Apple", 100],
//     ["Banans", 80],   
//     ["Grapes", 40],
// ]);
// console.log(fruits);

// ----------add to map ----------------------
let item = new Map();
item.set("apple", 100); // set it use to add the items pn the map
item.set("banans", 40);
item.set("grapes", 50);
item.set("mango",  60);
item.set("orange", 90);
console.log(item);

// -------- getting the value from map --------------
// console.log(item.get("grapes"));

// ---------update the key & values to map-------
// console.log(item.set("orange", 80)); // if the key already present in the map it is overwrites its;

// ---- delete the item from the map -----
// console.log(item.delete('mango'));
// console.log(item);

// --------has(key) Returns a boolean indicating whether the specified key is present in the map.----
// console.log(item.has('orange'))
//-----clear(): Removes all key-value pairs from the map------
//  console.log(fruits.clear());

//  -----key() return all key which are present map-----
//  console.log(item.keys());
//  console.log(item.values());
//  console.log(item.size);
//  //-----forEach-------
//   item.forEach((value, key)=>{
//  console.log(item)
//   })
//   item.clear();
//   console.log(item)

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);

console.log(mySet.size);