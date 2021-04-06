import './form-page.scss'
import MyMap from "./google-map/google-map";
import {Link} from "react-router-dom";

const Form = () => {
    return (
        <>
            <header className="page-header">

                <article className="header-navigation-catalog">
                    <div className="find-programm-logotype-tablet-catalog"/>
                    <ul className="header-menu-form">
                        <li className="header-menu-item-catalog"><Link to={`/`}>ГЛАВНАЯ</Link>
                        </li>
                        <li className="header-menu-item-catalog"><Link to={`/catalog`}>КАТАЛОГ ПРОДУКЦИИ</Link></li>
                        <li className="header-menu-item-catalog"><Link to={`/form`}  className="header-menu-item-active">ПОДБОР ПРОГРАММЫ</Link> </li>
                    </ul>
                </article>

            </header>

            <main>
                <article className="find-program">
                    <section className="introduction">
                        <h1 className="introduction__headline">Подбор программы</h1>

                        <p className="introduction__text">ЗАПОЛНИТЕ АНКЕТУ И МЫ ПОДБЕРЕМ
                            ПРОГРАММУ ПИТАНИЯ ДЛЯ ВАШЕГО КОТА</p>
                    </section>

                    <section className="basic-information">
                        <ul className="basic-information__data">
                            <li className="basic-information__data__item"><label htmlFor="name">Имя:*</label><input
                                className="field-long" id="name" type="text" placeholder="Барсик"/></li>
                            <li className="basic-information__data__item"><label htmlFor="weight">Вес
                                (кг):*</label><input className="field-long" id="weight" type="number" placeholder="7"/>
                            </li>
                            <li className="basic-information__data__item"><label htmlFor="age">Возраст
                                (лет):</label><input className="field-long" id="age" type="number" placeholder="7"/></li>
                        </ul>

                        <div className="basic-information__choose-program">
                            <ul className="basic-information__choose-program__wrapper">
                                <li className="basic-information__choose-program__wrapper__item"><input id="rfirst"
                                                                                                        type="radio"
                                                                                                       aria-checked={"true"}
                                                                                                        name="first"/>
                                    <label className="basic-information__choose-program__wrapper__item"
                                           htmlFor="rfirst">ПОХУДЕНИЕ</label>
                                </li>
                                <li className="basic-information__choose-program__wrapper__item"><input id="rsecond"
                                                                                                        type="radio"
                                                                                                        name="first"/>
                                    <label className="" htmlFor="rsecond">НАБОР МАССЫ</label>
                                </li>
                                <li className="basic-information__choose-program__wrapper__item"><input id="rthird"
                                                                                                        type="radio"
                                                                                                        name="first"/>
                                    <label className="" htmlFor="rthird">Не знаю (Нужен ваш совет)</label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </article>
                <article className="your-data">
                    <fieldset className="your-data__fieldset">
                        <legend className="your-data__fieldset__legend">Контактные данные (владельца кота)</legend>
                        <ul className="your-data__fieldset__list">
                            <li className="your-data__fieldset__list__email"><label htmlFor="email">E-MAIL:*</label>
                                <input className="field-long" id="email" type="email" placeholder="kuklachev@gmail.com"/>
                            </li>
                            <li className="your-data__fieldset__list__number"><label
                                htmlFor="tel">ТЕЛЕФОН:*</label><input className="field-long" id="tel" type="tel"
                                                                      placeholder="8 (960) 900-60-90"/></li>
                        </ul>
                    </fieldset>
                </article>

                <article className="comment">
                    <fieldset className="comment__fieldset">
                        <legend className="comment__legend">Комментарий</legend>
                        <textarea className="comment__fieldset__textarea"
                                  placeholder="Расскажите обо всех повадках кота"/>
                    </fieldset>
                </article>

                <article className="additional-suppliment">
                    <fieldset className="additional-suppliment__fieldset">
                        <legend className="additional-suppliment__legend">Дополнительно</legend>
                        <div className="additional-suppliment__fieldset__wrapper">
                            <ul className="additional-suppliment__fieldset__list">
                                <li className="additional-suppliment__fieldset__list__item"><input id="cfirst"
                                                                                                   type="checkbox"

                                                                                                   /><label
                                    htmlFor="cfirst">Сахарозаменитель</label></li>
                                <li className="additional-suppliment__fieldset__list__item"><input id="csecond"
                                                                                                   type="checkbox"/><label
                                    htmlFor="csecond">Питьевая вода</label></li>
                                <li className="additional-suppliment__fieldset__list__item"><input id="cthird"
                                                                                                   type="checkbox"/><label
                                    htmlFor="cthird">Молоко</label></li>
                                <li className="additional-suppliment__fieldset__list__item"><input id="cfourth"
                                                                                                   type="checkbox"/><label
                                    htmlFor="cfourth">Витамины</label></li>
                            </ul>

                            <div className="additional-suppliment__fieldset__submit-block">
                                <input className="additional-suppliment__fieldset__submit-block__submit" type="submit"
                                       value="отправить заявку"/>
                                    <span className="additional-suppliment__fieldset__submit-block__span">* — Обязательные поля</span>
                            </div>
                        </div>

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
                    <MyMap />
                </article>

            </main>
            <footer className="page-footer">
                <section className="page-footer__wrapper">
                    <div className="page-footer__item--one"/>

                    <div className="page-footer__item--two">
                        <a  target="_blank" rel="noopener noreferrer" href="https://vk.com/im" className="page-footer__item--two--first"/>
                        <a  target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/" className="page-footer__item--two--second"/>
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="page-footer__item--two--third"/>
                    </div>

                    <a rel="noopener noreferrer" target="_blank" href="https://htmlacademy.ru/study" className="page-footer__item--three">
                        <p className="page-footer--text">HTML Academy</p>
                        <div className="page-footer__item--three--sign"/>
                    </a>
                </section>
            </footer>

        </>
    );
};

export default Form;
