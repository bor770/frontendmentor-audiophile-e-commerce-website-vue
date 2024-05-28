const CategoryApp = {
  async created() {
    const { categories, productData, svgIcons } = await init();

    this.categories = categories;
    this.productData = productData;
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
      productData: {},
      selectedCategory: null,
      selectedProducts: [],
      svgIcons: {},
    };
  },
  methods: {
    categoryImage(product, width) {
      return product.categoryImage[width];
    },
    categoryPageLink(category) {
      return `/views/category.html?category=${category}`;
    },
    categoryThumbnailImage(category) {
      return `/assets/shared/desktop/image-category-thumbnail-${category}.png`;
    },
  },
};

Vue.createApp(CategoryApp).mount(`body`);
