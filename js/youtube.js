var search;
var category = "music";
var vidURL;
var results;

var videoIDs = [];
//http://www.youtube.com/v/VIDEO_ID?version=3&enablejsapi=1

/*function searchVideos() {

    gapi.client.load('youtube', 'v3', function() {
        console.log('youtube API loaded...');

        var request = gapi.client.youtube.search.list({
            part: 'snippet',
            q: search
        });
        alert(request);
        var str = JSON.stringify(request);
        alert(str);
        request.execute(function(response) {

            var str = JSON.stringify(response.result);
            alert(str);
        });
    });
}*/

function searchVideos() {
    
    var searchURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&key=AIzaSyBqoNc396Db0tYILTe8-qazHwuCwQkF0Kk";
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", searchURL, false );
    xmlHttp.send( null );
    results = xmlHttp.responseText;
    //alert(results);
    parseResults();
}

function setChill() {
    search="chill";
    searchVideos();
}
function setHappy() {
    search="happy";
    searchVideos();
}
function setStudying() {
    search="studying";
    searchVideos();
}
function setParty() {
    search="party";
    searchVideos();
}
function setWorkout() {
    search="workout";
    searchVideos();
}

function parseResults() {
  /*  $.each(results.items, function(i, item) {
        alert(items[i].);
    });*/

  /*  for (int i = 0; i<results.length; i++)
    {
        
    }*/
    
    
}