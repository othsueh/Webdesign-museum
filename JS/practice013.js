function afterprint(){
    alert("This webpage has been printed");
}

var img1 = document.getElementById("img1");
img1.addEventListener("click",function(){
    var picturetitle= document.getElementById("img1title");
    picturetitle.innerHTML="<b>This is a picture.<br>This text is from onload</b>";
});

var form1 = document.getElementsByClassName("form1");
Array.from(form1).forEach(function(form1) {
    form1.addEventListener('blur', function(){
        var formblur= document.getElementById("formblur");
        formblur.innerHTML="<b>The form lose your focus!</b>";
  })

    form1.addEventListener('focus', function(){
        var formblur= document.getElementById("formblur");
        formblur.innerHTML="<b>The form is on focus!</b>";
})
});

var ans = document.getElementById("two");
ans.addEventListener("change", function(){
    var add= document.getElementById("add");
    add.innerHTML = "2";
})

var cp = document.getElementById("cp");
cp.addEventListener("cut", function(){
    var cpdetect= document.getElementById("cpdetect");
    cpdetect.innerHTML="The text has been cut."
});
cp.addEventListener("copy", function(){
    var cpdetect= document.getElementById("cpdetect");
    cpdetect.innerHTML="The text has been copied."
});