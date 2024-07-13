import longcard1 from '../layouts/homeLayouts/assets/longcard1.png';
import longcard2 from '../layouts/homeLayouts/assets/longcard2.png';
import longcard3 from '../layouts/homeLayouts/assets/longcard3.png';
import longcard4 from '../layouts/homeLayouts/assets/longcard4.png';

const allData = {
  services: [
    // Ambulance (0)
    {
      image:
        'https://images.unsplash.com/photo-1621201216621-262db27f9f12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: '',
      types: [
        {
          name: 'Basic Support',
          price: 100000,
          img: 'https://images.pexels.com/photos/3584101/pexels-photo-3584101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Ambulance',
        },
        {
          name: 'Advanced support',
          price: 125000,
          img: 'https://images.pexels.com/photos/3719815/pexels-photo-3719815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Ambulance',
        },
        {
          name: 'Intensice care unit',
          price: 350000,
          img: 'https://images.unsplash.com/photo-1705264895993-c544cf74a0c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          img: 'https://images.unsplash.com/photo-1522752622479-65eefd320386?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Coffin',
        },
        {
          name: 'Foreign Wood',
          price: 125000,
          img: 'https://images.pexels.com/photos/10484349/pexels-photo-10484349.jpeg?auto=compress&cs=tinysrgb&w=600',
          type: 'Coffin',
        },
        {
          name: 'Local steel',
          price: 350000,
          img: 'https://plus.unsplash.com/premium_photo-1715110518550-8fbd4f1e2eaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Coffin',
        },
        {
          name: 'Foreign steel',
          price: 850000,
          img: 'https://plus.unsplash.com/premium_photo-1715110519031-14ac05e50cc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Coffin',
        },
        {
          name: 'Silver lined',
          price: 2000000,
          img: 'https://images.unsplash.com/photo-1644671801026-ab4ceb81b869?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          name: 'Obelisks',
          price: 50000,
          img: 'https://th.bing.com/th/id/OIP.4yw06hugpgLQE5YdG7o-xAHaGL?rs=1&pid=ImgDetMain',
          type: 'Grave',
        },
        {
          name: 'Bench Memorials',
          price: 50000,
          img: 'https://images.pexels.com/photos/6495718/pexels-photo-6495718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Grave',
        },
        {
          name: 'Cremation Memorials',
          price: 50000,
          img: 'https://images.unsplash.com/photo-1589313629608-1e6a5d21b930?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Grave',
        },
        {
          name: 'Ledger Stones',
          price: 50000,
          img: 'https://plus.unsplash.com/premium_photo-1683141190497-28e5116f59ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Grave',
        },
        {
          name: 'Upright Headstones',
          price: 50000,
          img: 'https://images.pexels.com/photos/14397940/pexels-photo-14397940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Grave',
        },
        {
          name: 'Flat Markers',
          price: 100000,
          img: 'https://images.pexels.com/photos/5669333/pexels-photo-5669333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Grave',
        },
        {
          name: 'Bevel Markers',
          price: 125000,
          img: 'https://images.pexels.com/photos/8986939/pexels-photo-8986939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Grave',
        },
        {
          name: 'Slant Markers',
          price: 125000,
          img: 'https://images.pexels.com/photos/3608427/pexels-photo-3608427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          type: 'Grave',
        },
        {
          name: 'Monuments',
          price: 350000,
          img: 'https://images.pexels.com/photos/17013209/pexels-photo-17013209/free-photo-of-white-marble-holy-crosses-on-cemetery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
