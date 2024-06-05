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
    addToCart() {
      const cartData = localStorage.getItem(`cart`);
      const cart = cartData ? JSON.parse(cartData) : {};
      const slug = this.selectedProduct.slug;

      cart[slug] = (cart[slug] || 0) + this.quantity;

      localStorage.setItem(`cart`, JSON.stringify(cart));
    },
    decreaseQuantity() {
      this.quantity = --this.quantity || 1;
    },
    categoryPageLink,
    categoryThumbnailImage,
    increaseQuantity() {
      this.quantity++;
    },
    otherPageLink(product) {
      return `/views/product.html?product=${product.slug}`;
    },
  },
};

Vue.createApp(ProductApp).mount(`body`);
