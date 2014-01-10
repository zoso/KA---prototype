var ProductList = {
	dataUrl: 'js/ProductList.js',
	container: '.productGridContainer',
	speed: 100,
	init: function() {
		var call = $.getJSON(this.dataUrl, function(data) {
			
		})
		.done(function(data) {
			$.each( data, function( key, val ) {

				ProductList.createTile(val, key);
			});
		})
		.fail(function(jqxhr, textStatus, error) {
			
		});

	}
	,
	createTile: function(data, group) {
		for (var i = 0; i < data.length; i++) {
			var str = '<div data-cid="'+data[i].prodid+'" class="tile white tileProduct '+group+'">';
			str += '<div class="tileImg"><img src="'+data[i].img+'"></div>';
			str += '<div class="tileContent"><span>'+data[i].name+'</span></div>';
			str += '<a class="tileLink" href="#"></a></div>';
			$(this.container).append(str);
		}
	}
	,
	sort: function(val) {
		$(this.container).children().each(function(i) {
			if ($(this).hasClass(val)) {
				if ($(this).is(":visible")) {
					//$(this).fadeOut(100+(i*10));
				} else {
					$(this).fadeIn(this.speed);
				}
			} else {
				$(this).fadeOut(this.speed-90);
			}
		});
	},
	sortCat: function(id) {
		$(this.container).children().each(function(i) {
			if ($(this).data("cid") == id) {
				$(this).fadeIn(this.speed);
			} else {
				$(this).fadeOut(this.speed-90);
			}
		});
	},
	reset: function() {
		$(this.container).children().each(function(i) {
			if ($(this).is(':hidden')) {
				$(this).fadeIn(this.speed);
			}
		});
	}
};