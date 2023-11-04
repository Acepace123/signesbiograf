document.querySelector(".button").addEventListener("click", submit);
document.querySelector(".passwordInput").addEventListener("keypress", enter);
document.querySelector(".passwordInput").addEventListener("input", clearError);
function  enter(event) {
    if (event.key === "Enter"){
        submit();
    }
}
function clearError() {
    if (document.querySelector("body").classList.contains("errorVisible")){
        document.querySelector(".error").remove();
        document.querySelector("body").classList.remove("errorVisible");
        }
}
function clearPage() {
    console.log("success");
    document.querySelector("h1").remove();
    document.querySelector("p").remove();
    document.querySelector("label").remove();
    document.querySelector("p").remove();
    document.querySelector("button").remove();
    document.querySelector("input").remove();
}

function showVideo() {
    document.querySelector("button").remove();
    const video = document.createElement("iframe");
    video.src = "https://www.youtube.com/embed/oeK9znq-V9E";
    video.height = "0";
    video.width = "0";
    video.allow = "fullscreen";
    document.querySelector("body").appendChild(video);
    document.querySelector("iframe").style.boxShadow = "0 0 0 100vmax rgba(0, 0, 0, 0)";
    const id = setInterval(makeDim,10);
    function makeDim() {
        const dimValue = document.querySelector("iframe").style.boxShadow;
        const array1 = dimValue.split(" ");
        const array2 = array1[3].split(")");
        var opacity = parseFloat(array2[0]);
        opacity = opacity+0.01;
        document.querySelector("iframe").style.boxShadow = "0 0 0 100vmax rgba(0, 0, 0, " + opacity +")";
        if (opacity == 0.9) {
            clearInterval(id);
            video.height = "720";
            video.width = "1080";
            video.classList.add("center3");
        }
    }
}
function showButton() {
    const button = document.createElement("button");
    button.textContent = "Tryck Här!";
    button.classList.add("center2");
    document.querySelector("body").appendChild(button);
    document.querySelector("button").addEventListener("click", showVideo);
}

function submit() {
const text = document.querySelector(".passwordInput").value;
    console.log(text);
if (text == "AzinSigne") {
    console.log("success");
    clearPage();
    document.querySelector("body").style.backgroundImage = "url('Website\ background 2.png')";
    showButton();
}
else if (document.querySelector("body").classList.contains("errorVisible")){
}

else {
    console.log("false");
    const errorMessage = document.createElement("p");
    const node = document.createTextNode("Fel!");
    errorMessage.classList.add("error");
    errorMessage.appendChild(node);
    document.querySelector("body").appendChild(errorMessage);
    document.querySelector(".passwordInput").value="";
    document.querySelector("body").classList.add("errorVisible");

}
}
// curtains




