document.addEventListener("DOMContentLoaded", () => {

    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.backgroundColor = "#f0f2f5";
    document.body.style.margin = "0";
    document.body.style.color = "#333";

    const header = document.querySelector('.header');
    header.style.textAlign = "center";
    header.style.padding = "40px 20px";
    header.style.backgroundColor = "#1a202c";
    header.style.color = "white";

    const img = document.querySelector('img');
    img.style.width = "150px";
    img.style.height = "150px";
    img.style.borderRadius = "50%";
    img.style.border = "4px solid #fff";
    img.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";

    const link = document.querySelector('a');
    link.style.display = "inline-block";
    link.style.marginTop = "15px";
    link.style.padding = "10px 20px";
    link.style.backgroundColor = "#3182ce";
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.borderRadius = "5px";

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
        box.style.margin = "20px auto";
        box.style.padding = "20px";
        box.style.maxWidth = "600px";
        box.style.borderRadius = "10px";
        box.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        box.style.textAlign = "center";
    });

    const footer = document.querySelector('.footer');
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.marginTop = "40px";
    footer.style.backgroundColor = "#1a202c";
    footer.style.color = "white";

    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = "scale(1.02)";
            box.style.transition = "all 0.3s ease";
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = "scale(1)";
        });
    });

});
