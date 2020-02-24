$('.main').click(function () {
	$(this).children('.hide').slideToggle(1200);
	$(this).children('.show').toggle(1500);
  });
  $("button").click(function (any) {
	var client = document.getElementById('nameDetail').value;
	alert(' Dear ' + ' esteemed ' + name + ' we have received your message. ' + ' Feel free to reach us anytime');
	name.preventDefault();
  });
  $("button").on('click', function () {
	$('form').each(function () {
	  this.reset();
	});});
  $(".card").hover(function () {
	$(this).children(".card-1").fadeToggle(1000, "linear");
  });