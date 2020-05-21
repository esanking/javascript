//doc
var bmitext = document.querySelector('.bmitext');
var righttext = document.querySelector('.rightstatus')
var img = document.querySelector('.img');
var look = document.querySelector('.look');
var d = document.querySelector('.btn');
var list = document.querySelector('.list');
var result= document.querySelector('.result');
var data = JSON.parse(localStorage.getItem('bmidata')) || [];



//bing
result.addEventListener('click',getbmi,false);
d.addEventListener('click',del,false);
//function

function getbmi(e){
    e.preventDefault();
    var tall = (document.querySelector('.height').value)/100;
    var weight = document.querySelector('.body-weight').value;
    var bmicomputer = (weight/(tall*tall)).toFixed(2);   //  .toFixed(2);小數點第幾位
    
    if(bmicomputer<16){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext1')
        look.setAttribute('id','color1')
        img.setAttribute('class','img1')
        righttext.setAttribute('id','demo1')
        status = "體重不足"
        bor="bor1";
        righttext.innerHTML=status;
    }else if(bmicomputer<18.5){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext2')
        look.setAttribute('id','color2')
        img.setAttribute('class','img2')
        righttext.setAttribute('id','demo2')
        bor="bor2";
        status = "體重過輕"
        righttext.innerHTML=status;
    }else if(bmicomputer<25){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext3')
        look.setAttribute('id','color3')
        img.setAttribute('class','img3')
        righttext.setAttribute('id','demo3')
        bor="bor3";
        status = "體重正常"
        righttext.innerHTML=status;
    }else if(bmicomputer<30){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext4')
        look.setAttribute('id','color4')
        img.setAttribute('class','img4')
        righttext.setAttribute('id','demo4')
        bor="bor4";
        status = "體重過重"
        righttext.innerHTML=status;
    }else if(bmicomputer<35){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext5')
        look.setAttribute('id','color5')
        img.setAttribute('class','img5')
        righttext.setAttribute('id','demo5')
        bor="bor5";
        status = "中等肥胖"
        righttext.innerHTML=status;
    }else if(bmicomputer<40){
        look.innerHTML=bmicomputer;
        bmitext.setAttribute('class','bmitext6')
        look.setAttribute('id','color6')
        img.setAttribute('class','img6')
        righttext.setAttribute('id','demo6')
        bor="bor6";
        status = "嚴重肥胖"
        righttext.innerHTML=status;
    };
    var date = new Date();
    dates = date.getDate();
    month = date.getMonth()+1;
    year = date.getFullYear();
    var bmivalue = {
        cm : tall*100,
        kg : weight,
        text : status,
        bmi : bmicomputer,
        years :year,
        months :month,
        date :dates,
        color : bor,
    };
    
    data.push(bmivalue);
    
    updata(data);
    localStorage.setItem('bmidata',JSON.stringify(data));
}

function updata(e){
    str = '';
    
    var len = e.length;
    for(var i=0;len>i;i++){
        str +='<li data-num="' + i + '"id="' + e[i].color + '"><div class="display"><div class="bigtext">'+ e[i].text +'</div><div class="smalltext">BMI<span class="bigtext">'+e[i].bmi+'</span></div><div class="smalltext">weight<span class="bigtext">'+e[i].kg+'kg</span></div><div class="smalltext">height<span class="bigtext">'+e[i].cm+'cm</span></div><div class="smalltext">'+ e[i].months + '-'+ e[i].date+'-'+e[i].years+'</div></div></li>';
        
    }

    
    list.innerHTML=str;
}

//刪除

function del(){
    data=[];
    localStorage.setItem('bmidata',JSON.stringify(data));
    updata(data);
}