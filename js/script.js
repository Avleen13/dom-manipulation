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

let button = document.getElementById('btn');
function calNum()
{
    parseInt();
    parseFloat()
    let firstnum=parseInt(document.getElementById('num1').value);
    let secondnum=parseInt(document.getElementById('num2').value);
    let sum =firstnum+secondnum;
    alert(`The sum of ${firstnum} and ${secondnum} is ${sum}`);
}
button.addEventListener('click',calNum);

