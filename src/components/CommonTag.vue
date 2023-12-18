<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      size="mini"
      style="margin: 0 5px"
      @click="changeMenu(item)"
      @close="handlerClose(item, index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations(["closeTag"]),
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    handlerClose(item, index) {
      this.closeTag(item);
      const length = this.tags.length;
      if (item.name !== this.$route.name) return;
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-tag:hover {
  color: #ccc;
  cursor: pointer;
}
</style>