/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */
///
/// mairead hide other elements when tab is open //
///* IDENTIFY PAGE - HIDE TAB ELEMENTS */
//sample URI///////////////////
var sampleURI2 = "random info";
//////////////////////////////////////////////////////// clolor ui plugin
(function (d) {
    d.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (f, e) {
        d.fx.step[e] = function (g) {
            if (!g.colorInit) {
                g.start = c(g.elem, e);
                g.end = b(g.end);
                g.colorInit = true
            }
            g.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt((g.pos * (g.end[0] - g.start[0])) + g.start[0]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[1] - g.start[1])) + g.start[1]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[2] - g.start[2])) + g.start[2]), 255), 0)].join(",") + ")"
        }
    });

    function b(f) {
        var e;
        if (f && f.constructor == Array && f.length == 3) {
            return f
        }
        if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)) {
            return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
        }
        if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)) {
            return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55]
        }
        if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
        if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)) {
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
        if (e = /rgba\(0, 0, 0, 0\)/.exec(f)) {
            return a.transparent
        }
        return a[d.trim(f).toLowerCase()]
    }
    function c(g, e) {
        var f;
        do {
            f = d.css(g, e);
            if (f != "" && f != "transparent" || d.nodeName(g, "body")) {
                break
            }
            e = "backgroundColor"
        } while (g = g.parentNode);
        return b(f)
    }
    var a = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
})(jQuery);
///
//alert("latest build");
//////////////////////////////////////////////////////// 
//////////////////////////////
    
var office = "";
var standard = "";
var dutyOff = "";
var letter = "";
var five;
var six;
var officeLabel = "";
var regionLabel = "";
//////////////////////////////// ignore///////
var offTable = "offTable";
var lonTable = "lonTable";
var letterA = "letterA";
var Duty = "Duty";
//var standard = "standard";
var letterT = "letterT";
//
var imgYear;

var alphaArray = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z"];

alphaArrayLc = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x",
"y","z"];
////saves

var saved = [region=[],period=[],year=[],periodImg=[],yearImg=[],title=[],photo=[],notes=[],dutyYear=[],dutyImg=[],standardYear=[],standardImg=[],uniqueKey=[]];
var saved2 = [yearAd=[],perAd=[],dutyAd=[],stanAd=[]];
//make this a global variable so that when lonPer deposits img Adresses in an array its accessible outside of funct
//var newImgAd;

//array to hold results of period symbol request before displaying them all at once
var perResult = [];
var yeaResult = [];
var stanResult = [];
var dutyResult = [];
//
var imgAdArray = [];
var stanImgAdArray = [];
//new array to hold photo address

/*$(document).on('click', '#clearButton', function(){
    
for(var i=0;i<100;i++){

$("#imgId"+i+"").remove();
$("#imgIdStandard"+i+"").remove();
$("#imgIdDuty"+i+"").remove();
$("#imgIdLetter"+i+"").remove();
$("#imgTag3"+i+"").empty();
$("#imgTag2"+i+"").empty(); 
$("#imgTag"+i+"").empty();
$("dutyYear"+i+"").empty();
 }


});*/
/*$(document).on('click', '#startProjectBtn', function(){
for(var i=0;i<100;i++){

$("#imgId"+i+"").remove();
$("#imgIdStandard"+i+"").remove();
$("#imgIdDuty"+i+"").remove();
$("#imgIdLetter"+i+"").remove();
$("#imgTag3"+i+"").empty();
$("#imgTag2"+i+"").empty(); 
$("#imgTag"+i+"").empty();
$("dutyYear"+i+"").empty();
 }  
}); */ 
/*
/// check for year value errors function ////////////
/// function
function numChecker(target,clickedImage,office){
    console.log("numckecker ran");
for(i=0; i<alphaArray.length; i++){

var letterSelectedInput = "letter"+ alphaArray[i];
modifiedAlpha(letterSelectedInput,target,clickedImage,office); 
}
}
///
function modifiedAlpha(str,target,clickedImage,office
        ) {  ////this function takes a lot of parametres and is used by the next two functions
   //clear array
   imgAdArray = [];
   yeaResult = [];
   //
    if (str.length === 0) { 
        document.getElementById("testPHP").innerHTML = "";     
        return;
    } else {
        //alert("alpha called");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            var myObj = JSON.parse(this.responseText); 
           
            
            $.each(myObj.database, function(index, symbol) {
             //NOT IN OTHER EXMAPLE 
                var newImgAd = encodeURI(symbol.imgAd);
              /// new insertion
               
             
              //$(target).append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'id='imgIdLetter"+index+"' class='letterStyle' alt=''/>");
                                          //$(target).append("<img src='ss.assets/letterBackground2.png'id='imgBackground"+index+"' class='squareStyle' alt=''/>");
///////// loading screen ////////////////////////////////
yeaResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdLetter"+index+"' class='letterStyle symbolVisibility'  alt=''/>");
                $(target).append(yeaResult[index]);
                //alert("myObj.database.length=_____"+myObj.database.length);

    console.log("conditions met on year");
    //alert("conditions met");

/////////////////////////////////////////////////////////
                /*$(target).append("<div class='square squareStyle'></div>");*/

        //this takes the year from the img address
             /* var imgAdStr = symbol.imgAd;
                var imgYear = imgAdStr.substring(five,six); 
                
console.log("letter"+str+index+"year"+imgYear);

   
   
   
   ///////////////             
          }); 
            }
        };
        xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/alpha.php?q=" + str + office, true);
        xmlhttp.send();
    }          //end of alpha code
        
}
///
numChecker("#freshDate","#imgTag2","lonTable");

*/
/*alpha("letterA","#freshDate","#imgTag2","lonTable"
        );*/

////generate and push number
var myKey;
if (localStorage.getItem("uniqueKey") === null) {
    //alert("you have no key");
    
    
   ///alert("save taken into account 18");
  var myRanNum = Math.random();
  myRanNum.toString();
localStorage.setItem("uniqueKey", myRanNum);
var setKey = localStorage.getItem("uniqueKey");
//alert("setKey save 1.1 ="+setKey);
var myKey = localStorage.getItem("uniqueKey");

saved[12].push(myKey);
createTable(setKey);
}else{
 var myKey = localStorage.getItem("uniqueKey");

saved[12].push(myKey);
//alert("key is saved 7____:"+saved[12]);
}
///// choose office  //////////////////////////////////
//london
$(document).on('click', '#lonOffice', function(){
   
    office = "lonTable"; 
    standard = "standard";
   dutyOff = "Duty";
   letterOff = "";
    five = 59;
     six = 63;
     /// new var to label symbols in results
     officeLabel = "London";
     regionLabel = "England";
     
     
});
//Birmingham
$(document).on('click', '#birOffice', function(){

    office = "birTable"; 
    standard = "birStandard";
   dutyOff = "birDuty";
   letterOff = "Bir";
   five = 63;
   six = 67;
   officeLabel = "Birmingham";
     regionLabel = "England";
  
});
//Dublin
$(document).on('click', '#dubOffice', function(){
 
    office = "dubTable"; 
    standard = "dubStandard";
   dutyOff = "dubDuty";
   letterOff = "Dub";
  five = 59;
     six = 63;
     officeLabel = "Ireland";
     regionLabel = "Dublin";
     
});
////
$(document).on('click', '#clearButton', function(){
console.log("backbutton clicked");

//reverseLoading("#loadIcon1,#loadingText1","#rectYear3","#loadDiv1","#oneRegion");// region
  reverseLoadingPosition("#loadIcon1","48px","#loadingText1","52px","#rectYear3","200px","#loadDiv1","#oneRegion");
  reverseLoadingPosition("#loadIcon2","55px","#loadingText2","58px","#rectYear","200px","#loadDiv2","#threeYear");
  reverseLoadingPosition("#loadIcon3","48px","#loadingText3","53px","#rectYear4","200px","#loadDiv3","#fourOther");
  reverseLoadingPosition("#loadIcon","50px","#loadingText","53px","#rectYear2","200px","#loadDiv","#twoPeriod");

//reverseLoading("#loadIcon2,#loadingText","#rectYear","#loadDiv2","#threeYear"); //year
//reverseLoading("#loadIcon3,#loadingText3","#rectYear4","#loadDiv3","#fourOther"); //other
//reverseLoading("#loadIcon","#rectYear2","#loadDiv","#twoPeriod"); //period
clearData();
   //location.reload(true);
  
});
//
/*$(document).on('click', '#quickMatchBtn', function(){
//alert("quick match button clicked");
   //location.reload(true);
location.assign("index.html#startProj");
  
});*/

