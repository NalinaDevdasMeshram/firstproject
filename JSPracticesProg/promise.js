//-----------promise-------------
//   const atmavailable = true;
//  const promise = new Promise(function(resolve, reject){
//     if(atmavailable){
//         const response ={
//             message:"cash is available",
//         } ;
//         resolve(response);
//     }else{
//         const response ={
//             message:" cash not available",
//         };
//         reject(response);
//     }
// })

// promise.then(function(success){
//  console.log(success.message)
// }).catch(function(fail){
//  console.log(fail.message)
// })

// const ticketReveration = false;

// let ticket = new Promise(function(resolve, reject){
//     if(ticketReveration){
//         const response ={
//             message:"ticket is confirmed",
//         };
//         resolve(response);

//     }else{
//         const response ={
//             message:"ticket is not confirmed",
//         };
//        reject(response)
//     }
// })

// ticket.then(function(success){
//  console.log(success.message)
// }).catch(function(failer){
//  console.log(failer.message)
// })

// const foodAvailable = false;
// let food= new Promise(function(resolve, reject){
//     if(foodAvailable){
//         resolve("food is available");
//     }else{
//         reject("sorry food is not available");
//     }
// })

// food.then(function(success){
//     console.log(success)
// }).catch(function(fail){
//     console.log(fail);
// })

// let datas ="https://jsonplaceholder.typicode.com/posts";

// let postPromise = fetch(datas);
// postPromise.then(function(rowJSONData){
//     rowJSONData.json().then(function(finalData){
//        console.log(finalData);
//     })

// }).catch(function()
// {
//     console.log(error);
// })

// let datas1 ="https://jsonplaceholder.typicode.com/posts";
// let postDat = fetch(datas1);
// postDat.then(function(rowJsan){
//     rowJsan.json().then(function(data2){
//       console.log(data2)
//     })
// }).catch(function(){
//     console.log('error');
// })

// const order = true;
// const postdata = new Promise(function(resolve, reject){
//     if(!order){
//         const response={
//              message:"order is confirmed",
//         };
//         resolve(response);
//     }else{
//         const response2={
//             message:"order is not confirmed"
//         };
//         reject(response2);
//     }
// })

// postdata.then(function(success){
//     console.log(success.message)
// }).catch(function(failed){
//     console.log(failed.message)
// })

// const promisepost = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//   console.log("hell0")
// },3000)
// resolve("I am here")
// promisepost.then((success)=>{
//     console.log(success)
// })
// })
// return promisepost;

// const postdt = fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(postdt);
// postdt.then(function(rowMaterial){
//     rowMaterial.json().then(function(finalData){
//         console.log(finalData);
//         APIData(finalData);
//     })
// }).catch(function(){
//  console.error("handle the error");
// })

// function APIData(apidata){
//     const result = document.querySelector(".post-list");
//     apidata.forEach(function(post){
//         let dta = document.createElement("li")
//         dta.innerText = post.title;
//         result.append(dta);
//     })
// }
//------------------asyn/await---------
//  async function dataApi(){
//     try{
//         const postres = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const result = await postres.json();
//        console.log (result);
//     }
//     catch(error){
//         console.log("somethings went wrong")
//     }
//  }

//  function APIData(apidata){
//     const result = document.querySelector(".post-list");
//     apidata.forEach(function(post){
//         let dta = document.createElement("li")
//         dta.innerText = post.title;
//         result.append(dta);
//     })
// }
// dataApi()

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         console.log (data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
//   fetchData();

//-----------fetch Api-------------

// const promise = fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
// return response.json();
// }).then((data)=>{
//      console.log(data)
// }).catch((error)=>{
//     console.log("something went the wrong")
// })
//------------fetching the data---------------
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data=>console.log(data))
//   .catch(error => console.log(error));
//---------------GET-----------------
// fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(data => {
//         document.querySelector('#user-name').textContent = data.name
//         document.querySelector('#user-email').textContent = data.email
//       })

//----------------post-----------------------------
//If you want to send a POST request instead of a GET request, you need to define the second argument when calling the function, which is the option object.
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Nathan Sebhastian',
//     email: 'ns@mail.com'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))

//---------------------------PUT--------------
//----------The PATCH request is sent when you need to update an existing request.-----------
//   fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Nathan Sebhastian',
//     email: 'ns@mail.com'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))

//   ------------PATCH---------
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Nathan Sebhastian',
//     username: 'nsebhastian'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))
//-----------DELETE-----------
//The DELETE request is used when you want to request that a resource be removed permanently from the server.
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
