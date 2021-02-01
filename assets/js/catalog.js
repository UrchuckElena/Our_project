$(document).ready(function () {

    $.ajax({
        url:'assets/data/catalog.json',
        type:'GET',
        dataType: 'json',
        success: function(json){
            let html = '';
            for(let i = 0; i<json.length; i++){
                html+= `
                    <li class="catalog_item">
                        <div class="catalog_photo">
                            <a href="shop_page.html"><img src="${json[i].photo}" alt="${json[i].name}"></a>
                        </div>
                        <div class="catalog_name">
                            <a href="shop_page.html"><h5>${json[i].name}</h5></a>
                        </div>
                    </li>
                `;
            }
            $('.catalog_box').html(html);
        }
    });

})