$(window).on('load', function(event) {
    $('.preload').removeClass('preload');
    $('.loader').delay(600).fadeOut('fast');
});

$(document).ready( function() {
    $('.lightbox').click( function() {
        $(".backdrop, .box").animate({"opacity": ".50"}, 200, "linear");
        $(".box").animate({"opacity": "1.00"}, 200, "linear");
        $('.backdrop, .box').css('display', 'block');
    });

    $('.close').click( function() {
        closeBox();
    });
    $('.backdrop').click( function(){
        closeBox();
    });
    $('#search').click(function() {
        closeBox();
    });

    $.ajax({
        url: "headlinearticles.json",
        dataType: 'json',
        type: 'get',
        success: function(data) {
            myArticles(data);
        }
    });

    $("#search").click(function() {
        $.ajax({
            url: "searcharticles.json",
            dataType: "json",
            type: "get",
            success: function(data) {
                myArticles(data);
            }
        });
    })
});

function closeBox() {
    $(".backdrop, .box").animate({"opacity": ".0"}, 200, "linear");
    $('.backdrop, .box').css('display', 'none');
}

function myArticles(data) {
    var out = "";

    for (var i = 0; i < data.articles.length; i++) {
        out += 
        '<div class="container-fluid clearfix"><div class="imgbox col-sm-6 col-sm-12"><img id="img" src="' + data.articles[i].image + '" width="100%"></div>' + 
        '<div class="titlebox col-sm-6 col-sm-12"><h4><u><a href="' + data.articles[i].url + '">' + data.articles[i].title + '</a></u></h4>' + 
        '<p><i>' + data.articles[i].publishedAt + '</i></p>' + '<h5>' + data.articles[i].description + '</h5></div></div>';
    }

    $("#boxnew").html(out);
}


/*
var myreq = new XMLHttpRequest();
var url = "headlinearticles.json";
myreq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myNews = JSON.parse(this.responseText);
        myFunction(myNews);
    }
};
myreq.open("GET", url, true);
myreq.send();

function searchNews() {
    var myreq = new XMLHttpRequest();
    var url = "searcharticles.json";
    myreq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myNews = JSON.parse(this.responseText);
            myFunction(myNews);
        }
    };
    myreq.open("GET", url, true);
    myreq.send();
}

function myFunction(myNews) {
    var out = "";
    var i;
    
    for(i = 0; i < myNews.articles.length; i++) {
        out += 
        '<div class="container-fluid clearfix"><div class="imgbox col-sm-6 col-sm-12"> <img id="img" src="' + myNews.articles[i].image + '" width="100%"></div>' + 
        '<div class="titlebox col-sm-6 col-sm-12"><h4><u><a href="' + myNews.articles[i].url + '">' + myNews.articles[i].title + '</a></u></h4>' + 
        '<p><i>' + myNews.articles[i].publishedAt + '</i></p>' + '<h5>' + myNews.articles[i].description + '</h5></div></div>';
    }
document.getElementById("boxnew").innerHTML = out;
}

*/