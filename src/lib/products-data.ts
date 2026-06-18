import injMolding1 from "../assets/product_image/inj_molding_1.jpg";
import secondImg from "../assets/product_image/2nd.jpg";
import absPlasticRing from "../assets/product_image/abs_plastic_ring.jpg";
import fourthImg from "../assets/product_image/4th.jpg";
import pvcTubes from "../assets/product_image/pvc_tubes.jpg";
import frontFootrestCovers from "../assets/product_image/front_footrest_covers.png";
import lancerHandleGrip from "../assets/product_image/lancer_handle_grip.png";
import motorcycleVisor from "../assets/product_image/motorcycle_visor.png";
import motorcycleFootrest from "../assets/product_image/motorcycle_footrest.png";
import bikeKickRubber from "../assets/product_image/bike_kick_rubber.png";
import windowRegulatorRoller from "../assets/product_image/window_regulator_roller.png";
import coolerFanBlade from "../assets/product_image/cooler_fan_blade.png";
import orangeComponent from "../assets/product_image/orange_component.png";
import pointCoverCap from "../assets/product_image/point_cover_cap.png";
import blueRubberRings from "../assets/product_image/blue_rubber_rings.png";
import propellerCrashGuard from "../assets/product_image/propeller_crash_guard.png";
import blackPlasticHandle from "../assets/product_image/black_plastic_handle.png";
import fuelTankCap from "../assets/product_image/fuel_tank_cap.png";
import yellowPlasticRing from "../assets/product_image/yellow_plastic_ring.png";
import fuelTankVentGrommet from "../assets/product_image/fuel_tank_vent_grommet.png";
import rearviewMirrorMounting from "../assets/product_image/rearview_mirror_mounting.png";
import caliperDustCap from "../assets/product_image/caliper_dust_cap.png";
import compressionMoldedComponent from "../assets/product_image/compression_molded_component.png";
import hondaAnschlaggummi from "../assets/product_image/honda_anschlaggummi.png";
import blackRubberBumper from "../assets/product_image/black_rubber_bumper.png";
import stabilizerBarBushing from "../assets/product_image/stabilizer_bar_bushing.png";

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

type Seed = { name: string; image?: string; description?: string };

const mk = (cat: string, items: Seed[]): Product[] =>
  items.map(({ name, image, description }) => ({
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name,
    category: cat,
    description: description || `High-quality ${name} manufactured to international standards. Engineered for durability, precision, and reliable industrial performance.`,
    image: image || PLACEHOLDER,
  }));

