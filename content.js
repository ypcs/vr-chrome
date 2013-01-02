/**
 * Simple monkey-patches to vr.fi
 *
 * @author Ville Korhonen <ville@xd.fi>
 */

// Remove trailing whitespaces, because search can't handle them
$("form#searchFormFIRU input[type=text]").focusout(function() {
	var v = $.trim($(this).val());
	$(this).val(v);
});