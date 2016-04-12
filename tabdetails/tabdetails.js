var showDetails = function(tabObj){
	var details = document.getElementById('details'),
		content = '';
	for(var k in tabObj){
		content += '<div>' + k + ' : ' + JSON.stringify(tabObj[k]) + '</div>';
	}
	details.innerHTML = content;
}


document.addEventListener('DOMContentLoaded', function () {
	console.log(JSON.stringify(chrome.extension.getBackgroundPage()._tab));
	if(chrome.extension.getBackgroundPage()._tab){
		showDetails(chrome.extension.getBackgroundPage()._tab);
	}
});