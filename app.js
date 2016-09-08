var string = "";

$(".number").click(function() {
  string+= $(this).text();
  $("#input").val(string);
})


$("#equals").on("click", function() {
  $("#input").val(eval(string));
});

$("#reset").on("click", function() {
  $("#input").val("");
  string = "";
});