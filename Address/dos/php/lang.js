function showFor(Id) {
    document.querySelectorAll(".demo").forEach(form => form.classList.remove("active"));
    document.getElementById(Id).classList.add("active");
}