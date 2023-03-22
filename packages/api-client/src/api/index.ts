let exportData;
import * as odoo15 from './odoo-15';
import * as odoo16 from './odoo-16';

// default is odoo15
exportData = odoo15;

if (process.env.ODOO_VERSION === '16.0') {
  exportData = odoo16;
}

export default exportData;
