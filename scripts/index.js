const IndexApp = {
  async created() {
    const { categories, svgIcons } = await init();

    this.categories = categories;
    this.svgIcons = svgIcons;
  },
  data() {
    return { categories: [], svgIcons: {} };
  },
  methods: {
    categoryThumbnailImage(category) {
      return `/assets/shared/desktop/image-category-thumbnail-${category}.png`;
    },
  },
};

Vue.createApp(IndexApp).mount(`body`);
