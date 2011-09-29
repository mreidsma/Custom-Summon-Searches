
	
	// Custom Summon Boxes
	// Grand Valley State University Library Labs, 2011
	// by Matthew Reidsma, reidsmam@gvsu.edu with help from John Krull, astrom.flux@gmail.com
	// 
	// Released under Creative Commons Attribution 3.0 Unported License
	// http://creativecommons.org/licenses/by/3.0/
	//
	
	function uncheckAll(theForm, cName) 
	{ // Uncheck all checkboxes of a certain class
		for (i=0,n=theForm.elements.length;i<n;i++)
		{
			if (theForm.elements[i].className.indexOf(cName) !== -1)
			{
				theForm.elements[i].checked = false;
			}
		}
	}
	
	function clearDates() {
		element('start_month').value = '#';
		element('start_day').value = '#';
		element('end_month').value = '#';
		element('end_day').value = '#';
		element('start_year').value = "";
		element('end_year').value = "";
		element('insertdate').innerHTML = "";
		update();
	}
			
	function element(id)
	{
		return document.getElementById(id);
	}
	
	function selectDesiredContent()
	{ // Uncheck individual content filters and run updates
		uncheckAll(element('custom_search'),'content');
		update();
		element('content_all_checkbox').checked = true;
	}
	
	function selectDesiredLanguage()
	{ // Uncheck individual language filters and run updates
		uncheckAll(element('custom_search'),'language'); 
		update();
		element('language_all_checkbox').checked = true;
	}
			
	function update(obj)
	{
		if(obj)
		{ // Uncheck "Anything" or "All Languages" checkbox when individual filter is checked
			if(obj.className.indexOf('content') > -1)
				element('content_all_checkbox').checked = false;
			if(obj.className.indexOf('language') > -1)
					element('language_all_checkbox').checked = false;
		}
		
		if (element('full_text_checkbox').checked) 
		{ // Add filter for full-text
			element('fulltexttoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"IsFullText,true\" /&gt;<br />"; 
		} else 
			{ // Remove full-text filter
				element('fulltexttoggle').innerHTML = ""; 
			}
			
		if (element('is_scholarly_checkbox').checked) 
		{ // Add filter for peer-review
			element('isscholarlytoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"IsScholarly,true\" /&gt;<br />"; 
		} else 
			{ // Remove peer-review filter
				element('isscholarlytoggle').innerHTML = ""; 
			}
			
		if (element('in_catalog_checkbox').checked) 
		{ // Add filter for peer-review
			element('incatalogtoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fq[]\" value=\"SourceType:(&amp;quot;</code>Library Catalog&amp;quot;</pre>)\" /&gt;<br />"; 
		} else 
			{ // Remove peer-review filter
				element('incatalogtoggle').innerHTML = ""; 
			}
			
			// Content-Type filters
								
			if (element('content_article_checkbox').checked) 
			{ // Add journal content filter
				element('journaltoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Journal Article,\" /&gt;<br />"; 
			} else 
				{ // Remove journal content filter
					element('journaltoggle').innerHTML = ""; 
				}
					
			if (element('content_news_checkbox').checked) 
			{ // Add newspaper article filter
				element('newstoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Newspaper Article,\" /&gt;<br />"; 
			} else 
				{ // Remove newspaper article filter
					element('newstoggle').innerHTML = ""; 
				}
				
			if (element('content_trade_checkbox').checked)
			{ // Add trade publications filter
				element('tradetoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Trade Publication Article,\" /&gt;<br />"; 
			} else 
				{ // Remove Trade Publications filter
					element('tradetoggle').innerHTML = ""; 
				}
			
			if (element('content_conference_checkbox').checked)
			{ // Add conference proceedings filter
				element('conftoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Conference Proceeding,\" /&gt;<br />"; 
			} else 
				{ // Remove conference proceedings filter
					element('conftoggle').innerHTML = ""; 
				}
				
			if (element('content_book_checkbox').checked) 
			{ // Add Books & eBooks filter
				element('booktoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Book / eBook,\" /&gt;<br />"; 
			} else
				{ // Remove Books filter
					element('booktoggle').innerHTML = ""; 
				}
				
			if (element('content_bookreview_checkbox').checked) 
			{ // Add Book Review Filter
				element('reviewtoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Book Review,\" /&gt;<br />"; 
			} else 
				{ // Remove Book Review Filter
					element('reviewtoggle').innerHTML = ""; 
				}
				
			if (element('content_musicscore_checkbox').checked) 
			{ // Add Book Review Filter
				element('musictoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Music Score,\" /&gt;<br />"; 
			} else 
				{ // Remove Book Review Filter
					element('musictoggle').innerHTML = ""; 
				}
				
			if (element('content_audiorecording_checkbox').checked) 
			{ // Add Book Review Filter
				element('audiotoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"ContentType,Audio Recording,\" /&gt;<br />"; 
			} else 
				{ // Remove Book Review Filter
					element('audiotoggle').innerHTML = ""; 
				}
				
		// Language Filters
				
			if (element('lang_english_checkbox').checked) 
			{ // Add English Language Filter
				element('langengtoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,English,\" /&gt;<br />"; 
			} else 
				{ // Remove English Language Filter
					element('langengtoggle').innerHTML = ""; 
				}
				
			if (element('lang_spanish_checkbox').checked) 
			{ // Add Spanish Language Filter
				element('langspantoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Spanish,\" /&gt;<br />"; 
			} else 
				{ // Remove Spanish Language Filter
					element('langspantoggle').innerHTML = ""; 
				}
				
			if (element('lang_french_checkbox').checked) 
			{ // Add French Language Filter
				element('langfretoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,French,\" /&gt;<br />"; 
			} else 
				{ // Remove French Language Filter
					element('langfretoggle').innerHTML = ""; 
				}
				
			if (element('lang_german_checkbox').checked) 
			{ // Add German Language Filter
				element('langgertoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,German,\" /&gt;<br />"; 
			} else 
				{ // Remove German Language Filter
					element('langgertoggle').innerHTML = ""; 
				}
				
				if (element('lang_dutch_checkbox').checked) 
				{ // Add Dutch Language Filter
					element('langdutchtoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Dutch,\" /&gt;<br />"; 
				} else 
					{ // Remove German Language Filter
						element('langdutchtoggle').innerHTML = ""; 
					}
				
			if (element('lang_polish_checkbox').checked) 
			{ // Add Polish Language Filter
				element('langpoltoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Polish,\" /&gt;<br />"; 
			} else 
				{ // Remove Polish Language Filter
					element('langpoltoggle').innerHTML = ""; 
				}
				
			if (element('lang_italian_checkbox').checked) 
			{ // Add Italian Language Filter
				element('langitaltoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Italian,\" /&gt;<br />"; 
			} else 
				{ // Remove Italian Language Filter
					element('langitaltoggle').innerHTML = ""; 
				}
				
			if (element('lang_chinese_checkbox').checked) 
			{ // Add Chinese Language Filter
				element('langchitoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Chinese,\" /&gt;<br />"; 
			} else 
				{ // Remove Chinese Language Filter
					element('langchitoggle').innerHTML = ""; 
				}
				
			if (element('lang_japanese_checkbox').checked) 
			{ // Add Japanese Language Filter
				element('langjaptoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Japanese,\" /&gt;<br />"; 
			} else 
				{ // Remove Japanese Language Filter
					element('langjaptoggle').innerHTML = ""; 
				}
				
			if (element('lang_arabic_checkbox').checked) 
			{ // Add Arabic Filter
				element('langarabictoggle').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvf[]\" value=\"Language,Arabic,\" /&gt;<br />"; 
			} else 
				{ // Remove Arabic Filter
					element('langarabictoggle').innerHTML = ""; 
				}		
				
		// Date Filter
						
	 	if ((element('end_year').value) != "") 
		{ // Add the date filter after the end year is entered
			start_month = element('start_month').value;
			  if(start_month == "#") { start_month = '01'; }
			start_month = (start_month.length < 2) ? "0" + start_month : start_month; // Pad with zeros
			start_day = element('start_day').value; 
			  if(start_day == "#") { start_day = '01'; }
			start_day = (start_day.length < 2) ? "0" + start_day : start_day; // Pad with zeros
			start_year = element('start_year').value;
			end_month = element('end_month').value;
			   if(end_month == "#") { end_month = '12'; }
			end_month = (end_month.length < 2) ? "0" + end_month : end_month; // Pad with zeros
			end_day = element('end_day').value; 
			  if(end_day == "#") { end_day = '31'; }
			end_day = (end_day.length < 2) ? "0" + end_day : end_day; // Pad with zeros
			end_year = element('end_year').value;
			element('insertdate').innerHTML = "&lt;input type=\"hidden\" name=\"s.rf\" value=\"PublicationDate," + start_year + "-" + start_month + "-" + start_day + ":" + end_year + "-" + end_month + "-" + end_day + "\" /><br />";
		}
		
		// Subject Terms filter
		
		if(element('keywords').value != "")
		{ // Add Subject terms filter
			subject_terms = element('keywords').value;
			element('insertterms').innerHTML = "&lt;input type=\"hidden\" name=\"s.fvgf[]\" value=\"SubjectTerms,or," + subject_terms + "\" /&gt;<br />";
			
		} else
			{ // Remove Subject terms filter
			element('insertterms').innerHTML = "";
			}
		
	}