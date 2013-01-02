/**
 * Simple monkey-patches to vr.fi
 *
 * @author Ville Korhonen <ville@xd.fi>
 */

// TODO: action$=/onlineshop/JourneySearch.do instead of #searchFormFIRU
// TODO: junaliikenne nyt: salli haku S91 -tyyppisillä, pelkän numeron sijaan
// TODO: piilota kampanjakoodi, koska sitä ei ikinä tarvita

function today() {
	var t = new Date();
	var d = t.getDate(); if (d < 10) {d = '0' + d;}
	var m = t.getMonth() + 1; if (m < 10) {m = '0' + m;}
	y = t.getFullYear();
	return d + '.' + m + '.' + y;
}

// 2013-01-02 On pageload, format date as dd.mm.yyyy
$("#tripDepartureDate").val(today());

// 2013-01-02 Remove trailing whitespaces, because search can't handle them
$("form#searchFormFIRU input[type=text]").focusout(function() {
	var v = $.trim($(this).val());
	$(this).val(v);
});