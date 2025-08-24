var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
document.querySelector('.js-button').addEventListener('click', function() {
    document.querySelector('.js-Product').classList.toggle('Product--full')
})

document.getElementById('save').addEventListener('click', function() {
    alert("You want to Save it! ");
})



var modal = document.getElementById('rent');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();

    const list = document.querySelectorAll("#list li");

    list.forEach((el) => {
        const text = el.textContent.toUpperCase();
        el.style.display = text.includes(filter) ? "" : "none"
    });
};