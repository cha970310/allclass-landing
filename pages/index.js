import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    
    <Layout>
      
      <Head>
        <title>올클래스</title>
        <link rel="icon" href="/images/favicon.png" />
        

      </Head>
      <div className="mobile screen">
      <div className="mobile div">
        <div className="mobile section">
          <p className="mobile text-wrapper">
            올클래스로 수업 올클!
            <br />
            새롭게 정의하는 학업계획 플래너
          </p>
          <div className="mobile text-wrapper-2">ABOUT</div>
          <p className="mobile p">
            올클래스는 학원의 강의 스케줄과 설명회 등,
            <br />
            다양한 정보를 제공합니다. 학부모와 학생을 위한
            <br />
            올인원 스케줄러 앱 올클래스를 사용해보세요!
          </p>
          <div className="mobile rectangle" />
          <div className="mobile view">
            <div className="mobile overlap-group">
              <img className="mobile img" alt="Screen" src="/images/mobile/screen.png" />
              <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight.png" />
            </div>
          </div>
        </div>
        <div className="mobile view-2">
          <img className="mobile image" alt="Image" src="/images/mobile/1.png" />
          <img className="mobile image-2" alt="Image" src="/images/mobile/2x.png" />
          <img className="mobile image-3" alt="Image" src="/images/mobile/2x-2.png" />
          <img className="mobile image-4" alt="Image" src="/images/mobile/image.png" />
          <div className="mobile text-wrapper-3">팀 올클래스</div>
          <div className="mobile text-wrapper-4">팀 소개</div>
          <div className="mobile text-wrapper-5">문의</div>
          <div className="mobile text-wrapper-6">공지사항</div>
          
          <div className="mobile text-wrapper-7">
            <Link className="link" href='/terms'>이용약관</Link>
            </div>
          <div className="mobile text-wrapper-8">
            <Link className="link" href='/policy'>정책</Link>
            </div>
          <p className="mobile element">
            <span className="mobile span">사업자 등록번호</span>
            <span className="mobile text-wrapper-9">
              {" "}
              : 442-88-02457
              <br />
            </span>
            <span className="mobile span">주소</span>
            <span className="mobile text-wrapper-9">
              {" "}
              : 서울특별시 용산구 이태원로 191, 4층 422-11(이태원동)
              <br />
              연락 : contact@allclass.io
            </span>
          </p>
          <p className="mobile text-wrapper-10">© 2023 Copylight by AllClass</p>
        </div>
        <div className="mobile section-2">
          <div className="mobile text-wrapper-11">
            간편하게 한손으로,
            <br />
            시간표 정리는 꼼꼼하게
          </div>
          <div className="mobile text-wrapper-12">시간표</div>
          <p className="mobile text-wrapper-13">
            올클래스의 시간표 정리 기능, 꼭 사용해보세요.
            <br />
            이번 여름 학원 스케줄이 전부 들어가 있고,
            <br />
            과외, 팀수업 등 개인별 시간표 편집도 가능해요!
          </p>
          <div className="mobile rectangle-2" />
          <div className="mobile group">
            <div className="mobile overlap-group">
              <div className="mobile overlap-group-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-6.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
              <div className="mobile div-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-5.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile section-3">
          <p className="mobile text-wrapper-14">
            학원 정보부터 학업 기록까지
            <br />
            간편하고 꼼꼼하게
          </p>
          <img className="mobile logo-full" alt="Logo full" src="/images/mobile/logo-full-1.png" />
          <div className="mobile text-wrapper-15">누적 강의</div>
          <div className="mobile text-wrapper-16">5173개</div>
          <div className="mobile text-wrapper-17">376개</div>
          <div className="mobile text-wrapper-18">175개</div>
          <div className="mobile text-wrapper-19">연계 학원</div>
          <div className="mobile text-wrapper-20">정리 학원</div>
        </div>
        <div className="mobile overlap-wrapper">
          <div className="mobile overlap">
            <p className="mobile p-2">
              <span className="mobile text-wrapper-21">
                교육의 정보 비대칭을
                <br />
                해소하는 그날까지!
                <br />
              </span>
              <span className="mobile text-wrapper-22">올클래스가 </span>
              <span className="mobile text-wrapper-21">함께합니다.</span>
            </p>
            <img className="mobile element-2" alt="Element" src="/images/mobile/1-2x.png" />
          </div>
        </div>
        <div className="mobile section-4">
          <div className="mobile text-wrapper-23">
            보고싶은 자료가 한번에,
            <br />
            학원&amp;강의 검색!
          </div>
          <div className="mobile text-wrapper-24">검색</div>
          <p className="mobile DB">
            키워드와 필터로 정리된 학원 DB를 한눈에 보고,
            <br />
            검색할 수 있어요. 학원명, 교습대상, 과목 등을
            <br />
            입력하고, 내가 원하는 학원과 강의 정보를 확인하세요!
          </p>
          <div className="mobile rectangle-2" />
          <div className="mobile group">
            <div className="mobile overlap-group">
              <div className="mobile overlap-group-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-4.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
              <div className="mobile div-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-3.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile section-5">
          <p className="mobile text-wrapper-23">
            내가 원하는 학원 정보를
            <br />한 곳에서 한눈에!
          </p>
          <div className="mobile text-wrapper-25">학원 정보</div>
          <p className="mobile element-3">
            대치동 1,171개의 학원주소, 연락처, 강의과목, 강사, <br />
            홈페이지, 공지사항과 설명회 일정을 다 담았어요.
            <br />
            내가 관심있는 학원의 정보를 확인하세요!
          </p>
          <div className="mobile rectangle-2" />
          <div className="mobile group">
            <div className="mobile overlap-group">
              <div className="mobile div-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-2.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
              <div className="mobile overlap-group-wrapper">
                <div className="mobile overlap-group">
                  <img className="mobile img" alt="Screen" src="/images/mobile/screen-1.png" />
                  <img className="mobile starlight" alt="Starlight" src="/images/mobile/starlight-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile logo-wrapper">
          <Link   href={'/'} >
            
            <Image className="mobile logo" alt="Logo" src="/images/mobile/logo-1.png" width={100} height={100}/>
            
          </Link>
          
        </div>
      </div>
    </div>



