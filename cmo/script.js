// const spreadsheet_id = '1Fzh7ydeKvfijcE5vfdI5nFARmUXBMbvxxiTvfhbSXc8';
// const api_key = AIzaSyCQBDU815Mh86-Z9FGIVCtL0cQB9Tg9l3I;

// console.log(spreadsheet_id);

// var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_id + '/values/' + tab_name + '?alt=json&key=' + api_key;
var url = 'https://sheets.googleapis.com/v4/spreadsheets/1Fzh7ydeKvfijcE5vfdI5nFARmUXBMbvxxiTvfhbSXc8/values/General_Medicine?alt=json&key=AIzaSyCQBDU815Mh86-Z9FGIVCtL0cQB9Tg9l3I'
// ($.getJSON(url, 'callback=?')).success(function(data){
//     console.log(data);
// })

let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = function () {
  const fullDetails = request.response;
  console.log(fullDetails);
//   alert('Girish is watching');
} 