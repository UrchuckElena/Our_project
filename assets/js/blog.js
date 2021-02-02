$(document).ready(function() {
    $.getJSON('assets/data/article.json', function(json) {
        $('.blog_post').pagination({
            dataSource: json,
            pageSize: 6,
            prevText: 'First',
            nextText: 'Next',
            callback: function(data, pagination) {
                $('#post_article').empty();
                $.each(data, function(i, f) {
                    $('#post_article ').append(`
                    <div class="head_article">
                        <div class="article_img">
                            <a href="article.html"><img src="${f.image}" alt="Blog photo"></a>
                        </div>
                        <div class="article_main">
                            <div class="article_text">
                                <span>${f.date}</span>
                                <a href="article.html"><h3>${f.title}</h3>
                                <p>${f.text}</p></a>
                            </div>
                            <div class="blog_link">
                                <a href="#" target="_blank">Google</a>
                                <a href="#" target="_blank">Trending</a>
                                <a href="#" target="_blank">New</a>
                            </div>
                        </div>
                    </div>`);

                });
            }
        });
    });
});