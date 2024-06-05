const IndexApp = {
  async created() {
    const { categories, svgIcons } = await init();

    this.categories = categories;
    this.svgIcons = svgIcons;
  },
  data() {
    return { categories: [], svgIcons: {} };
  },
  methods: { categoryPageLink, categoryThumbnailImage },
};

Vue.createApp(IndexApp).mount(`body`);
