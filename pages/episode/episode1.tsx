import { Divider, Segment } from "semantic-ui-react"

interface Props {
    areaName: string
    bossName: string
    time: string
}

export default function Ep01() {

    const EpContent = ({areaName, bossName, time} : Props) => {
        return (
            <>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <div className="flex-grow">
                            <h2 className="text-gray-900 mb-1 text-lg font-semibold">{`- ${areaName} -`}</h2>
                            <p className="text-gray-900 mb-4 text-base">{`${bossName}`}</p>
                            <p className="text-red-500 font-bold">{`${time}`}</p>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto text-center">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">EP01</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">에피소드 1의 필드보스 타이머입니다.</p>
                </div>
                <Segment>
                    <div className="flex flex-wrap -m-2">
                        <EpContent areaName={`샤울레이 광장 마을`} bossName={`비겁한 붉은 부베 투사`} time={`none`} />
                        <EpContent areaName={`수정 광산`} bossName={`비겁한 붉은 부베 투사`} time={`none`} />
                        <Divider vertical>💬</Divider>
                    </div>
                </Segment>
            </div>
        </section>
    )

}