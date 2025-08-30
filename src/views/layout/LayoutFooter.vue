<template>
  <footer class="info-bar">
    <div class="info-item">
      <p class="info-item-title">客户服务</p>
      <div style="display: flex; align-items: center; justify-content: center;">
        <span class="info-box">
          <img class="icon" src="../../assets/images/客服.svg" alt="">
          在线客服
        </span>
        <span class="info-box">
          <img class="icon" src="../../assets/images/意见反馈.svg" alt="">
          问题反馈</span>
      </div>
    </div>
    <div class="info-item">
      <p class="info-item-title">
        关注我们</p>
      <div style="display: flex; align-items: center; justify-content: center;">
        <span class="info-box"> <img class="icon" src="../../assets/images/微信.svg" alt="">
          公众号</span>
        <span class="info-box"> <img class="icon" src="../../assets/images/微博.svg" alt="">
          微博</span>
      </div>
    </div>
    <div class="info-item">
      <p class="info-item-title">下载APP</p>
      <div style="display: flex; align-items: center; justify-content: center;">
        <img style="width: 100px;" src="../../assets/images/qrcode.png" alt="">
        <span class="download-box">
          扫码二维码<br>
          立即下载APP
          <el-button class="download-btn" type="primary">立即下载</el-button>
        </span>
      </div>

    </div>
    <div class="info-item" style="border: 0;">
      <p class="info-item-title">服务热线</p>
      <div style="text-align: center;">
        <p class="phone-num">410-8502-100</p>
        <p>周一至周五: 8:00-18:00</p>
      </div>
    </div>
  </footer>
  <footer class="footer">
    <div class="footer-up">
      <span class="footer-up-item">
        <el-icon class="footer-up-icon">
          <Goods />
        </el-icon>价格亲民</span>
      <span class="footer-up-item">
        <el-icon class="footer-up-icon">
          <Van />
        </el-icon>物流快捷
      </span>
      <span class="footer-up-item">
        <el-icon class="footer-up-icon">
          <Watermelon />
        </el-icon>品质保鲜</span>
    </div>
    <div class="footer-down">
      <div class="upper">
        <span class="upper-item">关于我们</span>
        <span class="upper-item">帮助中心</span>
        <span class="upper-item">售货服务</span>
        <span class="upper-item">配送与验收</span>
        <span class="upper-item">商务合作</span>
        <span class="upper-item">搜索推荐</span>
        <span class="upper-item" style="border: 0;">友情链接</span>
      </div>
      <div class="down">Copyright © rabbit fresh</div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.info-bar {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding: 40px 0 40px 0;
  min-width: 1300px;
  height: 240px;
  color: rgb(70, 70, 70);
  background-color: white;
}

.info-item {
  text-align: center;
  border-right: 1px solid rgb(185, 185, 185);
}

.info-item-title {
  font-size: 20px;
  padding-bottom: 30px;
  /* color: rgb(70, 70, 70); */
}

.info-box {
  display: inline-block;
  width: 90px;
  height: 95px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid rgb(185, 185, 185);
}

.icon {
  width: 70px;
  height: 70px;
}

.download-box {
  display: inline-block;
  text-align: center;
  padding-top: 8px;
  width: 100px;
  height: 100px;
  margin: 5px;
}

.download-btn {
  margin-top: 10px;
  width: 100px;
}

.phone-num {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.footer {
  min-width: 1300px;
  height: 260px;
  background-color: rgb(44, 44, 44);
}

.footer-up {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  border-bottom: 1px solid rgb(60, 60, 60);
}

.footer-up-item {
  display: flex;
  align-items: center;
  font-size: 25px;
  color: rgb(224, 224, 224);
}

.footer-up-icon {
  font-size: 40px;
  padding: 2px;
  margin-right: 8px;
  border: 2px solid rgb(224, 224, 224);
  border-radius: 20px;
}

.footer-down {
  padding: 30px 0;
  text-align: center;
  color: rgb(111, 111, 111);
}

.upper {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.upper-item {
  height: 16px;
  line-height: 16px;
  padding: 0 5px;
  cursor: pointer;
  border-right: 1px solid rgb(111, 111, 111);
}

.upper-item:hover {
  color: white;
}
</style>
