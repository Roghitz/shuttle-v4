

//detecting button press


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        alert("Your Booking Is Confrimed!!!");
        var buttonInnerHTML = this.innerHTML;

        buttonAnimation(buttonInnerHTML);

    });
}


//Dectecting keybroad press

function buttonAnimation(currentClick) {


    var activeButton = document.querySelector("." + currentClick);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100);

}



