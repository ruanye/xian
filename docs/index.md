---
layout: home

title: 蓝桥杯
titleTemplate: 连接未来

hero:
  name: 蓝桥杯
  text: HTML+CSS & JavaScript & Vue
  tagline: 蓝桥杯备赛
  actions:
    - theme: brand
      text: 开始
      link: /base/01
    - theme: alt
      text: WEB 题型分析
      link: /profile/03
    - theme: alt
      text: 备赛专区
      link: https://www.lanqiao.cn/cup/
  image:
    src: /cup.png
    alt: 蓝桥杯

features:
  - icon: 🔭
    title: 讲练结合
    details: 深入研究题目类型，提高解题能力。
  - icon: 🌱
    title: 考纲解读
    details: 深层次考纲解读，抓佳得分要点。
  - icon: 🎯
    title: 高频考点
    details: 高频考点精讲。
  - icon: 📚
    title: 考纲深入
    details:   全方位讲解竞赛核心考点，全面提升应对竞赛的能力。
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
.VPImage.image-src{
  max-width: 256px;
  max-height: 256px;
 border-radius: 20%;
  transform:translate(-50%,-50%) skew(8deg);
  border: 10px solid #ca88f1;
  box-shadow:-12px 14px 5px  rgba(0, 0, 0, 0.5);
}
</style>
