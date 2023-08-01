const colors = ["red", "green", "blue", "yellow", "cyan", "orange", "pink", "purple", "brown", "darkgreen"];
document.getElementById("random").style.color = "white";
let prevColor = "white";

const updateRandom = () => {
    document.getElementById("random").style.color = getColor(colors, document.getElementById("random").style.color);
    sleep(2000).then(() => updateRandom())
}

function getColor(colors, prevColor){
    let tempColor = colors[Math.floor(Math.random() * colors.length)];
    while (true){
        tempColor = colors[Math.floor(Math.random() * colors.length)];
        if (tempColor != prevColor) break;
    } 
    return tempColor;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

updateRandom()