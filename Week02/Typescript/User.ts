type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const user1: User = {
  id: 1,
  name: "Sourabh",
  email: "sourabh@gmail.com",
  isActive: true
};

function printUser(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Active: ${user.isActive}`);
}

printUser(user1);
