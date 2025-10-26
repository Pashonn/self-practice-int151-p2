
document.addEventListener("DOMContentLoaded", () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontColor = localStorage.getItem("fontColor");
    const fontSize = localStorage.getItem("fontSize");

    if(bgColor) {
        document.body.style.backgroundColor("bgColor")
        document.getElementById("bgColor").value = bgColor;
    }   
    if(fontColor) {
        document.body.style.color("fontColor")
        document.getElementById("fontColor").value = fontColor;
    }
    if(fontSize){
        document.body.style.fontSize("fontSize");
        select = document.getElementById("fontSize") ;
        select.value = fontSize
        fontSize === "20px" ? "medium": fontSize === "10px" ? "small": "large";
    };
    const Size = {
        small: "10px" , 
        medium : "20px" ,
        large : "40px"
    };
    document.getElementById("save").addEventListener("click",()=>{
        const bgColor = document.getElementById("bgColor").value;
        const fontColor = document.getElementById("fontColor").value;
        const fontSize = document.getElementById("fontSize").value;
        localStorage.setItem("bgColor",bgColor);
        localStorage.setItem("fontColor",fontColor);
        localStorage.setItem("fontSize",fontSize);
        document.body.style.backgroundColor = bgColor;
        document.body.style.color=fontColor;
        document.body.style.fontSize=Size[fontSize];
    });
    document.getElementById("reset").addEventListener("click",()=>{
        localStorage.clear();
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.style.fontSize = "20px";
        document.getElementById("bgColor").value = "white";
        document.getElementById("fontColor").value = "black";
        document.getElementById("fontSize").value = "medium";
    });
});
