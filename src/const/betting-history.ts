export type TBettingHistoryMapping = {
  type: string;
  typeTextVi: string;
  symbols: { [key: string]: string };
  gate: { [key: string]: { nameVi: string } };
}
export const XD_MAPPING: TBettingHistoryMapping = {
  type: "999",
  typeTextVi: "Xóc Đĩa",
  symbols: {
    '1': "xoc-dia/trang.png",
    '2': "xoc-dia/do.png"
  },
  gate: {
    '1': { nameVi: "Chẵn" },
    '2': { nameVi: "Lẻ" },
    '3': { nameVi: "Tài" },
    '4': { nameVi: "Xỉu" },
    '5': { nameVi: "4 Trắng" },
    '6': { nameVi: "4 Đỏ" },
    '7': { nameVi: "3 Trắng 1 Đỏ" },
    '8': { nameVi: "1 Trắng 3 Đỏ" },
    '9': { nameVi: "2 Trắng 2 Đỏ" },
    '10': { nameVi: "Trắng/Đỏ" }
  }
}

export const TX_MAPPING: TBettingHistoryMapping = {
  type: '998',
  typeTextVi: 'Tài Xỉu',
  symbols: {
    '1': "tai-xiu/ONE.png",
    '2': "tai-xiu/TWO.png",
    '3': "tai-xiu/THREE.png",
    '4': "tai-xiu/FOUR.png",
    '5': "tai-xiu/FIVE.png",
    '6': "tai-xiu/SIX.png",
  },
  gate: {
    '1': { nameVi: "Chẵn" },
    '2': { nameVi: "Lẻ" },
    '3': { nameVi: "Tài" },
    '4': { nameVi: "Xỉu" },
    '5': { nameVi: "Đôi 1" },
    '6': { nameVi: "Đôi 2" },
    '7': { nameVi: "Đôi 3" },
    '8': { nameVi: "Đôi 4" },
    '9': { nameVi: "Đôi 5" },
    '10': { nameVi: "Đôi 6" },
    '11': { nameVi: "Bộ Ba Bất Kỳ" },
    '12': { nameVi: "Bộ Ba 1" },
    '13': { nameVi: "Bộ Ba 2" },
    '14': { nameVi: "Bộ Ba 3" },
    '15': { nameVi: "Bộ Ba 4" },
    '16': { nameVi: "Bộ Ba 5" },
    '17': { nameVi: "Bộ Ba 6" },
    '18': { nameVi: "Số 1_2" },
    '19': { nameVi: "Số 1_3" },
    '20': { nameVi: "Số 1_4" },
    '21': { nameVi: "Số 1_5" },
    '22': { nameVi: "Số 1_6" },
    '23': { nameVi: "Số 2_3" },
    '24': { nameVi: "Số 2_4" },
    '25': { nameVi: "Số 2_5" },
    '26': { nameVi: "Số 2_6" },
    '27': { nameVi: "Số 3_4" },
    '28': { nameVi: "Số 3_5" },
    '29': { nameVi: "Số 3_6" },
    '30': { nameVi: "Số 4_5" },
    '31': { nameVi: "Số 4_6" },
    '32': { nameVi: "Số 5_6" },
    '33': { nameVi: "Số 1" },
    '34': { nameVi: "Số 2" },
    '35': { nameVi: "Số 3" },
    '36': { nameVi: "Số 4" },
    '37': { nameVi: "Số 5" },
    '38': { nameVi: "Số 6" },
    '39': { nameVi: "Tổng 4" },
    '40': { nameVi: "Tổng 5" },
    '41': { nameVi: "Tổng 6" },
    '42': { nameVi: "Tổng 7" },
    '43': { nameVi: "Tổng 8" },
    '44': { nameVi: "Tổng 9" },
    '45': { nameVi: "Tổng 10" },
    '46': { nameVi: "Tổng 11" },
    '47': { nameVi: "Tổng 12" },
    '48': { nameVi: "Tổng 13" },
    '49': { nameVi: "Tổng 14" },
    '50': { nameVi: "Tổng 15" },
    '51': { nameVi: "Tổng 16" },
    '52': { nameVi: "Tổng 17" },
  }
};

export const PK3_MAPPING: TBettingHistoryMapping = {
  type: '996',
  typeTextVi: 'PK3',
  symbols: {
    '1': "pk3/ONE.png",
    '2': "pk3/TWO.png",
    '3': "pk3/THREE.png",
    '4': "pk3/FOUR.png",
    '5': "pk3/FIVE.png",
    '6': "pk3/SIX.png",
  },
  "gate": {
    '1': { nameVi: "Chẵn" },
    '2': { nameVi: "Lẻ" },
    '3': { nameVi: "Tài" },
    '4': { nameVi: "Xỉu" },
    '39': { nameVi: "Tổng 4" },
    '40': { nameVi: "Tổng 5" },
    '41': { nameVi: "Tổng 6" },
    '42': { nameVi: "Tổng 7" },
    '43': { nameVi: "Tổng 8" },
    '44': { nameVi: "Tổng 9" },
    '45': { nameVi: "Tổng 10" },
    '46': { nameVi: "Tổng 11" },
    '47': { nameVi: "Tổng 12" },
    '48': { nameVi: "Tổng 13" },
    '49': { nameVi: "Tổng 14" },
    '50': { nameVi: "Tổng 15" },
    '51': { nameVi: "Tổng 16" },
    '52': { nameVi: "Tổng 17" },
    '53': { nameVi: "Tổng 18" },
    '54': { nameVi: "Tổng 3" }
  }
};

export const BETTING_HISTORY_MAPPING: { [key: string]: TBettingHistoryMapping } = {
  '999': XD_MAPPING,
  '998': TX_MAPPING,
  '996': PK3_MAPPING
}