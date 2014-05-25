var search;
var category = "music";
var vidURL;
var results;

var videoIDs = [];

function searchVideos() {
    
    var searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key=AIzaSyBqoNc396Db0tYILTe8-qazHwuCwQkF0Kk&duration=short";
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send( null );
    results = xmlHttp.responseText;
    alert(results);
    results = $.parseJSON(results);

    parseResults();
}

function setChill() {
    search="chill music";
    searchVideos();
}
function setHappy() {
    search="happy music";
    searchVideos();
}
function setStudying() {
    search="studying music";
    searchVideos();
}
function setParty() {
    search="party music";
    searchVideos();
}
function setWorkout() {
    search="workout music";
    searchVideos();
}
function setSearch() {
    search = document.getElementById("search").value;
    searchVideos();
}

function parseResults() {
    
    videoIDs = [];
    
    $.each(results.items, function(item) {
        videoIDs.push(results.items[item].id.videoId);
    });  
    
    shuffleArray();
    
    window.open('http://www.youtube.com/watch?v='+videoIDs[0],'_blank');
}

function shuffleArray() {
    var array = videoIDs;
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    videoIDs = array;
}
