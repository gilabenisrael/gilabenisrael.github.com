$(function() {
  var drawings = [
    {
      url: 'assets/img/drawings/drawing1.jpg',
      desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
    },
    {
      url: 'assets/img/drawings/drawing2.jpg',
      desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
    },
    {
      url: 'assets/img/drawings/drawing3.jpg',
      desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
    },
    {
      url: 'assets/img/drawings/drawing4.jpg',
      desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
    },
    {
      url: 'assets/img/drawings/drawing5.jpg',
      desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
    },
  ];

  var work = $('#work');

  drawings.forEach(function(drawing, i) {

    var obj = $($('#tmpl-work').html());
    obj.attr('id', 'work-' + i);

    var img = obj.find('img');
    img.attr('src', drawing.url);

    var desc = obj.find('.desc');
    desc.text(drawing.desc);

    obj.find('.next').attr('href', '#work-' + (i+1).toString());
    obj.find('.prev').attr('href', '#work-' + (i-1).toString());

    img.load(function() {
      work.append(obj);
    });
  });

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