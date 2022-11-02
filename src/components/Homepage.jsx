import React from 'react'
import { Link } from 'react-router-dom'


const Homepage = () => {
    return (
        <article>
            <section id="banner">
                <div className="container">
                    <div id="banner-text">
                        <div className="text-center">
                            Dobrým webem vše začíná<br/>
                            <span className="banner-smaller-text">Podívejte se na technologie, které ovládám</span><br/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stack" className="container">
                <div className="stack row">
                    <div className="col text-center">
                        <p className="text-bigger font-weight-bold mb-3">
                            HTML & CSS
                        </p>
                        <p>
                            Ovládám HTML5 a CSS3 na dobré úrovni. S CSS využívám Bootstrapu, MaterializeCSS, FontAwesome ikony nebo SCSS.
                        </p>
                    </div>
                    <div className="col">
                        <p className="text-bigger font-weight-bold mb-3">
                            PHP
                        </p>
                        <p>
                            OOP na vlastní MVC, později Nette, Laravel, vlastní pluginy ve WordPressu. S PHP využivám MySQL databázi.
                        </p>
                    </div>
                    <div className="col">
                        <p className="text-bigger font-weight-bold mb-3">
                            JavaScript
                        </p>
                        <p>
                            JavaScript ovládám Vanila, při projektech hodně využívám spíše jQuery. Nyní jsem se začal více zajímat o React a Vue.js
                        </p>
                    </div>
                    <div className="col">
                        <p className="text-bigger font-weight-bold mb-3">
                            Ostatní
                        </p>
                        <p>
                            Ovládám C na základní úrovni, Python využívám při tvorbě dvou Discord botů. Vyzkoušel jsem si práci v Javě nebo C#.
                        </p>
                    </div>
                </div>
            </section>
            <section id="about" className="container">
                <div className="about row">
                    <div className="col">
                        Chceš zjistit víc o mém příběhu? <Link to="/about">Přečti si o mně zde</Link>.
                    </div>
                </div>
            </section>
            <section id="page" className="container">
                <div class="page">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam commodo dui eget wisi. Praesent dapibus. Aenean vel massa quis mauris vehicula lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Integer tempor. Fusce nibh. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Nam quis nulla. Vivamus porttitor turpis ac leo. Sed convallis magna eu sem. Aenean placerat. Mauris metus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Etiam neque. Maecenas lorem. Nullam sit amet magna in magna gravida vehicula. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aliquam in lorem sit amet leo accumsan lacinia. Et harum quidem rerum facilis est et expedita distinctio. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Integer in sapien. Mauris elementum mauris vitae tortor. Etiam posuere lacus quis dolor. Etiam egestas wisi a erat. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Pellentesque pretium lectus id turpis. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p>Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Mauris tincidunt sem sed arcu. Nunc auctor. Fusce nibh. Aliquam ante. Etiam egestas wisi a erat. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque pretium lectus id turpis. In rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? In convallis. Aliquam in lorem sit amet leo accumsan lacinia.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nunc auctor. Nulla quis diam. Fusce nibh. Curabitur vitae diam non enim vestibulum interdum. Proin in tellus sit amet nibh dignissim sagittis. Phasellus faucibus molestie nisl. Etiam egestas wisi a erat. Etiam neque. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. In rutrum. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Pellentesque arcu. Fusce wisi. Sed ac dolor sit amet purus malesuada congue. Duis risus.</p>
                    <p>Aliquam erat volutpat. Nulla pulvinar eleifend sem. In convallis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Integer tempor. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Duis pulvinar. Nullam rhoncus aliquam metus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Fusce nibh.</p>
                </div>
            </section>
        </article>
    )
}

export default Homepage