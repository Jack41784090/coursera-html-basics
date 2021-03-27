(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: (name) => {
      const greet = speakWord + " " + name;
      console.log(greet);
      return greet;
    }
  };

  window.helloSpeaker = helloSpeaker;
})(window);