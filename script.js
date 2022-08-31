addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector(".btn_menu")
    if (btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
            
        })  
    }
})

addEventListener('DOMContentLoaded', () => {
    const menu_items = document.querySelector(".menu_items")
    if (menu_items){
        menu_items.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })  
    }
})

function cargarvideo(links){
    document.querySelector(".slider").src = links;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }