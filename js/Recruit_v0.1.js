var Recruit = {
	dataUrl: 'js/recruit-test.js',
	container: '.jobs',
	init: function() {
		var call = $.getJSON(this.dataUrl, function(data) {
			var lang_url = "#";
			$.each( data, function( key, val ) {
				if (key == 'positions') {
					//Recruit.sort(val);		
				}
				if (key == 'langurl') {
					lang_url = val;
				}
				if (key == 'lang') {
					$.each(val, function(i, v) {
						var str = '<div class="lang">';
						str += '<a href="'+lang_url+v.shortname+'"><img src="'+v.img+'" />';
						//str += '<p>'+v.name+'</p>';
						str += '</a></div>';
						$(Recruit.container).append(str);
					});
				}
			});
			
		})
		.done(function(data) {
			// do a switch here?
			var tab = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>";
			tab += "<thead><tr><td>Position title</td>";
			tab += "<td>Department</td>";
			tab += "<td>Location</td>";
			tab += "<td>Closing date</td></tr></thead>";
			$.each(data.positions, function(i, item) {
				tab += "<tr>";
				$.each(item, function(j, str) {
					switch(j) {
						case "position_title":
							tab += "<td><a href='#'>"+str+"</a></td>";
							break;
						case "url":
							//open where?
							break;
						default:
							tab += "<td>"+str+"</td>";
							break;		
					}
				});
				tab += "</tr>";
			});
			tab += "</table>";
			$(Recruit.container).append(tab);
		})
		.fail(function(jqxhr, textStatus, error) {
			
		});
	}/*,
	sort: function(val) {
		log(" >  "+val.length);
	}*/
};
/*Recruit.init();*/