/////////////////////////////////////////////////////////////////////////functions
//////////////// rotate the symbol smith symbol animation////////////////
//var loadIcon = $("#testDiv");
/*function startAnimation(){
    alert("animation started");
            loadIcon.animate({height: 80}, "slow");
            loadIcon.animate({height: 20}, "slow",startAnimation);
            loadIcon.css("background-color", "blue");  
            loadIcon.animate({height: 100}, "slow");
            loadIcon.animate({width: 100}, "slow", startAnimation);
        }
$(document).on('click',"#loadIcon", function(){
    alert("region button clicked");
    startAnimation();
});*/
/*$(document).on('click',"#periodBtn", function(){
        var div = $("#loadingText");
        startAnimation();
        function startAnimation(){
            //alert("animation started");
            div.animate({opacity: 0.5}, "slow");
           
           
           
            //div.animate({transform: rotate(20deg)}, "slow");
            div.animate({opacity: 1}, "slow", startAnimation);
        }
        });*/

//clear image array
$(document).on('click',"#periodBtn", function(){
    
    
    
});

//clear result three images 
$(document).on('click',"#returnStepTwo", function(){
$('#listPer,#listYea,#listOth,#listRegVal,#listPerVal,#listYeaVal,#listOthVal,#listReg,#yearValue').empty();
    
    
    
});

 //code added 25/7/18 unhide the loading div
   
   
   
    //
//display letters function
function displayLetter() {
   $("#oneRegionLoad").addClass("hideDiv");
  $("#twoPeriodLoad").addClass("hideDiv");
  $("#threeYearLoad").removeClass("hideDiv");
  $("#fourOtherLoad").addClass("hideDiv");
//find which letter was selected and save as variable
   //console.log("current value between key tags is....."+$("#keyClick").val());

var letterSelected = $("#keyClick").val();
    
var letterSelectedInput = "letter"+ letterSelected;   
//alert("any value"+letterSelected);
alpha(letterSelectedInput,"#freshDate","#imgTag2",letterOff
          );

    $("#keyClick").closest('form').find("input[type=text], textarea").val("");
  $('#freshDate').empty();
}

///////////////////////////
///generate letter
$(document).on('click','#yearBtn', function(){
    //scroll with keyboard. code taken from https://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
    /*var $container = $('#stepTwo'),
    $scrollTo = $('#otherBtn');
   $container.scrollTop(
    $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
);*/
//bring up keyboard
//document.getElementById("keyClick").style.caretColor="transparent";
$('#keyClick').focus();
//


//

////////////////////////////////////////////// this code created the virtual keyboard - it is now defunct
/*$.each(alphaArray, function(index,value) {
$('#threeYear').append("<button id='1"+value+"'class='ui-btn ui-btn-inline'>"+value+"</button>");
});*/ 
});
/////////////
//////////save///////
function geoLocation(title,notes,stan,per,yea,duty,key,URI) {
    console.log("geolocation ran with"+title+notes+stan+per+yea+duty+key+URI);
    var encodeURI = encodeURIComponent(URI);
    //alert("save taken into account 6");
    //alert("geo location ran with : per: "+ per+"year: "+yea+"stan: "+stan+"duty:"+duty+"imgURI"+encodeURI);
    //convert long and lat to strings
  //alert("title:__"+title+"__notes___"+notes+"__stan__"+stan+"__yea__"+yea+"__duty__"+duty+"__key__"+"__picture__"+picture);
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            
                var myObj = JSON.parse(this.responseText); 
           
            //
            $.each(myObj.database, function(index, symbol) {
                
                 $('#fourOther').append("<p>"+index+"</p>");
                $('#fourOther').append("<p> gfgfgfgfgfg </p>");
                        
          }); 
            }
        };
//xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/geoTable.php?q="+newLat+"&r="+newLong+"&s="+per+"&t="+year+"&u="+stan+"&v="+duty, true);
 //http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/save.php?q=title1&r=notes1&s=stan1&t=per&u=yea&v=duty1&w=mytestkey1&x=picture", true);
 xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/save.php?q="+title+"&r="+notes+"&s="+stan+"&t="+per+"&u="+yea+"&v="+duty+"&w="+key+"&x=defaultValue&y="+encodeURI, true); //works without parametres

    xmlhttp.send();
    
}
//////////// clear arrays  //////////
function clearArrays (){
var saved = [region=[],period=[],year=[],periodImg=[],yearImg=[],title=[],photo=[],notes=[],dutyYear=[],dutyImg=[],standardYear=[],standardImg=[],uniqueKey=[]];
var saved2 = [yearAd=[],perAd=[],dutyAd=[],stanAd=[]];
}
///////////////////////
//////////////////////get saves//////////////
function getSaves() {
   //clear s list
   //alert("get saves ran____"+$('#mySlist').children.length);
//clear the list
/*for(var i=0;i<$('#mySlist').children.length;i++){
$("'#li"+i+"'").empty();   
    
};*/
//alert("for loop did not fail");


//
   /*if($('#mySlist').length>0){alert("you've got length man");
   $('#mySlist').empty();
    }*/
    //$('#mySlist').children.remove();
   
   
   
   
   //
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          //////empty lists////////
          $('#mySlist').empty();
          
          
          
          
          ///////////////////////
            if (this.readyState == 4 && this.status == 200) {
                
            
                var myObj = JSON.parse(this.responseText); 
           
            
            $.each(myObj.database, function(index, symbol) {
                
                 $('#mySlist').append(
            //"<li id='li"+index+"'><a href='#savedResult' id='itemChoice"+index+"' ><img src='"+symbol.IMGURI+"' alt='' style='width:100%; height:60%;'/></div></div><h2>"+symbol.title+"</h2><p>"+symbol.notes+"</p></a></li>"
            "<li id='li"+index+"'><a href='#savedResult'>"+symbol.title+"</a></li>");
    
            $('#mySlist').listview('refresh');
        
               //"<li><a href='#savedResult' id='itemChoice1' ><h2>example</h2><p>example notes</p></a></li>");
               
                /*$('#savedItems').append("ul id='headerSave'><li id='headS'><a href='#' onclick='openNav()'><i class='fa fa-navicon'></i></a></li></ul>\n\
<div role='main' class='ui-content'><ul  data-role='listview' data-inset='true' id='mySlist'><li>\n\
<a href='#savedResult' id='savedFILE'><img style='display:none; max-height:160px; width:auto;margin:0 auto;' id='smallerAaImage' src='' alt=''/>\n\
<img style='display:none; max-height:160px; width:auto;margin:0 auto;' id='largerAaImage' src=''  alt=''/>\n\
<div id='savedItemPicture'></div><h2 id='savedTitle'></h2><p id='savedNotes'></p></a></li>"+"</ul></div>"*/
               
               $(document).on('click',"#li"+index+"", function(){         //itemchoice button is cliking on a save in the save list
                 //display image
                 $("#largerAImage").attr("src","");
                 //$("#smallerAImage").attr("src","");
                 //alert("symbol.IMGURI___"+symbol.IMGURI);
                 
                  $("#largerAImage").attr("src",symbol.IMGURI);
                  $("#largerAImage").css("display", "block");
                 //
                   $('#saveReg').empty();
                  $('#savePer').empty();
                  $('#saveYea').empty();
                  $('#saveOth').empty();
                  $('#ssTitle').empty();
                  $('#ssTitle').empty();
                  $('#ssNotes').empty();
                  $('#saveSaved').empty();
                   var RegImgAd = encodeURI(symbol.stan);
                   var PerImgAd = encodeURI(symbol.per);
                   var YeaImgAd = encodeURI(symbol.yea);
                   var OthImgAd = encodeURI(symbol.duty);
                   var imgAdStrSave = symbol.yea;
              var imgYearSave = imgAdStrSave.substring(59,63); 
                  $('#saveReg').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+RegImgAd+"' id='imgIdRa"+index+"' alt=''/>");
                  $('#savePer').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+PerImgAd+"' id='imgIdRb"+index+"' alt=''/>");
                  $('#saveYea').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+YeaImgAd+"' id='imgIdRc"+index+"' alt=''/>");
                  $('#saveOth').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+OthImgAd+"' id='imgIdRd"+index+"' alt=''/>");
                  $('#ssTitle').append("<h3>"+symbol.title+"</h3>");
                  $('#ssNotes').append(symbol.notes);
                  //special variables to get year value
                  var listYearVal = symbol.yea;
                  //alert("code ran alert+");
                  var listYeaStr = listYearVal.substring(five,six);
                   //alert("listYearStr+"+listYeaStr);
                  $('#saveSaved').append("<h4 style='display: inline-block;'>Year Saved:</h4><span style='margin-left: 10px;'>"+listYeaStr+"</span>");
                  
                  var betweenTags = $('#saveSaved').text();
                  //alert("listYearVal"+listYeaStr+"value in tags equals"+betweenTags);
                          //alert("listYeaStr_____"+listYeaStr);       

               });         
          }); 
            }
        };
//xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/geoTable.php?q="+newLat+"&r="+newLong+"&s="+per+"&t="+year+"&u="+stan+"&v="+duty, true);
 //http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/save.php?q=title1&r=notes1&s=stan1&t=per&u=yea&v=duty1&w=mytestkey1&x=picture", true);
 xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/getSaves1.1.php?q="+saved[12], true); //works without parametres

    xmlhttp.send();
}
///////////////////////// go to saved items page///////////////////////

$(document).on('click', '#linkToSaves', function(){           //click this button for periods
  //alert("linkToSavesCalled  called");
  clearFields();
  getSaves(); 
   
  
});

/////
///////////// create a table for the users info to be stored////////////
function createTable(key) {
    //alert("geo location ran with : Long : " + long +"lat: " + lat+ "per: "+ per+"year: "+year+"stan: "+stan+"duty:"+duty);
    //convert long and lat to s
  
var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            
                var myObj = JSON.parse(this.responseText); 
           
            //
            $.each(myObj.database, function(index, symbol) {
                
                 $('#fourOther').append("<p>"+index+"</p>");
                $('#fourOther').append("<p> gfgfgfgfgfg </p>");
                        
          }); 
            }
        };
//xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/geoTable.php?q="+newLat+"&r="+newLong+"&s="+per+"&t="+year+"&u="+stan+"&v="+duty, true);
 //http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/save.php?q=title1&r=notes1&s=stan1&t=per&u=yea&v=duty1&w=mytestkey1&x=picture", true);
 xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/createTable.php?q="+key, true); //works without parametres

    xmlhttp.send();
}
////////////////////////////////////// validate save
function validateSave(){
    //alert("validate save ran");

    //validate save
    saved[2].toString();
    saved[1].toString();
var periodStr = saved[2].toString();
var yearStr = saved[1].toString();
var newString = "hello";
 
var yearLon = yearStr.substr(five,six);
var periodStart = periodStr.substr(3, 4);
var periodEnd = periodStr.substr(8, 4);
//creating a new variable for year as current displayed year includes paragraph tags
var displayYear = yearStr.substr(3, 4);
//alert("saved[2]=___"+saved[2]+"__saved[1]=__"+saved[1]+"___periodStr"+periodStr+"__yearStr="+yearStr);
if(year >= periodStart & year<= periodEnd){alert("correct match!");} else
{alert("these do not match! Period: "+periodStart+"-"+periodEnd+"   Year: "+displayYear+"    Continue?");}

//display these years in result page also
$('#listPerVal').append("<p>"+periodStart+"-"+periodEnd+"<p>");

//var perStr2 = periodStr.substring(40,4);
//var yearStr = saved[1]
//var perStr1 = Number(perStr1);
//var perStr2 = Number(perStr2);
//var yearStr1 = Number(yearStr1);
//$('#Period').append("<p>"+str+"</p>");
//
//dont remeber what the below line was but it seemed to be error
//document.getElementById("Period").innerHTML = "year"+year+"period"+periodStart+"-"+periodEnd;
//
//if(yearStr1 < perStr2 + yearStr1 > perStr1){alert("these two do not match!")}
//////   validate save is taking on the responsibility of deriving the duty period years and displaying them
//saved[9].toString();
//<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/DigitisedSymbols/LONDON/GROUPED/LDuty1796-1977/D.1796-1815.png'
//alert(saved[9]);
var otherStr = saved[9].toString();
var otherStart = otherStr.substr(-9, 4);
var otherEnd = otherStr.substr(-14, 4);
    //alert("saved 9: "+saved[9]+"saved 2"+saved[2]);

$('#listOthVal').append("<p>"+otherStart+"-"+otherEnd+"<p>");

//$('#listOthVal').append("<p>"+otherStart+"-"+otherEnd+"<p>");
//$('#listOthVal').append("<p>test<p>");

}
///////// photo tag manager/////////
function photoManagerCamera(){
       console.log("photoManager used");
//library photo main page 
/*$( "#largeImage" ).toggleClass(".symbolVisibility");
//stepTwo
$( "#largestImage" ).toggleClass(".symbolVisibility"); 
$( "#largerImage" ).toggleClass(".symbolVisibility");
$( "#smallImage" ).toggleClass(".symbolVisibility");
//stepTwo
$( "#smallestImage" ).toggleClass(".symbolVisibility");
//
$( "#smallerImage" ).toggleClass(".symbolVisibility");*/

$("#largeImage").attr("src","");
$("#largestImage").attr("src","");
$("#largerImage").attr("src","");
$("#smallImage").attr("src","");
$("#smallestImage").attr("src","");
$("#smallerImage").attr("src","");
$("#largerImage").attr("src","");

}

// camera photo main page

////// CLEAR DATA////////////////////
function clearData (){
console.log("clear data before running. OneRegion.length="+$('#oneRegion').children().size());
    stanResult = [];
    tagsFullStandard.key = 0;
$('#oneRegion').empty(); 
//
perResult = [];
    tagsFullPeriod.key = 0;
$('#twoPeriod').empty();
//
dutyResult = [];
    tagsFullDuty.key = 0;
$('#fourOther').empty();
console.log("clear data ran duty.length="+$('#fourOther').children().size());
//
yearResult = [];
    tagsFullYear.key = 0;
$('#freshTag').empty();
//
$('#imgTag1').empty();
$('#imgTag2').empty();
$('#imgTag3').empty();
$('#imgTag4').empty();
//
$('#yearValue').empty();

}
///////////////////////// animation manager///////////
function animationManager(loadIcon,loadIconClass,loadIconClassFin,loadingText,rect,loadDiv,mainDiv,loadAndText,tagsFull){
if(tagsFull.key === 1){
console.log("tags full don't run function");    
//
$(mainDiv).css("opacity", "0.0");
$(".symbolVisibility").css("display", "inline");
$(mainDiv).animate({
    
   
    opacity: "+=1"
    
  }, 1000, function() {
  console.log("ran main div animation");
 
  });
//
} else{
loadingFunction(loadIcon,loadIconClass,loadIconClassFin,loadingText,rect,loadDiv,mainDiv,loadAndText);

 tagsFull.key = 1;
console.log("tags empty loading function for region ran");
console.log("tagsFullStandard="+tagsFull);
//

}        
}
////////////////////// reverse loading manager //////////////

