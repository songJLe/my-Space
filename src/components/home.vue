<template>
  <div class="home">
    
    <div id="bg" class="testimonials-part-section-seperator">
      <div class="container-template">
        <h2> 
          welcome to my world
        </h2>
        <div class="testimonials-container">
            <el-carousel :interval="7000" trigger="click" height="350px">
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
                    爱编程、爱生活、爱艺术、爱书画、爱音乐、爱设计。
                  </p>
                  <p class="testimonial-author">
                    人生百态，笑口常开，秉承自我，谨慎独行。
                  </p>
                  <p class="testimonial-author">
                    静觅，静静寻觅生活的美好。
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
      <homeBg :bgArr = "bgImgArr"></homeBg> 
    </div>
      <navlist></navlist>  
  </div>
</template>

<script>
import homeBg from '@/components/homebg'
import navlist from '@/components/nav'
export default {
  name: 'home',
  data() {
    return {
      bgImgArr:['../../static/images/bg11.jpg','../../static/images/bg2.jpg','../../static/images/bg3.jpg','../../static/images/bg4.jpg'],
    }
  },
  components: {
    homeBg,  
    navlist
  },
  mounted() { 
  },
  methods: {  
  }, 
}
</script>

<style>

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav{
  position: absolute;
  top: 50%;
  height: 80px !important;
  width: 100%; 
}
.nav >>> ul{
  width: 100%;
  background:rgba(0,0,0,.4)
} 
.nav /deep/ ul li{
  width: 30%;
  height: 80px !important;
  transform:rotate(0deg);
  float: left; 
  margin-top:0 !important;
}
.nav >>> ul li a{
  height: 80px !important;
  line-height: 80px;
}
.nav >>> ul li a span{
  width: 100%;
  height:80px;
  visibility: inherit;
  color:rgb(160, 41, 20); 
  font-size: 40px;
  font-weight: bold;
  font-family:'Courier New', Courier, monospace;
  text-shadow: #d122ab 5px 0px 0px;
}

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } 
  .el-carousel__item{
    padding: 0 80px;
  }
.small p{
  line-height: 20px;
  text-align: left;
}
.testimonials-part-section-seperator {
  position: relative; 
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden;
  padding:40px;
}
.el-carousel__item.is-animating{
  transition: transform 1s ease-in-out,-webkit-transform 1s ease-in-out; 
}
.container-template { 
    z-index: 99;
}
.small p{
  color: rgb(3, 53, 25); 
} 
.container-template{
    z-index: 9999;
    opacity: 1;
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
    padding-right: 0; 
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
