let Img1 = document.getElementById("Img1");
let Img2 = document.getElementById("Img2");


var wasSwitched = true;

function SwitchBit()
{
    if(wasSwitched == true)
    {
        Img1.classList.add("hide");
        Img2.classList.remove("hide")

        wasSwitched = false;

    }
    else{
        Img1.classList.remove("hide");
        Img2.classList.add("hide")

        wasSwitched = true;
    }
}
