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


export const ep02BossListAtom = atom({
  key: "ep02BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '네프리타스 벼랑',
      bossName: '강인한 쓰론위버',
      time: '2'
    },{
      id : 2,
      area: '테넷 화원',
      bossName: '강인한 네펜더스',
      time: '2'
    },{
      id : 3,
      area: '테넷 성당 지하 1층',
      bossName: '비겁한 사이클롭스',
      time: '2'
    },{
      id : 4,
      area: '테넷 성당 지상 1층',
      bossName: '강인한 말렛와이번',
      time: '2'
    },{
      id : 5,
      area: '테넷 성당 지상 2층',
      bossName: '강인한 네크로벤터',
      time: '2'
    }
  ]
});
