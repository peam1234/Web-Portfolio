<template>
<header>
  <input type="checkbox" id="menu"/>
  <label for="menu">
    <div></div>
  </label>
  <nav>
    <ul class="menu">
      <router-link tag="li" @click.native="closeMenu()" to="/" exact>
        Home
      </router-link>
      <router-link tag="li" @click.native="closeMenu()" to="about" exact>
        About
      </router-link>
      <router-link tag="li" @click.native="closeMenu()" to="/portfolio" exact>
        Portfolio
      </router-link>
      <!-- <li><a href="#">Contact</a></li> -->
    </ul>
    <ul class="socials">
      <li>
        <a href="https://fb.me/peammy" class="fab fa-facebook" target="_blank">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/napat-rattanawaraha-41bb68108/" class="fab fa-linkedin" target="_blank">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a href="https://github.com/peam1234" class="fab fa-github" target="_blank">
          <span class="label"></span>
        </a>
      </li>
      <li>
        <a href="https://codepen.io/peammy" class="fab fa-codepen" target="_blank">
          <span class="label"></span>
        </a>
      </li>
    </ul>
    <p>
      <a href="mailto:mr.napat18@gmail.com">
        mr.napat18@gmail.com
      </a>
    </p>
  </nav>
</header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.1.0/css/brands.css');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/fontawesome.css');
:root {
  --color-hamburger-menu: black;
  --width-hamburger-menu: 35px;
  --height-hamburger-menu: 5px;
  --margin-hamburger-menu: 12px 0;
}
body, html {
  overflow-x: hidden;
}
header > label {
  top: 45px;
  right: 45px;
  cursor: pointer;
  position: absolute;
}
header > label > div {
  position: relative;
  width: var(--width-hamburger-menu);
  height: var(--height-hamburger-menu);
  background: var(--color-hamburger-menu);
  margin: var(--margin-hamburger-menu);
  z-index: 100;
}
header > label > div:before, header > label > div:after {
  position: absolute;
  width: var(--width-hamburger-menu);
  height: var(--height-hamburger-menu);
  background: var(--color-hamburger-menu);
  margin: var(--margin-hamburger-menu);
  content: '';
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
header > label > div:after {
  bottom: 0;
}
header > input[type=checkbox]:not(:checked) ~ label:hover > div:before {
  margin-top: 8px;
}
header > input[type=checkbox]:not(:checked) ~ label:hover > div:after {
  margin-bottom: 8px;
}
header > input[type=checkbox]:checked ~ label > div {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background: #000;
}
header > input[type=checkbox]:checked ~ label > div:after {
  -webkit-transform: rotate(-90deg) translateX(-12px);
  -moz-transform: rotate(-90deg) translateX(-12px);
  -o-transform: rotate(-90deg) translateX(-12px);
  transform: rotate(-90deg) translateX(-12px);
  background: #000;
}
header > input[type=checkbox]:checked ~ label > div:before {
  display: none;
}
header > input[type=checkbox] {
  display: none;
}
header > input[type=checkbox]:checked ~ nav {
  visibility: visible;
  display: block;
  right: 0;
}
nav {
  color: #626262;
  width: 300px;
  height: 100vh;
  top: 0;
  right: -300px;
  background: #fff;
  position: absolute;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
  visibility: hidden;
  z-index: 50;
  display: none;
}
nav > ul {
  padding: 0;
}
nav > ul > li {
  width: 100%;
  cursor: pointer;
  list-style: none;
  -webkit-text-transform: uppercase;
  -moz-text-transform: uppercase;
  -o-text-transform: uppercase;
  text-transform: uppercase;
}
nav > ul > li > a {
  text-decoration: none;
}
nav > p {
  text-align: center;
}
nav > p > a {
  color: black;
  text-decoration: none;
}
.menu {
  margin-top: 7.5em;
}
.menu > li > a {
  color: #626262;
}
.menu > li:hover {
  background: #ccc;
}
.menu > li:hover a {
  color: #000;
}
.menu > li {
  font-size: 2.3em;
  text-align: center;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  letter-spacing: 3px;
  padding: 25px 0 23px 0;
}

.socials {
  text-align: center;
  margin-top: 5.5em;
  width: 100%;
}
.socials > li {
  font-size: 2em;
  display: inline;
}
.socials > li:hover {
  background: none;
}
.socials > li:nth-child(1) > a {
  color: #3b5998;
}
.socials > li:nth-child(2) > a {
  color: #0077b5;
}
.socials > li:nth-child(3) > a {
  color: #333;
}
.socials > li:nth-child(4) > a {
  color: #333;
}
.socials > li > a:visited, .socials > li > a:hover {
  filter: brightness(85%);
  -o-filter: brightness(85%);
  -ms-filter: brightness(85%); /* IE 9 */
  -moz-filter: brightness(85%);
  -webkit-filter: brightness(85%); /* Safari */
}
@keyframes rotateMenu {
  from {
    transform: rotate(0deg);
  }
  to {
  transform: rotate(90deg);
  }
}
@media (max-width: 700px) {
  header > input[type=checkbox]:checked ~ label {
    top: 30px;
  }
  .menu {
    margin-top: 4.5em;
  }
  .socials {
    margin-top: 3em;
  }
}
</style>
<script>
export default {
  name: 'TheHeader',
    methods: {
      closeMenu () {
        document.getElementById("menu").click();
      }
    }
}
</script>
