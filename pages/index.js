
import Link from "next/link"
import MainController from "../components/MainController"



export default function Home() {
  return (
    <MainController>
      <main class="mainSection">
        <div class="flc">
          <h3 class="mainH3">
            Создание и продвижение Web приложений.
          </h3>
          <ul class="mainUl">
            <li class="mainLi">Landing Page</li>
            <li class="mainLi">Порталы</li>
            <li class="mainLi">Интернет магазины</li>
            <li class="mainLi">Форумы</li>
            <li class="mainLi">CRM системы</li>
          </ul>
        </div>
      </main>

      <section class="worksIndex">
        <div class="flc ">
          <span class="workSpan">Выполнениые работы от <strong>awdesing</strong></span>
          <div class="row flexWork">
            <div class="wIndexCard">

            </div>
            <div class="wIndexCard">

            </div>
            <div class="wIndexCard">

            </div>
            <div class="wIndexCard">

            </div>
          </div>
          <div class="row">
            <div class="btnLookAllWork">
              <Link href={'/works'}>
                <a class="btnWorksIndex" >Увидеть больше работ</a>
              </Link>
            </div>
          </div>

        </div>
      </section>



    </MainController>
  )
}
