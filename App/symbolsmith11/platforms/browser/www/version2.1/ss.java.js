/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* NAVIGATION MENU */

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function closeSave() {
    document.getElementById("savedResult").style.width = "0";
}

/* IDENTIFY PAGE - HIDE TAB ELEMENTS */
function openCat(evt, catName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}


/* SAVE NEW ITEM MODAL */
// Get the modal
var modal = document.getElementById('nameItem');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

/* page 1 upload image */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myEditFunction() {
    document.getElementById("myEditDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/// matching year validation overlay ///////
// 
//function openCheck() {
///    document.getElementById("myMatchCheck").style.height = "100%";
//}

//function closeCheck() {
//    document.getElementById("myMatchCheck").style.height = "0%";
//}

// corrrect match //
//function openCorrect() {
  //  document.getElementById("mycorrectCheck").style.height = "100%";
//}

 /*  tabs IN EXPLORE SECTION */
/* //////////////////////// */
      
function openCity(evt, cityName) {
    var i, tabStcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabStcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* CONFIRMING CHOICE OF TOWN */
/* SNACK BAR POP BRINGS YOU TO NEXT PAGE */
function townValidation() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    /* var destination = 'stepTwo';
                 $('body').fadeOut(2000, function() {
                     window.location = destination;
                 }); */
    
}

/* WHEN IDENTIFY CLICK A TAB - DISPLAY A TIP */
/* show and hide info */
$(document).ready(function(){
    $("#regionBtn").click(function(){
        $("#choose,#ThisIsPeriod,#ThisIsOther,#ThisIsYear ").hide();$('#ThisIsRegion').show();
    });
    $("#periodBtn").click(function(){
        $("#ThisIsRegion,#choose,#ThisIsOther,#ThisIsYear").hide();$('#ThisIsPeriod').show();
    });
    $("#yearBtn").click(function(){
        $("#ThisIsPeriod, #ThisIsOther,#ThisIsRegion,#choose").hide();$('#ThisIsYear').show();
    });
    $("#otherBtn").click(function(){
        $("#ThisIsYear,#choose,#ThisIsRegion,#ThisIsPeriod ").hide();$('#ThisIsOther').show();
    });
    
});

/* IDENTIFY PAGE EMPTY A DIV TO STOP REPOPULATING DIVS */
/* explore database */
$(document).on('swipeleft', '#onOne,#onTwo,#onThree,#onFour,#onFive, #onSix', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});



/* ONBOARDING SWIPE SCREENS */
$(document).on('swipeleft', '#onOpen,#onCamera,#onSelect,#onCategories,#onSave, #onEnd', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});

$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});


/* explore locations */
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
/*
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
};*/

/* my save */
/*
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
*/
