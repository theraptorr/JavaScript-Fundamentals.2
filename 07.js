const userMap = new Map();

function addUser(name, age, email) {
  if (userMap.has(name)) {
    throw new Error(`User with name ${name} already exists.`);
  }

  const userInfo = { age, email };
  userMap.set(name, { ...userInfo });
}

function updateUser(name, age, email) {
  if (!userMap.has(name)) {
    throw new Error(`User with name ${name} does not exist.`);
  }

  const userInfo = { age, email };
  userMap.set(name, { ...userInfo });
}

function deleteUser(name) {
  if (!userMap.has(name)) {
    throw new Error(`User with name ${name} does not exist.`);
  }
  userMap.delete(name);
}

try {
  addUser("Alice", 30, "alice@example.com");
  addUser("Bob", 25, "bob@example.com");
  console.log(userMap);

  updateUser("Alice", 31, "newemail@example.com");
  console.log(userMap);

  deleteUser("Bob");
  console.log(userMap);
} catch (error) {
  console.error(error.message);
}