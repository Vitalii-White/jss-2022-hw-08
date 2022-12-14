
//*Автоматическая настройка падинга под высоту хедера */ 

/* document.querySelector(".header").getBoundingClientRect().height

const { height: pageHeaderHeight } = document
    .querySelector(".header")
    .getBoundingClientRect();

document.body.style.paddingTop = `${pageHeaderHeight}px`; */



//* Кнопка "Замовити послугу" в хедерре */
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("backdrop--is-hidden");
    }
})();   