/////////////////////////function to handle the loading icons
function reverseLoading(loadAndText,rect,loadDiv,mainDiv){

    console.log("reverse loading ran");
$(loadAndText).animate({
    
    left: "+=185"
    
  }, 900, function() {
    console.log("left reversal");
 
  });
  //
  $(rect).animate({
    
   
    width: "+=200"
    
  }, 900, function() {
    console.log("rect reversal");
 
  });
  //
  $(loadAndText).animate({
    
    opacity: "1"
    
  }, 900, function() {
    console.log("animation completed 2 reversal");
    $(loadDiv).css("display", "inline");
 $(".symbolVisibility").css("display", "none");
  });
  //
  $( mainDiv ).animate({
    
   
    opacity: "-=1"
    
  }, 5000, function() {
    console.log("four other animation reversal");
 
  }); 

    }
//////////////////////
/*function reverseloadingPosition(){

    
    //console.log("position before reversal___=left"+position.left+"top"+position.top);
    console.log("position before reversal___=left"+$("#loadIcon1").css("left")+"top"+$("#loadIcon1").css("top"));

$("#loadIcon1").css("left", "48px");
$("#loadingText1").css("left", "52px");
$("#rectYear3").css("width", "200px");
$("#loadIcon1").css("opacity","1.0");
$("#loadingText1").css("opacity","1.0");
$("#loadDiv1").css("display","inline");
$(".symbolVisibility").css("display", "none");
$("#oneOther").css("opacity","0");

  //console.log("position after___=left"+position.left+"right"+position.top);
      console.log("position after reversal___=left"+$("#loadIcon1").css("left")+"top"+$("#loadIcon1").css("top"));

}*/

function reverseLoadingPosition (icon,iconVal,loadingText,textVal,rect,rectVal,loadDiv,mainDiv){
$(icon).css("left", iconVal); 
$(loadingText).css("left", textVal);
$(rect).css("width",rectVal );
$(icon).css("opacity","1.0");
$(loadingText).css("opacity","1.0");
$(loadDiv).css("display","inline");
$(".symbolVisibility").css("display", "none");
$(mainDiv).css("opacity","0");
console.log("reverLoadingPositionRan");
}
//
//

//////////////////////
function loadingFunction(loadIcon,loadIconClass,loadIconClassFin,loadingText,rect,loadDiv,mainDiv,loadAndText){
    ///////hide the loading div
    //position tracking
    console.log("loading function ran");
    var p = $("#loadIcon1");
    var position = p.offset();
    console.log("position before___="+loadIcon+""+position.left);
    //
    $(loadIcon).removeClass(loadIconClass);
    //console.log("done");
    $(loadIcon).addClass(loadIconClassFin);
    
               $(loadAndText).animate({
    
    left: "-=185"
    
  }, 800, function() {
    console.log("animation completed");
    $(loadIcon).removeClass(loadIconClassFin);
    $(loadIcon).css("width", "60px");
    $(loadIcon).css("height", "60px");
  });
  
      

  
  //shrink the rectangle
$(rect).animate({
    
   
    width: "-=200"
    
  }, 900, function() {
    console.log("animation completed");
 
  });
 //stepped animation
$(loadAndText).animate({
    
    opacity: "0.0"
    
  }, 900, function() {
    console.log("animation completed 2 ");
    $(loadDiv).css("display", "none");
 $(".symbolVisibility").css("display", "inline");
  });
  //
   $( mainDiv ).animate({
    
   
    opacity: "+=1"
    
  }, 5000, function() {
    console.log("four other animation");
 
  });
  //console.log("position after___="+loadIcon+""+position.left);

  }
//////////////////////


/////////////////////
///////////////////////////////////// London Period Function
function lonPeriod(str) {
    //empty the letter DIVs
    //console.log("lonPerCalled.__str="+str);
       $(".symbolVisibility").css("display", "none");   //hides the symbols until they are all loaded 

    $('#freshDate').empty();
    //empty ImagAdArray
    imgAdArray = [];
    
    //
    if (str.length === 0) { 
        document.getElementById("testPHP").innerHTML = "";     
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                
            
                var myObj = JSON.parse(this.responseText); 
             
            //
            $.each(myObj.database, function(index, symbol) {
              /// new insertion
              /// DIFFERENT LINE DOESNT APPEAR IN OTHER EXAMPLE
              newImgAd = encodeURI(symbol.imgAd); 
                            // $(this).html(parent);
/////////push the symbols into an array instead of displaying them as they come in
//perResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgId"+index+"' class='periodStyle' alt=''/>");
//perResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/1' id='imgId1' class='periodStyle' alt=''/>");





//////////// 
           
              ///
              
              
              
              //$('#twoPeriod').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgId"+index+"' class='periodStyle' style='display: none;' alt=''/>"); //this is the div the images will appear in
    //perResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/1' id='imgId"+index+"' class='periodStyle' alt=''/>");
    //console.log("newImgAd=___"+newImgAd);
                perResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgId"+index+"' class='periodStyle symbolVisibility'  alt=''/>");
                //save ImagAd to array
                imgAdArray.push(newImgAd);
                //console.log("indexNumber__"+[index]+"perResult=___"+perResult[index]);
                //
                $('#twoPeriod').append(perResult[index]);
                
if(perResult.length===myObj.database.length){
    perResult = [];
    //myObj.database =[];
    //hide the loading div
    //alert("conditions met");
    animationManager("#loadIcon","loadIcon3Class","loadIcon3ClassFin","#loadingText","#rectYear2","#loadDiv", "#twoPeriod","#loadIcon,#loadingText",tagsFullPeriod);
    
  

                    //hide the loading div
    /*$("#loadDiv").css("display", "none");
 $(".symbolVisibility").css("display", "inline"); */
                
}else{//console.log("lengths do not match____perResult.length="+perResult.length+"___database.length="+myObj.database.length);
    
}
                //alert( perResult.length);
              
              
//$('#Period').append("<p>"+symbol.lonPeriod+"<p>"); //this will give you years. change the div to where you want them to appear
              ////
        
                      
              //// this is the code that handles clicking on a symbol and it appearing at the top
              
             $(document).off('click', "#imgId"+index+"").on('click',"#imgId"+index+"", function(){
                 
                 //alert("you clicked imageID___"+index);
                 //alert("symbol clicked");
    $('#imgTag1').empty();
    //new css animations
    
      $( ".periodStyle" ).animate({//backgroundColor: "#E8F1F5",
                                               opacity: "0.5",
                                               height: "90px"});
            
//add the class to the imageletterId
//$("#imgIdLetter"+index+"").addClass("letterStyle");
           // try JQUERY animate method////////////////////////////\
           $("#imgId"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "100px",
                                               opacity: "1"
       });
    // 
    //alert("image address index___"+index+"imgad"+newImgAd);
//$('#imgTag1').append($("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdTop"+index+"' class='' alt=''/>").width(65).height(65));    //it appears in this div //where you resize choosen mark
$('#imgTag1').append($("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+imgAdArray[index]+"' id='imgIdTop"+index+"' class='periodStyle' alt=''/>").width(100).height(100));    //it appears in this div //where you resize choosen mark

//animate upper image
$("#imgIdTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "+=10px",
                                               width: "+=10px",
                                             opacity: "0.5"
                                               });
$("#imgIdTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "-=10px",
                                               width: "-=10px",
                                             opacity: "1"
                                               });      


//save function
saved[3].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+imgAdArray[index]+"'");
saved[2].unshift("<p>"+symbol.lonPeriod+"</p>");
saved2[1].unshift(symbol.imgAd);
});
           
          });
          //alert("final length"+ perResult.length+perResult[0]);
          //append
                        //$('#twoPeriod').append(perResult[0]); //this is the div the images will appear in

            }
        };
        //OTHER EXAMPLE HAS + STR, BEFORE TRUE
        xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/lonPeriodServer2.php?q="+str, true);
        xmlhttp.send();
    }
    /////////////////////////////////////////////// display everything in array
    //new obj each function to run through array
  /*$.each(perResult, function(index,value){
                    //$('#twoPeriod').append(value); //this is the div the images will appear in
  alert("sample");
    });*/
    //perResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/1' id='imgId1' class='periodStyle' alt=''/>");

   //alert("code ran"+perResult.length);
    ////
}

