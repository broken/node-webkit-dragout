$element[0].addEventListener('dragstart', function( e ) {

  angular.forEach(selected, function(v, k) {
    if(paths.length > 0) {
      paths += '|\n|';
    }

    paths += v.localPath;
  });

  e.dataTransfer.setData( 'text/plain', 'extensis-filenames-type:' + paths );
});
