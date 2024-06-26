const ORDER_OF_CATEGORIES = [1, 2, 0];
const SVG_ICON_NAMES = [`cart`, `facebook`, `instagram`, `twitter`];

const init = async () => {
  const data = await (await fetch(`/assets/data/data.json`)).json();
  const svgIcons = {};

  await Promise.all(
    SVG_ICON_NAMES.map(async (iconName) => {
      svgIcons[iconName] = await (
        await fetch(`/assets/shared/desktop/icon-${iconName}.svg`)
      ).text();
    })
  );

  return {
    categories: ORDER_OF_CATEGORIES.map(
      (index) => [...new Set(data.map((product) => product.category))][index]
    ),
    productData: data,
    svgIcons,
  };
};

const categoryPageLink = (category) =>
  `/views/category.html?category=${category}`;

const categoryThumbnailImage = (category) =>
  `/assets/shared/desktop/image-category-thumbnail-${category}.png`;

const otherPageLink = (product) =>
  `/views/product.html?product=${product.slug}`;

const productPageLink = (product) =>
  `/views/product.html?product=${product.slug}`;
