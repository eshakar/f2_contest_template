/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.map((dev) => {
    if (dev.profession === "developer") {
      console.log(dev);
      return dev;
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = arr.forEach((dev) => {
    if (dev.profession === "developer") {
      console.log(dev);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newDev = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newDev);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const newDev = arr.filter((dev) => dev.profession !== "admin");
  console.log(newDev);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    { id: 7, name: "Ravi", age: "28", profession: "developer" },
    { id: 5, name: "Kumar", age: "24", profession: "admin" },
    { id: 6, name: "Lokesh", age: "28", profession: "manager" },
  ];
  const newDev = arr.concat(arr2);
  console.log(newDev);
}
