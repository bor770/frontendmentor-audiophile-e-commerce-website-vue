const IndexApp = {
  async created() {
    const data = await (await fetch(`assets/data/data.json`)).json();

    this.productData = data;

    this.categories = this.orderOfCategories.map(
      (index) => [...new Set(data.map((product) => product.category))][index]
    );
  },
  data() {
    return { categories: [], productData: {}, orderOfCategories: [1, 2, 0] };
  },
};

Vue.createApp(IndexApp).mount(`#body`);
