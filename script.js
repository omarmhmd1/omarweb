function toggleMenu() {
    var links = document.getElementById("links");
    var close_icon = document.getElementById("close")
    var burger_menu = document.getElementById("burger-menu")

    if (links.style.display === "block") {
      links.style.display = "none";
      close_icon.style.display = "none";
      burger_menu.style.display = "flex";
    } else {
      links.style.display = "block";
      close_icon.style.display = "block";
      burger_menu.style.display = "none";
    }
  }

setTimeout(() => {
    var web = document.getElementById("Web")
    web.style.display = "block"
    
    var loading = document.getElementById("loading")
    loading.style.display = "none"
}, 100);


