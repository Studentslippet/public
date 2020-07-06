$("input[type=checkbox]").on("change", function(){
	var arr = []
	$(":checkbox").each(function(){
	   if($(this).is(":checked")){
		 arr.push($(this).val())
	   }
	})
	var vals = arr.join("")
	var str = "https://studentslippet.no/rute.php?start=St.Olavsgate32,Oslo" + vals
	console.log(str);
	document.getElementById("showLink").value = str;



  if (vals.length > 0) {
    $('.link').html($('<a>', {
      href: str,
      text: str
    }));
  } else {
    $('.link').html('');
  }
})
