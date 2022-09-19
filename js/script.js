$(document).ready(function () {
  let menuItems = $(document).find('.menu .item')
  let pageWrapper = $(document).find('.pages')

  console.log(pageWrapper)

  menuItems.on('click', function () {
    let pageNumber = $(this).attr('data-page')
    console.log(pageNumber)

    $(this).closest('.menu').find('.active').removeClass('active')
    $(this).addClass('active')

    pageWrapper.find('.current-page').removeClass('current-page')
    pageWrapper.find(`[data-page=${pageNumber}]`).addClass('current-page')
  })
})
