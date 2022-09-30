const shedul = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Подъем'), 4000); 
  }) 
  .then(wakeup => {
        console.log(wakeup)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Зарядка')
        }, 1000);
    })   
  })
  .then(charger => {
    console.log(charger);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Работа')
        }, 1000);
    })
  })
  .then(work => {
    console.log(work);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Отдых')
        }, 1000);
    })
  })
  .then(relax =>{
    console.log(relax)
  })


//допзадание
const starwars = fetch('https://swapi.dev/api/people/1/')
.then(data => data.json())
.then(person => {
    console.log(person)
    return  fetch("https://swapi.dev/api/films/2/")
})
.then(data => data.json())
.then(film =>{
    console.log(film)
    return fetch('https://swapi.dev/api/planets/4/')
})
.then(data => data.json())
.then(planet =>{
    console.log(planet)
})

  


 