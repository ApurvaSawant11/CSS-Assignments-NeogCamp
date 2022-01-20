const listItem = document.querySelectorAll(".list-item");

listItem.forEach((item) => {
    item.addEventListener("click", () => {
        listItem.forEach((item2) => {
            item2.classList.remove("active");
        });
        item.classList.add("active");
    });
});