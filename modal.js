// show modal => click =>
// opacity => 1 ; backdrop => block!

const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal");
const confirmModal = document.querySelector(".confirm-modal");
showModalBtn.addEventListener("click", ()=>{
    modal.style.opacity="1";
    modal.style.transform="translateY(20vh)";
    backdrop.style.display="block";

})

closeModal.addEventListener("click", ()=>{
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backdrop.style.display="none";

})





confirmModal.addEventListener("click", ()=>{
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backdrop.style.display="none";
    alert("You are confirm!");
})



function closeModlFunction() {
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backdrop.style.display="none";
}

closeModal.addEventListener("click", closeModlFunction);
backdrop.addEventListener("click", closeModlFunction);
