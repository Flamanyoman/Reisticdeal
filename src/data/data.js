import longcard1 from '../layouts/homeLayouts/assets/longcard1.png';
import longcard2 from '../layouts/homeLayouts/assets/longcard2.png';
import longcard3 from '../layouts/homeLayouts/assets/longcard3.png';
import longcard4 from '../layouts/homeLayouts/assets/longcard4.png';
import RollsRoyce from '../assets/R.jpg';
import Escalade from '../assets/Escalade.jpg';

import Sienna from '../assets/Sienna.jpg';
import Expert from '../assets/Expert.jpg';
import Hiace from '../assets/Hiace.jpg';

import Pecan from '../assets/pecan.jpg';
import Ceder from '../assets/Ceder.jpg';
import deepBrown from '../assets/deep brown.jpg';
import maroon from '../assets/Maroon.jpg';
import walnut from '../assets/walnut.jpg';
import whiteAndGold from '../assets/white and gold.jpg';

import Casket2 from '../assets/Casket2.jpg';
import Casket4 from '../assets/Casket4.jpg';
import Casket5 from '../assets/Casket5.jpg';
import Casket6 from '../assets/Casket6.jpg';
import Casket7 from '../assets/Casket7.jpg';
import Casket8 from '../assets/Casket8.jpg';
import Casket10 from '../assets/Casket10.jpg';
import Casket12 from '../assets/Casket12.jpg';

import TilesHeadstone from '../assets/Tiles headstone.jpg';
import MarbleHeadstone from '../assets/Marble headstone.jpg';
import SlateHeadstone from '../assets/Slate headstone.jpg';

import Hearse from '../assets/Hearse.webp';

import LoweringDevice from '../assets/Lowering device.jpg';

import fliers from '../assets/fliers.jpg';

import Decoration from '../assets/Decoration.jpg';

import PallBearers from '../assets/Pall bearers.jpg';

const CameraMan =
  'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Wreath =
  'https://plus.unsplash.com/premium_photo-1695751302118-64e1aabbd539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
import LilliesWreath from '../assets/Lilies wreath.jpg';
import RosesWreath from '../assets/Roses wreath.jpg';
import OrchidsWreath from '../assets/Orchids wreath.jpg';
import GadoliWreath from '../assets/Gadoli wreath.jpg';

import Repatriation from '../assets/repatriation.jpg';

// Family Images
import famImg1 from '../assets/Fam img 1.1.jpg';
import famImg2 from '../assets/Fam img 2.1.jpg';
import famImg3 from '../assets/Fam img 3.1.jpg';

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
          price: 'Negotiable',
          img: Sienna,
          type: 'Ambulance',
        },
        {
          name: 'Peugeot Expert',
          price: 'Negotiable',
          img: Expert,
          type: 'Ambulance',
        },
        {
          name: 'Toyota Hiace',
          price: 'Negotiable',
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
          name: 'Maroon (Local)',
          price: 'Negotiable',
          img: maroon,
          type: 'Coffin',
        },
        {
          name: 'Pink (Foreign)',
          price: 'Negotiable',
          img: Casket2,
          type: 'Coffin',
        },

        {
          name: 'Ceder (Local)',
          price: 'Negotiable',
          img: Ceder,
          type: 'Coffin',
        },

        {
          name: 'Mahogany (Foreign)',
          price: 'Negotiable',
          img: Casket4,
          type: 'Coffin',
        },

        {
          name: 'White and Brown (Foreign)',
          price: 'Negotiable',
          img: Casket5,
          type: 'Coffin',
        },

        {
          name: 'Black and Orange (Foreign)',
          price: 'Negotiable',
          img: Casket6,
          type: 'Coffin',
        },

        {
          name: 'Bronze (Foreign)',
          price: 'Negotiable',
          img: Casket7,
          type: 'Coffin',
        },

        {
          name: 'White and Silver (Foreign)',
          price: 'Negotiable',
          img: Casket8,
          type: 'Coffin',
        },

        {
          name: 'Coffee (Foreign)',
          price: 'Negotiable',
          img: Casket10,
          type: 'Coffin',
        },

        {
          name: 'Auburn (Foreign)',
          price: 'Negotiable',
          img: Casket12,
          type: 'Coffin',
        },

        {
          name: 'Pecan (Local)',
          price: 'Negotiable',
          img: Pecan,
          type: 'Coffin',
        },

        {
          name: 'Deep brown (Local)',
          price: 'Negotiable',
          img: deepBrown,
          type: 'Coffin',
        },

        {
          name: 'White and Gold (Local)',
          price: 'Negotiable',
          img: whiteAndGold,
          type: 'Coffin',
        },

        {
          name: 'Walnut (Walnut)',
          price: 'Negotiable',
          img: walnut,
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
          name: 'Tiles',
          price: 'Negotiable',
          img: TilesHeadstone,
          type: 'Grave',
        },
        {
          name: 'Marble',
          price: 'Negotiable',
          img: MarbleHeadstone,
          type: 'Grave',
        },
        {
          name: 'Granite',
          price: 'Negotiable',
          img: SlateHeadstone,
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
          price: 'Negotiable',
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
        {
          name: 'Rolls Royce',
          price: 'Negotiable',
          img: RollsRoyce,
          type: 'Hearse',
        },
        {
          name: 'Excalade',
          price: 'Negotiable',
          img: Escalade,
          type: 'Hearse',
        },
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

    // Obituary fliers (6)
    {
      image: fliers,
      description:
        'We create elegant and respectful posters promptly to help you spread the word and invite your distinguished guests.',
      tagLine: 'Obituary Poster',
      types: [
        {
          Name: 'Fliers Creation',
          price: 'Negotiable',
          img: fliers,
          type: 'Photography',
        },
      ],
    },

    // images and video coverage (7)
    {
      image: CameraMan,
      description:
        'Ensure every moment of your loved one’s farewell is captured with clarity and respect through our professional camera and video coverage services.',
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
          price: 'Negotiable',
          img: PallBearers,
          type: 'Service',
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
          price: 'Negotiable',
          img: RosesWreath,
          type: 'Wreath',
        },
        {
          name: 'Lillies Wreath',
          price: 'Negotiable',
          img: LilliesWreath,
          type: 'Wreath',
        },
        {
          name: 'Orchids Wreath',
          price: 'Negotiable',
          img: OrchidsWreath,
          type: 'Wreath',
        },
        {
          name: 'Gadoli Wreath',
          price: 'Negotiable',
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
          price: 'Negotiable',
          img: Repatriation,
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

  familyImages: [famImg1, famImg2, famImg3],

  coffinImages: [],
};

export default allData;
