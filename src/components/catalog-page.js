import './catalog-page.scss'

export const Catalog = () => {
    return (
        <>
            <header className="page-header">

                <article className="header-navigation">
                    <div className="find-programm-logotype-tablet"/>
                    <ul className="header-menu">
                        <li className="header-menu-item">ГЛАВНАЯ
                        </li>
                        <li className="header-menu-item">КАТАЛОГ ПРОДУКЦИИ</li>
                        <li className="header-menu-item"> ПОДБОР ПРОГРАММЫ</li>
                    </ul>
                </article>
            </header>

            <main>
                <article className="catalog">
                    <h1 className="catalog__headline">Каталог продукции</h1>

                    <ul className="catalog__list">
                        <template class="template-item">
                            <li className="catalog__list__item">
                                <div className="catalog__list__item__wrapper">
                                    <section className="container-first">
                                        <section className="image-block">
                                            <div className="catalog__list__item__image">
                                                <img className="catalog__list__item__image__picture"
                                                     src="pictures/catalog-2-desktop.png"/>
                                            </div>
                                        </section>


                                        <section className="information-block">
                                            <h2 className="catalog__list__item__headline">Cat Energy PRO <br/>
                                                500 г</h2>
                                            <ul className="catalog__list__item__description">
                                                <li className="catalog__list__item__description--option"><p>Объем</p> <p
                                                    className="size">500г</p></li>
                                                <li className="catalog__list__item__description--option"><p>Вкус</p>  <p
                                                    className="taste">Курица</p></li>
                                                <li className="catalog__list__item__description--option"><p>Цена</p> <p
                                                    className="price">700 Р.</p></li>
                                            </ul>
                                        </section>

                                    </section>


                                    <section>
                                        <button className="catalog__list__item__button">ЗАКАЗАТЬ</button>
                                    </section>


                                </div>
                            </li>
                        </template>

                        <li className="catalog__list__item item-last">
                            <div className="plus-wrapper">
                                <div className="catalog__list__item__image plus-image">
                                    <img className="catalog__list__item__image__picture plus" src="pictures/plus.png"/>
                                </div>
                                <h2 className="plus-headline">ПОКАЗАТЬ ЕЩЕ 100500 ТОВАРОВ</h2>
                                <p className="catalog__list__item__text">На самом деле вкусов гораздо больше!
                                </p>
                                <div>
                                    <button className="plus-button">ПОКАЗАТЬ ВСЕ</button>
                                </div>

                            </div>
                        </li>

                    </ul>
                </article>


                <article className="additional-suppliment">
                    <fieldset className="additional-suppliment__fieldset">
                        <legend className="additional-suppliment__legend">Дополнительные товары</legend>
                        <div></div>
                        <section className="additional-suppliment__wrapper">

                            <div className="additional-suppliment-left">
                                <div className="additional-suppliment__wrapper__two">
                                    <ul className="additional-suppliment__list">
                                        <li className="additional-suppliment__list--type">САХАРОЗАМЕНИТЕЛЬ</li>
                                        <li className="additional-suppliment__list--amount"><p>1 упаковка (100г)</p>
                                            <p className="money">200р</p></li>
                                    </ul>
                                    <button className="additional-suppliment__list--button">ЗАКАЗАТЬ</button>
                                </div>

                                <div className="additional-suppliment__wrapper__two">
                                    <ul className="additional-suppliment__list">
                                        <li className="additional-suppliment__list--type">ПИТЬЕВАЯ ВОДА</li>
                                        <li className="additional-suppliment__list--amount"><p>5 литров (100г)</p>
                                            <p className="money">50р</p></li>
                                    </ul>
                                    <button className="additional-suppliment__list--button">ЗАКАЗАТЬ</button>
                                </div>

                                <div className="additional-suppliment__wrapper__two">
                                    <ul className="additional-suppliment__list">
                                        <li className="additional-suppliment__list--type">МОЛОКО</li>
                                        <li className="additional-suppliment__list--amount"><p>1 литр</p>
                                            <p className="money">50р</p></li>
                                    </ul>
                                    <button className="additional-suppliment__list--button">ЗАКАЗАТЬ</button>
                                </div>


                                <div className="additional-suppliment__wrapper__two">
                                    <ul className="additional-suppliment__list">
                                        <li className="additional-suppliment__list--type">ВИТАМИНЫ</li>
                                        <li className="additional-suppliment__list--amount"><p>1 упаковка (30г)</p>
                                            <p className="money">300р</p></li>
                                    </ul>
                                    <button className="additional-suppliment__list--button">ЗАКАЗАТЬ</button>
                                </div>
                            </div>

                            <div className="additional-suppliment__picture"><p
                                className="additional-suppliment__picture__text">Закажите все
                                и получите чехол для кота в подарок!</p></div>
                        </section>

                    </fieldset>
                </article>

                <article className="partnership">
                    <div className="partnership__wrapper">
                        <div className="partnership__textcontent">ПРИГЛАШАЕМ <br/>
                            К СОТРУДНИЧЕСТВУ <br/>
                            ДИЛЕРОВ!</div>
                        <ul className="partnership__address">
                            <li>ул. Большая Конюшенная, д. 19/8</li>
                            <li>Санкт-Петербург</li>
                        </ul>
                    </div>
                </article>


                <article id="map">
                </article>

                {/*<script src="google-map.js"></script>*/}
                {/*<script async defer*/}
                {/*        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBme58AN9wAyTA0qRNM7P2pJ-zW0tA9Cww&callback=initMap">*/}
                {/*</script>*/}

            </main>
            <footer className="page-footer">
                <section className="page-footer__wrapper">
                    <div className="page-footer__item--one"/>

                    <ul className="page-footer__item--two">
                        <li className="page-footer__item--two--first"/>
                        <li className="page-footer__item--two--second"/>
                        <li className="page-footer__item--two--third"/>
                    </ul>

                    <div className="page-footer__item--three">
                        <p className="page-footer--text">HTML Academy</p>
                        <div className="page-footer__item--three--sign"/>
                    </div>
                </section>
            </footer>
        </>
    );

};


