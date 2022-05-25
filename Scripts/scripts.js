var likesNumber = new Array(8).fill(0);

window.onload = function() {
    startLikeButton();
    var video = document.getElementById("Video");
    video.playbackRate = 0.75;
}

function startLikeButton()
{
    for (var i = 0; i < 8; i++)
    {
        likesNumber[i] = Math.floor(Math.random() * 100);
        document.getElementById("likesNumber" + i).innerHTML = likesNumber[i];
    }
}

function redirect(path)
{
    window.location.href = path
}

function openNewTab(path)
{
    window.open(path, '_blank');
}

function like(value) 
{
    image = "image" + value;
    var imageID = document.getElementById(image);

    console.log("lol");

    document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];

    if (imageID.src.match("/MyWebsite/Images/Icons/heartEmpty.png"))
    {
        imageID.src = "/MyWebsite/Images/Icons/heartFilled.png";
        likesNumber[value]++;
        document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];
    }
    else
    {
        imageID.src = "/MyWebsite/Images/Icons/heartEmpty.png";
        likesNumber[value]--;
        document.getElementById("likesNumber" + value).innerHTML = likesNumber[value];
    }
} 