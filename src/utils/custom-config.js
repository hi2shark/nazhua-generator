/**
 * 自定义配置本地缓存
 */

export function loadCustomConfig() {
  const localData = localStorage.getItem('nazhua-custom-config');
  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (e) {
      localStorage.removeItem('nazhua-custom-config');
      return {};
    }
  }
  return {};
}

export function saveCustomConfig(data) {
  if (!data) {
    return;
  }
  localStorage.setItem('nazhua-custom-config', JSON.stringify(data));
}

export function removeCustomConfig() {
  localStorage.removeItem('nazhua-custom-config');
}
