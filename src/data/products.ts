export interface Product {
  id: number;
  name: string;
  price: number;
  comparePrice?: number;
  description: string;
  image: string;
  category: string;
  tag?: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Venture Sling 6L",
    price: 129,
    description: "6L / An organized sling that's ready for adventure",
    image: "https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/USD/BSLI-RAW-301/0",
    category: "bags",
    colors: ['#000000', '#8B4513']
  },
  {
    id: 2,
    name: "Tech Kit",
    price: 59,
    description: "Charger, mouse, powerbank, dongles, cables, earbuds",
    image: "https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/USD/BTKA-BLK-301/0",
    category: "tech",
    colors: ['#000000', '#808080', '#4A4A4A', '#1B4B72', '#B8C2CC', '#8B4513', '#DEB887']
  },
  {
    id: 3,
    name: "Pack Well Travel Set",
    price: 79,
    comparePrice: 98,
    description: "Tech Kit + Lite Pouch Duo",
    image: "https://bellroy-product-images.imgix.net/bellroy_dot_com_gallery_image/USD/BTPU-BLK-301/0",
    category: "travel",
    tag: "Value Set",
    colors: ['#000000']
  }
];