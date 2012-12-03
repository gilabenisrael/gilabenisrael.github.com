$(function() {
  var drawings = [
    [
      {
        name: 'drawing1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'drawing2',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'drawing3',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'drawing4',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'exhibition1',
        desc: '"זה זה ", 2012, מיצב לתערוכה "נושמים בטון", 240*165 ס"מ'
      },
      {
        name: 'drawing5',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
	  {
        name: 'drawing20',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
	  {
        name: 'drawing100X100-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
	  
    ],
    [
      { 
	    name: 'GilaBigDarwings-2',
	    desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
	  },
      { name: 'GilaBigDarwings-3' },
      { name: 'GilaBigDarwings-4' },
      { name: 'GilaBigDarwings-5' },
      { name: 'GilaBigDarwings-6' },
      { name: 'GilaBigDarwings-7' },
      { name: 'GilaBigDarwings-8' },
      { name: 'GilaBigDarwings-9' },
      { name: 'GilaBigDarwings-10' },
      { name: 'GilaBigDarwings-11' },
      { name: 'GilaBigDarwings-13' },
      { name: 'GilaBigDarwings-14' },
      { name: 'GilaBigDarwings-16' },
      { name: 'GilaBigDarwings-17' },
      { name: 'GilaBigDarwings-18' },
      { name: 'GilaBigDarwings-19' },
    ],
    [
      { name: 'GilaBigDarwings-20' },
      { name: 'GilaBigDarwings-21' },
      { name: 'GilaBigDarwings-22' },
      { name: 'GilaBigDarwings-23' },
      { name: 'GilaBigDarwings-24' },
      { name: 'GilaBigDarwings-26' },
	  { name: 'GilaBigDarwings-27' },
	  { name: 'GilaBigDarwings-33' },
      { name: 'GilaSmallDrawings-1' },
      { name: 'GilaSmallDrawings-10' },
      { name: 'GilaSmallDrawings-11' },
    ],
    [
      { name: 'GilaSmallDrawings-12' },
      { name: 'GilaSmallDrawings-13' },
      { name: 'GilaSmallDrawings-2' },
      { name: 'GilaSmallDrawings-3' },
      { name: 'GilaSmallDrawings-4' },
      { name: 'GilaSmallDrawings-5' },
      { name: 'GilaSmallDrawings-6' },
      { name: 'GilaSmallDrawings-7' },
      { name: 'GilaSmallDrawings-8' },
      { name: 'GilaSmallDrawings-9' },
    ],
  ];

  drawings.forEach(function(group) {
    var $group = $('<div class="work-grp">');

    group.forEach(function(drawing, i) {
      var prefix = 'assets/img/drawings/' + drawing.name;
      var thumb_url = prefix + '.thumb.jpg';
      var url = prefix + '.4.jpg';
      var title = drawing.desc || '';
      var $img = $('<a href="' + url + '" title="' + title + '"><img src="' + thumb_url + '"></a>');
      $group.append($img);
    });

    $('#work').append($group);
  });

  $('#work a').lightBox({});

  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }

  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        $(this).click(function(event) {
          event.preventDefault();
          var targetOffset = $target.offset().top - 100;
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            // location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }


});