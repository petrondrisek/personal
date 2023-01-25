import React from 'react'
import { useState } from 'react'
import '../../assets/components/Portfolio/portfolio.css';
import sfkkozel_thumbnail from '../../assets/components/Portfolio/thumbnails/sfkkozel.png'
import nekurackaspolecnost_thumbnail from '../../assets/components/Portfolio/thumbnails/nekurackaspolecnost.png'
import uveryhypoteky_thumbnail from '../../assets/components/Portfolio/thumbnails/uveryhypoteky.png'
import lexten_thumbnail from '../../assets/components/Portfolio/thumbnails/lexten.png';
import srp_thumbnail from '../../assets/components/Portfolio/thumbnails/srp.png';
import mineleague_thumbnail from '../../assets/components/Portfolio/thumbnails/mineleague.png';
import discord_thumbnail from '../../assets/components/Portfolio/thumbnails/discord.jpg';
import tagbroker_thumbnail from '../../assets/components/Portfolio/thumbnails/tagbroker.png';
import lednice_thumbnail from '../../assets/components/Portfolio/thumbnails/lednice.png';
import personal_thumbnail from '../../assets/components/Portfolio/thumbnails/personal.png';
import sitename from '../../index'
import vue_thumbnail from '../../assets/components/Portfolio/thumbnails/vue.png';
import PortfolioModal from '../widgets/Portfolio/Modal';
import PortfolioTable from '../widgets/Portfolio/Table';
import { motion } from 'framer-motion/dist/framer-motion'

const Portfolio = () => {
    document.title = sitename + "Portfolio";

    const [items] = useState([
        {title: "Mé portfolio", git: "https://github.com/DSC-cz/pesonal", desc: "Mé portfolio vytvořené v Reactu za pomocí Bootstrapu.", type: "web", url: "https://dsc-cz.github.io/personal", thumbnail: personal_thumbnail, stack: ["React", "CSS", "Bootstrap CSS"]},
        {title: "Vue.js • Learning project", git: "https://github.com/DSC-cz/vue-js-learn", desc: "Učební projekt na Vue.js framework", type: "web", url: "https://dsc-vue-js.vercel.app", thumbnail: vue_thumbnail, stack: ["Vue.js", "CSS", "Bootstrap CSS"]},
        {title: "SRP", git: "https://github.com/DSC-cz/srp-test", desc: "Informační systém - zkušební zadání, využití Nette, MySQL, MaterializeCSS, jQuery, HTML, CSS. Uživatel: admin, heslo: test1234", type: "web", url: "http://personal-dsc.infinityfreeapp.com/srp", thumbnail: srp_thumbnail, stack: ["Nette", "PHP", "CSS","MaterializeCSS"]},
        {title: "Nekurackaspolecnost.cz • Plugin", git: "", desc:"Plugin pro žádost o certifikát (využivá ARES rejstříku, odkud vyhledává podle IČO), administrace ve WordPressu → schválení a editace certifikátů, přidělení certifikátu - zlatý, stříbrný, bronzový. Seznam certifikátů rozdělený na stránkování. Využití WordPressu a vlastního pluginu.", type: "web", url: "https://nekurackaspolecnost.cz", thumbnail: nekurackaspolecnost_thumbnail, stack: ["WordPress", "PHP", "jQuery"]},
        {title: "Mineleague.cz • Bot", git: "", desc: "Discord bot • Python a využití knihovny discord.py, discord_slash.py. Komunikuje s MySQL databází. Funkce: přidělování rolí pokud si hráč propojí účet s webovým, vytvoření textové místnosti pro zápas s automatickým přidáním uživatelů s propojeným účtem, zobrazení hráčských nebo týmových statistik - /profile, přidělení TOP žebříčkových rolí uživatelům s propojeným účtem, příkaz na zobrazení nápovědy na zadané téma - /guide", type: "others", thumbnail: discord_thumbnail, stack: ["Python"]},
        {title: "Mineleague.cz", git: "", desc: "Webová stránka pro Minecraft ligový turnaje. Napsáno v PHP s využitím OOP a vlastní MVC architektury, jQuery, MySQL databáze, využití Discord Auth, PayPal platební brána s JavaScriptem pro dobíjení kreditů. Frontend není součástí mé práce, nicméně někde byl upraven pro lepší zobrazení.", type: "web", url: "https://mineleague.cz", thumbnail: mineleague_thumbnail, stack: ["PHP", "Custom MVC", "jQuery"]},
        {title: "Uveryhypoteky.eu", git: "", desc: "Webová stránka pro Úvěry a Hypotéky. Využití WordPressu, vlastní šablona napsaná v HTML, CSS, jQuery a s využitím Bootstrapu. Zde jsem pomohl i s celkovou administrativou ohledně hostingů - např. založení emailů a přesměrování na soukromé, popř. propojení emailů do Gmail schránek.", type: "web", url: "https://uveryhypoteky.eu", thumbnail: uveryhypoteky_thumbnail, stack: ["WordPress", "jQuery", "Bootstrap", "CSS"]},
        {title: "TAGBroker", git: "https://github.com/DSC-cz/tagbroker", desc: "Webová stránka původně pro TAG Broker, nicméně si to firma rozmyslela ještě před dodáním projektu, tudíž výsledek není 100%, ale je téměř dokončený. Napsáno v HTML, CSS s využitím Bootstrapu", type: "web", url: "http://personal-dsc.infinityfreeapp.com/wordpress", thumbnail: tagbroker_thumbnail, stack: ["WordPress", "Bootstrap", "CSS"]},
        {title: "Lednicka", git: "https://github.com/DSC-cz/lednicka", desc: "Aplikace v rámci zkušebního zadání. Napsáno v Laravelu - jazyk PHP, HTML, CSS, jQuery. Přidání potravin, blížíci se expirace a označení na frontendu zvýrazněním.", type: "web", url: "http://personal-dsc.infinityfreeapp.com/lednicka/public/main", thumbnail: lednice_thumbnail, stack: ["PHP", "Laravel", "HTML", "CSS"]},
        {title: "SFK Kozel", git: "", desc: "Webová stránka pro flobralový klub SFK Kozel, vzniklo v rámci školní praxe. Využití Wordpressu, vlastní šablona v HTML, CSS a jQuery. Vlastní plugin pro zápasy se stránkováním, hráči + kategorie. Při editaci zápasu lze hráčům přidávat statistiky, které se propíší do profilu, to nakonec ale zůstalo nevyužito.", type: "web", url: "https://sfkkozel.cz", thumbnail: sfkkozel_thumbnail, stack: ["WordPress", "HTML", "CSS", "jQuery"]},
    ]);

    const [ModalItem, setModalItem] = useState(0);
    const [ModalShow, setModalShow] = useState(false);
    
    return(
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.5}}}>
            <PortfolioModal items={items} ModalItem={ModalItem} ModalShow={ModalShow} setModalShow={setModalShow} />
            <h1>Portfolio</h1>
            <PortfolioTable items={items} setModalItem={setModalItem} setModalShow={setModalShow} />
        </motion.section>
    )
}

export default Portfolio;