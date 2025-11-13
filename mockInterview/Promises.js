// function orderPlacedSuccessfully() {
//   console.log("order palced successfully");
// }
// function failedToOrderPlaced() {
//   setInterval(() => {
//     console.log("failed to palced the order");
//   }, 3000);
// }
// orderPlacedSuccessfully();
// failedToOrderPlaced();

/***********PROMISE ERROR****** */
// const promise = new Promise(function (resolve, reject) {
//   try {
//     let data = { name: "Nalina" };
//     reject(data);
//   } catch (error) {
//     console.log("reject promise");
//   }
// });
// promise
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

/*********************PROMISE CODE************************ */
const dataPromise = fetch("https://api.kanye.rest/");

const data = dataPromise
  .then((data) => data.json())
  .then((data) => {
    console.log(1);
    return data;
  })
  .then(
    (data) => {
      console.log(data);
      return data;
    },
    (err) => {
      console.log(err);
    }
  )
  .catch((err) => {
    console.log(err);
    return err;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .finally((data) => {
    console.log(2, data);
  })
  .then((err) => {
    console.log(3, err);
    return err;
  })
  .catch((err) => console.log(err))
  .then((err) => console.log(err))
  .catch((err) => console.log(err));
