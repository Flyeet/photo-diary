const path = require('path');
const fs = require('fs');

const defaults = {
  siteName: 'Tiffany的边边角角',
  siteTitle: '用照片写日记',
  siteDescription: '拍下幸福的瞬间，我也站在幸福里',
  footer: { html: '© 2026' },
  contacts: {}
};

const configPath = path.join(__dirname, '..', 'config.js');

try {
  if (fs.existsSync(configPath)) {
    const config = require(configPath);
    module.exports = { ...defaults, ...config, contacts: { ...defaults.contacts, ...(config.contacts || {}) } };
    return;
  }
} catch (e) {
  console.warn('⚠️  config.js 加载失败，使用默认配置:', e.message);
}

module.exports = defaults;
