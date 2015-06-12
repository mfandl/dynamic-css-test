(function (global) {
  'use strict';

  var text = '* {-webkit-transition: all 1s;} #victim {color:white; background: gray; width: 800px; height: 100px;}';
  var tokens;
  var victim;

  window.onload = function start () {
    victim = document.getElementById('victim');

    tokens = tokenize(text);
    typeText();
  };

  function typeText () {
    victim.innerHTML += tokens.shift();
    if (tokens.length > 0) return setTimeout(typeText, 40);
    updateCss();
  }

  function tokenize (text) {
    return text.split('');
  }

  function updateCss () {
    var headElement = document.head || document.getElementsByTagName('head');
    var styleElement = document.createElement('style');
    styleElement.innerHTML = text;
    headElement.appendChild(styleElement);
  }

}(this));
