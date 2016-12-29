(function(exports) {
  var themeChanger = {
    settings: {
      wrapper: $('.wrapper'),
      buttons: $('.controls > button')
    },

    init: function () {
      var _self = this;
      this.settings.buttons.on('click', function () {
        var $node = $(this),
            theme = $node.data('theme');
        _self.settings.wrapper.removeClass().addClass('.wrapper ' + theme);
        _self.settings.buttons.removeAttr('disabled');
        $node.attr('disabled', true);
      });
    }
  };

  themeChanger.init()
}(window));

// add cards
$('.btn-floating').click(function () {

  $('.row1')
  .append('<div class="component__list-item card"><textarea id="textarea" class="materialize-textarea component__heading"></textarea><div class="card-action component__list"><a class="waves-effect waves-light btn component__list-btn" id="archive">archive</a></div></div>')
  $('.row2')
  .append('<div class="flip"><div class="component__list-item flipcard"><div class="face front">Web Application Workshop</div><div class="face back">0 Day left</div></div></div>')
  $('.row3')
  .append('<div class="slide-in"><div class="component__list-item box"><span class="original"><p>Web Application Workshop</p></span><div class="overlay"><p> 0 Day Left</p></div></div></div>')
  $('.row4')
  .append('<div class="rotate"><div class="component__list-item box"><span class="original"><p>Web Application Workshop</p></span><div class="overlay"><p> 0 Day Left</p></div></div></div>')
});


$('.flip').click(function(){
    $(this).find('.flipcard').addClass('flipped').mouseleave(function(){
        $(this).removeClass('flipped');
    });
    return true;
});
