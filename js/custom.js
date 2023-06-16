$(document).ready(() => {
	$("#navigationBar").children().each((index, element) => {
		textos = ["Principal", "Nosotros", "Portafolio", "Contacto"];

		var newSpan = $("<span></span>");
		$(newSpan).css("margin-left", "auto");
		$(newSpan).css("padding-right", "15px");
		$(newSpan).html(textos[index]);
		
		$(element).html(newSpan);
		$(element).css("display", "flex");
		$(element).css("flexDirection", "revert");
		$(element).css("alignItems", "center");
	})
})