<div className="desktop screen">
      <div className="desktop div">
        <div className="desktop overlap">
          <div className="desktop group">
            <p className="desktop text-wrapper">
              학원 정보부터 학업 기록까지
              <br />
              간편하고 꼼꼼하게
            </p>
            <div className="desktop text-wrapper-2">누적 강의</div>
            <div className="desktop text-wrapper-3">연계 학원</div>
            <div className="desktop text-wrapper-4">정리 학원</div>
            <div className="desktop text-wrapper-5">2023.07.01 기준</div>
            <Link href='https://apps.apple.com/kr/app/%EC%98%AC%ED%81%B4%EB%9E%98%EC%8A%A4/id1668530483'>
            <img className="desktop image" alt="Image" src="/images/desktop/image-3.png" />
            </Link>
            <Link href='https://play.google.com/store/search?q=%EC%98%AC%ED%81%B4%EB%9E%98%EC%8A%A4&c=apps&hl=ko&gl=US'>
            <img className="desktop img" alt="Image" src="/images/desktop/2.png" />
            </Link>
            <img className="desktop logo-full" alt="Logo full" src="/images/desktop/logo-full-1.png" />
            <div className="desktop text-wrapper-6">5173개</div>
            <div className="desktop text-wrapper-7">376개</div>
            <div className="desktop text-wrapper-8">175개</div>
          </div>
        </div>
        <img className="desktop section" alt="Section" src="/images/desktop/section-2.png" />
        <div className="desktop overlap-group-wrapper">
          <div className="desktop overlap-group">
            <div className="desktop group-2">
              <div className="desktop text-wrapper-9">
                간편하게 한손으로,
                <br />
                시간표 정리는 꼼꼼하게
              </div>
              <div className="desktop text-wrapper-10">시간표</div>
              <p className="desktop p">
                올클래스의 시간표 정리 기능, 꼭 사용해보세요.
                <br />
                이번 여름 학원 스케줄이 전부 들어가 있고,
                <br />
                과외, 팀수업 등 개인별 시간표 편집도 가능해요!
              </p>
            </div>
            <img className="desktop group-3" alt="Group" src="/images/desktop/group-16976.png" />
          </div>
        </div>
        <div className="desktop section-2">
          <div className="desktop group-4">
            <div className="desktop text-wrapper-9">
              보고싶은 자료가 한번에,
              <br />
              학원&amp;강의 검색!
            </div>
            <div className="desktop text-wrapper-10">검색</div>
            <p className="desktop p">
              키워드와 필터로 정리된 학원 DB를 한눈에 보고 검색할 수 있어요. 
              학원명, 교습대상, 과목 등을 입력하고, 내가 원하는 학원과 강의 정보를 확인하세요!
            </p>
          </div>
          <div className="desktop overlap-wrapper">
            <div className="desktop overlap-2">
              <div className="desktop view">
                <div className="desktop overlap-group-2">
                  <img className="desktop img-2" alt="Screen" src="/images/desktop/screen-2.png" />
                  <img className="desktop starlight" alt="Starlight" src="/images/desktop/starlight.png" />
                </div>
              </div>
              <div className="desktop div-wrapper">
                <div className="desktop overlap-group-2">
                  <img className="desktop img-2" alt="Screen" src="/images/desktop/screen-1.png" />
                  <img className="desktop starlight" alt="Starlight" src="/images/desktop/starlight.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop section-3">
          <div className="desktop group-5">
            <p className="desktop element">
              대치동 1,171개의 학원주소, 연락처, 강의과목, 
              <br/> 강사,홈페이지, 공지사항과 설명회 일정을 다 담았어요.
              <br/>
              내가 관심있는 학원의 정보를 확인하세요!
            </p>
            <p className="desktop text-wrapper-9">
              내가 원하는 학원 정보를
              <br />한 곳에서 한 눈에!
            </p>
            <div className="desktop text-wrapper-10">학원 정보</div>
          </div>
          <div className="desktop overlap-3">
            <img className="desktop image-2" alt="Image" src="/images/desktop/image.png" />
            <div className="desktop view-2">
              <div className="desktop overlap-group-2">
                <img className="desktop img-2" alt="Screen" src="/images/desktop/screen.png" />
                <img className="desktop starlight" alt="Starlight" src="/images/desktop/starlight.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="desktop view-3">
          <div className="desktop overlap-4">
            <h1 className="desktop h-1">
              <span className="desktop span">
                교육의 정보 비대칭을
                <br />
                해소하는 그날까지!
                <br />
              </span>
              <span className="desktop text-wrapper-11">올클래스가 </span>
              <span className="desktop span">함께합니다.</span>
            </h1>
            <img className="desktop element-2" alt="Element" src="/images/desktop/1-2x.png" />
          </div>
        </div>
        <div className="desktop view-4">
          <div className="desktop text-wrapper-12">팀 올클래스</div>
          <div className="desktop text-wrapper-13">팀 소개</div>
          <div className="desktop text-wrapper-14">문의</div>
          <div className="desktop text-wrapper-15">공지사항</div>
          <div className="desktop text-wrapper-16">
          <Link className="link" href='/terms'>이용약관</Link>
            </div>
          <div className="desktop text-wrapper-17">
            <Link className="link" href='/policy'>정책</Link>
            </div>
          <p className="desktop element-3">
            <span className="desktop text-wrapper-18">사업자 등록번호</span>
            <span className="desktop text-wrapper-19">
              {" "}
              : 442-88-02457
              <br />
            </span>
            <span className="desktop text-wrapper-18">주소</span>
            <span className="desktop text-wrapper-19">
              {" "}
              : 서울특별시 용산구 이태원로 191, 4층 422-11(이태원동)
              <br />
              연락 : contact@allclass.io
            </span>
          </p>
          <p className="desktop text-wrapper-20">© 2023 Copylight by AllClass</p>
          <img className="desktop image-3" alt="Image" src="/images/desktop/1-2.png" />
          <img className="desktop image-4" alt="Image" src="/images/desktop/image-2.png" />
          <img className="desktop image-5" alt="Image" src="/images/desktop/1.png" />
          <img className="desktop image-6" alt="Image" src="/images/desktop/image-4.png" />
        </div>
        <div className="desktop logo-wrapper">

        <Link   href={'/'} >
            
            <Image className="desktop logo" alt="Logo" src="/images/desktop/logo-1.svg"  width={100} height={100}/>
            
          </Link>
        </div>
      </div>
    </div>

   
    </Layout>
  )
}
