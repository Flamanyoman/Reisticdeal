import longcard1 from '../layouts/homeLayouts/assets/longcard1.png';
import longcard2 from '../layouts/homeLayouts/assets/longcard2.png';
import longcard3 from '../layouts/homeLayouts/assets/longcard3.png';
import longcard4 from '../layouts/homeLayouts/assets/longcard4.png';
import RollsRoyce from '../assets/R.jpg';
import Escalade from '../assets/Escalade.jpg';

import Sienna from '../assets/Sienna.jpg';
import Expert from '../assets/Expert.jpg';
import Hiace from '../assets/Hiace.jpg';

import LocalSteel from '../assets/Local steel.jpg';
import LocalWood from '../assets/Local wood.jpg';
import ForiegnSteel from '../assets/Foriegn steel.webp';
import ForiegnWood from '../assets/Foriegn wood.jpg';

import TilesHeadstone from '../assets/Tiles headstone.jpg';
import ConcretHeadstone from '../assets/Concret headstone.jpg';
import WoodHeadstone from '../assets/Wood headstone.jpg';
import MarbleHeadstone from '../assets/Marble headstone.jpg';
import SlateHeadstone from '../assets/Slate headstone.jpg';
import StatueHeadstone from '../assets/Statue headstone.jpg';

import Hearse from '../assets/Hearse.webp';

import LoweringDevice from '../assets/Lowering device.jpg';

import Decoration from '../assets/Decoration.jpg';

import PallBearers from '../assets/Pall bearers.jpg';

const CameraMan =
  'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Billboards =
  'https://images.pexels.com/photos/9740620/pexels-photo-9740620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const Wreath =
  'https://plus.unsplash.com/premium_photo-1695751302118-64e1aabbd539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
import LilliesWreath from '../assets/Lilies wreath.jpg';
import RosesWreath from '../assets/Roses wreath.jpg';
import OrchidsWreath from '../assets/Orchids wreath.jpg';
import GadoliWreath from '../assets/Gadoli wreath.jpg';

import Repatration from '../assets/repatriation.jpg';