export const categories: Category[] = [
  {
    slug: "epdm-foam-tape",
    name: "EPDM Foam Tape",
    products: mk("EPDM Foam Tape", [
      { name: "EPDM Foam Tape", image: "https://i.pinimg.com/736x/12/b4/de/12b4de9843ff8aafdf42ccae1b700bde.jpg" },
      { name: "Self Adhesive EPDM Foam Tape", image: "https://5.imimg.com/data5/SELLER/Default/2022/2/ON/CJ/BG/82418102/pu-foam-sheet-with-adhesive.jpg" },
      { name: "EPDM Foam Strip", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROR83fCyPacpQZ-EDeOTuaM2dOTiKwfr0Unp8tQ0fi7YR0jlP1133PhlHuJrYYuRCgPAt2hk68dZFJnbW_oKSDtm5o3abkkFbXUCWne8WoedFbEt5RR83IAU4" },
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
      {
        name: "PVC Tubes",
        image: pvcTubes,
        description: "They are lightweight and resistant to abrasion and corrosion, making them suitable for various industrial or domestic applications. The smooth inner surface is designed to prevent material buildup and ensure consistent flow."
      }
    ]),
  },
  {
    slug: "epdm-sleeve-protector",
    name: "EPDM Sleeve Protector",
    products: mk("EPDM Sleeve Protector", [
      { name: "Black EPDM Sleeve", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIu6rQHAO6focMyxg3bkv0yKaGxKkfjmH9A&s" },
      { name: "EPDM Sleeve Protector", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HegDwCbpYwcMVYH1FNuHUx2s2VWWel2QJg&s" },
      { name: "Polypropylene Strip", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmXzFuddsD0-xC3pqO_f4wdI4G5UGH5ePhg&s" },
    ]),
  },
  {
    slug: "dip-moulding-parts",
    name: "DIP Molding Parts",
    products: mk("DIP Molding Parts", [
      { name: "PVC Back Dip Moulding Part", image: "https://5.imimg.com/data5/SELLER/Default/2024/2/387753189/QA/BS/LB/53109595/pvc-black-dip-moulding-parts-500x500.jpg" },
      { name: "Wiring Harness Guards", image: "https://m.media-amazon.com/images/I/41bZSis9LiL._AC_UF1000,1000_QL80_.jpg" },
      { name: "Dip Moulding Product", image: "https://images.jdmagicbox.com/quickquotes/images_main/pvc-dip-moulding-parts-b2535-2101533077-pu6lr38l.jpg" },
    ]),
  },
  {
    slug: "injection-molding",
    name: "Injection Molding",
    products: mk("Injection Molding", [
      {
        name: "2xRC Airplane Helicopter Model Rotor Clip Plastic",
        image: injMolding1,
        description: "This 3D-printed accessory appears to be an unbranded probe swivel holder for precision measuring tools. It is designed with 8mm and 4mm diameter holes to hold various probes."
      },
      {
        name: "Cable Glands or Cord Grips",
        image: secondImg,
        description: "These black plastic components are likely cable glands or cord grips used to secure and protect electrical wires in lighting fixtures. They feature a threaded housing designed to screw into lamp sockets or ceiling boxes to prevent cable slipping."
      },
      {
        name: "JBL Xtreme Speaker Bass Protection Cap",
        image: fourthImg,
        description: "It is designed to protect the speaker's bass radiators from damage. The cap is made from durable ABS material and features a honeycomb design."
      },
      {
        name: "Gloss Black Motorcycle Visor",
        image: motorcycleVisor,
        description: "This gloss black motorcycle visor is likely a Road Religion windshield for a Yamaha FZ V2 or Fazer v2."
      },
      {
        name: "Dorman 74444 Window Regulator Roller",
        image: windowRegulatorRoller,
        description: "This white plastic component appears to be a Dorman 74444 Window Regulator Roller for specific vehicle models. It is designed as a direct replacement part to restore the function of automotive window systems."
      },
      {
        name: "White Plastic Cooler Fan Blade",
        image: coolerFanBlade,
        description: "This white plastic cooler fan blade is designed for 12-inch air coolers and features 5 blades for high airflow. It is constructed from durable ABS plastic and typically includes an 8mm shaft hole for easy installation."
      },
      {
        name: "Orange Plastic or Silicone Component",
        image: orangeComponent,
        description: "This item appears to be an orange plastic or silicone component likely used in industrial or electronic applications. It shares structural similarities with T-type insulators used for busbar strips in electrical systems."
      },
      {
        name: "Black Plastic Handle",
        image: blackPlasticHandle,
        description: "This black plastic handle is a versatile industrial part used as a grab handle for machinery, cabinets, or as a replacement motorcycle pannier tie-down hook."
      },
      {
        name: "Fuel Tank Cap",
        image: fuelTankCap,
        description: "This black plastic component appears consistent with a boat engine fuel tank cap, typically designed for 12L or 24L outboard tanks. It features a threaded design to ensure a tight seal and prevent fuel leakage or dirt entry."
      },
      {
        name: "Plastic Ring",
        image: yellowPlasticRing,
        description: "This bright yellow, round component is a plastic ring used for various applications such as organization or crafts. It is available in multiple colors and is often used in manufacturing games or photo frames."
      }
    ]),
  },
  {
    slug: "rubber-part",
    name: "Rubber Part",
    products: mk("Rubber Part", [
      {
        name: "Black Oil Seal or Gasket",
        image: absPlasticRing,
        description: "Such components are commonly used to prevent leaks in automotive assemblies. They are typically made from durable materials like EPDM rubber or other polymers."
      },
      {
        name: "Front Footrest Covers",
        image: frontFootrestCovers,
        description: "These black, textured rubber components are front footrest covers designed for motorcycles, featuring a ridged design to provide grip for the rider."
      },
      {
        name: "Lancer Handle Grip Cover",
        image: lancerHandleGrip,
        description: "This component is a black rubber handlebar grip for motorcycles or bicycles, featuring a ribbed texture for enhanced anti-slip functionality."
      },
      {
        name: "Black Rubber Motorcycle Footrest",
        image: motorcycleFootrest,
        description: "This black rubber motorcycle footrest cover features a textured, curved grip design."
      },
      {
        name: "Bike Kick Rubber",
        image: bikeKickRubber,
        description: "This black motorcycle gear shift lever pedal rubber cover shares characteristics with Honda replacement parts."
      },
      {
        name: "Motorcycle Point Cover Cap",
        image: pointCoverCap,
        description: "This black rubber item resembles a dust cover cap used in automotive applications, such as a motorcycle point cover cap or a three-wheeler dust corner cap. Items like this are designed to be impact-resistant, durable, and resistant to fading and deformation."
      },
      {
        name: "Blue Rubber Rings",
        image: blueRubberRings,
        description: "These items appear to be blue and black rubber rings, commonly used as seals or gaskets. Similar components are listed for industrial use, such as water seal gaskets or wear-resistant washers."
      },
      {
        name: "Black Rubberized Crash Guard",
        image: propellerCrashGuard,
        description: "This is a black rubberized crash guard designed for the propeller rings of a DJI Neo drone. The material is flexible TPE (thermoplastic elastomer) meant to absorb impact and prevent drone damage during crashes."
      },
      {
        name: "Black Rubber Fuel Tank Vent Insulation Grommet",
        image: fuelTankVentGrommet,
        description: "This is a black rubber fuel tank vent insulation grommet, specifically a direct replacement for Club Car gas models from 1982 and up. It is engineered with superior materials to match OEM standards for durability and aging resistance."
      },
      {
        name: "Car Interior Rearview Mirror Mounting",
        image: rearviewMirrorMounting,
        description: "This black rubber component appears to be a car interior rearview mirror mounting base, specifically designed as a replacement for Peugeot models like the 206, 207, 307, or 407. It is crafted from durable rubber material designed to provide a stable stand for the rearview mirror."
      },
      {
        name: "Dust Cover or Caliper Dust Cap",
        image: caliperDustCap,
        description: "This black rubber item resembles a dust cover or caliper dust cap for automotive brake systems. It is designed to be flexible and elastic to provide a secure seal against dust and debris."
      },
      {
        name: "Direct Compression Molded Component",
        image: compressionMoldedComponent,
        description: "These black rubber components are specialized automotive parts likely used for vibration dampening, sealing, or mounting. They appear to be compression-molded rubber products, which are commonly utilized in various mechanical and automotive applications."
      },
      {
        name: "Original Gummi Anschlaggummi für Honda",
        image: hondaAnschlaggummi,
        description: "This item is a black rubberized vibration dampener or bushing, typically used in automotive or machinery applications to reduce noise and vibration. It features a distinctive ribbed or grooved cylindrical design to enhance its flexible, shock-absorbing properties."
      },
      {
        name: "Black Rubber Bumper",
        image: blackRubberBumper,
        description: "This black rubber item is a versatile bumper or stopper designed to absorb shock and reduce vibration. It features a cylindrical base with a tapered, pointed top, commonly used in industrial applications."
      },
      {
        name: "Stabilizer Bar Bushing",
        image: stabilizerBarBushing,
        description: "This is a stabilizer bar bushing, a rubber automotive suspension component. It is designed to absorb road shock and reduce vibration, often compatible with Maruti Suzuki vehicles."
      }
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
