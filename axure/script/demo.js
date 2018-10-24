javascript:
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    console.log('url',url);
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var param = getParameterByName('param'); 


$axure.setGlobalVariable("NameVar",123);
console.log('param',param);
$('[data-label=varHolderName]').text(param);

void(0);

javascript:
$axure("@varHolderName").value('hjhjhjkhk');
$('[data-label=varHolderName]').text('param');
   

javascript:
$('[data-label=NameField] p span').html('kmmkmlm');
void(0);

javascript:
var input = document.getElementById('u2_input');
console.log('NameField input',input);
input.value = 'change'; 
var event = new Event('onChange', {
    'bubbles': true,
    'cancelable': true
});

input.dispatchEvent(event);
void(0);

 
javascript: 
$axure.setGlobalVariable("NameVar",123);
void(0);