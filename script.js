function toggleMenu() {
    var links = document.getElementById("links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

setTimeout(() => {
    var web = document.getElementById("Web")
    web.style.display = "block"
    
    var loading = document.getElementById("loading")
    loading.style.display = "none"
}, 3000);