/////
/////////////call london period function
function periodButtonFun (){
    console.log("periodfuncalled");
//$( "#periodBtn" ).click(function() {
//$(document).one('click', '#periodBtn', function(){           //click this button for periods
  // make loading divs visible and invisible
  $("#oneRegionLoad").addClass("hideDiv");
  $("#twoPeriodLoad").removeClass("hideDiv");
  $("#threeYearLoad").addClass("hideDiv");
  $("#fourOtherLoad").addClass("hideDiv");
  //
    //alert("periodBtn  called");
  lonPeriod(office); 
   
  
//});
}


/////
//standard function
var tagsFullStandard = {key: 0};
var tagsFullDuty = {key: 0};
var tagsFullPeriod = {key: 0};
var tagsFullYear = {key: 0};
//
/*var reloadStandard = {key: 0};
var reloadDuty = {key: 0};
var reloadPeriod = {key: 0};
var reloadYear = {key: 0};*/
//
function standardPeriod(str) {
    console.log("standard___period___called");
    console.log(" standard period OneRegion.length="+$('#oneRegion').children().size());

    imgAdArray = [];
    //alert("imgAdArray[0]____"+imgAdArray[0]);
    //empty the letter DIVs 
    $('#freshDate').empty();
   ////reset loading screen style
  
   $(".symbolVisibility").css("display", "none");   //hides the symbols until they are all loaded 
  
   //
    // $('#oneRegion').append("standard insertion");
     $('#zeroStandard').append("standard insertion");
    if (str.length === 0) { 
        document.getElementById("testPHP").innerHTML = "";     
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                
                var myObj = JSON.parse(this.responseText); 
           
            //
            $.each(myObj.database, function(index, symbol) {
              /// new insertion
              /// DIFFERENT LINE DOESNT APPEAR IN OTHER EXAMPLE
              var newImgAd = encodeURI(symbol.imgAd); 
              
              
              ///
              //$('#oneRegion').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdStandard"+index+"' class='standardStyle' alt=''/>"); //this is the div the images will appear in
              ////////////////////////// hold the results until they are all loaded
               stanResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdStandard"+index+"' class='standardStyle symbolVisibility'  alt=''/>");
                $('#oneRegion').append(stanResult[index]);
                stanImgAdArray.push(newImgAd);
if(stanResult.length===myObj.database.length){
    stanResult = [];
    //hide the loading div
    //alert("conditions met");
    /*$("#loadDiv1").css("display", "none");
 $(".symbolVisibility").css("display", "inline");*/
                    //////// original animation manager code////////////
                    /*if(tagsFullStandard.key === 1){
console.log("tags full don't run function");    
//
$("#oneRegion").css("opacity", "0.0");
$(".symbolVisibility").css("display", "inline");
$("#oneRegion").animate({
    
   
    opacity: "+=1"
    
  }, 1000, function() {
  console.log("ran main div animation");
 
  });
//
} else{
loadingFunction("#loadIcon1","loadIcon3Class","loadIcon3ClassFin","#loadingText1","#rectYear3","#loadDiv1", "#oneRegion","#loadIcon1,#loadingText1");                   //
 tagsFullStandard.key = 1;
console.log("tags empty loading function for region ran");
console.log("tagsFullStandard="+tagsFullStandard);
//

}    
*/
animationManager("#loadIcon1","loadIcon3Class","loadIcon3ClassFin","#loadingText1","#rectYear3","#loadDiv1", "#oneRegion","#loadIcon1,#loadingText1",tagsFullStandard);               
}//// end of if
              
              
              
              /////////////////////////////////////////////////////////////////
//$('#Period').append("<p>"+symbol.lonPeriod+"<p>"); //this will give you years. change the div to where you want them to appear
              ////
              // $("#oneRegion").addClass("#important");
          
            
              //// this is the code that handles clicking on a symbol and it appearing at the top
             $(document).off('click', "#imgIdStandard"+index+"").on('click',"#imgIdStandard"+index+"", function(){
                
                 $( ".standardStyle" ).animate({//backgroundColor: "#E8F1F5",
                                               opacity: "0.5",
                                               height: "90px"});
                                           
                                           $("#imgIdStandard"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "100px",
                                               opacity: "1"
       });
                                           
    $('#imgTag4').empty();
$('#imgTag4').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+stanImgAdArray[index]+"' class='imgIdStandardTop' id='imgIdStandardTop"+index+"'  alt=''/>");    //width amd height = 65it appears in this div
$("#imgIdStandardTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "+=10px",
                                               width: "+=10px",
                                             opacity: "0.5"
                                               });
$("#imgIdStandardTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "-=10px",
                                               width: "-=10px",
                                             opacity: "1"
                                               }); 

//save function
saved[10].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'");
saved[11].unshift("<p>"+symbol.stanPeriod+"</p>");
saved2[3].unshift(symbol.imgAd);
});



                                                
                       
          }); 
            }
        };
        //OTHER EXAMPLE HAS + STR, BEFORE TRUE
        xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/standard.php?q=standard", true);
        xmlhttp.send();
    }
}

/////
//
var smallImage = document.getElementById('smallImage');
    var smallerImage = document.getElementById('smallerImage');    //change 1
    var smallerAImage = document.getElementById('smallerAImage');    //change 1
    var smallerAaImage = document.getElementById('smallerAaImage');    //change 1
    var smallestImage = document.getElementById('smallestImage');    //change 3
            
/////////////automatically call standard period to remove blank space
$(document).on('click', '#lonOffice,#birOffice,#dubOffice', function(){           //click this button for periods
  //toggle the other loading symbols to be invisible
    $("#oneRegionLoad").removeClass("hideDiv");
  $("#twoPeriodLoad").addClass("hideDiv");
  $("#threeYearLoad").addClass("hideDiv");
  $("#fourOtherLoad").addClass("hideDiv");
    //alert("periodBtn  called");
   document.getElementById("regionBtn").click();
  //standardPeriod(standard);
 //imgCapt = [];
 //smallerImage.src = "void";
 //smallImage.src = "void";
 //alert("onclick office image clear");
      // this.onclick = null;
   
});

$(document).on('click', '#quickMatchBtn', function(){           //click this button for periods
  //alert("periodBtn  called");
//imgCapt = [];
 //smallerImage.src = "void";
 //smallImage.src = "void";
 ///alert("onclick office image clear quickmatch");

      // this.onclick = null;
   
});


//////
/////////////call london period function
//$( "#regionBtn" ).click(function() {
//$(document).one('click', '#regionBtn', function(){           //click this button for periods
  //alert("periodBtn  called");
 function regionButtonFun (){
  standardPeriod(standard); 
      // this.onclick = null;
  }
//});
/////////
//////////////blur element function
function blurElement(element, size,transition) {
    var filterVal = 'blur(' + size + 'px)';
    $(element).css({
        'filter':filterVal,
        'webkitFilter':filterVal,
        'mozFilter':filterVal,
        'oFilter':filterVal,
        'msFilter':filterVal,
        'transition':'all '+transition+'s ease-out',
        '-webkit-transition':'all '+transition+'s ease-out',
        '-moz-transition':'all '+transition+'s ease-out',
        '-o-transition':'all '+transition+'s ease-out'
    });

}





