export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  products: Product[];
};

const PLACEHOLDER =
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=70";

type Seed = { name: string; image?: string };

const mk = (cat: string, items: Seed[]): Product[] =>
  items.map(({ name, image }) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    category: cat,
    description: `High-quality ${name} manufactured to international standards. Engineered for durability, precision, and reliable industrial performance.`,
    image: image || PLACEHOLDER,
  }));

export const categories: Category[] = [
  {
    slug: "foam",
    name: "Foam",
    products: mk("Foam", [
      { name: "Air Filter Foam", image: "https://i.pinimg.com/1200x/15/db/28/15db280646d6c89750df6fae7aa010df.jpg" },
      { name: "PU Foam Protectors", image: "https://i.pinimg.com/1200x/aa/ef/d9/aaefd987f44216facf4577be71c7c0f2.jpg" },
      { name: "Foam Filter", image: "https://i.pinimg.com/736x/7b/7a/fb/7b7afb3bd0419c883212f201249fc903.jpg" },
      { name: "EPDM Foam Tapes", image: "https://i.pinimg.com/736x/12/b4/de/12b4de9843ff8aafdf42ccae1b700bde.jpg" },
      { name: "EVA Foam Pad", image: "https://i.pinimg.com/736x/5b/02/8e/5b028e6727c4e9e2c5280196e2e81c6b.jpg" },
      { name: "EVA Foam Strips", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROR83fCyPacpQZ-EDeOTuaM2dOTiKwfr0Unp8tQ0fi7YR0jlP1133PhlHuJrYYuRCgPAt2hk68dZFJnbW_oKSDtm5o3abkkFbXUCWne8WoedFbEt5RR83IAU4" },
      { name: "EP Packaging Foam", image: "https://i.pinimg.com/1200x/26/88/7d/26887db308c59e3c5f1c2efea296e974.jpg" },
      { name: "PU Foam with Nitto Tape", image: "https://5.imimg.com/data5/SELLER/Default/2022/2/ON/CJ/BG/82418102/pu-foam-sheet-with-adhesive.jpg" },
    ]),
  },
  {
    slug: "pvc-compound",
    name: "PVC Compound",
    products: mk("PVC Compound", [
      { name: "PVC Transparent Compound", image: "https://i.pinimg.com/736x/39/0b/29/390b29b1f6c57abacad110d4314700ad.jpg" },
      { name: "PVC Black Compound", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UAHe1Gkos9DZt5ied0eDIaF_y39bsoR6mw&s" },
      { name: "PVC Gray Compound", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/312912989/XW/CY/SW/9987977/gray-pvc-compound.jpg" },
      { name: "PVC White Compound", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfto2GboSkOxd6qJRnXIWMkWztglmqhoOEog&s" },
      { name: "PVC Green Compound", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9Up3V15hHBCr-CYKoqI0MeGGDzbKUGPXSg&s" },
      { name: "PVC Red Compound", image: "https://tiimg.tistatic.com/fp/2/010/118/red-pvc-compounds-305.jpg" },
    ]),
  },
  {
    slug: "pvc-sleeve",
    name: "PVC Sleeve",
    products: mk("PVC Sleeve", [
      { name: "PVC Sleeve Printed", image: "https://5.imimg.com/data5/SELLER/Default/2025/1/478110915/KC/PZ/VD/76180286/shrink-sleeves-500x500.jpg" },
      { name: "PVC Sleeve Roll", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/PS/BM/CK/126529028/pvc-sleeve-500x500-500x500.jpg" },
      { name: "Black PVC Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR2N0ffeSOtKPnBLrGQl4LucrCvHRwdiN2g&s" },
      { name: "Grey PVC Sleeve", image: "https://3.imimg.com/data3/BX/SW/MY-4861994/a-500x500.jpg" },
      { name: "Transparent PVC Sleeve", image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/round-flexible-transparent-pvc-20260314220225094.webp" },
      { name: "Roll PVC Sleeve", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/PS/BM/CK/126529028/pvc-sleeve-500x500-500x500.jpg" },
      { name: "Heat Resistant PVC Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJYmhfR7wqfuHpV9nKqtWI2Jir3S7XvRS8w&s" },
      { name: "Red PVC Sleeve", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/NW/JR/VL/180818467/product-jpeg-500x500.png" },
      { name: "Green PVC Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4VGpbCbls-kqIvqyuV8bN4QsSa1A69jKXQ&s" },
      { name: "Blue PVC Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU40srzRxQs60dZ14EDGZDGKJOZr34vQjGBw&s" },
    ]),
  },
  {
    slug: "automotive-parts",
    name: "Automotive Parts",
    products: mk("Automotive Parts", [
      { name: "Automotive Parts", image: "https://tiimg.tistatic.com/fp/1/008/949/automotive-parts-137.jpg" },
      { name: "Pro Technology Footrest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiiwoKiqWOfzJFUXCFtPxKgBZI59FtPED9w&s" },
      { name: "Golden Footrest", image: "https://5.imimg.com/data5/ANDROID/Default/2025/3/494515565/ID/SD/KF/3432319/product-jpeg-500x500.jpeg" },
      { name: "Fuelseat" },
    ]),
  },
  {
    slug: "injection-molding",
    name: "Injection Molding",
    products: mk("Injection Molding", [{ name: "Injection Molding", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoDcZB5KSlA3RbIVGnh5x4Qmtzj6bTpk1QQ&s" }]),
  },
  {
    slug: "epdm-gaskets-seals",
    name: "EPDM Gaskets & Seals",
    products: mk("EPDM Gaskets & Seals", [
      { name: "EPDM Gasket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2NjZ2oIJ8yBS0ee46rGxA_T_7ZCDCk1lZw&s" },
      { name: "EPDM Seals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmP9xYAL9tllX5p9L4ZkHcVYmEHu-JGtxTHQ&s" },
    ]),
  },
  {
    slug: "epdm-sleeve-protectors",
    name: "EPDM Sleeve Protectors",
    products: mk("EPDM Sleeve Protectors", [
      { name: "Black EPDM Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIu6rQHAO6focMyxg3bkv0yKaGxKkfjmH9A&s" },
      { name: "EPDM Sleeve Protector", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HegDwCbpYwcMVYH1FNuHUx2s2VWWel2QJg&s" },
      { name: "Polypropylene Strip", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmXzFuddsD0-xC3pqO_f4wdI4G5UGH5ePhg&s" },
    ]),
  },
  {
    slug: "pvc-colorful-matt",
    name: "PVC Colorful Matt",
    products: mk("PVC Colorful Matt", [
      { name: "XLEP Foam", image: "https://image.made-in-china.com/203f0j00jWdeaUfAMFcv/XLPE-Foam-Sheet-PE-Polyethylene-Foam-Roll-for-Packing.webp" },
      { name: "Reticulated Foam", image: "https://m.media-amazon.com/images/I/81UeR0VxynL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Cushion Non Skip Mat", image: "https://m.media-amazon.com/images/I/71n1ol+Q8qL.jpg" },
      { name: "Urethane Foam", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVniNkosWM-Qo_9bbCPH3vTIqoBZxBy52PJdvUELEJ3-l-h9ttPopkC0TDsHk_GCZi_ikMnCb7MgI--esrz4-zJZQiIuqw" },
      { name: "HD Urethane Foam", image: "https://5.imimg.com/data5/SELLER/Default/2022/2/IB/BQ/UG/2103745/20mm-high-density-pu-foam-500x500.jpg" },
      { name: "PE Foam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgrYcD283XMFLJSYPgqR_ow5InhmhWtIw8g&s" },
      { name: "Acrylic Foam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPmdJWbhdzdXIKVq7Z4msYT2UD9xoeN1HHA&s" },
      { name: "Neoprene Foam", image: "https://m.media-amazon.com/images/I/61aVexaAi4L.jpg" },
      { name: "Foam Filter For Aquarium", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0TvOnGxe9bsrlf09nUTQkzorblJFAurgd75clyvIo1r34KpFyHXar6F3u8Vl8Uc-LL7V7EQclV4E1-0VCDBQxpSsKH1-U" },
    ]),
  },
  {
    slug: "dip-moulding-parts",
    name: "Dip Moulding Parts",
    products: mk("Dip Moulding Parts", [
      { name: "PVC Back Dip Moulding Part", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/387753189/QA/BS/LB/53109595/pvc-black-dip-moulding-parts-500x500.jpg" },
      { name: "Wiring Harness Guards", image: "https://m.media-amazon.com/images/I/41bZSis9LiL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Dip Moulding Product", image: "https://images.jdmagicbox.com/quickquotes/images_main/pvc-dip-moulding-parts-b2535-2101533077-pu6lr38l.jpg" },
    ]),
  },
  {
    slug: "wire-harness",
    name: "Wire Harness",
    products: mk("Wire Harness", [
      { name: "Wire Harness", image: "https://media.istockphoto.com/id/467587798/photo/cable-harness-loom-with-connectors.jpg?s=612x612&w=0&k=20&c=za81d1B3FbC0PMJRmfaa5-ieiyeb1RCSiUH-kkZRNDk=" },
      { name: "PVC Colorful Matt", image: "https://media.istockphoto.com/id/1364030756/photo/sheets-of-soft-paper-of-different-colors.jpg?s=612x612&w=is&k=20&c=RhghBM_c30PWDBB_izYv7s8bhzaVntXgYfSOgFf2H0s=" },
      { name: "PVC Anti Slip Colorful Matts", image: "https://media.istockphoto.com/id/453065287/photo/elastic-mats-for-carpets.jpg?s=612x612&w=is&k=20&c=OodZdlGNF7AuXaM5DyzpIofimTLXEbfghl0fPS3HZhw=" },
      { name: "Double Color Turf Matts", image: "https://5.imimg.com/data5/BF/PS/HA/SELLER-54441317/pvc-turf-mat-250x250.jpg" },
    ]),
  },
  {
    slug: "tube-machine",
    name: "Tube Machine",
    products: mk("Tube Machine", [
      { name: "White Tube Machine", image: "https://media.istockphoto.com/id/185310873/photo/test-tubes.jpg?s=612x612&w=is&k=20&c=yyVGwf4Ox5Y742sPVeS3wepS2ctR27GDEhJvpGAZgWs=" },
      { name: "Gray LDPE Tube", image: "https://media.istockphoto.com/id/1221631511/photo/white-tube-cream-packaging-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=Lcy6R9omSxQYPLP7aWkNvI3IFaZrP2Ul9b0-TdhGyKo=" },
    ]),
  },
];

export const allProducts: Product[] = categories.flatMap((c) => c.products);

export function findProduct(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function findCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
