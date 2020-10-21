var num = 1;
var inputNum =document.getElementById("gridNum");
var grid = document.getElementById("grid");


document.getElementById("button").addEventListener("click",function(){
   num = inputNum.value;
    if(num<1||num>99 || isNaN(num)){
        alert('the number must be between 0 and 99')
    }else{
        //alert(num)
        var h = grid.clientHeight;
        var hdiv= h/num +'px';
        
        grid.innerHTML = '';
        for(var i = 0 ; i<num*num;i++){
            var div = document.createElement('div');
        div.setAttribute('class','misha');
        div.style.width = hdiv;
        div.style.height = hdiv;
        div.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor='black';
        })
            grid.appendChild(div)
        }
        

    } 
        
    
    
    
})

