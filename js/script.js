// code for mouse over image toogles
// let image = document.getElementById('like');
// function changeTolike()
// {
//     image.src="images/download.jpeg";
// }
// function changeTodislike()
// {
//     image.src="images/images.jpeg";
// }

// image.addEventListener('mouseover',changeTolike);
// image.addEventListener('mouseout',changeTodislike);

// let button = document.getElementById('btn');
// function calNum()
// {
//     let firstnum=parseInt(document.getElementById('num2').value);
//     if(firstnum >= 0){
//         alert(`${firstnum} is a positive number`);
//     }
        
//     else{
//         alert(`${firstnum} is a negative number`);
//     }
        

// }
// button.addEventListener('click',calNum);

// let button = document.getElementById('btn');
// function calNum()
// {
//     let firstnum=parseInt(document.getElementById('num2').value);
//     if(firstnum % 2 == 0){
//         alert(`${firstnum} is a even number`);
//     }
        
//     else {
//         alert(`${firstnum} is a odd number`);
//     }
        

// }
// button.addEventListener('click',calNum);

// let button = document.getElementById('btn');
// function calNum()
// {
//     let hours=parseInt(document.getElementById('num1').value);
//     let partsCost=parseInt(document.getElementById('num2').value);
//     let chargesPerhours=hours*100;
//     let charges=chargesPerhours+partsCost;
//     if(charges >= 150){
//         alert(`${charges} is the charge for job`);
//     }
        
//     else if(charges < 150){
//         alert(`${charges} is not minimum charges`);
//     }
        

// }
// button.addEventListener('click',calNum);


let button = document.getElementById('btn');
function calNum()
{
    let name=document.getElementById('num1').value;
    let number=parseInt(document.getElementById('num2').value);
    let score=parseInt(document.getElementById('num3').value);

    if(score >=90){
        alert(`You got A grade`);
    }
    else if(score >=80 && score<=89.99){
        alert(`You got B grade`);
    }   
    else if(score >=70 && score<=79.99){
        alert(`You got C grade`);
    }
    else if(score >=60 && score<=69.99){
        alert(`You got D grade`);
    }
    else if(score <=60){
        alert(`You got F grade`);
    }


}
button.addEventListener('click',calNum);