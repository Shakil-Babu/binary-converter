document.getElementById('calculate').addEventListener('click', function(e){
    



    var decimalInput = document.getElementById('decimal').value ;
    if(decimalInput === ''){
        document.getElementById('showError').innerHTML = 'Input your decimal number!' ;
    }else if(decimalInput < 0){
        document.getElementById('showError').innerHTML = 'Input positive number!' ;
    }else{
    var number = Number(decimalInput).toString(2);
    document.getElementById('showResult').innerHTML = number ;
    }
    e.preventDefault();
})