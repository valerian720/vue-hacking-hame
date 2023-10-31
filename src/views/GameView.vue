<template>
  <div class="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Header,
    Main,
    Footer,
  },
})
export default class HomeView extends Vue {}
</script>
