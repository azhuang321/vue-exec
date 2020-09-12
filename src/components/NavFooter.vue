<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">商城底部</a><span>|</span>
      <a href="">商城底部</a><span>|</span>
      <a href="">商城底部</a><span>|</span>
    </div>
    <div class="copyright">版权信息</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color: #999999;
      display: inline-block;
    }
    span{
      margin: 0px 7px;
    }
    margin-bottom: 9px ;
  }
}
</style>