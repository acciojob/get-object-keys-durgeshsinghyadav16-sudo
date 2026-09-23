const student = {
  name: "John",
	age: 20,
	city: "Delhi"
}

function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys(student))