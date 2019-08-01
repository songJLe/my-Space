<template>
  <div class="hello">
    <div class="testimonials-part-section-seperator">
      <div class="container-template">
        <h2>
          <span class="seconday">ME</span>
          Song Jiale say
        </h2>
        <div class="testimonials-container">
          <ul class="testimonials testimonials-wrapper">
            <li class="testimonials-slide">
              <p class="testimonial-author">姓名：宋佳乐</p>
              <p class="testimonial-author">性别：女</p>
              <p class="testimonial-author">籍贯：河南.新乡</p>
              <p class="testimonial-author">生肖：兔兔</p>
              <p class="testimonial-author">星座：天蝎座</p>
              <p class="testimonial-author">学历：本科</p>
              <p class="testimonial-author">职业：web前端开发</p>
              <p class="testimonial-author">
                爱好：画画、K歌、玩游戏、敲代码（毕竟要吃饭的^_^）
              </p>
            </li>
            <li class="testimonials-slide">
              <p class="testimonial-text">
                爱生活、爱艺术、爱书画、爱音乐、爱设计、爱编程。
              </p>
              <p class="testimonial-author">
                人生百态，笑口常开，秉承自我，谨慎独行。静觅，静静寻觅生活的美好。
              </p>
            </li>
            <li class="testimonials-slide">
              <span class="testimonial-text">生活充实，废话就慢慢变少了。</span>
              <span class="testimonial-author"
                >喜欢把每一天都过得很充实，喜欢忙忙碌碌的感觉。</span
              >
            </li>
          </ul>
        </div>
        <div class="testimonials-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testimonials-part-section-seperator {
  background: url('../../static/images/6.jpg') center center no-repeat ;
}

.testimonials-part-section-seperator {
  position: relative;
  height: 25em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden
}

.testimonials-part-section-seperator .container-template {
  position: relative;
  z-index: 2;
  padding: 5% 6% 0;
  width: 100%
}

 .testimonials-part-section-seperator h2 {
  text-align: left;
  margin-bottom: 1em
}

 .testimonials-part-section-seperator:after {
  left: -25%;
  width: 200%;
  background: rgba(27, 32, 33, .88);
  -webkit-transform: skewX(-25deg);
  -moz-transform: skewX(-25deg);
  -ms-transform: skewX(-25deg);
  -o-transform: skewX(-25deg);
  transform: skewX(-25deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: 0 0
} 
@media screen and (min-width:750px) {
   .testimonials-part-section-seperator {
    height: 31.25em
  }

   .testimonials-part-section-seperator h2 {
    margin-bottom: 1.5em
  }
}

@media screen and (min-width:1200px) {
   .testimonials-part-section-seperator {
    height: 41.5em
  }

   .testimonials-part-section-seperator .container-template {
    width: 45%;
    padding-right: 0
  }

   .testimonials-part-section-seperator:after {
    left: -40%;
    width: 100%
  }
}

@media screen and (min-width:1400px) {
   .testimonials-part-section-seperator .container-template {
    width: 35%
  }

   .testimonials-part-section-seperator:after {
    left: -50%
  }
} 
</style>
