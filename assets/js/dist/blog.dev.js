"use strict";

$(document).ready(function () {
  $.getJSON('assets/data/article.json', function (json) {
    $('.blog_post').pagination({
      dataSource: json,
      pageSize: 6,
      prevText: 'First',
      nextText: 'Next',
      callback: function callback(data, pagination) {
        $('#post_article').empty();
        $.each(data, function (i, f) {
          $('#post_article ').append("\n                    <div class=\"head_article\">\n                        <div class=\"article_img\">\n                            <a href=\"article.html\"><img src=\"".concat(f.image, "\" alt=\"Blog photo\"></a>\n                        </div>\n                        <div class=\"article_main\">\n                            <div class=\"article_text\">\n                                <span>").concat(f.date, "</span>\n                                <a href=\"article.html\"><h3>").concat(f.title, "</h3>\n                                <p>").concat(f.text, "</p></a>\n                            </div>\n                            <div class=\"blog_link\">\n                                <a href=\"#\" target=\"_blank\">Google</a>\n                                <a href=\"#\" target=\"_blank\">Trending</a>\n                                <a href=\"#\" target=\"_blank\">New</a>\n                            </div>\n                        </div>\n                    </div>"));
        });
      }
    });
  });
});