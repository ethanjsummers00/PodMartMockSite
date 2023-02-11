function openCart() {
    document.getElementById("cartNav").style.width = "25%";
    document.querySelector("main").style.marginRight = "25%";
    document.querySelector("header").style.marginRight= "25%";
    document.getElementById("close").style.display = "flex";
    document.getElementById("cartContent").style.display = "flex";
}

function closeCart() {
    document.getElementById("cartNav").style.width = "0";
    document.querySelector("main").style.marginRight= "0";
    document.querySelector("header").style.marginRight= "0";
    document.getElementById("close").style.display = "none";
    document.getElementById("cartContent").style.display = "none";
}

// function itemSlide(){

//     if(itemNum == 1){
//         document.getElementById('itemPage').innerText = "1";

//         document.querySelector('#itemOne').style.display = "block";
//         document.querySelector('#itemTwo').style.display = "none";
//         document.querySelector('#itemThree').style.display = "none";

//         document.querySelector('#itemOneD').style.display = "block";
//         document.querySelector('#itemTwoD').style.display = "none";
//         document.querySelector('#itemThreeD').style.display = "none";
//     }
//     if(itemNum == 2){
//         document.getElementById('itemPage').innerText = "2";

//         document.querySelector('#itemOne').style.display = "none";
//         document.querySelector('#itemTwo').style.display = "block";
//         document.querySelector('#itemThree').style.display = "none";

//         document.querySelector('#itemOneD').style.display = "none";
//         document.querySelector('#itemTwoD').style.display = "block";
//         document.querySelector('#itemThreeD').style.display = "none";
//     }
//     if(itemNum == 3){
//         document.getElementById('itemPage').innerText = "3";

//         document.querySelector('#itemOne').style.display = "none";
//         document.querySelector('#itemTwo').style.display = "none";
//         document.querySelector('#itemThree').style.display = "block";

//         document.querySelector('#itemOneD').style.display = "none";
//         document.querySelector('#itemTwoD').style.display = "none";
//         document.querySelector('#itemThreeD').style.display = "block";
//     }
// }