
function changeDataUrl() {
	var newSpreadSheetUrl = prompt('Enter Spread Sheet URL');
	if(newSpreadSheetUrl) {
		spreadSheetUrl = newSpreadSheetUrl;
		$('#data_url').val(spreadSheetUrl).trigger('change');
	}
}

function loadData() {
getSheetData(spreadSheetUrl, 1, function(result) {
	sections = result.data;
	sections = convertRowsToObj(sections);

	getSheetData(spreadSheetUrl, 2, function(result) {
		charts = result.data;
		charts = convertRowsToObj(charts);
		onDataLoaded();
	});
});

}

// var header = '';
// header += '<header class="header-desktop">';
// header += ' <div class="section__content section__content--p30">';
// header += '		<div class="container-fluid">';
// header += '			<div class="header-wrap">';
// header += '			</div>';
// header += '		</div>';
// header += ' </div>';
// header += '</header>';
// header = $(header);
//$('.page-container').prepend(header);
//
// if($(window).width() > 575) {
// 	$('.page-container').css('padding-top', header.height()+'px');
// } else {
// 	header.removeClass('header-desktop');
// }

var selector = '';
selector += '<form class="form-header col-lg-12 p-t-15" onsubmit="return false;">';
selector += '	<input id="data_url" class="au-input au-input--xl" type="text" name="search" readonly style=";" onchange="loadData()">';
selector += '	<button class="au-btn--submit" onclick="changeDataUrl()"><i class="zmdi zmdi-search"></i></button>';
selector += '</form>';
$('.section__content').prepend($(selector));

var spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/155i7b3vhsVUSoQlBrQZpAwX6vXX1JXIlPqpACWP0Xt4/edit#gid=0';
$('#data_url').val(spreadSheetUrl).trigger('change');