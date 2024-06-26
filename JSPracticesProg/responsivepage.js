const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".Login-link");
const registerLink = document.querySelector(".Register-link");
const btn = document.querySelector(".btnlogin-popup")

const icon = document.querySelector(".span-icon")

registerLink.addEventListener( "click", ()=>{
  wrapper.classList.add("active")
});

loginlink.addEventListener("click", ()=>{
    wrapper.classList.remove("active")
  })

  btn.addEventListener( "click", ()=>{
    wrapper.classList.add("active-popup")
  })

  icon.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup")
  })