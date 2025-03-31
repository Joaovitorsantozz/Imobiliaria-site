document.querySelectorAll(".fht-li").forEach(botao => {

    botao.onclick = function () {
        document.querySelectorAll(".fht-li").forEach(el => el.classList.remove("marked"))

        this.classList.add("marked");
    };
}
)

