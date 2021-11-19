const app = document.querySelector(".app")

const options = {
    root: null, // Tamanho da viewport comum

    threshold: 0.6, // Quantidade em porcetagem que o nosso objeto tem que estar visivel na pagina. sendo 0, 0% e 1, 100%. Ou seja, se o threshold for 1, o objeto TODO deverá estar sendo visto ao pela viewport. Se for 0, se qualquer parte do objeto estiver sendo observada, o valor será true

    rootMargin: "0px" // Setando o tamnho da viewport em si, ao adicionarmos margins ela é somada a seção. Por exemplo se tiverrmos a nossa box com o nosso conteudo de tamanho x, se adicionar uma margin negativa, algo como -150px, a viewport encolhera em -150px, o mesmo ocorre com margens positivas. Independe se o valor for 0, tem que colocar px. Para ter uma visão clara do que exatamente é isso, pensa em uma camera, faz um quadrado com os dedos, fingindo ser uma camera, o tamanho dessa camera é o tamanho dessa margem.
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === app) {
            console.log("Teste")
            $('.app__image--cell img').animate({
                top: "-163%",
                opacity: "1"
            }, 650, function () {
                $('.app__image--cell img').animate({
                    top: "-160%"
                }, 200, function(){
                    $('.app__group').animate({
                        opacity: "1"
                    }, 650)
                })
            });
            observer.unobserve(entry.target);
        } else if (!entry.isIntersecting) {
            return;
        }
    })
}, options);

observer.observe(app)