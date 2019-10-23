<template id="BG">  
  <div> 
  
  <div id="baozha" :style="zIndexStyle">
    <div v-for="iy in y" :key="iy"> 
      <div ref="opc" v-for="ix in x" :key="ix" :style="smallBoxStyle(ix-1,iy-1)" class="smalls"></div>
    </div> 
  </div>
  </div> 
</template>

<script>
export default {
  name: 'homeBg',
  props: ['bgArr'],
  data() {
    return { 
      bgImgArr:this.bgArr, 
      pintu:true,
      pinbox:[],
      x:10,//x代表盒子横向个数 y纵向个数   
      y:8,
      zIndexStyle:``,

      bgImgIndex:0,
      zIndex:99999,
      zIndexStyle:``,
      timer:'',
      deltimer:''
    }
  },  
  mounted() { 
    this.lunbo() 
  },
  methods: {
    lunbo(){
      if(this.bgImgIndex == this.bgImgArr.length) this.bgImgIndex = 0;
      this.zIndexStyle=`background:url(${this.bgImgArr[this.bgImgIndex]})`
      setTimeout(this.set, 6000);   
    },
    set(){
      this.bgImgIndex++
      this.lunbo() 
      this.zIndexStyle=``
      for(var i=0;i<this.$refs.opc.length;i++){ 
        this.$refs.opc[i].style.transition = `${this.random(0.5,2)}s all ease`;
        this.$refs.opc[i].style.transform = `perspective(${this.random(600,800)}px) rotateX(${this.random(-180,120)}deg) rotateY(${this.random(-120,120)}deg) translateZ(500px) scale(${this.random(1.5,2)}) translateX(2.11449px) translateY(${this.random(-30,30)}px)`
        this.$refs.opc[i].style.opacity = 0
        setTimeout(this.hui, 2000);   
      }
      
    },
    smallBoxStyle(ix,iy){ 
      this.opacity = 1
      return `width:${(app.offsetWidth-2)/this.x}px;height:${(app.offsetHeight-2)/this.y}px;background:url(${this.bgImgArr[this.bgImgIndex]}) ${-ix*((app.offsetWidth-2)/this.x)}px ${-iy*((app.offsetHeight-2)/this.y)}px;`
    },

    hui(){
      for(var i=0;i<this.$refs.opc.length;i++){ 
        this.$refs.opc[i].style.transform = 'none'
        this.$refs.opc[i].style.opacity = 1
      }
    },
    random(max,min){
				return Number(Math.random()*(max-min))+min;
		}
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.smalls{
  float: left; 
  transform-style: preserve-3d;
}  
#baozha{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  opacity: 0.5;
} 
</style>
