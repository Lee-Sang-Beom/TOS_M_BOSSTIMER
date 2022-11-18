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

export const ep03BossListAtom= atom({
  key: "ep03BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '다단 숲',
      bossName: '강인한 일티스워트',
      time: '2'
    },{
      id : 2,
      area: '노바하 공회소',
      bossName: '비겁한 머미가스트',
      time: '2'
    },{
      id : 3,
      area: '노바하 별관 ',
      bossName: '강인한 벨니아몽키',
      time: '2'
    },{
      id : 4,
      area: '노바하 본원',
      bossName: '분노한 데스위버',
      time: '4'
    }
  ]
});

export const ep04BossListAtom= atom({
  key: "ep04BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '코발트 숲',
      bossName: '비겁한 클라이멘',
      time: '2'
    },{
      id : 2,
      area: '셉티니 골',
      bossName: '강인한 모스템',
      time: '2'
    },{
      id : 3,
      area: '펠케 신전터',
      bossName: '강인한 투투',
      time: '2'
    },{
      id : 4,
      area: '압셈타 수원지',
      bossName: '분노한 히드라',
      time: '4'
    }
  ]
});

export const ep05BossListAtom= atom({
  key: "ep05BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '델무어 소작촌',
      bossName: '비겁한 리버피드',
      time: '2'
    },{
      id : 2,
      area: '델무어 장원',
      bossName: '강인한 그라이넨더',
      time: '2'
    },{
      id : 3,
      area: '델무어 외성',
      bossName: '분노한 붉은 래밴자드',
      time: '4'
    }
  ]
});

export const ep06BossListAtom= atom({
  key: "ep06BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '우키스 경작지',
      bossName: '강인한 타우마스',
      time: '2'
    },{
      id : 2,
      area: '봄볕나무 숲',
      bossName: '강인한 네펜더스',
      time: '2'
    },{
      id : 3,
      area: '관문로',
      bossName: '강인한 체이퍼',
      time: '2'
    },{
      id : 4,
      area: '시르드겔라 숲',
      bossName: '강인한 아콘',
      time: '2'
    },{
      id : 5,
      area: '크바일라스 숲',
      bossName: '분노한 브람블',
      time: '4'
    }
  ]
});

export const ep07BossListAtom= atom({
  key: "ep07BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '자카리엘 교차로(ch01)',
      bossName: '비겁한 베아카라스',
      time: '2'
    }, 
    {
      id : 2,
      area: '자카리엘 교차로(ch02)',
      bossName: '비겁한 베아카라스',
      time: '2'
    },{
      id : 3,
      area: '왕릉 1층(ch01)',
      bossName: '강인한 툼로드',
      time: '2'
    },{
      id : 4,
      area: '왕릉 1층(ch02)',
      bossName: '강인한 툼로드',
      time: '2'
    },{
      id : 5,
      area: '왕릉 2층(ch01)',
      bossName: '강인한 고르카스',
      time: '2'
    },{
      id : 6,
      area: '왕릉 2층(ch02)',
      bossName: '강인한 고르카스',
      time: '2'
    },{
      id : 7,
      area: '왕릉 3층(ch01)',
      bossName: '분노한 렉시퍼',
      time: '4'
    },{
      id : 8,
      area: '왕릉 3층(ch02)',
      bossName: '분노한 렉시퍼',
      time: '4'
    }
  ]
});

export const ep08BossListAtom= atom({
  key: "ep08BossListAtom", // unique ID
  default: [
    {
      id : 1,
      area: '아렐르노 남작령',
      bossName: '비겁한 스콜피오',
      time: '2'
    },{
      id : 2,
      area: '수로교 지역',
      bossName: '강인한 코럽티드',
      time: '2'
    },{
      id : 3,
      area: '마족수감소 1구역',
      bossName: '강인한 블룻',
      time: '2'
    },{
      id : 4,
      area: '마족수감소 3구역',
      bossName: '비겁한 누아엘레',
      time: '2'
    },{
      id : 5,
      area: '마족수감소 4구역',
      bossName: '강인한 디오니스',
      time: '2'
    },{
      id : 6,
      area: '마족수감소 5구역',
      bossName: '분노한 하우벅',
      time: '4'
    }
  ]
});