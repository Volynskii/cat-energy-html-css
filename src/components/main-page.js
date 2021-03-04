import './main-page.scss'
import MyMap from "./google-map/google-map";

const Main = () => {
    return (
        <>
            <header className="page-header">
                <div className="programm-navigation">
                    <article className="find-programm">
                        <div className="find-programm-logotype">
                        </div>
                        <div className="find-programm-content">
                            <h1 className="find-programm-content-header">Функциональное питание для котов</h1>
                            <p className="find-programm-content-description">ЗАНЯЛСЯ СОБОЙ?ЗАЙМИСЬ КОТОМ!</p>

                            <a href={`/form`} className="find-programm-content-button">ПОДОБРАТЬ ПРОГРАММУ</a>

                        </div>
                    </article>

                    <article className="header-navigation">
                        <div className="find-programm-logotype-tablet"/>
                        <ul className="header-menu">
                            <li className="header-menu-item"><a className="header-menu-item-active-main" href={`/`}>ГЛАВНАЯ</a>
                            </li>
                            <li className="header-menu-item"><a href={`/catalog`}>КАТАЛОГ ПРОДУКЦИИ</a></li>
                            <li className="header-menu-item"><a href={`/form`}>ПОДБОР ПРОГРАММЫ</a></li>
                        </ul>
                    </article>
                </div>
            </header>
            <article className="programs">
                <section className="programs-one">
                    <div className="programs-one__wrapper">
                        <h2 className="programs-one-headline">ПОХУДЕНИЕ</h2>
                        <p className="programs-one-content">Ваш кот весит больше собаки и почти утратил способность
                            лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний
                            вес.</p>

                        <button className="programs-one-button">КАТАЛОГ SLIM</button>
                    </div>
                </section>
                <section className="programs-two">
                    <div className="programs-two__wrapper">
                        <h2 className="programs-two-headline">НАБОР МАССЫ</h2>
                        <p className="programs-two-content">Заработать авторитет среди дворовых котов и даже собак?
                            Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!</p>

                        <button className="programs-two-button">КАТАЛОГ PRO</button>
                    </div>
                </section>
            </article>

            <main>
                <h3 className="features">Как это работает</h3>
                <ol className="features-items">
                    <li className="features-items--one">
                        <div className="features-items--one-picture"/>
                        <p className="features-items-content"> Функциональное питание содержит только полезные
                            питательные вещества.</p>
                    </li>
                    <li className="features-items--two">
                        <div className="features-items--two-picture"/>
                        <p className="features-items-content">Выпускается в виде порошка, который нужно лишь залить
                            кипятком и готово.</p>
                    </li>
                    <li className="features-items--three">
                        <div className="features-items--three-picture"/>
                        <p className="features-items-content">Замените один-два приема обычной еды на наше
                            функциональное питание.</p>
                    </li>
                    <li className="features-items--four">
                        <div className="features-items--four-picture"/>
                        <p className="features-items-content">Уже через месяц наслаждайтесь изменениями к лучшему
                            вашего питомца!</p>
                    </li>
                </ol>

                <article className="example">
                    <div className="example-headline">Живой пример</div>
                    <div className="example-cat-block"/>
                </article>

                <article className="results">

                    <section className="results__details">
                        <div className="results__details__wrapper">
                            <p className="results__details__description">Борис сбросил 5 кг за 2 месяца, просто заменив
                                свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
                                этом он не менял своих привычек и по-прежнему спит по 16 часов в день. </p>
                            <div className="results__numbers-fieldset">
                                <section className="results__numbers">
                                    <fieldset className="results__fieldset">
                                        <legend className="results__legend"><p className="rotate">снижение веса</p>
                                        </legend>
                                        <span>
        5 КГ
        </span>
                                    </fieldset>
                                    <fieldset className="results__fieldset">
                                        <legend className="results__legend"><p className="rotate">затрачено времени</p>
                                        </legend>
                                        <span>
        60 ДНЕЙ</span>
                                    </fieldset>
                                </section>

                                <div className="results__expenses">
                                    <p className="results__expenses--text">ЗАТРАТЫ НА ПИТАНИЕ:</p>
                                    <p className="results__expenses--text">15 000 РУБ.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="results__picture">
                        <div className="results__picture__wrapper">
                            <p className="before">БЫЛО</p>

                            <p className="after">СТАЛО</p>
                        </div>
                        <div className="results__picture__wrapper-two"/>
                    </section>
                </article>
                <article className="partnership-main">
                    <div className="partnership__wrapper-main">
                        <div className="partnership__textcontent">ПРИГЛАШАЕМ <br/>
                            К СОТРУДНИЧЕСТВУ <br/>
                            ДИЛЕРОВ!</div>
                        <ul className="partnership__address">
                            <li className="partnership__address__item-one">ул. Большая<br/> Конюшенная, д. 19/8</li>
                            <li className="partnership__address__item-two">Санкт-Петербург</li>
                        </ul>
                    </div>
                </article>

                <article id="map">
                    <MyMap />
                </article>
                {/*<script>*/}
                {/*    function initMap() {*/}
                {/*    // The location of Uluru*/}
                {/*    var uluru = {lat: 59.938040, lng: 30.323596};*/}
                {/*    // The map, centered at Uluru*/}
                {/*    var map = new google.maps.Map(*/}
                {/*    document.getElementById('map'), {zoom: 17, center: uluru});*/}
                {/*    // The marker, positioned at Uluru*/}
                {/*    var marker = new google.maps.Marker({position: uluru, map: map});*/}
                {/*};*/}
                {/*</script>*/}
                {/*<script async defer*/}
                {/*        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBme58AN9wAyTA0qRNM7P2pJ-zW0tA9Cww&callback=initMap">*/}
                {/*</script>*/}
            </main>
            <footer className="page-footer">
                <section className="page-footer__wrapper">
                    <div className="page-footer__item--one"/>

                    <div className="page-footer__item--two">
                        <a  target="_blank" href="https://vk.com/im" className="page-footer__item--two--first"/>
                        <a  target="_blank"  href="https://www.instagram.com/" className="page-footer__item--two--second"/>
                        <a  target="_blank" href="https://www.facebook.com/" className="page-footer__item--two--third"/>
                    </div>

                    <a rel="noreferrer" target="_blank" href="https://htmlacademy.ru/study" className="page-footer__item--three">
                        <p className="page-footer--text">HTML Academy</p>
                        <div className="page-footer__item--three--sign"/>
                    </a>
                </section>
            </footer>
    </>
);
};

export default Main;
