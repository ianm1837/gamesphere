function shareOnSocialMedia() {
    var url = "https://www.example.com";
    var message = "Check out this cool website!";
  
    var encodedMessage = encodeURIComponent(message);
  
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + url + "&quote=" + encodedMessage, "_blank");
  }  
