import FadeIn from "../../components/FadeIn/FadeIn";
import FadeInAlt from "../../components/FadeIn/FadeInAlt";
import Highlight from "../../components/Highlight/Highlight";
import Main from "../../components/Main/Main";
import TableLine from "../../components/TableLine/TableLine";
import Title from "../../components/Title/Title";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills">
      <Main page="skills">
        <FadeIn>
          <Title text={"overview"} width={960}></Title>
          <div className="overview-box">
            <div className="overview-line">
              <p>front-end:</p>
              <p className="overview-line-tag">HTML, CSS, JS</p>
              <p className="overview-line-tag">React</p>
              <p className="overview-line-tag">Figma</p>
            </div>

            <div className="overview-line">
              <p>back-end:</p>
              <p className="overview-line-tag">Java</p>
              <p className="overview-line-tag">MariaDB</p>
              <p className="overview-line-tag">Spring Boot</p>
              <p className="overview-line-tag">JPA</p>
              <p className="overview-line-tag">MyBatis</p>
            </div>

            <div className="overview-line">
              <p>others:</p>
              <p className="overview-line-tag">C</p>
              <p className="overview-line-tag">Git, GitHub</p>
              <p className="overview-line-tag">AWS</p>
            </div>
          </div>
        </FadeIn>

        <FadeInAlt marginTop={360}>
          <p className="big-title">다음 질문에 자신 있게 답할 수 있습니다.</p>
        </FadeInAlt>

        <FadeIn marginTop={200}>
          <Title text={"front-end"} width={960} />
        </FadeIn>
        <FadeIn>
          <TableLine title={"HTML, CSS, JS"} width={960}>
            <Highlight>
              <span className="h">모바일 화면</span>에서는 네비게이션 메뉴를
              숨기고, <span className="h">&nbsp;햄버거 메뉴</span>로 변경하는
              방법은 무엇인가?
            </Highlight>
            <Highlight>
              스크롤이 최상단에 있을 때와 그렇지 않을 때,{" "}
              <span className="h">&nbsp;헤더의 스타일을 동적으로 변경</span>하는
              방법이 있을까?
            </Highlight>
            <Highlight>
              새로고침해도 로그인 상태를 유지하기 위해{" "}
              <span className="h">&nbsp;localStorage</span>를 활용하는 방법은
              무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">isLogin 변수의 참/거짓 여부에 따라</span>
              &nbsp;특정 태그의 스타일을 동적으로 변경 할 수 있는가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"React"} width={960}>
            <Highlight>
              선택한 상품의 수량 변경 시,{" "}
              <span className="h">
                &nbsp;부모 컴포넌트의 총 상품 금액을 실시간으로 업데이트
              </span>
              할 수 있을까?
            </Highlight>
            <Highlight>
              <span className="h">Swiper API</span>를 사용해{" "}
              <span className="h">&nbsp;슬라이드형 콘텐츠</span>를 구현하는
              방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">장바구니에서 선택한 상품만 제거</span>하는
              기능을 구현하려면 어떻게 해야 하는가?
            </Highlight>
            <Highlight>
              axios에서 발생하는{" "}
              <span className="h">&nbsp;에러를 유형별로 처리</span>하는 방법은
              무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"Figma"} width={960}>
            <Highlight>
              <span className="h">개발 시 참고하기 쉽도록&nbsp;</span>요소를
              배치하는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">오토 레이아웃</span>의 장점과 이를 활용한
              효율적인 작업 방법은 무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>

        <FadeIn marginTop={200}>
          <Title text={"back-end"} width={960} />
        </FadeIn>
        <FadeIn>
          <TableLine title={"Java"} width={960}>
            <Highlight>
              <span className="h">예외</span>를 처리하는 방법과{" "}
              <span className="h">&nbsp;try-catch-finally</span>의 역할은
              무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">람다 표현식</span>을 사용해 코드의 가독성을
              높이는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              컬렉션 프레임워크에서 <span className="h">&nbsp;list</span>와{" "}
              <span className="h">&nbsp;map</span>의 차이는 무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"MariaDB"} width={960}>
            <Highlight>
              상품 목록을 <span className="h">&nbsp;낮은 가격순으로 정렬</span>
              하는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">회원 등급별 주문 수</span>를 구하고{" "}
              <span className="h">&nbsp;COUNT 함수</span>를 적용하는 방법은
              무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"Spring Boot"} width={960}>
            <Highlight>
              <span className="h">JPA</span>와{" "}
              <span className="h">&nbsp;MyBatis</span>의 주요 차이점과 각각을
              언제 사용하는 것이 적합한가?
            </Highlight>
            <Highlight>
              게시판의 <span className="h">&nbsp;CRUD 기능</span>과{" "}
              <span className="h">&nbsp;댓글 기능</span>을 구현하는 방법은
              무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">Pageable</span>을 사용해 상품 목록을
              페이지별로 조회하는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">CORS 에러</span>를 해결하기 위해 설정
              파일(Config file)을 작성하는 방법은 무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>

        <FadeIn marginTop={200}>
          <Title text={"others"} width={960} />
        </FadeIn>
        <FadeIn>
          <TableLine title={"C"} width={960}>
            <Highlight>
              <span className="h">스택 영역</span>과{" "}
              <span className="h">&nbsp;힙 영역</span>의 차이점은 무엇이며, 힙
              영역에 메모리를 할당하는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">구조체 이름을 단순화</span>하여 가독성을
              높이는 방법은 무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">함수 포인터</span>를 사용해 다양한 함수를
              동적으로 호출하려면 어떻게 해야 하는가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"Git, GitHub"} width={960}>
            <Highlight>
              <span className="h">충돌</span>이 발생했을 때 이를 해결하는 방법은
              무엇인가?
            </Highlight>
            <Highlight>
              <span className="h">Pull Request</span>를 생성하고 팀원과 협업을
              진행하는 방법은 무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>
        <FadeIn>
          <TableLine title={"AWS"} width={960}>
            <Highlight>
              EC2 인스턴스 비용이{" "}
              <span className="h">&nbsp;예산을 초과하지 않도록&nbsp;</span>
              알림을 설정하는 방법은 무엇인가?
            </Highlight>
          </TableLine>
        </FadeIn>
      </Main>
    </div>
  );
}
