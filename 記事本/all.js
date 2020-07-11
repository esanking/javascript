//doc
var btnsend = document.querySelector('.send');
var list = document.querySelector('.list'); 
var data = JSON.parse(localStorage.getItem('lidata'))|| [];
//binding and update
btnsend.addEventListener('click',adddata);
list.addEventListener('click', deleteline);

//send
function adddata(e){
    
    var text = document.querySelector('.text').value;
    var textvalue = {
        value:text
    };
    localStorage.setItem('lidata',JSON.stringify(data));
    data.push(textvalue);
    update(data);
    
}
function update(e){
    var str='';
    var len = e.length;
    for(var i=0;len>i;i++){
        str=`
        <li data-num=${i}>
        <a href="#">刪除</a>
        <span>${e[i].value}</span></li>`
    }
    list.innerHTML=str;
}

//delete
function deleteline(e){

    var thisline = e.target.dataset.num;
    data.splice(thisline,1);
    localStorage.setItem('lidata', JSON.stringify(data));
    update(data);
}