//////////////////////////// Duty function
function dutyPeriod(str) {
  //imgAdArray = [];
 //empty the letter DIVs 
    $('#freshDate').empty();
    $('#fourOther').empty();
           $(".symbolVisibility").css("display", "none");   //hides the symbols until they are all loaded 
imgAdArray = [];
  $('#duty').append("<p>insertion</p>",); //this is the div the images will appear in 
    if (str.length === 0) { 
        document.getElementById("testPHP").innerHTML = ""; 
        
        return;
        
    } 
    else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            
                var myObj = JSON.parse(this.responseText); 
           
            //
            $.each(myObj.database, function(index, symbol) {
                $('#duty').append("<p>"+symbol.imgAd+"</p>");
              
                ////////// old code
              var newImgAd = encodeURI(symbol.imgAd); 
              
              
              //$('#fourOther').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdDuty"+index+"' class='dutyStyle' alt=''/>"); //this is the div the images will appear in
            // $('#fourOther').append("<p>"+symbol.DutyYear+"<p>"); //this will give you years. change the div to where you want them to appear
              ////////////////////////// hold the results until they are all loaded
              
               dutyResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdDuty"+index+"' class='dutyStyle symbolVisibility'  alt=''/>");
                $('#fourOther').append(dutyResult[index]);
                 
if(dutyResult.length===myObj.database.length){
    dutyResult = [];
    animationManager("#loadIcon3","loadIcon3Class","loadIcon3ClassFin","#loadingText3","#rectYear4","#loadDiv3", "#fourOther","#loadIcon3,#loadingText3",tagsFullDuty);
                    /*
    //hide the loading div
    alert("conditions met");
    $( "#loadIcon3").removeClass("loadIcon3Class");
    console.log("done");
    $( "#loadIcon3").addClass("loadIcon3ClassFin");
    
                $( "#loadIcon3,#loadingText3" ).animate({
    
    left: "-=198"
    
  }, 900, function() {
    console.log("animation completed");
    $( "#loadIcon3").removeClass("loadIcon3ClassFin");
    $("#loadIcon3").css("width", "60px");
    $("#loadIcon3").css("height", "60px");
  });
  //shrink the rectangle
$( "#rectYear4" ).animate({
    
   
    width: "-=200"
    
  }, 900, function() {
    console.log("animation completed");
 
  });
 //stepped animation
 $( "#loadIcon3,#loadingText3" ).animate({
    
    opacity: "0.0"
    
  }, 900, function() {
    console.log("animation completed 2 ");
    $("#loadDiv3").css("display", "none");
 $(".symbolVisibility").css("display", "inline");
  });
  //
   $( "#fourOther" ).animate({
    
   
    opacity: "+=1"
    
  }, 5000, function() {
    console.log("four other animation");
 
  }); */
 
  //loadingFunction("#loadIcon3","loadIcon3Class","loadIcon3ClassFin","#loadingText3","#rectYear4","#loadDiv3", "#fourOther","#loadIcon3,#loadingText3");                   //
    
                //sideways animation
              
 

                
                ///
}
////////////// this code from ui point on view enlarges the selected symbol, greys out the rest, and enlarges the 
//the selected symbol as it appears at the top
              
                
              //// this is the code that handles clicking on a symbol and it appearing at the top
             $(document).off('click', "#imgIdDuty"+index+"").on('click',"#imgIdDuty"+index+"", function(){
                 
                 $( ".dutyStyle" ).animate({//backgroundColor: "#E8F1F5",
                                               opacity: "0.5",
                                               height: "65px",
                                           width: "65px"
                 });
            
//add the class to the imageletterId
//$("#imgIdLetter"+index+"").addClass("letterStyle");
           // try JQUERY animate method////////////////////////////\
           $("#imgIdDuty"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "75px",
                                               width: "75px",
                                               opacity: "1"
       });
       /////////
       
    $('#imgTag3').empty();
$('#imgTag3').append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdDutyTop"+index+"' class='imgIdDutyTop' alt=''/>");    //it appears in this div

                 $("#imgIdDutyTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "+=10px",
                                               width: "+=10px",
                                             opacity: "0.5"
                                             
                                               });
$("#imgIdDutyTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "-=10px",
                                               width: "-=10px",
                                             opacity: "1"
                                             
                                               }); 
///blur other elements

// saves
saved[9].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'");
saved[8].unshift("<p>"+symbol.stanPeriod+"</p>");
saved2[2].unshift(symbol.imgAd);
});


 
 
//////////////////////////// old code

                                                
                       
          }); 
            }
        };
        //OTHER EXAMPLE HAS + STR, BEFORE TRUE
        xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/standard.php?q=" + str, true);
        xmlhttp.send();
    } //end of duty code
} //end of function
//$( "#otherBtn" ).click(function() {
//$(document).one('click', '#otherBtn', function(){           //click this button for periods
    function dutyButtonFun (){
        //alert("latest build");
$("#oneRegionLoad").addClass("hideDiv");
  $("#twoPeriodLoad").addClass("hideDiv");
  $("#threeYearLoad").addClass("hideDiv");
  $("#fourOtherLoad").removeClass("hideDiv");
    //this.onclick = null;
  dutyPeriod(dutyOff);  
//}); 
    }
//make loading div visible use a if button active else toggle off
    
/////
//////////////////////////////////////////////alphabet function 
function alpha(str,target,clickedImage,office
        ) {  ////this function takes a lot of parametres and is used by the next two functions
    console.log("alpha ran");
   //clear array
   imgAdArray = [];
   yeaResult = [];
   //
    if (str.length === 0) { 
        document.getElementById("testPHP").innerHTML = "";     
        return;
    } else {
        // year date made global variables
        var imgAdStr;
        var imgYear;
       
        // 
        //alert("alpha called");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
            var myObj = JSON.parse(this.responseText); 
           
            
            $.each(myObj.database, function(index, symbol) {
             //NOT IN OTHER EXMAPLE 
             if(office===""&&str==="letterZ"){
                    //console.log("office=__"+letterOff+"str=___"+letterRequest);
            console.log("lon Table case___"+imgAdStr);  
            imgAdStr = symbol.imgAd;
               imgYear = imgAdStr.substring(66,70); 
        }else{console.log("Normal case");
                                console.log("office=__"+office+"str=___"+str);

        imgAdStr = symbol.imgAd;
               imgYear = imgAdStr.substring(five,six); 
        }
             
             
             ////
                var newImgAd = encodeURI(symbol.imgAd);
              /// new insertion
               
             
              //$(target).append("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'id='imgIdLetter"+index+"' class='letterStyle' alt=''/>");
                                          //$(target).append("<img src='ss.assets/letterBackground2.png'id='imgBackground"+index+"' class='squareStyle' alt=''/>");
///////// loading screen ////////////////////////////////
yeaResult.push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"' id='imgIdLetter"+index+"' class='symbolVisibility letterStyle'  style='' alt=''/>");
                $(target).append(yeaResult[index]);
                //alert("myObj.database.length=_____"+myObj.database.length);
if(yeaResult.length===myObj.database.length){
    console.log("conditions met on year");
    //alert("conditions met");
    animationManager("#loadIcon2","loadIcon3Class","loadIcon3ClassFin","#loadingText2","#rectYear","#loadDiv2", "#threeYear","#loadIcon2,#loadingText2",tagsFullYear);
                              //loadingFunction("#loadIcon2","loadIcon3Class","loadIcon3ClassFin","#loadingText2","#rectYear","#loadDiv2", "#threeYear","#loadIcon2,#loadingText");                   //

    //hide the loading div
    /*$("#loadDiv2").css("display", "none");
 $(".symbolVisibility").css("display", "inline");  */  
}/*else{
    //alert("else conditions met");
$("#loadDiv2").css("display", "inline");
 $(".symbolVisibility").css("display", "none");      
}*/
///////////////




/////////////////////////////////////////////////////////
                /*$(target).append("<div class='square squareStyle'></div>");*/

        //this takes the year from the img address
              //var imgAdStr = symbol.imgAd;
                //var imgYear = imgAdStr.substring(five,six); 
                console.log("letter"+str+"index"+index+"year___"+imgYear);
                //$(target).append("<p>"+imgYear+"</p>");
                 //this will give you years. change the div to where you want them to appear
              ////adding image tags
              //$(document).one('click',"#imgIdLetter"+index+"", function(){        //handles clicking on an symbol            
            //check button is still working after first click through
            //alert("yes hello I still work____"+"#imgIdLetter"+index);
            //
                  
                  //remove the previous Image when new one is clicked
            //var topImage = "#imgIdLetterTop"+index+"";
             //if($(topImage).length<0){alert("you've got length man");}
             //
            
    //$(clickedImage).empty();
//$(clickedImage).append($("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'id='imgIdLetterTop"+index+"' alt=''/>").width(65).height(65));
//check that tag is correct
/*$(document).one('click',topImage, function(){
 alert("you clicked me___"+topImage);
     });*/
//
///save function
///save function
//saved[4].push("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'");
//saved[1].push("<p>"+imgYear+"</p>");
//saved2[0].push(symbol.imgAd);
//});
   /////// brand new on click event that accomodates multiple clicks - Jesus Christ
   $( "#imgIdLetter"+index+"" ).click(function() {
  //change all clicked letters back to their original state
  $( ".letterStyle" ).animate({//backgroundColor: "#E8F1F5",
                                               opacity: "0.5",
                                               height: "60px"});
            
//add the class to the imageletterId
//$("#imgIdLetter"+index+"").addClass("letterStyle");
           // try JQUERY animate method////////////////////////////\
           $("#imgIdLetter"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "75px",
                                               opacity: "1"
       });
           
       
           ///////////////////////////////////////////////////////
           
                  //
                  //remove the previous Image when new one is clicked
            //var topImage = "#imgIdLetterTop"+index+"";
             //if($(topImage).length<0){alert("you've got length man");}
             // add some feedback so that the letter goes grey when clicked

             //$("#imgIdLetter"+index+"").css("opacity", "0.5");
             /*$("#imgIdLetter"+index+"").css("background-color", "yellow");
             $("#imgIdLetter"+index+"").css("border-radius", "15px");*/
           
             
             //
            
    $(clickedImage).empty();
$(clickedImage).append($("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'id='imgIdLetterTop"+index+"' class='imgIdLetterTop' alt='' style='opacity: 0;'    />"));
//add animation to the top
 $("#imgIdLetterTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "+=10px",
                                               width: "+=10px",
                                             opacity: "0.5"
                                               });
$("#imgIdLetterTop"+index+"").animate({//backgroundColor: "#4CAECD",
                                               height: "-=10px",
                                               width: "-=10px",
                                             opacity: "1"
                                               });                                               

//
//check that tag is correct
/*$(document).one('click',topImage, function(){
 alert("you clicked me___"+topImage);
     });*/
//
///save function
///save function
saved[4].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/"+newImgAd+"'");
saved[1].unshift(imgYear);
saved2[0].unshift(symbol.imgAd);



///
});
   
   
   
   ///////////////             
          }); 
            }
        };
        xmlhttp.open("GET", "http://ec2-54-246-238-240.eu-west-1.compute.amazonaws.com/alpha.php?q=" + str + office, true);
        xmlhttp.send();
    }          //end of alpha code
    
    ////dummy values
