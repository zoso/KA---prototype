var ProductList={dataUrl:"js/ProductList.js",container:".productGridContainer",init:function(){var e=$.getJSON(this.dataUrl,function(e){}).done(function(e){$.each(e,function(e,t){ProductList.createTile(t,e)})}).fail(function(e,t,n){})},createTile:function(e,t){for(var n=0;n<e.length;n++){var r='<div class="tile white tileProduct '+t+'">';r+='<div class="tileImg"><img src="'+e[n].img+'"></div>';r+='<div class="tileContent"><span>'+e[n].name+"</span></div>";r+='<a class="tileLink" href="#"></a></div>';$(this.container).append(r)}},sort:function(e){$(this.container).children().each(function(t){$(this).hasClass(e)&&($(this).is(":visible")?$(this).fadeOut(100+t*100):$(this).fadeIn(100+t*100))})},reset:function(){$(this.container).children().each(function(e){$(this).is(":hidden")&&$(this).fadeIn(100+e*100)})}};