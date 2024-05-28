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
    categoryPageLink(category) {
      return `/views/category.html?category=${category}`;
    },
    categoryThumbnailImage(category) {
      return `/assets/shared/desktop/image-category-thumbnail-${category}.png`;
    },
  },
};

Vue.createApp(IndexApp).mount(`body`);
