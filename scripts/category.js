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
  methods: {
    categoryPageLink(category) {
      return `/views/category.html?category=${category}`;
    },
    categoryThumbnailImage(category) {
      return `/assets/shared/desktop/image-category-thumbnail-${category}.png`;
    },
    productPageLink(product) {
      return `/views/product.html?product=${product.slug}`;
    },
  },
};

Vue.createApp(CategoryApp).mount(`body`);
