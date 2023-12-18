<template>
  <div>
    <el-container>
      <el-aside width="auto"><CommonAside /></el-aside>
      <el-container>
        <el-header>
          <CommonHeader />
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
import CommonTag from "@/components/CommonTag";
export default {
  name: "Main",
  components: { CommonAside, CommonHeader, CommonTag },
};
</script>
  
<style scoped lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-header {
  padding: 0;
}
</style>
