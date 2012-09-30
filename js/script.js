$('#triangles').plaxify({"xRange":180,"yRange":40})
//$.plax.enable()

/*
$.getJSON('/skills.json', function(data) {
  var items = [];

  console.log("data: " + data.languages[0].url);
  
  $.each(data.languages, function(key, val) {
    items.push('<li><a href="' + val.url + '" class="' + val.skill_level + '">' + val.name + '</a></li>');
  });

  $('<ul/>', {
    'id': 'languages',
    html: items.join('')
  }).appendTo('#skills');
});*/


$('.project a').colorbox({rel: 'nofollow', maxWidth: '90%', maxHeight: '90%'});
$('#resume-link').colorbox({inline: true, width: '50%'});