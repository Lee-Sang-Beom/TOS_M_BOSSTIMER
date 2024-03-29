import { PropsWithChildren } from "react"

export default function Update() {

  interface Props {
    version: string
    date: string
    children: PropsWithChildren
  }

  const UpdateSection = (props: React.PropsWithChildren<Props>) => {
    return (
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">{props.version}</span>
          <span className="mt-1 text-gray-500 text-sm">{props.date}</span>
        </div>
        <div className="md:flex-grow">
          {props.children}
        </div>
      </div>
    )
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
          <div className="-my-8 divide-y-2 divide-gray-100">

            {/* v1.4.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.4.0" date="2023-01-23">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 10 추가 및 불필요한 타이머 관리 영역 삭제, 수정`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 대형 업데이트에 따라, 이제 <span className="font-bold">{`에피소드 10 3개 채널(1,2)`}</span>
                  에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 더이상 사용되지 않는 것으로 파악되는 에피소드 9 2개 채널(2,3)에 대한 조작 영역을 삭제하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 기타 항목으로 분류된 타이머 영역의 대상이 수정되었습니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.3.3 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.3.3" date="2023-01-12">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`불필요한 타이머 관리 영역 삭제`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  {`- 에피소드 6과 7의 채널 2에 대한 타이머 관리 영역을 삭제하였습니다.`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.3.2 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.3.2" date="2023-01-11">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`서버 통합 및 업데이트에 의한 타이머 관리 채널 증축`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  {`- 서버 통합으로 인해 증축이 필요한 채널에 대한 타이머 영역과, 심연의 람스티스 협곡(1,2 채널)에 대한 타이머 영역을 추가하였습니다. `}
                </p>
              </div>
            </UpdateSection>

            {/* v1.3.1 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.3.1" date="2022-12-04">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`사용자 닉네임 출력`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 최종 수정자의 닉네임이 각 보스별로 표시될 수 있도록 하는 기능을 추가하였습니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.3.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.3.0" date="2022-12-03">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 09 추가 및 필드 보스 시간 초기화 방법 변경`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 대형 업데이트에 따라, 이제 <span className="font-bold">{`에피소드 09 2개 채널(1,2)`}</span>
                  에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 보스 리젠 시간이 랜덤으로 변경됨에 따라, 사용자가 직접 남은 시간을 입력할 수 있도록 구성하였습니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.2.3 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.2.3" date="2022-11-25">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  타이머 알림 시간 변경
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 모든 필드의 보스 이벤트마다 타이머의 남은 시간에 따라 알림이 발생하던 기능의 기준 시간을 <span className="font-bold">10분에서 5분으로</span> 변경하였습니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.2.2 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.2.2" date="2022-11-20">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 06 채널 2 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`에피소드 06 2개 채널(1,2)`}</span>
                  에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>

              </div>
            </UpdateSection>

            {/* v1.2.1 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.2.1" date="2022-11-19">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`메인 화면 변경 및 회원가입 과정의 비밀번호 문제 안내 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">메인 화면</span>을 좀 더 심미성 있게 변경하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  {`- 회원가입 과정에서 비밀번호 입력을 6글자 미만으로 수행하는 경우, 알 수 없는 오류 문구라고 출력하는 대신, 비밀번호 길이를 6글자 이상 입력해달라고 요청하는 문구를 출력할 수 있도록 하였습니다.`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.2.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.2.0" date="2022-11-19">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`타이머 알림 기능 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - 모든 필드의 보스 이벤트마다 타이머의 남은 시간이 <span className="font-bold">10분</span>일 경우, 브라우저 우측 상단에 알림창이 발생하는 기능을 추가하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  - 해당 알림의 지속시간은 타이머의 남은시간이 종료될 때까지 지속되며,
                  <span className="font-bold">{` 페이지 Home에서 다른 페이지로 이동할 경우 `}</span>사라집니다.
                </p>
              </div>
            </UpdateSection>

            {/* v1.1.1 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.1.1" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 07, 에피소드 08 채널 박스 변경`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`Ep07, Ep08 에피소드의 채널 별로 `}</span>
                  필드 이벤트 시작 시간 및 타이머의 출력 영역을 분리하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  {`- EP08 영역에서 즉시 시간 갱신이 이루어지지 않던 문제를 해결하였습니다.`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.1.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.1.0" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`에피소드 07, 에피소드 08 채널 2 추가`}
                </h2>
                <p className="leading-relaxed text-sm mb-1">
                  - <span className="font-bold">{`에피소드 07, 08의 2개 채널(1,2)`}</span>
                  에 대한 필드 보스의 리젠 시간을 확인할 수 있습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  {`- 채널 추가 과정에서, 에피소드 별 전체 보스 리젠 시간이 초기화되었습니다. (2022-11-18 12:00)`}
                </p>
              </div>
            </UpdateSection>

            {/* v1.0.0 업데이트 내용 */}
            <UpdateSection version="UPDATE v1.0.0" date="2022-11-18">
              <div>
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                  {`타이머 서비스 시작`}
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
            </UpdateSection>
          </div>
        </div>
      </section>
    </div>
  )
}
