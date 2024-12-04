import { ElMessage } from 'element-plus';

export default (text) => {
  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  if (text.length < 10) {
    ElMessage.success(`复制"${text}"成功`);
  } else {
    ElMessage.success('复制成功');
  }
};
