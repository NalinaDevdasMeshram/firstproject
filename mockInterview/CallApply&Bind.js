const mentor = {
  firstName: "Nalina",
  lastName: "Meshram",
};
const fullName = function (hometown, country) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + country
  );
};

fullName.call(mentor, "nagpur", "india");

const student = {
  firstName: "ajo",
  lastName: "lastname",
};
n;
fullName.call(student, "Bengaluru", "india");
fullName.apply(student, ["nagpur", "india"]);
const newfn = fullName.bind(student, "umred", "india");
console.log(newfn);
newfn();