/*saved[4].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/DigitisedSymbols/DUBLIN/Grouped/DDateLetters1638-1998/B/DL.1659.png' >");
saved[1].unshift("1673");
saved2[0].unshift("DigitisedSymbols/DUBLIN/Grouped/DDateLetters1638-1998/B/DL.1659.png");*/
        
}
//dummy values
/*saved[4].unshift("<img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/DigitisedSymbols/DUBLIN/Grouped/DDateLetters1638-1998/B/DL.1659.png' >");
saved[1].unshift("1673");
saved2[0].unshift("DigitisedSymbols/DUBLIN/Grouped/DDateLetters1638-1998/B/DL.1659.png");*/






///////////////////////////////////////////// quick match letter selection page
function allAlpha2() {
  console.log("allAlpha ran");
$.each(alphaArray, function(index,value){
   
var alphaArrayVal = '#'+1+value;
var letterRequest = 'letter' + alphaArray[index];

//$(document).one('click',alphaArrayVal, function(){    //these are the letter buttons you click
  //clear the previously selected letter
               $('#freshDate').empty();
               //
  alpha("letterA","#freshDate","#imgTag2","lonTable"
          );  
  
//});
});

} //end of AllAlpha2


//allAlpha2(); //function called here




///////////////// clear apha tags //////////









/// end of clear Alpha

/////////////////////// save function//////////////////////
//$("#firstSave").click(function() {
$(document).on('click',"#firstSave", function(){
console.log("first save clicked");

//reverseLoading("#loadIcon1,#loadingText1","#rectYear3","#loadDiv1","#oneRegion");// region

//reverseLoading("#loadIcon2,#loadingText","#rectYear","#loadDiv2","#threeYear",tagsFullYear); //year
//reverseLoading("#loadIcon3,#loadingText3","#rectYear4","#loadDiv3","#fourOther"); //other
//reverseLoading("#loadIcon","#rectYear2","#loadDiv","#twoPeriod"); //period
/*clearData();
reverseLoadingPosition("#loadIcon1","48px","#loadingText1","52px","#rectYear3","200px","#loadDiv1","#oneRegion");
  reverseLoadingPosition("#loadIcon2","55px","#loadingText2","58px","#rectYear","200px","#loadDiv2","#threeYear");
  reverseLoadingPosition("#loadIcon3","48px","#loadingText3","53px","#rectYear4","200px","#loadDiv3","#fourOther");
  reverseLoadingPosition("#loadIcon","50px","#loadingText","53px","#rectYear2","200px","#loadDiv","#twoPeriod");*/

//// other save options
// e.g saved[5].push("chosen title");
$('#listReg').append("<p>"+saved[10]+"<p>");
$('#listOth').append("<p>"+saved[9]+"<p>");
$('#listPer').append("<p>"+saved[3]+"<p>");
$('#listYea').append("<p>"+saved[4][0]+"<p>");
//alert("year saved for firstsave"+saved[1][0]);

//$('#yearValue').append("<p style='position:relative;left:20px'> Year:"+saved[1][0]+"<p>");
$('#yearValue').append("<p id='yearSaved' >Value by Year</p><a style='position:relative;left:35px'>"+saved[1][0]+"</a>"
);

//$('#listRegVal').append("<p>"+regionLabel+"<p>");
//$('#listPerVal').append("<p>"+periodStart+"-"+periodEnd+"<p>");
//reset loading tags



//validateSave();
//

});
///////////// clear everything when quickmatch is clicked
$(document).on('click',"#quickMatchBtn", function(){
 console.log("quickmatch clicked");

/*reverseLoading("#loadIcon1,#loadingText1","#rectYear3","#loadDiv1","#oneRegion");// region

reverseLoading("#loadIcon2,#loadingText","#rectYear","#loadDiv2","#threeYear"); //year
reverseLoading("#loadIcon3,#loadingText3","#rectYear4","#loadDiv3","#fourOther"); //other
reverseLoading("#loadIcon","#rectYear2","#loadDiv","#twoPeriod"); //period*/
clearData();
reverseLoadingPosition("#loadIcon1","48px","#loadingText1","52px","#rectYear3","200px","#loadDiv1","#oneRegion");
  reverseLoadingPosition("#loadIcon2","55px","#loadingText2","58px","#rectYear","200px","#loadDiv2","#threeYear");
  reverseLoadingPosition("#loadIcon3","48px","#loadingText3","53px","#rectYear4","200px","#loadDiv3","#fourOther");
  reverseLoadingPosition("#loadIcon","50px","#loadingText","53px","#rectYear2","200px","#loadDiv","#twoPeriod");

});
//clear save queue

/*$(document).one('click',"#linkToSaves", function(){
$('#mySlist').empty();   
});*/



//

