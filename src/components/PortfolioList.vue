<template>
  <div class="project">
    <a :href="'#show'+id">
      <div class="project__preview">
        <img :src="thumb" :alt="title">
      </div>
      <div class="project__description">
        <h3 class="project__name"> {{ title }} </h3>
        <p class="project__detail">  </p>
        <p class="project__category">
          <span :key="index + '-tag'" v-for="(tag, index) in tags">{{ '#'+tags[index] }} </span>
        </p>
      </div>
    </a>
    <div :id="'show'+id">
      <a href="#" class="close"></a>
      <div class="project__modal">
        <h1>{{ title }}</h1>
        <h4>{{ detail }}</h4>
        <span :key="index + '-tag'" v-for="(tag, index) in tags">{{ '#'+tags[index] }} </span>
        <ul>
          <li :key="index + '-link'" v-for="(link, index) in links" v-if="link.name==='github'">
            <a :href="link.url" target="_blank">
              <img src="https://i.imgur.com/1vYXHJ0.png">
            </a>
          </li>
          <li :key="index + '-link'" v-for="(link, index) in links" v-if="link.name==='codepen'">
            <a :href="link.url" target="_blank">
              <img src="https://i.imgur.com/eDSe6QG.png">
            </a>
          </li>
          <li :key="index + '-link'" v-for="(link, index) in links" v-if="link.name==='codecanyon'">
            <a :href="link.url" target="_blank">
              <img src="https://i.imgur.com/hvzd0UG.png">
            </a>
          </li>
        </ul>
        <img :key="index + '-image'" v-for="(image, index) in images" :src="image">
      </div>
    </div>
  </div>
</template>

<style scoped>
body, html {
  margin: 0;
}
.project {
  display: inline-block;
  position: relative;
  margin-bottom: 1em;
}
.project__preview img {
  width: 100%;
}
.project__description {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  color: #fff;
  background: rgba(4, 36, 66, 0.85);
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  opacity: 0;
}
.project:hover .project__preview {
  /*transform: translateY(-2.5em);*/
}
.project:hover .project__description {
  opacity: 1;
  /*transform: translateY(-100%);*/
  position: absolute;
}
.project__preview, .project__description {
  transition: all 600ms ease;
}
.project__category {
  color: #ffce00;
}
.project__name, .project__detail, .project__category {
  margin: 0;
  padding: 10px;
}
[id*="show"] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  text-align: center;
  background: rgba(236, 240, 241, 0.6);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
}
[id*="show"]:target {
  visibility: visible;
}
.project__modal {
  top: 0;
  width: 85vw;
  height: 80vh;
  color: #000;
  z-index: 300;
  display: block;
  font-size: 1em;
  background: #fff;
  overflow-y: auto;
  text-align: center;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
}
.project__modal h4 {
  padding: 5px;
  font-size: 1.1em;
  font-weight: normal;
}
.project__modal > img {
  width: 100%;
  max-width: 75vw;
  margin: 15px 0 15px 0;
}
.close {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #34495E;
  opacity: 0.5;
  transition: opacity 200ms;
}
.close:hover {
  opacity: 0.4;
}
ul {
  margin: 20px 0 10px 0;
  padding: 0;
  list-style: none;
}
li > a > img {
  width: 128px;
  height: auto;
}
li > a:hover > img {
  filter: brightness(85%);
  -o-filter: brightness(85%);
  -ms-filter: brightness(85%); /* IE 9 */
  -moz-filter: brightness(85%);
  -webkit-filter: brightness(85%); /* Safari */
}
</style>

<script>
export default {
  name: 'PortfolioList',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    thumb: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: false
    },
    links: {
      type: Array,
      required: false
    }
  }
}
</script>
