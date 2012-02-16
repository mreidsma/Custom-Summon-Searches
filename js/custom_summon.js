// Custom Summon Boxes
	// Grand Valley State University Library Labs, 2011, 2012
	// by Matthew Reidsma, reidsmam@gvsu.edu with help from John Krull, astrom.flux@gmail.com
	// 
	// Released under Creative Commons Attribution 3.0 Unported License
	// http://creativecommons.org/licenses/by/3.0/
	//

$(function() {
	
	function selectText(element) {
	    var doc = document;
	    var text = doc.getElementById(element);    

	    if (doc.body.createTextRange) { // ms
	        var range = doc.body.createTextRange();
	        range.moveToElementText(text);
	        range.select();
	    } else if (window.getSelection) { // moz, opera, webkit
	        var selection = window.getSelection();            
	        var range = doc.createRange();
	        range.selectNodeContents(text);
	        selection.removeAllRanges();
	        selection.addRange(range);
	    }
	}
	

	// Handle the checkboxes

	$(":checkbox").click(function() {

		var data = this.value.split("|");

		var newInput = '&ltinput type="hidden" name="' + data[0] + '" value=\'' + data[1] + data[2] + '\' /&gt;<br />';
		var textInput = '<input type="hidden" name="' + data[0] + '" value=\'' + data[1] + data[2] + '\' />';

		if ($(this).attr('checked')) {

			$("#search-refinements").append(newInput);

		} else { // Unchecked

			var value = $("#search-refinements").text();
			value = value.replace(textInput, "");
			$("#search-refinements").text(value);
			var htmlvalue = $("#search-refinements").html();
			htmlvalue = htmlvalue.replace(/&gt;/g,"&gt;<br />");
			$("#search-refinements").html(htmlvalue);
			
		}

	});
	
	
	// Date filter
	
	$("#end_year").keyup(function() {
		
		if(this.value.length > 3) {
			
			var start_range = '*';
			var start_year  = $("#start_year").val();
			var start_month = parseInt($("#start_month").val()) || '';
			var start_day   = parseInt($("#start_day").val()) || '';
			var end_year    = $("#end_year").val();
			var end_month   = parseInt($("#end_month").val()) || '';
			var end_day     = parseInt($("#end_day").val()) || '';

			if(start_year.length > 0) {
				if(start_month >= 0) {
					start_month = (start_month.length < 2) ? "0" + start_month : start_month; // Pad with zeros 
					start_month =  "-" + start_month; 
				}
				if(start_day >= 0) {
					start_day = (start_day.length < 2) ? "0" + start_day : start_day; // Pad with zeros
					start_day =  "-" + start_day; 
				}
				
				start_range = start_year + start_month + start_day;
			}
		
			if(end_month >= 0) {
				end_month = (end_month.length < 2) ? "0" + end_month : end_month; // Pad with zeros
				end_month = "-" + end_month;
			}
			if(end_day >= 0) {
				end_day = (end_day.length < 2) ? "0" + end_day : end_day; // Pad with zeros
				end_day = "-" + end_day;
			}

			$("#insert-pubdate").html('&lt;input type="hidden" name="s.rf" value="PublicationDate,' + start_range + ':' + end_year + end_month + end_day + '" /><br />');
		
		}

	});
	
	$("#keywords").keyup(function() {
		if($(this).val() != "") { // Add Subject terms filter
			var subject_terms = $("#keywords").val();
									
			$("#insertterms").html('&lt;input type="hidden" name="s.fvgf[]" value="SubjectTerms,or,' + subject_terms + '" /&gt;<br />');

		} else { // Remove Subject terms filter
			$("insertterms").html("");
		}
	});
	
	$(".accordian-body").hide();
	
	$(".accordian-head").find("h2").prepend("<span>&#9656;</span>");
	
	$(".accordian-head").click(function() {
		$(this).next(".accordian-body").slideToggle(400);
		var arrow = $(this).find("h2 span").html();
		if(arrow == "<span>▾</span>") {
			$(this).find("h2 span").html("<span>&#9656;</span>");
		} else {
			$(this).find("h2 span").html("<span>&#9662;</span>");
		}
	});
	
	$("#codeblock").prepend('<div class="copybutton lib-button-small-grey">Select All</div>');
	
	$(".copybutton").click(function(){
	    selectText("summon-code");
	  });
	
	$("#clear-dates-button").click(function() {
		$("#insert-pubdate").html("");
		$(".dates").val("");
		$("select option:selected").removeAttr("selected");
	});
});