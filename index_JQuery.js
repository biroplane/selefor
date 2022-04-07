$(function () {
  $('.mouseCursor > h3')
    .html('<p>Ciao Mouse</p>')
    .find('p')
    .html('<marquee>Miao</marquee>')

  $('p').append('<strong>Gaetano</strong>')
  var todoList = [{
      text: "Studiare JS",
      completed: false
    },
    {
      text: "Studiare HTML",
      completed: false
    },
    {
      text: "Studiare CSS",
      completed: false
    },
    {
      text: "Studiare JQuery",
      completed: false
    },
  ]

  $(todoList).each(function (index, item) {
    console.log("Item ", item, index)
  })
  var threshold = 100
  $(window).scroll(function () {

    if ($(window).scrollTop() > threshold) {
      $('header').addClass('redBg')
    } else {
      $('header').removeClass('redBg')
    }
  })

  var mainMenu = [
   {href:"#todolist", text: "Todo List"},
   { href:"#viewlist",text:"View List"},
   { href:"#about",text:"About"},
   { href:"#footer",text:"Footer"},
  ]

  // DROPDOWN 
  var dropdown = $('.dropdownList')
  dropdown.html('')
  $(mainMenu).each(function (index, item) {
    var link = $('<a>', {
      href: item.href,
      text: item.text
    })
    var li = $('<li>')
    li.append(link)
    dropdown.append(li)
  })


  var isOpen = true
  $('.dropdownBtn').click(function () {
    if (isOpen) {
      $('.dropdownBtn span').text('▸')
      $('.dropdownList').slideUp()
      isOpen = false
    } else {
      $('.dropdownBtn span').html('▾')
      $('.dropdownList').slideDown()
      isOpen = true
    }
  })

  $('.dropdownBtn').trigger('click')


  // $('.jcarousel').jcarousel({
  //   // Configuration goes here
  //   // list: '.jcarousel-list',
  //   // items: '.jcarousel-item',
  //   animation: 'slow'
  // });

  // $('.parallax-window').parallax({imageSrc: 'https://unsplash.it/640/425?random'});

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

})
// window.addEventListener('scroll',function(){
//   if(window.scrollY>threshold){
//     console.log("Scroll superato")
//     $('header').addClass('redBg')
//   }else{
//     $('header').removeClass('redBg')
//   }

// })