////////////////////// save to storage ///////////////
//new document click to replace one click
/*$( "#saveButton" ).on( "click", function() {
///
//$(document).one('click',"#saveButton", function(){
    alert("save button cliked");
    var newTitle = document.getElementById('newTitle').value; //name
    var newNote = document.getElementById('newNote').value; //notes
    saved[5].push(newTitle);
    saved[7].push(newNote);
$('#savedTitle').append("<h3>"+saved[5]+"<h3>");
$('#savedNotes').append("<p>"+saved[7]+"<p>");
   geoLocation(saved[5],saved[7],saved2[3],saved2[1],saved2[0],saved2[2],saved[12],imgCapt[0]);
    
 localStorage.setItem('saves', JSON.stringify(saved));  //////////////////////////// remove 
 //
 $('#imgTag1').empty();
 $('#imgTag2').empty();
 $('#imgTag3').empty();
 $('#imgTag4').empty();
 // dump the other imageholding tags

 
    $('#zeroStandard').empty();
 $('#duty').empty();
 $('#freshDate').empty();

});*/
/// create a function to run inline on index page instead
function saveButtonClicked() {
    clearFields();
//alert("save button cliked");
    var newTitle = document.getElementById('newTitle').value; //name
    var newNote = document.getElementById('newNote').value; //notes
    saved[5].unshift(newTitle);
    saved[7].unshift(newNote);
$('#savedTitle').append(saved[5]);
$('#savedNotes').append("<p>"+saved[7]+"<p>");
   geoLocation(saved[5][0],saved[7][0],saved2[3][0],saved2[1][0],saved2[0][0],saved2[2][0],saved[12][0],imgCapt[0]);
    //alert("imgcapt=__"+imgCapt[0]);
 localStorage.setItem('saves', JSON.stringify(saved));  //////////////////////////// remove 
 //
 $('#imgTag1').empty();
 $('#imgTag2').empty();
 $('#imgTag3').empty();
 $('#imgTag4').empty();
 // dump the other imageholding tags

 
    $('#zeroStandard').empty();
 $('#duty').empty();
 $('#freshDate').empty();  
//features of other save function merged with this one
var retrievedSave = JSON.parse(localStorage.getItem('saves'));

$('#saveReg').append("<p>"+retrievedSave[10][0]+"<p>");
//alert("appended__"+retrievedSave[4][0]+"____"+retrievedSave[4][1]);
$('#saveOth').append("<p>"+retrievedSave[9][0]+"<p>");
$('#savePer').append("<p>"+retrievedSave[3][0]+"<p>");
$('#saveYea').append("<p>"+retrievedSave[4][0]+"<p>");
//$('#saveYea').append("<p><img src='https://s3.eu-west-1.amazonaws.com/symbolsmith/DigitisedSymbols/DUBLIN/Grouped/DDateLetters1638-1998/B/DL.1659.png' ><p>");
//
//alert("save year="+retrievedSave[1][0]);
//$('#saveSaved').append("<h4 style='display:inline-block;'>Year:</h4><span style='margin-left:10px>dummy"+retrievedSave[1][0]+"</span>");
//$('#saveSaved').append("<h4 style='display:inline-block;'>Year:</h4>");
$('#saveSaved').append("<h4 style='display: inline-block;'>Year:"+retrievedSave[1][0]+"</h4>");
//alert("saveButtonClicked"+retrievedSave[1][0]);
$('#ssTitle').append("<h3>"+retrievedSave[5][0]+"</h3>");
$('#ssNotes').append("<p>"+retrievedSave[7][0]+"<p>");
//hide save overlay for next person

$("#nameItem").css("display", "none");
//
$("#largerAImage").css("display", "block");
$("#largerAImage").attr("src",imgCapt[0]);
                 //$("#smallerAImage").attr("src","");
                 //alert("symbol.IMGURI___"+symbol.IMGURI);
                 
                 
                  $("#largerAImage").css("display", "block");
///clear the results tags
$('#listPer,#listYea,#listOth,#listRegVal,#listPerVal,#listYeaVal,#listOthVal,#listReg,#yearValue').empty();
/*<li id="listReg"></li>
        <li id="listPer"></li>
        <li id="listYea"></li>
        <li id="listOth"></li>
        </ul>  
        </div>
         <!-- // values will appear here // -->
         <div data-role="navbar" id="selectMarkValue">
       <ul>
        <li id="listRegVal"></li>
        <li id="listPerVal"></li>
        <li id="listYeaVal"></li>
        <li id="listOthVal"></li>*/

clearData();
reverseLoadingPosition("#loadIcon1","48px","#loadingText1","52px","#rectYear3","200px","#loadDiv1","#oneRegion");
  reverseLoadingPosition("#loadIcon2","55px","#loadingText2","58px","#rectYear","200px","#loadDiv2","#threeYear");
  reverseLoadingPosition("#loadIcon3","48px","#loadingText3","53px","#rectYear4","200px","#loadDiv3","#fourOther");
  reverseLoadingPosition("#loadIcon","50px","#loadingText","53px","#rectYear2","200px","#loadDiv","#twoPeriod");
} //end of 


//
///////////////////////// access saves function /////////////////
/*$(document).one('click',"#saveButton", function(){
   
function retrieveSave() { 
var retrievedSave = JSON.parse(localStorage.getItem('saves'));

$('#saveReg').append("<p>"+retrievedSave[10]+"<p>");
$('#saveOth').append("<p>"+retrievedSave[9]+"<p>");
$('#savePer').append("<p>"+retrievedSave[3]+"<p>");
$('#saveYea').append("<p>"+retrievedSave[4]+"<p>");
$('#saveSaved').append("<p>"+retrievedSave[1][0]+"<p>");
$('#ssTitle').append("<p>"+retrievedSave[5]+"<p>");
$('#ssNotes').append("<p>"+retrievedSave[7]+"<p>");
//$('#yearSaved').append("<p>"+retrievedSave[2]+"<p>");
//$('#listReg').append("<p>"+retrievedSave[10]+"<p>");
//$('#listOth').append("<p>"+retrievedSave[8]+"<p>");
//$('#listPer').append("<p>"+retrievedSave[3]+"<p>");
//$('#listYea').append("<p>"+retrievedSave[4]+"<p>");
//$('#listReg').append("<p>"+retrievedSave[11]+"<p>");

//$('#listOth').append("<p>"+retrievedSave[9]+"<p>");
//$('#Period').append("<p>"+retrievedSave[9]+"<p>");
//$('#Period').append("<p>"+retrievedSave[10]+"<p>");
//$('#Period').append("<p>"+retrievedSave[11]+"<p>");

}
retrieveSave();
});*/
//////////////////// clear fields upon new project creation////
//////////save///////
function clearFields() {
$('#saveReg').empty();
                  $('#savePer').empty();
                  $('#saveSaved').empty();
                  $('#saveYea').empty();
                  $('#saveOth').empty();
                  $('#ssTitle').empty();
                  $('#ssTitle').empty();
                  $('#ssNotes').empty();
                  //$('#yearValueSaved').empty();
                  
                  

}
///////////////////////

////////////////////////////////////// ignore all below this
periodArray = ["1628-1679",
"1680-1697",
"1697-1698",
"1699-1715",
"1716-1719",
"1720-1725",
"1726-1728",
"1729-1735",
"1736-1739",
"1740-55",
"1756-1755",
"1796-1815",
"1816-1821",
"1836-1837",
"1838-1837",
"1838-1855",
"1856-1875",
"1876-1895",
"1916-1922",
"1923-1933",
"1934-1935",
'1936-1951',
"1954-1955",
"1956-1974",
"1975-1976",
"1977"];
////
// aArray = ["DL.1678.png", "DL.1716.png", "DL.1736.png", "DL.1756.png", "DL.1776.png" ,"DL.1796.png" ,"DL.1816.png", "DL.1836.png" ,"DL.1856.png", "DL.1876(1).png" ,"DL.1876(2).png", "DL.1896.png", "DL.1916.png", "DL.1936.png", "DL.1956.png"," DL.1975.png"];

alphaArray = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z"];



////





// $(document).on('click', '#about', function(){
    
 // tableCreator(); 
 
//);
