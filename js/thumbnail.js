function youtube_thumbnail_downloader(url) {
    regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    match = url.match(regExp);
    if (match && match[1].length == 11) {
        vidurl = match[1];
        thumbnailpreview = 'http://img.youtube.com/vi/'+vidurl+'/mqdefault.jpg';
        thumbnailhq = 'http://img.youtube.com/vi/'+vidurl+'/maxresdefault.jpg';
        thumbnailmq = 'http://img.youtube.com/vi/'+vidurl+'/hqdefault.jpg';
        thumbnaillq = 'http://img.youtube.com/vi/'+vidurl+'/mqdefault.jpg';
    } else {
        alert("The URL you have entered maybe incorrect. Please Enter a correct URL.");
		location.reload();
    }
    document.getElementById('thumbnailpreview').src = thumbnailpreview;
    document.getElementById('thumbnailhq').href = thumbnailhq;
    document.getElementById('thumbnailmq').href = thumbnailmq;
    document.getElementById('thumbnaillq').href = thumbnaillq;
}
$(document).keypress(function(event) {if (event.which == 115 && (event.ctrlKey||event.metaKey)|| (event.which == 19)) {event.preventDefault();return false;}return true;});

$("#download-buttons").hide();
$("#thumbdloadbtn").click(function(){
    $("#download-buttons").slideDown(500).fadeIn(250);
	   $("#thumbdloadbtn").hide();
     $(".input-group").hide();
});