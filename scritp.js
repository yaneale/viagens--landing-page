setTimeout(function() {
  document.getElementById('offer-modal').style.display = "flex";
}, 5000);

    document.getElementById('offer-modal').addEventListener('click', function() {
        document.getElementById('offer-modal').style.display = "none";
    });

    document.getElementById('claim-offer').addEventListener('click', function(event) {
        event.stopPropagation();
        alert("Oferta resgatada! Use o código ProgramandoComDEVstart no checkout.");
        document.getElementById('offer-modal').style.display = "none";
    });

        document.querySelector('a[href="#tripme"]').addEventListener('click', function(event) {
        event.preventDefault();
        alert("Você clicou em TripMe! Prepare-se para uma viagem incrível.");
    });

 document.querySelector('a[href="#meetus"]').addEventListener('click', function(event) {
        event.preventDefault(); 
        alert("Bem-vindo à seção MeetUs! Conheça mais sobre nossa equipe.");
    });

 document.querySelector('a[href="#advice"]').addEventListener('click', function(event) {
        event.preventDefault();
        alert("Bem-vindo à seção Advice! Aqui você encontrará dicas valiosas para suas viagens.");
    });


 const darkModeToggle = document.getElementById("toggle-dark-mode");

    // Verifica se o modo escuro já foi ativado anteriormente
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Adiciona o evento de clique para alternar o modo escuro
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
