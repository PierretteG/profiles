//data pro domácí úkol:

let osoba = {
    jmeno: 'Jmeno',
    prijmeni: 'Prijmeni',
    bio: 'Něco o mně, co dělám ve volném čase...jaký je můj vztah k Czechitas a nebo nějakou jinou zajímavost',
    facebook: 'https://www.facebook.com/czechitas/',
    fotka: 'images/doutzen-kroes.jpg',
    barva: '#221a4e'
};

let poleOsob = [{
        jmeno: 'Jana',
        prijmeni: 'Czechita',
        bio: 'Dříve jsem pracovala jako molekulární bioložka. Minulý rok jsem navštívila jednodenní workshop Czechitas a IT mě prostě chytlo. Chodila jsem na další kurzy, postupně se sama vzdělávala a nyní pracuji jako vývojářka webových aplikací. Na molekuly už nemyslím.',
        facebook: 'https://www.facebook.com/czechitas/',
        fotka: 'images/foto.jpg',
        barva: '#31363b'
    },
    {
        jmeno: 'Luděk',
        prijmeni: 'Roleček',
        bio: 'Jsem lektor Jany Czechity. Učím rád a docela mi to jde.',
        facebook: 'https://www.facebook.com/rolecek',
        fotka: 'images/imageL.jpg',
        barva: '#801515'
    },
    {
        jmeno: 'Alena',
        prijmeni: 'Tajná',
        bio: 'Jsem dobrovolnice z řad Czechitas, dělám lektorku programování a grafiky a to zcela bez nároku na honorář. Tahle práce mě naplňuje.',
        twitter: 'https://twitter.com/czechitas/',
        fotka: 'images/doutzen-kroes.jpg',
        barva: '#221a4e'
    }
];


// Zadání: Vytvořte profilový medailonek (zatím jeden) z objektu "osoba".
// Výsledné html bude vypadat jak je zakomentováno v index.html.
// Poté rozšíříme kód tak, aby zobrazoval medailonky všech osob z pole "poleOsob".
// Pojďme na to!!!🙇‍🙇

for (i = 0; i < poleOsob.length; i++) {
    
    let profil = document.createElement('div');
    profil.classList.add('profil');
    
    profil.style.backgroundColor = poleOsob[i].barva;


    let foto = document.createElement('img');
    foto.classList.add('foto');
    foto.src = poleOsob[i].fotka;
    profil.appendChild(foto);


    let jmeno = document.createElement('h1');
    jmeno.classList.add('jmeno');
    jmeno.textContent = poleOsob[i].jmeno + ' ' + poleOsob[i].prijmeni;
    profil.appendChild(jmeno);

    let oMne = document.createElement('p');
    oMne.classList.add('o-mne');
    oMne.textContent = poleOsob[i].bio;
    profil.appendChild(oMne);

    if (poleOsob[i].facebook) {
        let facebook = document.createElement('a');
        facebook.classList.add('facebook');
        facebook.href = poleOsob[i].facebook;
        facebook.textContent = 'Facebook';
        profil.appendChild(facebook);
    } else {
        let twitter = document.createElement('a');
        twitter.classList.add('twitter');
        twitter.href = poleOsob[i].twitter;
        twitter.textContent = 'Twitter';
        profil.appendChild(twitter);
    }

    let profily = document.querySelector('.profily');
    profily.appendChild(profil);
}

// 1.1 Vytvoř elementy img, h1, p, a (a nezapomeň na třídy!) a přidej jim hodnoty a atributy z objektu osoba (osoba.Jmeno, osoba.Prijmeni...)
// 1.2 Pak tyto čtyři elementy zabal do divu se třídou profil (pssst appendchild).
// 1.3 Nakonec vyber na stránce existující div Profily (psst document.querySelector) a na něj zavěs tvůj div profil.
// Hurááá medailonek je hotový. Čas na kafe a 🍰 . Největší kus práce je za tebou.


// Pojďme na stránce vytvořit více různých profilů!!
// 2.1 Zabal existující kód do for cyklu (přes všechny osoby z pole "poleOsob").
// 2.2 Nakonec nahraď hodnoty objektu "osoba" v tvém kódu (osoba.jmeno, osoba.prijmeni) hodnotami z poleOsob.
// A je to!



// Pokročilé úkoly pro zvídavé a ultrašikovné:

// 3.1 Zkuste profilům obarvit pozadí dle vlastnosti barva z "poleOsob".
// 3.2 V "poleOsob" je jeden zatoulanec, který nemá facebook účet. Vytvořte podmínku,
// která v případě, že chybí facebook účet, místo toho zobrazí twitter.