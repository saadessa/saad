function autoLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != " "){keyword = " " + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName("div");
        for(var i=0; i<objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf("post-body")>-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, "<a href='"+href+"'>"+keyword+"</a>", "gi");
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout("f.createAnchor()", 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new autoLink();
f.add("مصرف التجارة والتنمية", "https://arabiansoft.blogspot.com/2023/03/blog-post_41.html");
f.add("ليبيا", "https://arabiansoft.blogspot.com/2023/03/10000.html");
f.add("مصرف التجارة والتنمية", "https://arabiansoft.blogspot.com/2023/03/blog-post_41.html");
f.add("بوابة الطالب", "https://arabiansoft.blogspot.com/2023/03/blog-post_32.html");
f.add("جامعة مؤتة", "https://arabiansoft.blogspot.com/2023/03/blog-post_13.html");
f.add("الرقم الوطني", "https://arabiansoft.blogspot.com/2017/05/nidgovly.html");
f.add("منظومة", "https://arabiansoft.blogspot.com/2017/05/2017.html");
f.add("الرقم الوطني", "https://arabiansoft.blogspot.com/2023/03/blog-post_51.html");
f.add("التجاري الوطني", "https://arabiansoft.blogspot.com/2017/05/2017.html");
f.add("طرابلس", "https://arabiansoft.blogspot.com/2019/05/blog-post_72.html");
f.add("الأزهر", "https://arabiansoft.blogspot.com/2019/01/2019_580.html");
f.add("المرحلة الابتدائية", "https://arabiansoft.blogspot.com/2019/01/azhar-eg-splash_17.html");
f.add("برقم الجلوس", "https://arabiansoft.blogspot.com/2019/01/2019_171.html");
f.add("الشهادة الأبتدائية الأزهرية", "https://arabiansoft.blogspot.com/2019/01/2019_69.html");
f.add("بوابة الأزهر الإلكترونية", "https://arabiansoft.blogspot.com/2019/01/2019_925.html");
f.add("الجزائر", "https://arabiansoft.blogspot.com/2023/03/blog-post_16.html");
f.add("موقع الأزهر التعليمي", "https://arabiansoft.blogspot.com/2019/01/2018-2019_28.html");
f.add("القاهرة", "https://arabiansoft.blogspot.com/2019/01/2019_362.html");
f.add("الإسكندرية", "https://arabiansoft.blogspot.com/2019/01/2019_640.html");
f.add("السادس الابتدائي", "https://arabiansoft.blogspot.com/2019/01/2018-2019-6.html");
f.add("الشهادة الإعدادية", "https://arabiansoft.blogspot.com/2019/01/blog-post_39.html");
f.add("وزارة التربية والتعليم", "https://arabiansoft.blogspot.com/2019/01/2019_224.html");
f.add("جميع المحافظات", "https://arabiansoft.blogspot.com/2019/01/2019_925.html");
f.add("التعليم الاساسي", "https://arabiansoft.blogspot.com/2019/01/2019_701.html");
f.add("الجيزة", "https://arabiansoft.blogspot.com/2019/01/2018_19.html");
f.add("الشرقية", "https://arabiansoft.blogspot.com/2019/01/2019_783.html");
f.add("الأول الاعدادي", "https://arabiansoft.blogspot.com/2019/01/2019_674.html");
f.add("الأقصر", "https://arabiansoft.blogspot.com/2019/01/2019_456.html");
f.add("نظام نور", "https://arabiansoft.blogspot.com/2019/01/1440-1441.html");
f.add("الخامس الابتدائي", "https://arabiansoft.blogspot.com/2019/01/2019_88.html");
f.add("رياض الاطفال", "https://arabiansoft.blogspot.com/2019/01/2019_348.html");
f.add("الأردن", "https://arabiansoft.blogspot.com/2019/01/2019_426.html");
f.add("الترم الأول", "https://arabiansoft.blogspot.com/2019/01/2019_297.html");
f.add("البحيرة", "https://arabiansoft.blogspot.com/2019/01/blog-post_93.html");
f.add("القليوبية", "https://arabiansoft.blogspot.com/2019/01/2019_111.html");
f.add("كفر الشيخ", "https://arabiansoft.blogspot.com/2019/01/2018-2019_16.html");
f.add("الثاني الاعدادي", "https://arabiansoft.blogspot.com/2019/01/2019_625.html");
f.add("الفصل الدراسي الأول", "https://arabiansoft.blogspot.com/2019/01/2019_606.html");
f.add("وزارة الخارجية", "https://arabiansoft.blogspot.com/2023/03/blog-post.html");
f.add("السعودية", "https://arabiansoft.blogspot.com/2023/03/1444.html");
f.add("استعلام", "https://arabiansoft.blogspot.com/2023/03/blog-post.html");
f.add("تونس", "https://arabiansoft.blogspot.com/2022/11/watch-tunisia-and-denmark-match.html");
f.add("منظومة الجوازات", "https://arabiansoft.blogspot.com/2017/05/2017.html");
f.add("بطاقات", "https://arabiansoft.blogspot.com/2023/03/10000.html");

f.startScript();
</script>//
