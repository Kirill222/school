$(document).ready(function () {
  let menuItems = $(document).find('.menu .item')
  let pageWrapper = $(document).find('.pages')

  let burgerBtn = $(document).find('.burger-button')
  let closeBtn = $(document).find('.close')

  let mobileMenu = $(document).find('.mobile-menu')

  console.log(pageWrapper)

  menuItems.on('click', function () {
    let pageNumber = $(this).attr('data-page')
    console.log(pageNumber)

    $(this).closest('.menu').find('.active').removeClass('active')
    $(this).addClass('active')
    mobileMenu.css('top', '-100vh')

    pageWrapper.find('.current-page').removeClass('current-page')
    pageWrapper.find(`[data-page=${pageNumber}]`).addClass('current-page')
  })

  burgerBtn.on('click', function () {
    mobileMenu.css('top', '0')
  })

  closeBtn.on('click', function () {
    mobileMenu.css('top', '-100vh')
  })
})
