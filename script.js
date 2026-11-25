
let users = [
  { name: "أحمد", age: 25, email: "ahmed@example.com", country: "Syria", skills: ["HTML", "CSS"] },
  { name: "سارة", age: 22, email: "sara@example.com", country: "Jordan", skills: ["JS", "React"] },
  { name: "عمر", age: 30, email: "omar@example.com", country: "Syria", skills: ["Node.js"] },
  { name: "ليلى", age: 27, email: "layla@example.com", country: "Egypt", skills: ["UI/UX"] },
  { name: "علي", age: 21, email: "Ali@example.com", country: "UAE", skills: ["Python", "JS"] }
];

function findUserByName(name) {
  return users.find(u => u.name === name);
}

function filterUsersByCountry(country) {
  return users.filter(u => u.country === country);
}

function sortUsersByAge() {
  return [...users].sort((a, b) => a.age - b.age);
}

function getAllUserNames() {
  return users.map(u => u.name);
}

function getAverageAge() {
  const totalAge = users.reduce((sum, u) => sum + u.age, 0);
  return totalAge / users.length;
}

function addUser(name, age, email, country, skills) {
  users.push({ name, age, email, country, skills });
}

function updateUser(targetName, newData) {
  const user = users.find(u => u.name === targetName);
  if (user) {
    Object.assign(user, newData);
  }
}

function deleteUser(targetName) {
  users = users.filter(u => u.name !== targetName);
}


console.log("البحث عن سارة:", findUserByName("سارة"));
console.log("مستخدمو سوريا:", filterUsersByCountry("Syria"));
console.log("الترتيب حسب العمر:", sortUsersByAge());
console.log("جميع الأسماء:", getAllUserNames());
console.log("متوسط الأعمار:", getAverageAge());


addUser("طارق", 28, "tarek@example.com", "Lebanon", ["Vue", "CSS"]);
updateUser("سارة", { age: 23, country: "Syria" });
deleteUser("عمر");

console.log("القائمة النهائية بعد التعديلات:", users);
