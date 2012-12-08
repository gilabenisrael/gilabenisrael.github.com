﻿$(function() {
  var drawings = [
    
      {
        name: '60X60-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 60*60 ס"מ'
      },
      {
        name: '60X60-2',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 60*60 ס"מ'
      },
      {
        name: '100X100-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100X100-2',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100x100-3',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100X100-4',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100X100-5',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      }, 
      {
        name: '100X100-6',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },	  
      {
        name: '100X100-7',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100X100-8',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '100X100-9',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },  
      {
        name: '100X100-10',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },	  
      {
        name: '100X100-11',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 100*100 ס"מ'
      },
      {
        name: '90X90-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 90*90 ס"מ'
      },
    ],
    [
      { 
	name: '150X160-1',
	desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { 
        name: '150X160-2',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-3',
	desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-4',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-5',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-6',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'   
      },
      { name: '150X160-7',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-8',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-9',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-10',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-11',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-12',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-13',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-14',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-15',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-16',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-17',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-18',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-19',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-20',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-21',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-22',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-23',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-24',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-25',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-26',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-27',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-28',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-29',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      { name: '150X160-30',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
    ],
    [
      { name: '150X170-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*170 ס"מ'
      },
      { name: '180X150-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 180*150 ס"מ'
      },
      { name: '180X150-2',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 180*150 ס"מ'
      },
      { name: '200X210-1,
        desc: 'ללא כותרת, 2007, אקריליק על בד, 200*210 ס"מ'
      },
      { name: '210X150-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 210*150 ס"מ'
      },   
    ],
    [
      { name: '30X30-1' },
      { name: '30X30-2' },
      { name: '30X30-3' },  
    ],
    [
      { name: '40X40-1' },
      { name: '40X40-2' },
      { name: '40X40-3' },
      { name: '40X40-4' },
      { name: '40X40-5' },
      { name: '40X40-6' },
      { name: '40X40-7' },
    ],
    [
      { name: '20X20-1' },
      { name: '20X20-2' },
      { name: '20X20-3' },
      { name: '20X20-4' },
      { name: '20X20-5' },
      { name: '20X20-6' },
      { name: '20X20-7' },
      { name: '20X20-8' },
      { name: '20X20-9' },
      { name: '20X20-10' },
    ],
    [	
      {
        name: 'GilaBigDarwings-27',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: '40X40-1',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },	  
	  {
        name: 'GilaBigDarwings-28',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'GilaBigDarwings-29',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'GilaBigDarwings-30',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'GilaBigDarwings-31',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
      {
        name: 'GilaBigDarwings-32',
        desc: 'ללא כותרת, 2007, אקריליק על בד, 150*160 ס"מ'
      },
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