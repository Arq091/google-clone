document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "enter") {
      redirect();
    }
    $("#form").bind('submit', function() {
      $(this).children('input[name=excludethisfield]').attr('disabled', true);
    });
    e.preventDefault();
  }); 

function redirect() {
    const textbox = document.getElementById('search-box');
    const textboxValue = textbox.value;
    window.open('https://www.google.com/search?q=' + textboxValue , 'blank');
    textbox.value = '';
}