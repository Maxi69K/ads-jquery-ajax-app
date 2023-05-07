$("input[type='submit']").on('click', function (e) {
  e.preventDefault();
  $.ajax({
    url: "ads.php",
    type: "post",
    data: {
      username: $("input[type='text']").val(), //if it is in form -> data: $("form").serialize();
      ad: $('textarea').val(),
    }
  })
  .done(function (res) {
    $('#main').html(res);
  });
});


// without jquery-a

// let subBtn = document.getElementsByName('sub')[0];
// let userName = document.getElementsByName('username')[0];
// let ad = document.getElementsByName('ad')[0];

// subBtn.addEventListener('click',function(e) {
//   e.preventDefault();
//   if (userName.value !== '') {
//     let xml = new XMLHttpRequest();
//     let data = new FormData();
//     data.append('username', userName.value);
//     data.append('ad', ad.value);
//     xml.open('POST','ads.php');
//     xml.addEventListener('readystatechange', function () {
//       if (xml.readyState === 4 && xml.status === 200) {
//         display(xml);
//       }
//     })
//     xml.send(data);
//   } else {
//     userName.style.border = '1px solid red';
//     document.getElementById('main').innerHTML = '<h3>Try again!</h3>';
//   }
// })

// function display(xml) {
//   let data = xml.responseText;
//   document.getElementById('main').innerHTML = data;
// }