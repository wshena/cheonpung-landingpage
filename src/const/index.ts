export const MainNavigations:MainNavProps[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About Us',
    link: '#'
  },
  {
    label: 'Market',
    link: '#'
  },
  {
    label: 'Industrial Drone',
    link: '#'
  },
  {
    label: 'Agriculture Drone',
    link: '#'
  },
  {
    label: 'Products',
    link: '#'
  },
  {
    label: 'Projects',
    link: '#'
  },
  {
    label: 'Certifications',
    link: '#'
  },
  {
    label: 'Solutions',
    link: '#'
  },
  {
    label: 'Contact',
    link: '#'
  },
]

export const FooterNav = [
  {
    label: 'Products',
    links: [
      { label: 'Cheunpung M10', link: '/product/m-10' },
      { label: 'Cheunpung M20', link: '/product/m-20' },
      { label: 'HD540', link: '/product/hd450' }
    ]
  },
  {
    label: 'Company',
    links: [
      { label: 'About Us', link: '/about' },
      { label: 'Contact', link: '/contact' },
      { label: 'Certifications', link: '/certifications' },
    ]
  }
]

export const AboutCheonpung:string = "Cheonpung Aircraft Co., Ltd. is a South Korean company with over 10 years of experience in developing and manufacturing industrial and agricultural drones. Focusing on multi-functional drone solutions, Cheonpung delivers innovative technology for diverse sectors such as construction, transportation, security, firefighting, agriculture, and maritime operations. With flagship products like the Cheonpung M Series and HD 540 PRO, the company provides high-payload drones, smart agricultural spraying systems, and specialized firefighting drones for high-rise buildings. Supported by official certifications, patents, and collaborations with major organizations such as KEPCO, Cheonpung positions itself as a leading provider of total smart drone solutions ready to compete in the global market."

export const TimelineContent:TimeLineProps[] = [
  {
    year:'2017',
    content: [
      'Established Cheonpung Co., Ltd.',
      'Completed development of Cheonpung M10',
      'Acquired Direct Production Certificate from the Korea Federation of SMEs',
      'Cheonpung M10 passed comprehensive testing by the Foundation of Agricultural Technology Commercialization and Transfer',
      'Registered as a certified manufacturing plant',
      'Completed development of Cheonpung M20',
      'Acquired Venture Business Certification',
    ]
  },
  {
    year:'2019',
    content: [
      'Awarded Best Brand Chosen by Consumers',
      'Received Minister’s Commendation from the Ministry of Trade, Industry and Energy',
      'President Moon Jae-in visited Gyeongju field site and directly piloted Cheonpung’s drone',
      'Selected as an Innovative Procurement Product by the Public Procurement Service'
    ]
  },
  {
    year:'2021',
    content: [
      'Established Corporate Research Institute',
      'Acquired ISO 9001 & ISO 14001 Certifications',
      'Registered on Korea ON-line E-Procurement System (Nara Marketplace)',
      'Designated as a Promising Export SME',
      'Signed cooperation agreement with KEPCO Neo Dronebot',
      'Designated as a Superior Procurement Product',
    ]
  },
  {
    year:'2023',
    content: [
      'Selected for Core Industry Leading Technology Development Project',
      'Launched new Agricultural Drone “Bumblebee”',
      'Received KRW 500 million investment from Korea SMEs and Startups Agency'
    ]
  },
  {
    year:'2025',
    content: [
      'Signed a business cooperation agreement with Huida Technology',
      'Signed a business cooperation agreement with Routine',
      'Developed a heavy-duty drone with 100 kg payload capacity'
    ]
  }
]

export const DroneProduct = [
  {
    label: 'M-10',
    image: '/image/m10.png',
    features: [
      'Dimensions: Width 1810mm × 490mm',
      'Maximum Takeoff Weight: 24.9 kg',
      'Flight Time: 15 minutes (Agricultural use) ~ 30 minutes (Industrial use)',
      '6-axis: Hexacopter',
      'Power System per Flight: 12s 16,000mAh × 1',
      'Payload Capacity per Flight: 12L (pesticide/granule), spraying width 4~7m',
      'Spray Coverage per Flight: 3,000 pyeong (~9.9 acres / 33,000 m²)',
      'Spray Coverage per Day: 60,000 pyeong (~198 acres / 198,000 m²)',
      'Automatic Pest Control',
      'Automatic Altitude Hold',
      'Automatic Spray Adjustment',
      'Automatic Return & Fail-safe',
      'Multifunctional Multi-drone',
      'Agricultural Drone – PPS MAS Contract Product'
    ]
  },
  {
    label: 'M-20',
    image: '/image/m20.png',
    features: [
      'Dimensions: Width 1910mm × 650mm',
      'Maximum Takeoff Weight: 48 kg',
      'Flight Time: 15 minutes (Agricultural use) ~ 40 minutes (Industrial use)',
      '8-axis: Octocopter',
      'Power System per Flight: 12s 16,000mAh × 2',
      'Payload Capacity per Flight: 20L (spraying width 5~7m)',
      'Spray Coverage per Flight: 6,000 pyeong (~19.8 acres / 66,000 m²)',
      'Spray Coverage per Day: 120,000 pyeong (~396 acres / 396,000 m²)',
      'Automatic Pest Control',
      'Automatic Altitude Hold',
      'Automatic Spray Adjustment',
      'Automatic Return & Fail-safe',
      'Multifunctional Multi-drone',
      'Designated Excellent Product by the Public',
      'Procurement Service (PPS)'
    ]
  },
  {
    label: 'HD540',
    image: '/image/hd540.png',
    features: [
      'Dimensions: Width 3050mm × 830mm',
      'Maximum Takeoff Weight: 80 kg',
      'Flight Time: 20 minutes',
      '6-axis: Hexacopter',
      'Power System per Flight: 18s 30,000mAh × 1',
      'Payload Capacity per Flight: 40L (spraying width 5~7m)',
      'Spray Coverage per Flight: 10,000 pyeong (~33 acres / 33 ha)',
      'Spray Coverage per Day: 150,000 pyeong (~495 acres / 495 ha)',
      'Granule Capacity: 60L / 40kg',
      'New Model Released in 2023',
      'Omni-directional Obstacle Avoidance Sensors',
      'RTK Positioning Control Technology',
      'Front and Rear Cameras',
      'Heavy-duty Agricultural Drone',
    ]
  },
]