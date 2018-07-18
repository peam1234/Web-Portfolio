<template>
  <div class="section">
    <p class="title">Napat 'R<br>Web Developer</p>
    <p class="sub-title"><!-- Web Developer --></p>
    <p class="text-head">
      <router-link to="portfolio" exact>
            Portfolio
      </router-link>
    </p>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  text-align: center;
}
.text-head {
  font-family: 'Verdana', 'Kanit', Sans-Serif, 'Dreamscape';
  -webkit-text-transform: uppercase;
  -moz-text-transform: uppercase;
  -o-text-transform: uppercase;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 3.8em;
  transition: all .5s;
  -o-transition: all .5s;
  -ms-transition: all .5s; /* IE 9 */
  -moz-transition: all .5s;
    -webkit-transition: all .5s; /* Safari */
}
.text-head > a {
  color: #000;
  font-weight: 800;
  font-size: 3.5em;
  text-decoration: none;
  /*text-shadow: -0.06em 0 rgba(227,6,19,.8),  0.06em 0 rgba(0,159,227,.7);*/
  text-shadow: -3px 4px rgba(227, 6, 19, .8), -6px 4px rgba(255, 237, 0, 1), 3px -4px rgba(0, 159, 227, .7);
}
.text-head:hover {
  transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2); /* IE 9 */
  -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2); /* Safari */
  /*text-shadow: 0 0 10px #10aad1, 0 0 20px #10aad1, 0 0 30px #10aad1, 0 0 40px #10aad1, 0 0 50px #10aad1;*/
  /*text-shadow: -2px -2px rgba(227, 6, 19, .8), -4px -4px rgba(255, 237, 0, 1), -6px -6px rgba(0, 159, 227, .7);*/
}
.title {
  margin: 0;
  /*position: relative;*/
  font-family: 'Raleway', 'Kanit', Sans-Serif, 'Voyager Light';
  font-weight: 800;
  color: transparent;
  font-size: 6.5em;
  background: url("../assets/rainbow-nebula.jpg") repeat;
  background-position: 40% 50%;
  background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text; /* IE 9 */
  -moz-background-clip: text;
    -webkit-background-clip: text; /* Safari */
  position: relative;
  text-align: center;
  line-height: 1em;
  letter-spacing: -5px;
  -webkit-text-transform: uppercase;
  -moz-text-transform: uppercase;
  -o-text-transform: uppercase;
  text-transform: uppercase;
  z-index: 10;
}
.sub-title {
  display: block;
  text-align: center;
  -webkit-text-transform: uppercase;
  -moz-text-transform: uppercase;
  -o-text-transform: uppercase;
  text-transform: uppercase;
  padding-top: 10px;
}

@media (max-width: 840px) {
  .title {
    font-size: 4.8em;
  }
}
@media (max-width: 700px) {
  .text-head > a {
    font-size: 2em;
  }
  .title {
    font-size: 5em;
  }
  .menu {
    margin-top: 4.5em;
  }
}
@media (max-width: 625px) {
  .title {
    font-size: 4.5em;
  }
}
@media (max-width: 540px) {
  .title {
    font-size: 4em;
  }
}
@media (max-width: 469px) {
  .title {
    font-size: 3.8em;
  }
}
@media (max-width: 442px) {
  .title {
    font-size: 3.5em;
  }
}
</style>

<script>
export default {
  name: 'Home',
  created () {},
  mounted () {
    document.onmousemove = function (e) {
      if (window.location.pathname === '/') {
        let traX, traY
        let mouseX, mouseY
        // let ww = window.innerWidth
        // let wh = window.innerHeight
        mouseX = e.pageX
        mouseY = e.pageY
        traX = ((4 * mouseX) / 570) + 40
        traY = ((4 * mouseY) / 570) + 50
        document.getElementsByClassName('title')[0].style.backgroundPosition = `${traX}% ${traY}%`
      }
    }
  }
}
</script>
