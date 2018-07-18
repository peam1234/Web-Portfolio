<template>
  <div class="section">
    <Portfolio-List
      v-for = "(item, index) in data"
      :id = "index"
      :key = "index"
      :title = "item.name"
      :tags = "item.tags"
      :detail = "item.detail"
      :thumb = "item.thumb"
      :images = "item.images"
      :links = "item.links"
    >
    </Portfolio-List>
  </div>
</template>

<style scoped>
.section {
  column-count: 3;
  margin: 100px 15px 0 15px;
}
@media (max-width: 840px) {
  .section {
    column-count: 2;
  }
}
@media (max-width: 650px) {
  .section {
    column-count: 1;
  }
}
</style>

<script>
import data from '../data/portfolio'
import PortfolioList from '@/components/PortfolioList'
export default {
  name: 'Portfolio',
  props: ['title', 'detail', 'tags', 'thumb', 'images', 'links'],
  components: {
    PortfolioList
  },
  data () {
    return {
      data
    }
  }
}
</script>
