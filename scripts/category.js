const CategoryApp = {
  async created() {
    const { categories, productData, svgIcons } = await init();

    this.categories = categories;
    this.productData = productData;
    this.svgIcons = svgIcons;
  },
  data() {
    return { categories: [], productData: {}, svgIcons: {} };
  },
  methods: {
    selectedCategory() {
      return new URLSearchParams(location.search).get(`category`);
    },
  },
};

Vue.createApp(CategoryApp).mount(`body`);
