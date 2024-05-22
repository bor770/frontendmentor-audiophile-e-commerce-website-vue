const IndexApp = {
  async created() {
    const data = await (await fetch(`assets/data/data.json`)).json();

    this.productData = data;

    this.categories = this.orderOfCategories.map(
      (index) => [...new Set(data.map((product) => product.category))][index]
    );

    for (const iconName of this.svgIconNames) {
      this.svgIcons[iconName] = await (
        await fetch(`assets/shared/desktop/icon-${iconName}.svg`)
      ).text();
    }
  },
  data() {
    return {
      categories: [],
      orderOfCategories: [1, 2, 0],
      productData: {},
      svgIconNames: [`cart`, `facebook`, `instagram`, `twitter`],
      svgIcons: {},
    };
  },
};

Vue.createApp(IndexApp).mount(`#body`);
