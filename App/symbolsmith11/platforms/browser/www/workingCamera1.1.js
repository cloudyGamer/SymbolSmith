var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var message = "it failed";

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    //setTimeout("alert('device ready');", 1);
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
    //Uncomment to view the base64 encoded image data
    //console.log(imageData);
      //setTimeout("alert('onPhotoDataSuccess'+imageData);", 1);
      //alert('onPhotoDataSuccess___Ran:'+imageData);
    var photoData = imageData.toString();
  imgCapt.unshift(photoData);
   alert("photodata="+photoData);
    // Get image handle
    //
    var smallImage = document.getElementById('smallImage');
    var smallerImage = document.getElementById('smallerImage');    //change 1
    //var smallerAImage = document.getElementById('smallerAImage');    //change 1
    var smallerAaImage = document.getElementById('smallerAaImage');    //change 1
    var smallestImage = document.getElementById('smallestImage');    //change 3
    //
    // Unhide image elements
    //
    smallImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image    
    //
    
    smallImage.src =  imageData;   //commented out to test function
    //smallImage.src = "media/3 Gill Tankard Tot Measure_Horace Woodward silver hallmarks - london.jpeg";
    
    //change 2
    smallerImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallerImage.src = imageData;   //commented out to test function
    //smallImage.src = "media/3 Gill Tankard Tot Measure_Horace Woodward silver hallmarks - london.jpeg";
   //
   //change 3
   smallestImage.style.display = 'block';
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    smallestImage.src = imageData;   //commented out to test function
    //smallImage.src = "media/3 Gill Tankard Tot Measure_Horace Woodward silver hallmarks - london.jpeg";
   
   //smallerAImage.style.display = 'block';
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    //smallerAImage.src = imageData;   //commented out to test function
    //smallImage.src = "media/3 Gill Tankard Tot Measure_Horace Woodward silver hallmarks - london.jpeg";
   //
   //smallerAaImage.style.display = 'block';
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    //smallerAaImage.src =  imageData;   //commented out to test function
    //smallImage.src = "media/3 Gill Tankard Tot Measure_Horace Woodward silver hallmarks - london.jpeg";
   //
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    //alert("IMG URI from cameraAPI=___"+imageURI);
// Uncomment to view the image file URI
    // console.log(imageURI);
    var photoData = imageURI.toString();
  imgCapt.unshift(photoData);
    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');
    var largerImage = document.getElementById('largerImage');
    var largestImage = document.getElementById('largestImage');
 var largerAImage = document.getElementById('largestImage');
    // Unhide image elements
    //
    largeImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
    
    //this is the image tag used in the app
    largerAImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largerAImage.src = imageURI;   //commented out to test function
    
   //change 3
   largestImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largestImage.src = imageURI; //commented out to test function
    //change 4
    largerImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largerImage.src = imageURI; //commented out to test function
    
}

// A button will call this function
//
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                                destinationType: destinationType.FILE_URI });
}

// A button will call this function
//
function capturePhotoEdit() {
    //setTimeout("alert('capture edit');", 1);
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                                destinationType: destinationType.FILE_URI 
                            });
     
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, allowEdit: true,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
  //setTimeout("alert('failed because'+message);", 1);
}
