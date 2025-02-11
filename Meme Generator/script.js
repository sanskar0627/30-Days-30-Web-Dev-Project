document.getElementById("generateMeme").addEventListener("click", fetchMeme);

async function fetchMeme() {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    document.getElementById("memeImage").src = data.url;
}

// Download Meme
document.getElementById("downloadMeme").addEventListener("click", () => {
    let imgSrc = document.getElementById("memeImage").src;
    let link = document.createElement("a");
    link.href = imgSrc;
    link.download = "meme.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
