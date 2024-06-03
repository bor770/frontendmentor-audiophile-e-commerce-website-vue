const ProductApp = {
  async created() {
    const { categories, productData, svgIcons } = await init();

    this.categories = categories;
    this.svgIcons = svgIcons;

    const selectedProduct = new URLSearchParams(location.search).get(`product`);

    if (!productData.map((product) => product.slug).includes(selectedProduct)) {
      location.replace(`/`);
    }

    this.selectedProduct = productData.find(
      (product) => product.slug === selectedProduct
    );
    console.log(this.selectedProduct);
    this.price = this.selectedProduct.price.toLocaleString();
  },
  data() {
    return {
      categories: [],
      price: ``,
      quantity: 1,
      selectedProduct: {},
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
    otherPageLink(product) {
      return `/views/product.html?product=${product.slug}`;
    },
  },
};

Vue.createApp(ProductApp).mount(`body`);
