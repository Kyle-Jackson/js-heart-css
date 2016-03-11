var $h1 = $('h1');
var $ul = $('ul');

$h1.html('Sea Slugs');
$ul.addClass('slug-list');


slug.forEach(function (slug) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $figure.append($img, $caption)
  $li.append($figure)
  $ul.append($li);

});
