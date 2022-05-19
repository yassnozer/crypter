// let text="coder"
// console.log(btoa(text))
var textinput=document.getElementById('textinput')
var textout=document.getElementById('textout')
var select=document.getElementById('select')

textinput.addEventListener('input',()=>{
    makeresult()
})
select.addEventListener('change',()=>{
    makeresult()
})
function makeresult(){
    if(select.value=="crypt"){
        textout.innerText=btoa(textinput.value)
    }else{
        textout.innerText=atob(textinput.value)
    }
}

