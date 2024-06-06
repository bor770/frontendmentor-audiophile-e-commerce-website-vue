const CategoryApp = {
  async created() {
    const { categories, productData, svgIcons } = await init();

    this.categories = categories;
    this.svgIcons = svgIcons;

    const selectedCategory = new URLSearchParams(location.search).get(
      `category`
    );

    if (!categories.includes(selectedCategory)) {
      location.replace(`/`);
    }

    this.selectedCategory = selectedCategory;

    this.selectedProducts = productData
      .filter((product) => product.category === selectedCategory)
      .toReversed();
  },
  data() {
    return {
      categories: [],
      selectedCategory: null,
      selectedProducts: [],
      svgIcons: {},
    };
  },
  methods: { categoryPageLink, categoryThumbnailImage, productPageLink },
};

Vue.createApp(CategoryApp).mount(`body`);
