<template>
  <el-dialog
    v-model="dialogVisible"
    title="自定义地图点"
    width="400px"
    align-center
    append-to-body
    destroy-on-close
    :close-on-click-modal="false"
  >
    <el-form
      ref="pointFormRef"
      :model="pointForm"
      :rules="pointRules"
      label-width="80px"
    >
      <div class="el-form-group">
        <el-form-item
          label="X轴"
          prop="x"
        >
          <el-input
            v-model.number="pointForm.x"
            type="number"
            placeholder="请输入X轴坐标"
          />
        </el-form-item>
        <el-form-item
          label="Y轴"
          prop="y"
          label-width="50px"
        >
          <el-input
            v-model.number="pointForm.y"
            type="number"
            placeholder="请输入Y轴坐标"
          />
        </el-form-item>
      </div>
      <el-form-item
        label="唯一编码"
        prop="code"
      >
        <el-input
          v-model="pointForm.code"
          placeholder="请输入唯一编码"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="地点名称"
        prop="name"
      >
        <el-input
          v-model="pointForm.name"
          placeholder="请输入名称"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="国家地区"
        prop="country"
      >
        <el-input
          v-model="pointForm.country"
          placeholder="请输入国家地区, 可选"
          clearable
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
/**
 * 自定义地图点编辑对话框
 */

import {
  ref,
} from 'vue';
import validate from '@/utils/validate';

const emits = defineEmits(['success']);

const dialogVisible = ref(false);
const pointFormRef = ref(null);
const defaultPointForm = () => ({
  code: '',
  name: '',
  country: '',
  x: '',
  y: '',
});
const pointForm = ref(defaultPointForm());
const pointRules = {
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: ['change', 'blur'],
    },
  ],
  code: [
    {
      required: true,
      message: '请输入唯一编码',
      trigger: ['change', 'blur'],
    },
  ],
  x: [
    {
      required: true,
      trigger: ['change', 'blur'],
      validator: (rule, value, cb) => {
        if (validate.isEmpty(value)) {
          return cb(new Error('请输入X轴坐标'));
        }
        if (!validate.isNumber(value)) {
          return cb(new Error('X轴坐标必须为数字值'));
        }
        if (value < 0 || value > 1280) {
          return cb(new Error('X轴坐标范围为0-1280'));
        }
        return cb();
      },
    },
  ],
  y: [
    {
      required: true,
      trigger: ['change', 'blur'],
      validator: (rule, value, cb) => {
        if (validate.isEmpty(value)) {
          return cb(new Error('请输入Y轴坐标'));
        }
        if (!validate.isNumber(value)) {
          return cb(new Error('Y轴坐标必须为数字值'));
        }
        if (value < 0 || value > 621) {
          return cb(new Error('Y轴坐标范围为0-621'));
        }
        return cb();
      },
    },
  ],
};
let editType;
let pointInfo;
let validateCallback;

function onSubmit() {
  pointFormRef.value.validate((valid) => {
    if (valid) {
      const data = JSON.parse(JSON.stringify(pointForm.value));
      if (typeof validateCallback === 'function') {
        const validStatus = validateCallback(data);
        if (!validStatus) {
          return;
        }
      }
      emits('success', {
        data,
        info: pointInfo,
        type: editType,
      });
      dialogVisible.value = false;
    }
  });
}

function active(type, info, cb) {
  editType = type;
  pointInfo = info;
  validateCallback = cb;
  pointForm.value = defaultPointForm();
  Object.keys(pointForm.value).forEach((key) => {
    if (validate.hasOwn(info, key)) {
      pointForm.value[key] = info[key];
    }
  });
  dialogVisible.value = true;
}

defineExpose({
  active,
});
</script>

<style lang="scss" scoped>
.el-form-group {
  display: flex;
  gap: 20px;

  .el-form-item {
    flex: 1;
  }
}
</style>
