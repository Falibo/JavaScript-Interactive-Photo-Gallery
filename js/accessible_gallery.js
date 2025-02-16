document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".preview");
    const imageDiv = document.getElementById("image");

    // Add tabindex to images dynamically
    images.forEach((img, index) => {
        img.setAttribute("tabindex", index + 1);

        img.addEventListener("mouseover", () => upDate(img));
        img.addEventListener("mouseout", unDo);

        img.addEventListener("focus", () => upDate(img));
        img.addEventListener("blur", unDo);
    });

    // Handle keydown event for cycling focus
    document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            const focusedElement = document.activeElement;
            const lastIndex = images.length - 1;
            if (focusedElement === images[lastIndex]) {
                e.preventDefault();
                images[0].focus();
            }
        }
    });

    function upDate(previewPic) {
        console.log("Mouse over or focus event triggered");
        console.log("Image Source:", previewPic.src);
        console.log("Image Alt Text:", previewPic.alt);

        imageDiv.style.backgroundImage = `url(${previewPic.src})`;
        imageDiv.innerText = previewPic.alt;
    }

    function unDo() {
        console.log("Mouse out or blur event triggered");

        imageDiv.style.backgroundImage = "url('')";
        imageDiv.innerText = "Hover over an image below to display here.";
    }
});
