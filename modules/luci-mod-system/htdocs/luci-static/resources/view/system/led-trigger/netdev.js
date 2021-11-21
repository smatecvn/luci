'use strict';
'require form';
'require tools.widgets as widgets';

return L.Class.extend({
	trigger: _("netdev (kernel)"),
	kernel: true,
	addFormOptions(s){
		var o;

		o = s.option(widgets.DeviceSelect, '_net_dev', _('Device'));
		o.rmempty = true;
		o.ucioption = 'dev';
		o.modalonly = true;
		o.noaliases = true;
		o.depends('trigger', 'netdev');

		o = s.option(form.MultiValue, 'mode', _('Trigger Mode'));
		o.rmempty = true;
		o.modalonly = true;
		o.depends('trigger', 'netdev');
		o.value('link', _('Link On'));
		o.value('tx', _('Transmit'));
		o.value('rx', _('Receive'));
	}
});
