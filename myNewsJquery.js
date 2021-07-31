$(document).ready( function() {
    $('.lightbox').click( function() {
        $('.backdrop, .box').css('display', 'block');
    });
    $('.close').click( function() {
        closeBox();
    });
    $('.backdrop').click( function(){
        closeBox();
    });
    $('#search').click( function(){
        closeBox();
    });
});

function closeBox() {
    $('.backdrop, .box').css('display', 'none');
}


$.ajax({
    url: 'articles.json',
    dataType: json,
    type: 'get',
    cache: false,
    success: function(data) {
        $(data.articles).each(function(index, value) {
            console.log(value.name);
        });
    }
});






/*
    var myArr = [{"title":"Home and Away star Dieter Brummer dies aged 45",
    "description":"Dieter Brummer, best-known for playing Shane Parrish on Australian soap Home and Away, has died aged 45.",
    "content":"Dieter Brummer, best-known for playing Shane Parrish on Australian soap Home and Away, has died aged 45.\nBrummer was found dead at his home in Sydney on Saturday and police have confirmed his death is not being treated as suspicious.\n\"About 1.30pm, o... [1933 chars]",
    "url":"https://www.rte.ie/entertainment/2021/0726/1237244-dieter-brummer/",
    "image":"https://img.rasset.ie/0017cf56-1600.jpg",
    "publishedAt":"2021-07-26T08:16:06Z",
    "source":{"name":"RTE.ie","url":"https://www.rte.ie"}
    },
    
    {"title":"Singapore to review Covid-19 rules in early August, ease measures for vaccinated people if situation under control",
    "description":"Rules could be eased further by early September, with larger group sizes allowed.. Read more at straitstimes.com.",
    "content":"SINGAPORE - Singapore will review its Covid-19 restrictions in early August, and ease some measures if virus clusters are under control and hospitalisation rates remain low.\nBut any loosened restrictions will only be extended to vaccinated individual... [3833 chars]",
    "url":"https://www.straitstimes.com/singapore/politics/singapore-to-review-covid-19-rules-in-early-august-ease-measures-for-vaccinated",
    "image":"https://static.straitstimes.com.sg/s3fs-public/styles/x_large/public/articles/2021/07/26/hzsg260721.jpg?itok=Xy9JJCKd",
    "publishedAt":"2021-07-26T08:09:17Z",
    "source":{"name":"The Straits Times","url":"https://www.straitstimes.com"}
    },
    {"title":"Groups hold caravan to press Duterte for BTA extension",
    "description":"Moro elders and youth on Monday reiterated their call for the extension of the Bangsamoro Transition Authority.",
    "content":"MANILA, Philippines — Moro elders and youth launched a caravan on Monday to stress their appeal for an urgent certification on the proposed extension of the Bangsamoro Transition Authority (BTA), which is set to expire on June 30, 2022.\nThe United Im... [1422 chars]",
    "url":"https://newsinfo.inquirer.net/1464562/groups-hold-caravan-to-press-duterte-for-bta-extension",
    "image":"https://newsinfo.inquirer.net/files/2021/07/WhatsApp-Image-2021-07-26-at-1.31.58-PM-620x437.jpeg",
    "publishedAt":"2021-07-26T07:45:00Z","source":{"name":"INQUIRER.net","url":"https://newsinfo.inquirer.net"}},
    
    {"title":"Adam Peaty urges UK after Tokyo gold: ‘Now we’ve got to switch our mindset’",
        "description":"After winning Great Britain’s first gold medal of the Tokyo Olympics, Adam Peaty said he hoped his victory would give some hope, joy and inspiration to his team, and to his country","content":"After winning Great Britain’s first gold medal of the Tokyo Olympics, Adam Peaty said he hoped his victory would give some hope, joy and inspiration to his team, and to his country. “That’s why we are all here, because sport has an amazing power to i... [2447 chars]","url":"https://www.theguardian.com/sport/2021/jul/26/adam-peaty-urges-uk-after-tokyo-gold-now-switch-our-mindset-olympics","image":"https://i.guim.co.uk/img/media/cd2ea14c7a0215ef3fbeb3b9549f4a285ed5a5d7/0_64_4992_2996/master/4992.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e96de4d7eed78c76e405e3a62c43d86e","publishedAt":"2021-07-26T07:32:00Z","source":{"name":"The Guardian","url":"https://www.theguardian.com"}},{"title":"Archery, Sumit Nagal, Sutirtha | Bhavani Devi Fencing | Ind LIVE","description":"Manika Batra LIVE Tokyo Olympics 2021 LIVE Updates, Day 4, July 26, Monday, Medal Tally & Results: Focus on Archery, Sumit Nagal | Bhavani Devi Fencing | Ind LIVE | India Day 4 Results | India Day 4 Schedule | Manika Batra Live Streaming | India Women vs Germany Women Hockey | Hockey LIVE | Hockey LIVE Streaming","content":"Tokyo Olympics 2021 LIVE Updates\nAfter a brilliant weekend, Indian athletes will be in action in events like Sailing, Fencing, Archery, Table Tennis Swimming, Boxing, Shooting, and Hockey on Monday that would be Day 4 of the Tokyo Olympics 2020. Bhav... [1094 chars]","url":"https://www.india.com/sports/tokyo-olympics-2021-live-updates-day-4-july-26-monday-full-india-schedule-medal-tally-results-live-online-streaming-manika-batra-live-archery-boxing-tennis-sumit-nagal-loss-hockey-fencing-bhavani-devi-4841785/","image":"https://static.india.com/wp-content/uploads/2018/08/Manika-Batra-of-India-in-action-during-the-match_Getty.jpg","publishedAt":"2021-07-26T07:27:23Z","source":{"name":"India.com","url":"https://www.india.com"}},{"title":"Manila court recalls arrest warrant vs. ‘Bikoy’","description":"A Manila court on Monday lifted the arrest order issued against Peter Joemel “Bikoy” Advincula after he was able to justify his absence during his scheduled arraignment on July 21.","content":"A local court on Monday, July 26, 2021, recalled the arrest order issued against Peter Joemel \"Bikoy\" Advincula. He is facing a perjury case filed by some members of the Free Legal Assistance Group whom he linked to an alleged plot to oust President ... [1079 chars]","url":"https://www.gmanetwork.com/news/news/metro/796825/manila-court-recalls-arrest-warrant-vs-bikoy/story/","image":"https://images.gmanews.tv/webpics/2019/05/ZZZ_050619_mmanila_b_2019_05_06_14_38_18.jpg","publishedAt":"2021-07-26T07:27:03Z","source":{"name":"GMA News Online","url":"https://www.gmanetwork.com"}},{"title":"Binga, Ambuklao, Ipo dams release water; affected locals advised to evacuate","description":"Three dams in Benguet and Bulacan opened their gates on Monday as southwest monsoon continued to dump rain into the dams, according to a report over GTV's Unang Balita.","content":"Three dams in Benguet and Bulacan opened their gates on Monday as southwest monsoon continued to dump rain into the dams, according to a report over GTV's Unang Balita.\nAs of 6 a.m., state weather bureau PAGASA reported that the Ambuklao Dam in Bokod... [951 chars]","url":"https://www.gmanetwork.com/news/news/nation/796827/binga-ambuklao-ipo-dams-release-water-affected-locals-advised-to-evacuate/story/","image":"https://images.gmanews.tv/webpics/2021/07/Untitled_2021_07_26_15_24_09.jpg","publishedAt":"2021-07-26T07:26:31Z","source":{"name":"GMA News Online","url":"https://www.gmanetwork.com"}},{"title":"Home and Away star who played Shane Parrish has died age 45","description":"Dieter Brummer, best known for his role opposite Melissa George as Shane Parrish on Home and Away, has died age 45.","content":"Dieter Brummer, the ‘90s heart-throb who played Home and Away character Shane Parrish, has died aged 45.\nDieter Brummer, the ‘90s heart-throb who played Home and Away character Shane Parrish, has died aged 45....\nDieter Brummer, best known for his ro... [4957 chars]","url":"https://www.news.com.au/entertainment/celebrity-life/celebrity-deaths/dieter-brummer-who-played-shane-parrish-on-home-and-away-has-died-age-45/news-story/5738472bbf7d62ea23ecb1d23537d7e6","image":"https://cdn.newsapi.com.au/image/v1/60e12994011a5b25c3bb8e8a762e9cf5?width=1280","publishedAt":"2021-07-26T07:18:45Z","source":{"name":"NEWS.com.au","url":"https://www.news.com.au"}},{"title":"Royal Family latest: Meghan Markle and Prince Harry's attacks labelled 'worrying'","description":"MEGHAN Markle and Prince Harry's attacks have been labelled as 'worrying' for the Royal Family, as a royal expert claimed they have 'gone rogue'.","content":"Prince Harry's memoir compared to resignation letter by expert\nFREE now and never miss the top Royal stories again. SUBSCRIBE Invalid email Sign up fornow and never miss the top Royal stories again. We use your sign-up to provide content in ways you'... [2420 chars]","url":"https://www.express.co.uk/news/royal/1467561/Royal-Family-live-meghan-markle-prince-harry-criticism-queen-news-prince-Charles-william","image":"https://cdn.images.express.co.uk/img/dynamic/106/750x445/1467561.jpg","publishedAt":"2021-07-26T07:14:00Z","source":{"name":"Express","url":"https://www.express.co.uk"}},{"title":"Rahul Gandhi rides tractor to Parliament to protest against new farm laws","description":"\"As per government, farmers are very happy and those (protesting farmers) sitting outside are terrorists. But in reality, farmers' rights are being snatched away,\" Rahul Gandhi said.","content":"Congress leader Rahul Gandhi on Monday drove a tractor to reach the Parliament to register his protest against the three farm laws. The Congress leader said that he has brought farmers’ message to the Parliament.\n“I’ve brought farmers’ message to Par... [1851 chars]","url":"https://indianexpress.com/article/india/parliament-lok-sabha-rajya-sabha-farm-laws-pegasus-rahul-gandhi-7422674/","image":"https://images.indianexpress.com/2021/07/RG.jpg","publishedAt":"2021-07-26T07:10:24Z","source":{"name":"The Indian Express","url":"https://indianexpress.com"}}];
        

    myFunction(myArr);

    function myFunction(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.lenght; i++) {
            out += '<a href="' + arr[i].url + '">' + arr[i].title + '</a><br>' + 
            '<p>' + arr[i].publishedAt + '</p>' + '<p>' + arr[i].description + '</p>' +
            '<img src="' + arr[i].image + '">';
        }
        document.getElementById("boxnew").innerHTML = out;
    }
*/