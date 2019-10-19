// const prod1 = {
//   name: "intel",
//   price: 100,
//   getPrice() {
//     console.log(this.price);
//   }
// };

// prod1.getPrice();

// fetch('article/')
//     .then(res => res.json())

//     .then(user => fetch('article/'))
//     .then(res => res.json())
//     .then(githubUser => {
//         let img = document.createElement('img')
//         img.src = githubUser.avatar_url
//         img.className = "promise-avatar-example"
//         document.body.append(img)

//         setTimeout(() => img.remove(), 1000)
//     })

// async function fetchAsyncTodos() {
//   try {
//     await delay(3000)
//     const response = await fetch(url)
//     const data = await response.json()
//   } catch (e) {
//     console.error(e)
//   } finally {
//     |
//   }
// }
// const person = [
//   { name: "Artem", age: 28, budget: 30000 },
//   { name: "Elena", age: 23, budget: 28000 },
//   { name: "Kostya", age: 15, budget: 18000 },
//   { name: "Chip", age: 49, budget: 2000 },
//   { name: "Den", age: 4, budget: 1000 },
//   { name: "Suleyman", age: 15, budget: 18000 }
// ];

// const merge = person
//   .filter(person => person.budget > 4000)
//   .map(person => {
//     return {
//       info: `${person.name} ${person.age}`,
//       budget: person.budget
//     };
//   })
//   .reduce((total, person) => total + person.budget, 0);

// console.log(merge);

function ConstructorExample() {
  console.log(this);
  this.value = 10;
  console.log(this);
}
new ConstructorExample();

setTimeout(() => {
  setCounter2(Math.random())
}, 1000)
 