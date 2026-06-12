// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fecha menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// =========================================
// TEMA CLARO / ESCURO
// =========================================

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);

    themeToggle.textContent =
        savedTheme === "dark" ? "☀️" : "🌙";
}

// Alternar tema
themeToggle.addEventListener("click", () => {

    const currentTheme =
        html.getAttribute("data-theme");

    if (currentTheme === "dark") {

        html.setAttribute("data-theme", "light");

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "🌙";

    } else {

        html.setAttribute("data-theme", "dark");

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀️";
    }

});

// =========================================
// BLOQUEAR DATAS ANTERIORES
// =========================================

const dateInput = document.getElementById("data");

const today = new Date()
    .toISOString()
    .split("T")[0];

dateInput.min = today;

// =========================================
// MÁSCARA TELEFONE
// =========================================

const telefoneInput =
    document.getElementById("telefone");

telefoneInput.addEventListener("input", function (e) {

    let value = e.target.value
        .replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length > 10) {

        value = value.replace(
            /^(\d{2})(\d{5})(\d{4}).*/,
            "($1) $2-$3"
        );

    } else if (value.length > 6) {

        value = value.replace(
            /^(\d{2})(\d{4})(\d+)/,
            "($1) $2-$3"
        );

    } else if (value.length > 2) {

        value = value.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );

    } else if (value.length > 0) {

        value = value.replace(
            /^(\d*)/,
            "($1"
        );
    }

    e.target.value = value;

});

// =========================================
// FORMULÁRIO
// =========================================

const form =
    document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const servico =
        document.getElementById("servico").value;

    const data =
        document.getElementById("data").value;

    // Validações

    if (nome === "") {

        alert("Informe o nome do tutor.");

        return;
    }

    if (telefone === "") {

        alert("Informe um telefone.");

        return;
    }

    if (telefone.length < 15) {

        alert("Telefone inválido.");

        return;
    }

    if (servico === "") {

        alert("Selecione um serviço.");

        return;
    }

    if (data === "") {

        alert("Selecione uma data.");

        return;
    }

    alert(
        "Agendamento realizado com sucesso! 🐾"
    );

    form.reset();

    dateInput.min = today;

});

// =========================================
// BOTÃO VOLTAR AO TOPO
// =========================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================================
// SCROLL REVEAL PURO JS
// =========================================

const revealElements = document.querySelectorAll(
    ".service-card, .benefit-card, .testimonial-card, .stat, .faq-item, .gallery-grid img"
);

// Estado inicial
revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition =
        "all 0.7s ease";
});

function revealOnScroll() {

    const trigger =
        window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";

            el.style.transform =
                "translateY(0)";
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// =========================================
// EFEITO HOVER NOS CARDS
// =========================================

const cards =
    document.querySelectorAll(".service-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";
    });

});

// =========================================
// FECHAR MENU AO CLICAR FORA
// =========================================

document.addEventListener("click", (e) => {

    const clickedInsideNav =
        nav.contains(e.target);

    const clickedButton =
        menuToggle.contains(e.target);

    if (
        !clickedInsideNav &&
        !clickedButton
    ) {
        nav.classList.remove("active");
    }

});

// =========================================
// DESTACAR LINK ATIVO NO MENU
// =========================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// =========================================
// MENSAGEM DE BOAS-VINDAS
// =========================================

window.addEventListener("load", () => {

    console.log(
        "🐾 PetLux carregado com sucesso!"
    );

});