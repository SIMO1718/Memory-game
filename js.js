if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log("لعبة Flip Flop واجدة تخدم بلا أنترنيت!"))
    .catch((err) => console.log("مشكل في الـ SW: ", err));
}