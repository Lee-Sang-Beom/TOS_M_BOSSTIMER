export default function Update() {

  const UpdateSection = () => {
    return (
      <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">UPDATE v1.0.0</span>
                <span className="mt-1 text-gray-500 text-sm">2022-11-18</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  타이머 서비스 시작
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`에피소드 01 ~ 08`}</span>
                  의 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 필드 이벤트 시간을 제외한 보스 별 리젠 시간을  
                  <span className="font-bold">{` 갱신하기 `}</span> 
                  버튼을 눌러 갱신할 수 있습니다. 
                </p>
                <p className="leading-relaxed text-sm">
                  - 보스 처치 후 아무나 <span className="font-bold">{` 갱신하기 `}</span>버튼을 눌러 시간을 갱신하게 되면, 변경된 시간을 실시간으로 모든 유저가 변경된 시간을 페이지 새로고침 없이 확인할 수 있습니다. 
                </p>
              </div>
            </div>
    )
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <UpdateSection/>
          </div>
        </div>
      </section>
    </div>
  )
}
