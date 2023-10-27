export type User = {
  name: string;
  age: number;
};

function displayUser(user: User) {
  return `${user.name} (${user.age} y/o)`;
}

console.log(
  displayUser({
    name: "Barry Bluejeans",
    age: 30,
  }),
);