const allData = {
  services: [
    // Ambulance (0)
    {
      image:
        'https://images.unsplash.com/photo-1621201216621-262db27f9f12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
      types: [
        {
          name: 'Sienna',
          price: 100000,
          img: Sienna,
          type: 'Ambulance',
        },
        {
          name: 'Peugeot Expert',
          price: 125000,
          img: Expert,
          type: 'Ambulance',
        },
        {
          name: 'Toyota Hiace',
          price: 350000,
          img: Hiace,
          type: 'Ambulance',
        },
      ],
    },

    // coffin (1)
    {
      image:
        'https://plus.unsplash.com/premium_photo-1713985789550-c3988a65f4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZpbnxlbnwwfDF8MHx8fDA%3D',
      description: '',
      types: [
        {
          name: 'Local wood',
          price: 100000,
          img: LocalWood,
          type: 'Coffin',
        },
        {
          name: 'Foreign Wood',
          price: 125000,
          img: ForiegnWood,
          type: 'Coffin',
        },
        {
          name: 'Local steel',
          price: 350000,
          img: LocalSteel,
          type: 'Coffin',
        },
        {
          name: 'Foreign steel',
          price: 850000,
          img: ForiegnSteel,
          type: 'Coffin',
        },
      ],
    },

    // graveStones (2)
    {
      image:
        'https://images.unsplash.com/photo-1620405400036-ed8d0e237078?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
      types: [
        {
          name: 'Concrete',
          price: 40000,
          img: ConcretHeadstone,
          type: 'Grave',
        },
        {
          name: 'Wood',
          price: 50000,
          img: WoodHeadstone,
          type: 'Grave',
        },
        {
          name: 'Tiles',
          price: 80000,
          img: TilesHeadstone,
          type: 'Grave',
        },
        {
          name: 'Marble',
          price: 175000,
          img: MarbleHeadstone,
          type: 'Grave',
        },
        {
          name: 'Slate',
          price: 250000,
          img: SlateHeadstone,
          type: 'Grave',
        },
        {
          name: 'Statue',
          price: 500000,
          img: StatueHeadstone,
          type: 'Grave',
        },
      ],
    },

    // Tribute site (3)
    {
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
      types: [
        {
          name: 'Tribute Site',
          price: 10000,
          img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Website',
        },
      ],
    },

    // Hearse (4)
    {
      image: Hearse,
      description:
        'Our hearses are well maintained and built to offer a befitting send off to your dear ones. Our drivers are well trained to provide comfort and respect to the families and friends of the deceased',
      tagLine: 'Order a Hearse',
      types: [
        { name: 'Rolls Royce', price: 35000, img: RollsRoyce, type: 'Hearse' },
        { name: 'Excalade', price: 35000, img: Escalade, type: 'Hearse' },
      ],
    },

    // Lowering Device (5)
    {
      image: LoweringDevice,
      description:
        'Our lowering devices are designed to provide a dignified and respectable lowering of the casket. Made with accuracy and durability, they facilitate a dignified and peaceful transfer to the final destination.',
      tagLine: 'Lowering Device',
      types: [
        {
          name: 'Lowering Device',
          price: 'Negotiable',
          img: LoweringDevice,
          type: 'Device',
        },
      ],
    },

    // images and video coverage (7)
    {
      image: CameraMan,
      description:
        'Find the best Camara men to cover the event to cement the memory of laying your loved one to rest forever',
      tagLine: 'Video and Camera Coverage',
      types: [
        {
          Name: 'Video and Camera Coverage',
          price: 'Negotiable',
          img: CameraMan,
          type: 'Photography',
        },
      ],
    },

    // Planning and Decoration (6)
    {
      image: Decoration,
      description:
        'Our hall decoration service transforms your venue into a beautiful space, ensuring every detail reflects the dignity and respect your loved one deserves.',
      tagLine: 'Planning and Decoration',
      types: [
        {
          name: 'Planning and Decoration',
          price: 'Negotiable',
          img: Decoration,
          type: 'Decoration',
        },
      ],
    },

    // Pall Bearers (7)
    {
      image: PallBearers,
      description:
        'Our pallbearers ensure caskets and floral arrangements are transported with dignity. They coordinate movements during services to ensure a smooth ceremony, treating every detail with professionalism.',
      tagLine: 'Pall Bearers',
      types: [
        {
          name: 'Pall Bearers',
          price: 20000,
          img: PallBearers,
          type: 'Service',
        },
      ],
    },

    // Billboards and Advertisements (8)
    {
      image: Billboards,
      description:
        'Reach a wider audience with our Billboards and Advertisements service. We offer strategic placement and eye-catching designs to effectively convey your message.',
      tagLine: 'Billboards and Advertisements',
      types: [
        {
          name: 'Billboards and Advertisements',
          price: 10000,
          img: Billboards,
          type: 'Billboards',
        },
      ],
    },

    // Wreath Bouquet (9)
    {
      image: Wreath,
      description:
        'Our beautiful wreath bouquets are crafted with care, providing a meaningful and elegant tribute to honor the memory of your loved one.',
      tagLine: 'Wreath Bouquet',
      types: [
        {
          name: 'Roses Wreath',
          price: 15000,
          img: RosesWreath,
          type: 'Wreath',
        },
        {
          name: 'Lillies Wreath',
          price: 15000,
          img: LilliesWreath,
          type: 'Wreath',
        },
        {
          name: 'Orchids Wreath',
          price: 15000,
          img: OrchidsWreath,
          type: 'Wreath',
        },
        {
          name: 'Gadoli Wreath',
          price: 15000,
          img: GadoliWreath,
          type: 'Wreath',
        },
      ],
    },

    // Repatriation (10)
    {
      image:
        'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description:
        'Our repatriation service ensures the dignified and respectful transportation of your loved one across long distances by flight.',
      tagLine: 'Book an Air Repatriation',
      types: [
        {
          name: 'Air Repatriation',
          price: 550000,
          img: Repatration,
          type: 'Repatriation',
        },
      ],
    },
  ],

  longcards: [
    {
      img: longcard1,
      text: 'Time Conscious',
    },
    {
      img: longcard2,
      text: 'Quality Delivery',
    },
    {
      img: longcard3,
      text: 'High Intent',
    },
    {
      img: longcard4,
      text: 'Pre-Approved',
    },
  ],
};

export default allData;
