var spa = (function() {
  var initModule = function() {
    $('#spa').html(
      '<h1 style="display:inline-block; margin:25px;">'
      + 'hello world!'
      + '</h1>'
    );
  };
  return { initModule: initModule };
}());
