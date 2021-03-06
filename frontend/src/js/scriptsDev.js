$(document).ready(function(){
  var form = $('#form_buying_product');
  var form_check= $('#form_check');
  var sending_order = $('#sending_order');
  var name1 = $('#name1');
  var phone1 = $('#phone1');

  function go_to_end(){
    window.location.href="../end";
  };

  function go_to_basket(){
    window.location.href="/checkout";
  };

  function go_to_home(){
    window.location.href="/";
  };

  function go_to_favorites(){
    window.location.href="/favorites";
  };

  // Отправка заказа при нажатии на телефонной клавиатуре "Go, OK, Done"
  $('input').keypress(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if ( (code==13) || (code==10))
        {
          e.preventDefault();
          // var name = $("input#name").val();
          // var phone = $("input#phone").val();
          // var email = $("input#email").val();
          // CheckoutProcess(name, phone, email);
          document.getElementById("submit_check").click();
        }
  });

  // Добавление/удаление товара в корзину
  function basketUpdating(product_id, nmb, is_delete, from){
    var data = {}
    data.product_id = product_id;
    data.nmb = nmb;

    if (from == "from_product"){
      var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
      data["csrfmiddlewaretoken"] = csrf_token;
      var url = form.attr('action');
    } else if (from == "from_home") {
        var csrf_id = "#id"+product_id+" [name=\"csrfmiddlewaretoken\"]";
        var id1 = "#id"+product_id;
        var another_form = $(id1);

        var csrf_token = $(csrf_id).val();
        data["csrfmiddlewaretoken"] = csrf_token;
        var url = another_form.attr('action');
    } else if (from == "from_checkout"){
        var csrf_id = "#remove_item"+product_id+" [name=\"csrfmiddlewaretoken\"]";
        var id1 = "#remove_item"+product_id;
        var another_form = $(id1);

        var csrf_token = $(csrf_id).val();
        data["csrfmiddlewaretoken"] = csrf_token;
        var url = another_form.attr('action');
    };

    if (is_delete) {
      data['is_delete']= true;
    }

    // console.log(url);
    // console.log(data);
    $.ajax({
      url : url,
      type : 'POST',
      data : data,
      cache : true,
      success : function(data){
        // console.log(url);
        console.log('OK');
        // console.log(data.products_total_nmb);
        if (data.products_total_nmb == 0){
          go_to_home()
        };
      },
      error : function(){
        console.log('error');
      }

    })
  }

  // Отправка заказа
  function CheckoutProcess(name, phone, email){
    var x = new Object(null);
    var y = new Object(null);
    var data = {
      id: x,
      nmb : y
    };
    var elem=document.getElementById('form_check').elements;
    // console.log(elem)
    var j = 0;

    for(var i = 0; i < elem.length; i++){

      var name_s = elem[i].name;
      var type_s = elem[i].type;
      var check_type = type_s.startsWith('hidden');
      var check_type_numb = type_s.startsWith('number');
      var check_name_numb = name_s.startsWith('product_in_basket');
      var check_name = name_s.startsWith('product_in_basket');
      if (check_name && check_type){
        data.id[j]=elem[i].value;
      }
      if (check_name_numb && check_type_numb) {
        data.nmb[j]=elem[i].value;
        j=j+1;
      }
    }

    data.kol = j;
    data.name = name;
    data.phone = phone;
    data.email = email;
    var csrf_token = $('#form_check [name="csrfmiddlewaretoken"]').val();
    data["csrfmiddlewaretoken"] = csrf_token;
    var url = form_check.attr('action');
    // console.log(data);

    $.ajax({
      url: url,
      type: 'POST',
      data: data,

      success: function (data) {
        console.log('OK');
        go_to_home();

      },
      error: function () {
        console.log('error');
      }
    })
  }

  // Отправка заказа
  // form_check.on('submit', function(e) {
  //   e.preventDefault();
  //   // var submit_check = $('#submit_check');
  //   var name = $("input#name").val();
  //   var phone = $("input#phone").val();
  //   var email = $("input#email").val();
  //   // var nmb = $('input#product_nmb').val();
  //   // var id = $('input#product_id').val();
  //   // console.log(name);
  //   // console.log(phone);
  //   // console.log(email);
  //   // console.log(nmb);
  //   // console.log(id);
  //   CheckoutProcess(name, phone, email);
  //   // $('#checkout_form').html("");
  //   // $('#checkout_form').append('<h1 class="text-center"> Ваш заказ отправлен! </h1>');
  // });


  // Нажатие на кнопки "Заказать" на product.html (удалено)
  form.on('submit', function(e) {
    e.preventDefault();
    var nmb = $('#number').val();
    // console.log(nmb);
    var submit_btn = $("#submit_btn");
    var product_id = submit_btn.data("product_id");
    var product_name = submit_btn.data("name");
    var product_price = submit_btn.data("price");
    // console.log(product_id);
    // console.log(product_name);
    basketUpdating(product_id, nmb, false, "from_product");
    go_to_basket();
    // console.log(nmb);
  });

  // Нажатие на кнопки "Заказать" на home.html или на product.html
  $('div[id^="div"]').click(function(){
    var product_id = $(this)[0].id.split('div')[1];
    var name = $(this).find('button').data("name");
    var price_per_item = $(this).find('button').data("price");
    let nmb = "1";
    basketUpdating(product_id, nmb, false, "from_home");
    $(this)[0].id = "div_in_basket";
    $(this).html("");
    $(this).append('<button id="in_basket" class="btn btn-secondary"> Добавлено в корзину </button>');
    calculatingBasketAmount();
    $("#basket-1").attr("src","static/img/Shopping-basket-2.png");
    $("#basket-1").closest("a").attr("href","/checkout")
    $("#basket-1").closest("div").attr("id","")
  });

  // Переход в корзину при нажатии на "Добавлено в корзину"
  $(document).on('click', '#in_basket', function(e){
    go_to_basket();
  });

  // Scroll in navbar
  $(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        // return false;
    });
  });


  // Удаление товара из заказа
  $('button[id^="remove_item"]').click(function(){
    var product_id = $(this)[0].id.split('remove_item')[1];
    var k = 0;
    let nmb = "0";
    basketUpdating(product_id, nmb, false, "from_checkout");
    $('.total-product-in-basket-amount').each(function(){
      k = k + 1;
    });
    if(k == 1){
      calculatingBasketAmount();
    }
    else{
      $(this).closest('span').html("");
      calculatingBasketAmount();
    }

  });

  // Добавление/удаление товара в избранные
  function FavoritesUpdating(product_id, act){
    var data = {}
    data.product_id = product_id;
    data.act = act

    if (act == "add"){
      var csrf_id = "#favorite"+product_id+" [name=\"csrfmiddlewaretoken\"]";
      var id1 = "#favorite"+product_id;
      var another_form = $(id1);

      var csrf_token = $(csrf_id).val();
      data["csrfmiddlewaretoken"] = csrf_token;
      var url = another_form.attr('action');
    } else if (act == "del") {
      var csrf_id = "#remove_from_favorites"+product_id+" [name=\"csrfmiddlewaretoken\"]";
      var id1 = "#remove_from_favorites"+product_id;
      var another_form = $(id1);

      var csrf_token = $(csrf_id).val();
      data["csrfmiddlewaretoken"] = csrf_token;
      var url = another_form.attr('action');
    }

    // console.log(url);
    // console.log(data);
    $.ajax({
      url : url,
      type : 'POST',
      data : data,
      cache : true,
      success : function(data){
        // console.log(url);
        console.log('OK');
      },
      error : function(){
        console.log('error');
      }

    });
  };


  // Добавление товара в избранные
  $('div[id^="favorite_div"]').click(function(){
    var product_id = $(this)[0].id.split('favorite_div')[1];
    FavoritesUpdating(product_id, 'add')
    $(this)[0].id = "div_in_favorites";
    $(this).find('button').addClass('hidden');
    $(this).append('<button id="in_favorites" class="btn btn-link"> <input type="image" src="/static/img/icons8-звезда-с-заливкой-30.png"> </button>');
  });

  // Переход в избранные при нажатии на "звезда с заливкой"
  $(document).on('click', '#in_favorites', function(e){
    go_to_favorites();
  });

  // Удаление товара из избранных
  $('button[id^="remove_from_favorites"]').click(function(){
    var product_id = $(this)[0].id.split('remove_from_favorites')[1];
    FavoritesUpdating(product_id, 'del')
    $(this).closest('span').html("");
  });

  // Добавляет или убирает класс
  // function ShowingBasket(){
  //   $('.basket-items').removeClass('hidden');
  // };

  // $('.basket-container').on('click',function(e){
  //   e.preventDefault();
  //   ShowingBasket();
  // });

  // Выпадающая корзина
  // $('.basket-container').mouseover(function(){
  //   ShowingBasket();
  // });

  // $('.basket-container').mouseout(function(){
  //   $('.basket-items').addClass('hidden');
  //   // ShowingBasket();
  // });

  // удаление товара из корзины
  // $(document).on('click', '#delete_item', function(e){
  //   e.preventDefault();
  //   product_id = $(this).data('product_id');
  //   nmb=0;
  //   // $(this).closest('li').remove();
  //   basketUpdating(product_id, nmb, is_delete=false, from="from_home");
  // });

  // Пересчёт общей суммы заказа
  function calculatingBasketAmount() {
    var total_order_amount = 0;
    $('.total-product-in-basket-amount').each(function(){
      total_order_amount = total_order_amount + parseFloat($(this).text());
    });
    $('#total_order_amount').text(total_order_amount.toFixed(2));
  };

  // Изменение количества товара в "product_item_in_checkout"
  $(document).on('change', ".product-in-basket-nmb", function(){
    var current_nmb = $(this).val();
    var current_tr = $(this).closest('span');
    var current_price = parseFloat(current_tr.find('.product-price').text()).toFixed(2);
    var total_amount = parseFloat(current_nmb * current_price).toFixed(2);
    current_tr.find('.total-product-in-basket-amount').text(total_amount);
    calculatingBasketAmount();
  });

  calculatingBasketAmount();

});
