/**
 * 自定义定位处理工具
 */

export function loadCustomLocation() {
  const localData = localStorage.getItem('nazhua-custom-location');
  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (e) {
      localStorage.removeItem('nazhua-custom-location');
      return [];
    }
  }
  return [];
}

export function saveCustomLocation(data) {
  localStorage.setItem('nazhua-custom-location', JSON.stringify(data));
}

export function removeCustomLocation() {
  localStorage.removeItem('nazhua-custom-location');
}
