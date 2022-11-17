import { atom } from "recoil";

export const ep01BossListAtom = atom({
  key: "ep01BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '샤울레이 광산 마을',
      bossName: '비겁한 붉은 부베 투사',
      time: '2'
    },{
      id : 2,
      area: '수정 광산',
      bossName: '강인한 스펙터 군주',
      time: '2'
    }

  ]
});
