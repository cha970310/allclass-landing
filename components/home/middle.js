import Animation from "./animation";
import Link from "next/link";
export default function Middle(){
    return(
        <>


<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">올클래스
        
      </h1>
      <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">올인원 시간표 플랫폼</h1>
      <p className="mb-8 leading-relaxed">차가 자율주행을 하고 휴대폰이 접히는 시대에 왜 월 이백만원짜리 수업 시간표를 손으로 적어가야 할까?”

생각해보니 그게 전부가 아니었습니다. 중고 거래도, 배달도, 택배도 이젠 앱으로 내부 결제를 하고, 내가 구매한 물건이 어디에 있는지 지도상에서 확인할 수 있으며, 이젠 어떤 동네에 진입하면 당근마켓에서 알림이 올 정도입니다.

이러한 모든 기능(”공급”)은 결국 그 “시장”에 “직간접적 비용을 지불하고 서비스를 이용하고자 하는 욕구”인 “수요” 가 있고, 특히 다양한 컨텐츠(”공급”)이 있다는 것은 그 수요의 양적인 수준이 여러 섹터의 공급자들을 자생할 수 있는 수준을 능가했음을 의미합니다. 쉽게 설명하자면, 당근마켓이랑 배달의민족, 쿠팡과 네이버, 카카오, 토스가 그만큼 사람들의 가려운 곳을 긁어줘서 그만큼 시장가치를 인정받았다는 겁니다.
</p>
      <div className="flex justify-center">
      <Link href='/' legacyBehavior>
        <a className="btn-project shadow shadow-blue-500/40 hover:shadow-indigo-500/40 md:shadow-indigo-500/40">앱 구경하기</a>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Animation></Animation>
    </div>
        </>)
    
}
