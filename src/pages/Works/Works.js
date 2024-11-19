import { useEffect, useState } from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import FadeInAlt from "../../components/FadeIn/FadeInAlt";
import Main from "../../components/Main/Main";
import Title from "../../components/Title/Title";
import "./Works.css";

export default function Works() {
  const [isBlur, setIsBlur] = useState(false);
  const [vintage, setVintage] = useState(false);
  const [vintageAlt, setVintageAlt] = useState(false);
  const [leopold, setLeopold] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  useEffect(() => {
    if (vintage || vintageAlt || leopold || portfolio) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [vintage, vintageAlt, leopold, portfolio]);

  return (
    <div className="works">
      <div
        className={`blur ${isBlur ? "visible" : ""}`}
        onClick={() => {
          setIsBlur(false);
          setVintage(false);
          setVintageAlt(false);
          setLeopold(false);
          setPortfolio(false);
        }}
      />

      {/**************************** 프로젝트 상세 정보 ****************************/}
      <div className={`detail ${vintage ? "visible" : ""}`}>
        <div className="detail-content-container">
          <FadeIn>
            <p className="big-title">빈티지샵 프로젝트 (개인 프로젝트)</p>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"summary"} width={960} />
            <div className="detail-content">
              <p>
                빈티지샵 프로젝트는 중고 의류를 전문으로 판매하는 쇼핑몰 제작
                프로젝트입니다.
              </p>
              <p>
                100개가 넘는 제품을 트리 구조의 카테고리로 분류하여 조회할 수
                있도록 구현했습니다.
              </p>
              <p>
                기존 빈티지샵 사이트들을 분석하여 발견한 개선점을 프로젝트에
                적용함으로써, 사용자 경험을 향상시키기 위해 노력했습니다.
              </p>
              <p>
                프론트엔드, 백엔드, 데이터베이스 설계까지 모든 과정을 혼자
                담당한 개인 프로젝트입니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"features"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                회원가입 / 로그인 / 카테고리별 상품 조회 / 상품 상세 조회 /
                공지사항 조회 / Q&A 조회, 작성, 수정 및 삭제
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"skills"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="overview-box">
              <div className="overview-line">
                <p>front-end:</p>
                <p className="overview-line-tag">HTML</p>
                <p className="overview-line-tag">CSS</p>
                <p className="overview-line-tag">JavaScript</p>
                <p className="overview-line-tag">React</p>
                <p className="overview-line-tag">Figma</p>
              </div>

              <div className="overview-line">
                <p>back-end:</p>
                <p className="overview-line-tag">Java</p>
                <p className="overview-line-tag">MariaDB</p>
                <p className="overview-line-tag">Spring Boot</p>
                <p className="overview-line-tag">MyBatis</p>
              </div>

              <div className="overview-line">
                <p>others:</p>
                <p className="overview-line-tag">AWS</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"highlights"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-vintage-1.png"
                alt="highlight-vintage-1"
                width={594}
              />
              <p>
                마우스 스크롤 방향에 따라 동적으로 나타났다 사라지는 헤더입니다.
              </p>
              <p>
                상위 카테고리에 마우스를 올리면 하위 카테고리가 나타나는
                구조이며, 웹 서핑 중 의도치 않은 마우스 움직임으로 인해
                <br />
                하위 메뉴가 확장되지 않도록 지연 시간을 추가했습니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-vintage-2.png"
                alt="highlight-vintage-2"
                width={551}
              />
              <p>
                트리 구조의 카테고리에서 사용자가 현재 위치한 장소를 한눈에
                파악할 수 있도록 구현했습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"links"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://43.201.95.211:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://43.201.95.211:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/vintage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/vintage
                  </a>
                </span>
              </p>
              <p>
                발표 영상:&nbsp;
                <span className="url">
                  <a
                    href="https://youtu.be/B8AH3sbycIE?si=uWfzrdLA1zgCf0WK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://youtu.be/B8AH3sbycIE
                  </a>
                </span>
              </p>
              <p>
                디자인:&nbsp;
                <span className="url">
                  <a
                    href="https://www.figma.com/design/2gu8wPE5EDpMeSzmF97StC/vintage?node-id=0-1&t=6RQr6BjqiEUG8UMv-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.figma.com/design/
                  </a>
                </span>
              </p>
              <p>
                DB 구조:&nbsp;
                <span className="url">
                  <a
                    href="https://www.erdcloud.com/d/JnqjPotJnMDpJN3LF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.erdcloud.com/d/
                  </a>
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className={`detail ${vintageAlt ? "visible" : ""}`}>
        <div className="detail-content-container">
          <FadeIn>
            <p className="big-title">
              Angular로 구현한 빈티지샵 프로젝트 (개인 프로젝트)
            </p>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"summary"} width={960} />
            <div className="detail-content">
              <p>
                Angular를 사용하여 중고 의류를 판매하는 쇼핑몰 플랫폼을 제작한
                개인 프로젝트입니다. 초기에는 100개 이상의 상품을 트리 구조로
                분류해 조회 기능을 구현했지만, 카테고리 추가나 수정 시 많은 코드
                변경이 필요하다는 지적을 받았습니다.
              </p>
              <p>
                이를 계기로 객체지향적 설계를 적용하여 카테고리 관리 로직을
                재구성하고, 유지보수성과 확장성을 크게 개선했습니다. 또한 기존
                프로젝트를 분석하면서 발견한 불편한 요소들을 개선하고, 사용자
                경험을 높일 수 있도록 UI/UX를 설계 하고 적용했습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"features"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                회원가입 / 로그인 확인 / 카테고리별 상품 조회 / 상품 상세 조회 /
                공지사항 및 Q&A 조회
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"skills"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="overview-box">
              <div className="overview-line">
                <p>front-end:</p>
                <p className="overview-line-tag">HTML</p>
                <p className="overview-line-tag">CSS</p>
                <p className="overview-line-tag">TypeScript</p>
                <p className="overview-line-tag">Angular</p>
                <p className="overview-line-tag">Figma</p>
              </div>

              <div className="overview-line">
                <p>back-end:</p>
                <p className="overview-line-tag">Java</p>
                <p className="overview-line-tag">MariaDB</p>
                <p className="overview-line-tag">Spring Boot</p>
                <p className="overview-line-tag">MyBatis</p>
              </div>

              <div className="overview-line">
                <p>others:</p>
                <p className="overview-line-tag">Git</p>
                <p className="overview-line-tag">GitHub</p>
                <p className="overview-line-tag">AWS</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"highlights"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-vintage-alt-1.png"
                alt="highlight-vintage-alt-1"
                width={594}
                height={200}
              />
              <p>
                카테고리 시스템은 category.service.ts에 정의된 데이터를 기반으로
                동작하도록 설계하여, 새로운 카테고리를 추가하거나 삭제할 때 코드
                수정 없이 자동으로 화면에 반영되도록 구현했고, 큰 구조 변경
                시에도 최소한의 수정만으로 대응할 수 있도록 했습니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-vintage-alt-2.png"
                alt="highlight-vintage-alt-2"
                width={551}
                height={200}
              />
              <p>
                카테고리를 select 태그로 표현해 트리 구조를 쉽게 파악하도록
                했으며, 상품 목록 페이지와 상세 정보 페이지를 오갈 때 스크롤
                위치 복원 기능을 적절히 설정하여 사용자 편의성을 높였습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"links"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://43.202.1.84:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://43.202.1.84:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/vintage-alt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/vintage-alt
                  </a>
                </span>
              </p>
              <p>
                디자인:&nbsp;
                <span className="url">
                  <a
                    href="https://www.figma.com/design/AiDv6aqRGlRke5PPOFmxNg/vintage-alt?node-id=0-1&t=LkPWfao6VHSQTH9D-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.figma.com/design/
                  </a>
                </span>
              </p>
              <p>
                DB 구조:&nbsp;
                <span className="url">
                  <a
                    href="https://www.erdcloud.com/d/79WYc3vYxQtf3Zt5k"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.erdcloud.com/d/
                  </a>
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className={`detail ${leopold ? "visible" : ""}`}>
        <div className="detail-content-container">
          <FadeIn>
            <p className="big-title">레오폴드 프로젝트 (3인 팀 프로젝트)</p>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"summary"} width={960} />
            <div className="detail-content">
              <p>
                레오폴드 프로젝트는 키보드 제조사 레오폴드의 기업 사이트를
                구현한 프로젝트입니다.
              </p>
              <p>
                사이트는 게시판과 쇼핑몰로 구성되어 있으며, 저는 3인으로 구성된
                팀의 팀장을 맡아 쇼핑몰 기능과 회원 관리 기능을
                <br />
                주로 담당했습니다.
              </p>
              <p>
                게시판 파트를 맡은 팀원들이 구현에 어려움을 겪을 때마다
                지원했으며, 협업 방식의 전반적인 설계를 맡았습니다.
              </p>
              <p>
                이 프로젝트를 통해 쇼핑몰의 동작 원리를 더욱 깊게 이해하게
                되었고, React의 컴포넌트와 프롭스를 효과적으로 사용하는
                <br />
                방법을 익힐 수 있었습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"features"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>[담당한 기능]</p>
              <p>
                회원가입 / 로그인 / 아이디 및 비밀번호 찾기 / 회원 정보 수정 /
                카테고리별 상품 조회 / 상품 상세 조회 / 장바구니 기능 /<br />
                상품 구매 및 결제, 취소 / 결제 내역 확인 / 관심 상품 관리
              </p>
              <p></p>
              <p>[팀원 담당 기능]</p>
              <p>
                공지사항 조회 / 일대일 문의 작성, 조회, 수정 및 삭제 / AS 접수
                작성 / 자료실 조회 / FAQ 조회
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"skills"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="overview-box">
              <div className="overview-line">
                <p>front-end:</p>
                <p className="overview-line-tag">HTML</p>
                <p className="overview-line-tag">CSS</p>
                <p className="overview-line-tag">JavaScript</p>
                <p className="overview-line-tag">React</p>
                <p className="overview-line-tag">Figma</p>
              </div>

              <div className="overview-line">
                <p>back-end:</p>
                <p className="overview-line-tag">Java</p>
                <p className="overview-line-tag">MariaDB</p>
                <p className="overview-line-tag">Spring Boot</p>
                <p className="overview-line-tag">JPA</p>
              </div>

              <div className="overview-line">
                <p>others:</p>
                <p className="overview-line-tag">Git</p>
                <p className="overview-line-tag">GitHub</p>
                <p className="overview-line-tag">AWS</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"highlights"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-leopold-1.png"
                alt="highlight-leopold-1"
                width={684}
              />
              <p>
                React의 컴포넌트와 프롭스, 그리고 map 함수와 filter 함수를
                활용하여 구현한 선택한 상품 목록입니다.
              </p>
              <p>
                자식 컴포넌트에서 수량을 변경하면 부모 컴포넌트의 총 상품금액에
                그 변화가 실시간으로 반영되도록 구현했습니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-leopold-2.png"
                alt="highlight-leopold-2"
                width={503}
              />
              <p>
                역시 컴포넌트와 프롭스, 그리고 map 함수와 filter 함수를 활용하여
                구현한 관심 상품 기능입니다.
              </p>
              <p>
                선택한 상품만 삭제하거나 전체 상품을 삭제할 수 있도록 구현하여
                사용자 편의성을 높였습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"links"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://3.39.22.170:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://3.39.22.170:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/leopold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/leopold
                  </a>
                </span>
              </p>
              <p>
                발표 영상:&nbsp;
                <span className="url">
                  <a
                    href="https://youtu.be/yWxcyvkR12k?si=2uIJuuHOAjXwYvwD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://youtu.be/yWxcyvkR12k
                  </a>
                </span>
              </p>
              <p>
                디자인:&nbsp;
                <span className="url">
                  <a
                    href="https://www.figma.com/design/JZErpiKRvWrbU9AK3HmB7F/leopold?node-id=0-1&t=CcY7W2GacC58Zf9J-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.figma.com/design/
                  </a>
                </span>
              </p>
              <p>
                DB 구조:&nbsp;
                <span className="url">
                  <a
                    href="https://www.erdcloud.com/d/amKu7tgfoqBu8Z8X3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.erdcloud.com/d/
                  </a>
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className={`detail ${portfolio ? "visible" : ""}`}>
        <div className="detail-content-container">
          <FadeIn>
            <p className="big-title">포트폴리오 (개인 프로젝트)</p>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"summary"} width={960} />
            <div className="detail-content">
              <p>
                포트폴리오 페이지는 제가 진행한 다양한 프로젝트와 그 과정에서
                사용한 기술들을 체계적으로 정리한 공간입니다.
              </p>
              <p>
                주요 기능과 기술들을 명확히 전달하여 제 개발 역량을 한눈에
                파악할 수 있도록 구성했습니다.
              </p>
              <p>
                페이지에 여러 가지 동적인 기능을 추가하여 보다 직관적이고 생동감
                있는 경험을 제공하려고 노력했습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"features"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>intro / profile / skills / works</p>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"skills"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="overview-box">
              <div className="overview-line">
                <p>front-end:</p>
                <p className="overview-line-tag">HTML</p>
                <p className="overview-line-tag">CSS</p>
                <p className="overview-line-tag">JavaScript</p>
                <p className="overview-line-tag">React</p>
                <p className="overview-line-tag">Figma</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn marginTop={180}>
            <Title text={"highlights"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-portfolio-1.gif"
                alt="highlight-portfolio-1"
                width={684}
              />
              <p>
                IntersectionObserver를 활용해 스크롤을 감지하고, 페이지 요소에
                동적인 효과를 추가하여 사용자 경험을 향상시켰습니다.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <img
                src=".\images\highlight-portfolio-2.png"
                alt="highlight-portfolio-2"
                width={503}
              />
              <p>
                페이지 요소에 팝업 효과를 구현하여, 스크롤 시 시각적인 흥미를
                유발하도록 만들었습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn marginTop={200}>
            <Title text={"links"} width={960} />
          </FadeIn>
          <FadeIn>
            <div className="detail-content">
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/portfolio
                  </a>
                </span>
              </p>
              <p>
                디자인:&nbsp;
                <span className="url">
                  <a
                    href="https://www.figma.com/design/qx7DWy33BMVyYnjPs7fo0y/portfolio?node-id=0-1&t=bvAPN4xHBnU59g92-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.figma.com/design/
                  </a>
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
      {/**************************** 프로젝트 상세 정보 ****************************/}

      <Main page="works">
        <FadeIn>
          <div className="titleAlt">
            <p>빈티지샵 프로젝트 (개인 프로젝트)</p>
            <p
              className="titleAlt-detail"
              onClick={() => {
                setIsBlur(true);
                setVintage(true);
              }}
            >
              프로젝트 상세 정보 &gt;
            </p>
          </div>

          <div className="overview">
            <img src=".\images\vintage.gif" width={392} alt="vintage" />
            <div className="overview-text">
              <p>개발 기간: 2024.7.29 - 2024.8.21 (24d)</p>
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://43.201.95.211:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://43.201.95.211:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/vintage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/vintage
                  </a>
                </span>
              </p>
              <p>
                발표 영상:&nbsp;
                <span className="url">
                  <a
                    href="https://youtu.be/B8AH3sbycIE?si=uWfzrdLA1zgCf0WK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://youtu.be/B8AH3sbycIE
                  </a>
                </span>
              </p>
              <p></p>
              <p>중고 의류를 판매하는 빈티지 쇼핑몰입니다.</p>
            </div>
          </div>
        </FadeIn>

        <FadeInAlt marginTop={253}>
          <div className="titleAlt">
            <p>Angular로 구현한 빈티지 프로젝트 (개인 프로젝트)</p>
            <p
              className="titleAlt-detail"
              onClick={() => {
                setIsBlur(true);
                setVintageAlt(true);
              }}
            >
              프로젝트 상세 정보 &gt;
            </p>
          </div>

          <div className="overview">
            <img
              src=".\images\vintage-alt.gif"
              width={392}
              height={211}
              alt="vintage-alt"
            />
            <div className="overview-text">
              <p>개발 기간: 2024.11.6 - 2024.11.18 (12d)</p>
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://43.202.1.84:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://43.202.1.84:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/vintage-alt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/vintage-alt
                  </a>
                </span>
              </p>
              <p></p>
              <p>
                Angular와 TypeScript를 활용해 구현한 중고 의류 쇼핑몰입니다.
              </p>
              <p>기존 빈티지 프로젝트의 문제점을 개선했습니다.</p>
            </div>
          </div>
        </FadeInAlt>

        <FadeIn marginTop={253}>
          <div className="titleAlt">
            <p>레오폴드 프로젝트 (3인 팀 프로젝트)</p>
            <p
              className="titleAlt-detail"
              onClick={() => {
                setIsBlur(true);
                setLeopold(true);
              }}
            >
              프로젝트 상세 정보 &gt;
            </p>
          </div>

          <div className="overview">
            <img src=".\images\leopold.gif" width={392} alt="leopold" />
            <div className="overview-text">
              <p>개발 기간: 2024.9.2 - 2024.9.29 (28d)</p>
              <p>
                사이트 주소:&nbsp;
                <span className="url">
                  <a
                    href="http://3.39.22.170:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://3.39.22.170:3000/
                  </a>
                </span>
              </p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/leopold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/leopold
                  </a>
                </span>
              </p>
              <p>
                발표 영상:&nbsp;
                <span className="url">
                  <a
                    href="https://youtu.be/yWxcyvkR12k?si=2uIJuuHOAjXwYvwD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://youtu.be/yWxcyvkR12k
                  </a>
                </span>
              </p>
              <p></p>
              <p>키보드 제조업체 레오폴드의 기업 사이트입니다.</p>
              <p>게시판과 쇼핑몰로 구성되어 있습니다.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn marginTop={253}>
          <div className="titleAlt">
            <p>포트폴리오 (개인 프로젝트)</p>
            <p
              className="titleAlt-detail"
              onClick={() => {
                setIsBlur(true);
                setPortfolio(true);
              }}
            >
              프로젝트 상세 정보 &gt;
            </p>
          </div>

          <div className="overview">
            <img src=".\images\portfolio.gif" width={392} alt="portfolio" />
            <div className="overview-text">
              <p>개발 기간: 2024.10.26 - 2024.10.31 (6d)</p>
              <p>
                GitHub:&nbsp;
                <span className="url">
                  <a
                    href="https://github.com/mosaek2/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/mosaek2/portfolio
                  </a>
                </span>
              </p>
              <p></p>
              <p>현재 보고 있는 포트폴리오 웹페이지입니다.</p>
            </div>
          </div>
        </FadeIn>
      </Main>
    </div>
  );
}
