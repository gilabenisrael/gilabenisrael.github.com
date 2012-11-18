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
    { url: 'assets/img/drawings/GilaBigDarwings-2.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-3.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-4.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-5.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-6.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-7.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-8.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-9.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-10.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-11.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-13.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-14.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-16.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-17.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-18.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-19.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-20.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-21.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-22.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-23.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-24.jpg' },
    { url: 'assets/img/drawings/GilaBigDarwings-25.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-1.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-10.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-11.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-12.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-13.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-2.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-3.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-4.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-5.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-6.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-7.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-8.jpg' },
    { url: 'assets/img/drawings/GilaSmallDrawings-9.jpg' },
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