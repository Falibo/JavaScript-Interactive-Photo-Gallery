function upDate(previewPic) {
    
    console.log("Mouse over event triggered");
    console.log("Image Source:", previewPic.src);
    console.log("Image Alt Text:", previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerText = previewPic.alt;
}

function unDo() {
    
    console.log("Mouse out event triggered");

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}
