<template>
  <div>
    <a class="icon" :class="{on:nav_able}" @click="showNavs(true)">JN</a>
    <div class="navs" @click="showNavs(false)">
      <router-link to="/Login">登录/ Login</router-link>
      <router-link to="/">首页 / Home</router-link>
      <router-link to="/Article">文章 / Article</router-link>
      <router-link to="/Me">我 / Me</router-link>
    </div>
  </div>
</template>

<style scoped>
.navs {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  padding: 12px;
  text-align: left;
  transform: translateX(100%);
  transition: transform 300ms ease-in;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
}
.icon {
  display: block;
  cursor: pointer;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 13px;
  border: 1px solid #f98cce;
  background-color: #f98cce;
  color: #fff;
  z-index: 99;
  position: absolute;
  top: 3px;
  right: 3px;
}
.icon.on {
  display: none !important;
}
.icon.on + .navs {
  transform: translateX(0);
}
.navs a {
  line-height: 1.8;
  margin: 6px 0;
  font-size: 0.8rem;
}
.navs a:hover {
  color: #f98cce;
}
</style>

<script>
export default {
  data() {
    return {
      nav_able: false
    };
  },
  methods: {
    showNavs: function(v) {
      this.nav_able = v;
    }
  }
};
</script>
