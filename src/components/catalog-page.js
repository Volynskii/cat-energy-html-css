import './catalog-page.scss'
import arrayCatalog from "../mocks/catalog-item";
import MyMap from "./google-map/google-map";

export const Catalog = () => {


    return (
        <>
            <header className="page-header">

                <article className="header-navigation-catalog">
                    <div className="find-programm-logotype-tablet-catalog"/>
                    <ul className="header-menu-catalog">
                        <li className="header-menu-item a-color"><a href={`/`}>ГЛАВНАЯ</a>
                        </li>
                        <li className="header-menu-item a-color"><a className="header-menu-item-active" href={`/catalog`}>КАТАЛОГ ПРОДУКЦИИ</a></li>
                        <li className="header-menu-item a-color"><a href={`/form`}>ПОДБОР ПРОГРАММЫ</a></li>
                    </ul>
                </article>
            </header>

            <main>
                <article className="catalog">
                    <h1 className="catalog__headline">Каталог продукции</h1>

                    <ul className="catalog__list">
                        {arrayCatalog.map((catalogItem,index) => (

                            <li key={index} className="catalog__list__item">
                                <div className="catalog__list__item__wrapper">
                                    <section className="container-first">
                                        <section className="image-block">
                                            <div className="catalog__list__item__image">
                                                <img alt={index} className="catalog__list__item__image__picture"
                                                     src={catalogItem.image}/>
                                            </div>
                                        </section>


                                        <section className="information-block">
                                            <h2 className="catalog__list__item__headline">{catalogItem.headline}<br/>
                                                {catalogItem.size}</h2>
                                            <ul className="catalog__list__item__description">
                                                <li className="catalog__list__item__description--option"><p>Объем</p> <p
                                                    className="size">{catalogItem.size}</p></li>
                                                <li className="catalog__list__item__description--option"><p>Вкус</p>  <p
                                                    className="taste">{catalogItem.taste}</p></li>
                                                <li className="catalog__list__item__description--option"><p>Цена</p> <p
                                                    className="price">{catalogItem.prices}</p></li>
                                            </ul>
                                        </section>

                                    </section>


                                    <section>
                                        <button className="catalog__list__item__button">ЗАКАЗАТЬ</button>
                                    </section>


                                </div>
                            </li>
                        ))}



                        <li className="catalog__list__item item-last">
                            <div className="plus-wrapper">
                                <div className="catalog__list__item__image plus-image">
                                    <img alt={'plus'} className="catalog__list__item__image__picture plus" src="./images/catalog/plus.png"/>
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


                <article className="additional-suppliment-catalog">
                    <fieldset className="additional-suppliment__fieldset">
                        <legend className="additional-suppliment__legend-catalog">Дополнительные товары</legend>
                        <div/>
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

                <article className="partnership-catalog">
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
                    <MyMap />
                </article>


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


