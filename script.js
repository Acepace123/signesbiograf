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
function submit() {
const text = document.querySelector(".passwordInput").value;
    console.log(text);
if (text == "AzinSigne") {
    console.log("success");
    clearPage();
    const video = document.createElement("iframe");
    video.src = "https://www.youtube.com/embed/53LZ89zpIqc";
    video.height = "720";
    video.width = "1080";
    document.querySelector("body").appendChild(video);
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
// second background for "phase two" lBk1Sn8NND0 (video), fullscreen video, whiteline around video, fix website shit(domain)





