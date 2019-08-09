<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider></va-slider>
      <va-content-wrap></va-content-wrap>
      <va-footer></va-footer>
      <va-control-sidebar></va-control-sidebar>
      <va-control-sidebar-bg></va-control-sidebar-bg>
    </div>
  </div>
</template>

<script>
import VANaviBar from './NaviBar.vue'
import VASlider from './Slider.vue'
import VAContentWrap from './ContentWrap.vue'
import Footer from './Footer.vue'
import ControlSidebar from './ControlSidebar'
import ControlSidebarBg from './ControlSidebarBg'
// eslint-disable-next-line
import $ from 'jquery'
// eslint-disable-next-line
import Demo from './jquery/demo'
// eslint-disable-next-line
import Dashboard from './jquery/pages/dashboard'

export default {
  name: 'app',
  mounted: function(){
    // eslint-disable-next-line
    //$(Dashboard);
    // eslint-disable-next-line
    //$(Demo);
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap,
    'va-footer': Footer,
    'va-control-sidebar': ControlSidebar,
    'va-control-sidebar-bg': ControlSidebarBg
  }
}
</script>
<style>
  html, body {
    height: 100% !important;
    min-height: 100% !important;
  }
  #app {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    height: 100%;
  }
</style>
