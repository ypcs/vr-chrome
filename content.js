/**
 * Simple monkey-patches to vr.fi
 *
 * @author Ville Korhonen <ville@xd.fi>
 */

// 2013-01-02 On form submit, format date dd.mm.yyyy
$("form#searchFormFIRU").submit(function() {
	
});

// 2013-01-02 Remove trailing whitespaces, because search can't handle them
$("form#searchFormFIRU input[type=text]").focusout(function() {
	var v = $.trim($(this).val());
	$(this).val(v);
});