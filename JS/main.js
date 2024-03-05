(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var menu = new Menu({
       container: '.header__nav',
       toggleBtn: '.header_btnMenu',   
       widthEnabled:  1025
    })
})()