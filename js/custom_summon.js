// Custom Summon Boxes
	// Grand Valley State University Library Labs, 2011, 2012
	// by Matthew Reidsma, reidsmam@gvsu.edu with help from John Krull, astrom.flux@gmail.com
	// 
	// Released under Creative Commons Attribution 3.0 Unported License
	// http://creativecommons.org/licenses/by/3.0/
	//

$(function() {

	// Handle the checkboxes
	$(":checkbox").click(function() {

		var data = this.value.split("|");
		var textInput = 'input type="hidden" name="' + data[0] + '" value=\'' + data[1] + data[2] + '\' /';

		if ($(this).attr('checked')) {

			$("#search-refinements").append('&lt;' + textInput + '&gt;<br/>');

		} else { // Unchecked

			var value = $("#search-refinements").text();
			value = value.replace('<' + textInput + '>', "");
			value = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
			value = value.replace(/&gt;/g,"&gt;<br />");
			$("#search-refinements").html(value);
            
		}
	});
	
	// Date filter
	$("#start_year, #end_year").keyup(refreshDateRange);
	$("#start_month, #start_day, #end_month, #end_day").change(refreshDateRange);
	
	function refreshDateRange() {

		var start_year = $("#start_year").val();
		var end_year   = $("#end_year").val();
		
		if(end_year.length > 3) {
            
			var start_range = '*';
			var start_month = parseInt($("#start_month").val(), 10) || '';
			var start_day   = parseInt($("#start_day").val(), 10)   || '';
			var end_month   = parseInt($("#end_month").val(), 10)   || '';
			var end_day     = parseInt($("#end_day").val(), 10)     || '';

			if(start_month > 0) { start_month = '-' + (start_month.length < 2 ? "0" + start_month : start_month); } // Pad with zeros 
			if(start_day > 0)   { start_day = '-' + (start_day.length < 2 ? "0" + start_day : start_day);         } // Pad with zeros
			if(start_year > 0)  { start_range = start_year + start_month + start_day; }
		
			if(end_month > 0) { end_month = '-' + (end_month.length < 2 ? "0" + end_month : end_month);           } // Pad with zeros
			if(end_day > 0)   {	end_day = '-' + (end_day.length < 2 ? "0" + end_day : end_day);                   } // Pad with zeros

			var end_range = end_year + end_month + end_day;
			
			$("#insert-pubdate").html('&lt;input type="hidden" name="s.rf" value="PublicationDate,' + start_range + ':' + end_range + '" /&gt;<br />');
			$("#search-refinements").html( $("#search-refinements").html() ); // Bug fix for Chrome
		}
	}
	
	$("#keywords").keyup(function() {
		$("#insertterms").html(this.value ? '&lt;input type="hidden" name="s.fvgf[]" value="SubjectTerms,or,' + this.value + '" /&gt;<br />' : '');
	});
	
	$(".accordian-body").hide();
	
	$(".accordian-head").find("h2").prepend("<span>&#9656;</span>");
	$(".accordian-head").click(function() {
        var arrowEl = $(this).find("h2 span span");
		$(this).next(".accordian-body").slideToggle(400);
		if(arrowEl.html() == "▾") {
			arrowEl.html("&#9656;");
		} else {
			arrowEl.html("&#9662;");
		}
	});
	
	$("#codeblock").prepend('<div class="copybutton lib-button-small-grey">Select All</div>');
	
	$(".copybutton").click(function() {
        var text = document.getElementById("summon-code");
        var range = (document.createRange ? document.createRange() : document.body.createTextRange());

        if (document.body.createTextRange) { // ms
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { // moz, opera, webkit
            var selection = window.getSelection();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
	});
	
	$("#clear-dates-button").click(function() {
		$("#insert-pubdate").html("");
		$(".dates").val("");
		$("select option:selected").removeAttr("selected");
	});
});