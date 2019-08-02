<template>
  <div class="hello">
    
    <div class="testimonials-part-section-seperator">
      <div class="container-template">
        <h2>
          <span class="seconday">ME</span>
          Song Jiale say
        </h2>
        <div class="testimonials-container">
            <el-carousel trigger="click" height="350px">
              <el-carousel-item>
                <h3 class="small">
                  <p class="testimonial-author">姓名：宋佳乐</p>
                  <p class="testimonial-author">性别：女</p>
                  <p class="testimonial-author">现居住地：北京</p>
                  <p class="testimonial-author">籍贯：河南.新乡</p>
                  <p class="testimonial-author">星座：天蝎座</p>
                  <p class="testimonial-author">学历：本科</p>
                  <p class="testimonial-author">职业：web前端开发</p>
                </h3>
              </el-carousel-item>
              <el-carousel-item>
                <h3 class="small">
                  <p class="testimonial-text">
                    爱生活、爱艺术、爱书画、爱音乐、爱设计、爱编程。
                  </p>
                  <p class="testimonial-author">
                    人生百态，笑口常开，秉承自我，谨慎独行。静觅，静静寻觅生活的美好。
                  </p>
                </h3>
              </el-carousel-item>
              <el-carousel-item>
                <h3 class="small">
                  <p class="testimonial-text">生活充实，废话就慢慢变少了。</p>
                  <p class="testimonial-author">喜欢把每一天都过得很充实，喜欢忙忙碌碌的感觉。</p>
                </h3>
              </el-carousel-item>
            </el-carousel>
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
    return {
    }
  },
  mounted() {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } 
.small p{
  line-height: 20px;
  text-align: left;
}
.testimonials-part-section-seperator {
  position: relative;
  background: url('../../static/images/6.jpg') center center no-repeat ;
  /* height: 25em; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden;
  padding:40px;
}

@media screen and (min-width:750px) {
   /* .testimonials-part-section-seperator {
    height: 31.25em
  } */

   .testimonials-part-section-seperator h2 {
    margin-bottom: 1.5em
  }
  .el-carousel{
    height: 25em;
  }
}

@media screen and (min-width:1200px) {
   .testimonials-part-section-seperator {
    height: 41.5em;
  }

   .testimonials-part-section-seperator .container-template {
    width: 35%;
    padding-right: 0
  }

   .testimonials-part-section-seperator:after {
    left: -50%;
    width: 100%
  }
  .el-carousel{
    height: 30em;
  }
}
</style>
