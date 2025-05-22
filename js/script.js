AOS.init()



  const btn = document.getElementById("trocarBtn");
  const grupo1 = document.getElementById("grupo1");
  const grupo2 = document.getElementById("grupo2");

  let mostrandoGrupo1 = true;

  btn.addEventListener("click", () => {
    if (mostrandoGrupo1) {
      grupo1.classList.add("fade-out");
      grupo1.classList.remove("fade-in");

      setTimeout(() => {
        grupo1.style.display = "none";
        grupo2.style.display = "flex"; // ou block
        grupo2.classList.add("fade-in");
        grupo2.classList.remove("fade-out");
      }, 500);
    } else {
      grupo2.classList.add("fade-out");
      grupo2.classList.remove("fade-in");

      setTimeout(() => {
        grupo2.style.display = "none";
        grupo1.style.display = "flex"; // ou block
        grupo1.classList.add("fade-in");
        grupo1.classList.remove("fade-out");
      }, 500);
    }

    mostrandoGrupo1 = !mostrandoGrupo1;
  });


