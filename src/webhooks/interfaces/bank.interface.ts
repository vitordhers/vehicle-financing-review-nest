export interface Bank {
  document: string;
  name: string;
  code?: string;
  monthlyInterestRate: number;
  effectiveYearlyInterestRate: number;
}

export const banks: Bank[] = [
  {
    document: '02.992.446/0001-75',
    name: 'BANCO CNH INDUSTRIAL CAPITAL S.A',
    code: 'M19',
    monthlyInterestRate: 1.01,
    effectiveYearlyInterestRate: 12.8,
  },
  {
    document: '59.274.605/0001-13',
    name: 'BCO GM S.A.',
    code: '390',
    monthlyInterestRate: 1.11,
    effectiveYearlyInterestRate: 14.21,
  },
  {
    document: '04.452.473/0001-80',
    name: 'BMW FINANCEIRA S.A. - CFI',
    monthlyInterestRate: 1.21,
    effectiveYearlyInterestRate: 15.35,
  },
  {
    document: '28.517.628/0001-88',
    name: 'BANCO PACCAR S.A',
    monthlyInterestRate: 1.22,
    effectiveYearlyInterestRate: 15.63,
  },
  {
    document: '60.814.191/0001-57',
    name: 'BCO MERCEDES-BENZ S.A.',
    code: '	381',
    monthlyInterestRate: 1.23,
    effectiveYearlyInterestRate: 15.83,
  },
  {
    document: '11.417.016/0001-10',
    name: 'SCANIA BCO S.A.',
    monthlyInterestRate: 1.27,
    effectiveYearlyInterestRate: 16.34,
  },
  {
    document: '58.017.179/0001-70',
    code: 'M23',
    name: 'BCO VOLVO BRASIL S.A.',
    monthlyInterestRate: 1.31,
    effectiveYearlyInterestRate: 16.87,
  },
  {
    document: '03.502.961/0001- 92',
    code: 'M24',
    name: 'BCO PSA FINANCE BRASIL S.A.',
    monthlyInterestRate: 1.34,
    effectiveYearlyInterestRate: 17.26,
  },
  {
    document: '59.109.165/0007-34',
    code: '393',
    name: 'BCO VOLKSWAGEN S.A',
    monthlyInterestRate: 1.38,
    effectiveYearlyInterestRate: 17.91,
  },
  {
    document: '62.307.848/0001-15',
    name: 'BCO RCI BRASIL S.A.',
    monthlyInterestRate: 1.47,
    effectiveYearlyInterestRate: 19.09,
  },
  {
    document: '33.603.457/0001-40',
    code: '120',
    name: 'BCO RODOBENS S.A.',
    monthlyInterestRate: 1.62,
    effectiveYearlyInterestRate: 21.25,
  },
  {
    document: '30.172.491/0001-19',
    name: 'BANCO HYUNDAI CAPITAL BRASIL',
    monthlyInterestRate: 1.62,
    effectiveYearlyInterestRate: 21.25,
  },
  {
    document: '60.746.948/0001-12',
    code: '237',
    name: 'BCO BRADESCO S.A.',
    monthlyInterestRate: 1.67,
    effectiveYearlyInterestRate: 21.96,
  },
  {
    document: '17.167.412/0001-13',
    name: 'FINANC ALFA S.A. CFI',
    monthlyInterestRate: 1.68,
    effectiveYearlyInterestRate: 22.08,
  },
  {
    document: '92.702.067/0001-96',
    code: '041',
    name: 'BCO DO ESTADO DO RS S.A.',
    monthlyInterestRate: 1.72,
    effectiveYearlyInterestRate: 22.74,
  },
  {
    document: '3.215.790/0001-10',
    code: '387',
    name: 'BCO TOYOTA DO BRASIL S.A.',
    monthlyInterestRate: 1.75,
    effectiveYearlyInterestRate: 23.12,
  },
  {
    document: '60.872.504/0001-23',
    code: '652',
    name: 'ITAÚ UNIBANCO HOLDING S.A.',
    monthlyInterestRate: 1.8,
    effectiveYearlyInterestRate: 23.83,
  },
  {
    document: '00.000.000/0001-91',
    code: '1',
    name: 'BCO DO BRASIL S.A.',
    monthlyInterestRate: 1.85,
    effectiveYearlyInterestRate: 24.65,
  },
  {
    document: '22.639.377/0001-28',
    name: 'SINOSSERRA S/A - SCFI',
    monthlyInterestRate: 1.86,
    effectiveYearlyInterestRate: 24.77,
  },
  {
    document: '00.360.305/0001-04',
    code: '104',
    name: 'CAIXA ECONOMICA FEDERAL',
    monthlyInterestRate: 1.86,
    effectiveYearlyInterestRate: 24.77,
  },
  {
    document: '45.437.547/0001-97',
    code: '104',
    name: 'SAFRA CFI S.A.',
    monthlyInterestRate: 1.87,
    effectiveYearlyInterestRate: 24.83,
  },
  {
    document: '31.872.495/0001-72',
    code: '336',
    name: 'BCO C6 S.A.',
    monthlyInterestRate: 1.9,
    effectiveYearlyInterestRate: 25.36,
  },
  {
    document: '07.707.650/0001-10',
    name: 'AYMORÉ CFI S.A.',
    monthlyInterestRate: 1.9,
    effectiveYearlyInterestRate: 25.36,
  },
  {
    document: '01.852.137/0001-37',
    name: 'BCO BRASILEIRO DE CRÉDITO S.A.',
    monthlyInterestRate: 1.95,
    effectiveYearlyInterestRate: 26.02,
  },
  {
    document: '07.207.996/0001-50',
    code: '394',
    name: 'BCO BRADESCO FINANC. S.A.',
    monthlyInterestRate: 1.98,
    effectiveYearlyInterestRate: 26.48,
  },
  {
    document: '59.588.111/0001-03',
    code: '655',
    name: 'BCO VOTORANTIM S.A.',
    monthlyInterestRate: 2.07,
    effectiveYearlyInterestRate: 27.89,
  },
  {
    document: '28.127.603/0001-78',
    code: '021',
    name: 'BCO BANESTES S.A.',
    monthlyInterestRate: 2.09,
    effectiveYearlyInterestRate: 28.17,
  },
  {
    document: '04.862.600/0001-10',
    name: 'PORTOSEG S.A. CFI',
    monthlyInterestRate: 2.09,
    effectiveYearlyInterestRate: 28.2,
  },
  {
    document: '90.400.888/0001-42',
    code: '33',
    name: 'BCO SANTANDER (BRASIL) S.A.',
    monthlyInterestRate: 2.27,
    effectiveYearlyInterestRate: 30.87,
  },
  {
    document: '03.634.220/0001-65',
    code: 'M22',
    name: 'BCO HONDA S.A.',
    monthlyInterestRate: 2.29,
    effectiveYearlyInterestRate: 31.16,
  },
  {
    document: '60.701.190/0001-04',
    code: '341',
    name: 'ITAÚ UNIBANCO S.A.',
    monthlyInterestRate: 2.32,
    effectiveYearlyInterestRate: 31.74,
  },
  {
    document: '10.371.492/0001-85',
    name: 'BCO YAMAHA MOTOR S.A.',
    monthlyInterestRate: 2.57,
    effectiveYearlyInterestRate: 35.62,
  },
  {
    document: '92.874.270/0001-40',
    name: 'BCO DIGIMAIS S.A.',
    monthlyInterestRate: 2.73,
    effectiveYearlyInterestRate: 38.13,
  },
  {
    document: '33.136.888/0001-43',
    name: 'BRB - CFI S/A',
    monthlyInterestRate: 2.77,
    effectiveYearlyInterestRate: 38.88,
  },
  {
    document: '34.991.938/0001-32',
    name: 'SIMPALA S.A. CFI',
    monthlyInterestRate: 2.91,
    effectiveYearlyInterestRate: 41.05,
  },
  {
    document: '05.676.026/0001-78',
    name: 'CREDIARE CFI S.A.',
    monthlyInterestRate: 2.91,
    effectiveYearlyInterestRate: 41.09,
  },
  {
    document: '00.411.939/0001-49',
    name: 'FINAMAX S.A. CFI',
    monthlyInterestRate: 3.04,
    effectiveYearlyInterestRate: 41.09,
  },
  {
    document: '59.285.411/0001-13',
    code: '623',
    name: 'BANCO PAN',
    monthlyInterestRate: 3.05,
    effectiveYearlyInterestRate: 43.44,
  },
  {
    document: '62.232.889/0001-90',
    code: '707',
    name: 'BCO DAYCOVAL S.A',
    monthlyInterestRate: 3.1,
    effectiveYearlyInterestRate: 44.29,
  },
  {
    document: '92.228.410/0001-02',
    name: 'OMNI SA CFI',
    monthlyInterestRate: 3.39,
    effectiveYearlyInterestRate: 49.26,
  },
  {
    document: '05.503.849/0001-00',
    name: 'SF3 CFI S.A.',
    monthlyInterestRate: 3.99,
    effectiveYearlyInterestRate: 59.9,
  },
  {
    document: '80.271.455/0001-80',
    name: 'BCO RNX S.A.',
    monthlyInterestRate: 4.02,
    effectiveYearlyInterestRate: 60.52,
  },
];
