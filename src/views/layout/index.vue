/* eslint-disable no-debugger */
<!-- [功能描述：布局] @Auther:jiaqi.zhao-->
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 router>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="/about">about</el-menu-item>
            <el-menu-item index="/first">工作台</el-menu-item>
            <el-menu-item index="/home">home</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3"
                        disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    funGo (index) {
      this.$router.push({ path: index, replace: true })

    }
  },
  created () {
  },
  activated: function () { }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 80px;
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
  text-align: center;
  line-height: 762px;
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
</style>
