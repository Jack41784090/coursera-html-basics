(function (window) {
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: (name) => {
      const greet = `${speakWord} ${name}`;
      console.log(greet);
      return greet;
    }
  };

  window.byeSpeaker = byeSpeaker;
})(window);