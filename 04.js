function hasProperty(obj, propertyName) {
  return obj && obj.hasOwnProperty(propertyName);
}

// Example usage:
const exampleObject = { name: "Alice", age: 25 };
console.log(hasProperty(exampleObject, "age")); // true
console.log(hasProperty(exampleObject, "email")); // false
