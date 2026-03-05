const contactLink = document.querySelector('a[href="#contact"]');
const boxes = document.querySelectorAll('.box');

contactLink.addEventListener('click', (event) => {
    alert("You can reach me at: hbb797096@gmail.com");
});

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = "#e2e8f0";
        box.style.borderRadius = "15px";
        box.style.transition = "all 0.3s ease";
    });
});
