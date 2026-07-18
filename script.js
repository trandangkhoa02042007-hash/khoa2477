function update(previewPic) {
    console.log(previewPic.src);

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}
function undo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}   