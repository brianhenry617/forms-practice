var bunnyName = "Flopsy";

function hippityHoppity() {
  var bunnyName = "Mopsy";
  alert(bunnyName);

hippityHoppity();
alert(bunnyName);

$("form#some-form").submit(function(event) {
  var someInput = $("input#some-input").val();

  event.preventDefault();
});
