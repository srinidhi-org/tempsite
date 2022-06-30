const list = document.querySelector('#mainFrame');

const id = new URLSearchParams(window.location.search).get('id');

let request = new XMLHttpRequest();
request.open('GET', 'name.json');
request.responseType = 'json';
request.send();
request.onload = function () {
  const metaData = request.response;
  const meta = metaData.filter(arr => arr.link == id)[0];
  const title = meta.name + " | Contact Details";
  document.querySelector('title').textContent = title;
  const tab_name = meta.tab_name;
  load();

  function load(){
    let spreadsheet_id = '1Fzh7ydeKvfijcE5vfdI5nFARmUXBMbvxxiTvfhbSXc8';
    let api_key = 'AIzaSyBDMPIplcIRfbN4Fh5K8dmF9IN_4vP6b8Y';
    let requestURL = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheet_id + '/values/' + tab_name + '?alt=json&key=' + api_key;
    
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
    const fullData = request.response;
    const data = fullData.values.filter(arr => arr[0] != "");
    list(data);
    }

    function list(obj){
      var list = '';
      var colour;
      var phonenum;
      var name;
      for (let i = 1; i < obj.length; i++) {
        switch (obj[i][1]) {
          case 'Intern':
            colour = 'canyan';
            break;
          case 'PG':
            colour = 'light-yellow';
            break;
          case 'SR':
            colour = 'light-red';
            break;
          case 'SRID':
            colour = 'light-red';
            break;        
          default: colour = 'grey';
            break;
        }
        if (isNaN(obj[i][2])){
          phonenum = obj[i][2] ;
        } else {
          phonenum = `tel:${obj[i][2]}` ;
        }
        name = obj[i][0] ;
        list += `<div class="links"><a class="links links--${colour}" href="${phonenum}">${name}</a></div>`;
      }
      document.querySelector('#mainFrame').innerHTML = list;
      document.getElementById("departments").style.display = "none";
      console.log("Successfully loaded");    
    }

  }
}