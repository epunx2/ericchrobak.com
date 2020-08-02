var main = function(){
 $(function(){

    var cities = [
      'Antioch',
      'CHicago',
      'El Paso',
      'Gurnee',
      'Lindenhurst',
      'Milwaukee',
      'Round Lake',
      'Tampa Bay'
    ];
    $('#search').autocomplete({
      source: cities
    });
 });
};

$(document).ready(main);
