
/* First Try
document.head.children[2].text = 'DOM Class 1' //Changing Title
function themeChanger() {
    console.log('Function Check is it working or not')
    
    if (document.body.style.backgroundColor == 'black'){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }else {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
}
*/
/*
First Class Second Attempt

//Assign to a Variable
document.getElementById('myText');
var myText = document.getElementById('myText');



/* 
console.log(window)
function styleBtn() {
    document.getElementById('myText')
    myText.style.backgroundColor = "purple"
    myText.style.color = 'white'
    myText.style.border = '2px solid yellow'
    myText.style.borderRadius = '20px'
    myText.style.transition = '0.5'
}
*/


document.querySelectorAll('li').forEach((item)=> {
    item.style.border = '2px solid black'
    item.style.borderRadius = '20px'
    item.style.marginBottom = '5px'
    item.style.backgroundColor = '#394361'
    item.style.color='white'
    item.style.listStyle = 'none'
    item.style.padding = '5px'
    item.style.width= '50%'
    item.style.textAlign='center'
    item.style.transform= 'translate(120px, 0%)'
})

//[...document.querySelectorAll('.chicken')] //spread Operator

//HTMLCollection : An Array like Object




