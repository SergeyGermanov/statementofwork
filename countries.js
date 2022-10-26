// Need to be changed to an Array of Objects

let countries = [
  {
    id: 001,
    name: "Afghanistan",
    phoneCode: "1234",
    flagCode: "AF"
  },
  {
    id: 002,
    name: "New Zealand",
    phoneCode: "64",
    flagCode: "NZ"
  },
];

<div class="two wide field">
  <div class="ui fluid search selection dropdown">
    <input type="hidden" name="country" />
    <i class="dropdown icon"></i>
    <div class="default text">Select Country</div>
    {/* <div class="menu">
            <div class="item" data-value="af">
                <i class="af flag"></i>Afghanistan
            </div>
            <div class="item" data-value="ax">
                <i class="ax flag"></i>Aland Islands
            </div>
            <div class="item" data-value="al">
                <i class="al flag"></i>Albania
            </div>
            <div class="item" data-value="dz">
                <i class="dz flag"></i>Algeria
            </div>
            <div class="item" data-value="as">
                <i class="as flag"></i>American Samoa
            </div>
            <div class="item" data-value="ad">
                <i class="ad flag"></i>Andorra
            </div>
            <div class="item" data-value="ao">
                <i class="ao flag"></i>Angola
            </div>
            <div class="item" data-value="ai">
                <i class="ai flag"></i>Anguilla
            </div>
            <div class="item" data-value="ag">
                <i class="ag flag"></i>Antigua
            </div>
            <div class="item" data-value="ar">
                <i class="ar flag"></i>Argentina
            </div>
            <div class="item" data-value="am">
                <i class="am flag"></i>Armenia
            </div>
            <div class="item" data-value="aw">
                <i class="aw flag"></i>Aruba
            </div>
            <div class="item" data-value="au">
                <i class="au flag"></i>Australia
            </div>
            <div class="item" data-value="at">
                <i class="at flag"></i>Austria
            </div>
            <div class="item" data-value="az">
                <i class="az flag"></i>Azerbaijan
            </div>
            <div class="item" data-value="bs">
                <i class="bs flag"></i>Bahamas
            </div>
            <div class="item" data-value="bh">
                <i class="bh flag"></i>Bahrain
            </div>
            <div class="item" data-value="bd">
                <i class="bd flag"></i>Bangladesh
            </div>
            <div class="item" data-value="bb">
                <i class="bb flag"></i>Barbados
            </div>
            <div class="item" data-value="by">
                <i class="by flag"></i>Belarus
            </div>
            <div class="item" data-value="be">
                <i class="be flag"></i>Belgium
            </div>
            <div class="item" data-value="bz">
                <i class="bz flag"></i>Belize
            </div>
            <div class="item" data-value="bj">
                <i class="bj flag"></i>Benin
            </div>
            <div class="item" data-value="bm">
                <i class="bm flag"></i>Bermuda
            </div>
            <div class="item" data-value="bt">
                <i class="bt flag"></i>Bhutan
            </div>
            <div class="item" data-value="bo">
                <i class="bo flag"></i>Bolivia
            </div>
            <div class="item" data-value="ba">
                <i class="ba flag"></i>Bosnia
            </div>
            <div class="item" data-value="bw">
                <i class="bw flag"></i>Botswana
            </div>
            <div class="item" data-value="bv">
                <i class="bv flag"></i>Bouvet Island
            </div>
            <div class="item" data-value="br">
                <i class="br flag"></i>Brazil
            </div>
            <div class="item" data-value="vg">
                <i class="vg flag"></i>British Virgin Islands
            </div>
            <div class="item" data-value="bn">
                <i class="bn flag"></i>Brunei
            </div>
            <div class="item" data-value="bg">
                <i class="bg flag"></i>Bulgaria
            </div>
            <div class="item" data-value="bf">
                <i class="bf flag"></i>Burkina Faso
            </div>
            <div class="item" data-value="mm">
                <i class="mm flag"></i>Burma
            </div>
            <div class="item" data-value="bi">
                <i class="bi flag"></i>Burundi
            </div>
            <div class="item" data-value="tc">
                <i class="tc flag"></i>Caicos Islands
            </div>
            <div class="item" data-value="kh">
                <i class="kh flag"></i>Cambodia
            </div>
            <div class="item" data-value="cm">
                <i class="cm flag"></i>Cameroon
            </div>
            <div class="item" data-value="ca">
                <i class="ca flag"></i>Canada
            </div>
            <div class="item" data-value="cv">
                <i class="cv flag"></i>Cape Verde
            </div>
            <div class="item" data-value="ky">
                <i class="ky flag"></i>Cayman Islands
            </div>
            <div class="item" data-value="cf">
                <i class="cf flag"></i>Central African Republic
            </div>
            <div class="item" data-value="td">
                <i class="td flag"></i>Chad
            </div>
            <div class="item" data-value="cl">
                <i class="cl flag"></i>Chile
            </div>
            <div class="item" data-value="cn">
                <i class="cn flag"></i>China
            </div>
            <div class="item" data-value="cx">
                <i class="cx flag"></i>Christmas Island
            </div>
            <div class="item" data-value="cc">
                <i class="cc flag"></i>Cocos Islands
            </div>
            <div class="item" data-value="co">
                <i class="co flag"></i>Colombia
            </div>
            <div class="item" data-value="km">
                <i class="km flag"></i>Comoros
            </div>
            <div class="item" data-value="cg">
                <i class="cg flag"></i>Congo Brazzaville
            </div>
            <div class="item" data-value="cd">
                <i class="cd flag"></i>Congo
            </div>
            <div class="item" data-value="ck">
                <i class="ck flag"></i>Cook Islands
            </div>
            <div class="item" data-value="cr">
                <i class="cr flag"></i>Costa Rica
            </div>
            <div class="item" data-value="ci">
                <i class="ci flag"></i>Cote Divoire
            </div>
            <div class="item" data-value="hr">
                <i class="hr flag"></i>Croatia
            </div>
            <div class="item" data-value="cu">
                <i class="cu flag"></i>Cuba
            </div>
            <div class="item" data-value="cy">
                <i class="cy flag"></i>Cyprus
            </div>
            <div class="item" data-value="cz">
                <i class="cz flag"></i>Czech Republic
            </div>
            <div class="item" data-value="dk">
                <i class="dk flag"></i>Denmark
            </div>
            <div class="item" data-value="dj">
                <i class="dj flag"></i>Djibouti
            </div>
            <div class="item" data-value="dm">
                <i class="dm flag"></i>Dominica
            </div>
            <div class="item" data-value="do">
                <i class="do flag"></i>Dominican Republic
            </div>
            <div class="item" data-value="ec">
                <i class="ec flag"></i>Ecuador
            </div>
            <div class="item" data-value="eg">
                <i class="eg flag"></i>Egypt
            </div>
            <div class="item" data-value="sv">
                <i class="sv flag"></i>El Salvador
            </div>
            <div class="item" data-value="gb">
                <i class="gb flag"></i>England
            </div>
            <div class="item" data-value="gq">
                <i class="gq flag"></i>Equatorial Guinea
            </div>
            <div class="item" data-value="er">
                <i class="er flag"></i>Eritrea
            </div>
            <div class="item" data-value="ee">
                <i class="ee flag"></i>Estonia
            </div>
            <div class="item" data-value="et">
                <i class="et flag"></i>Ethiopia
            </div>
            <div class="item" data-value="eu">
                <i class="eu flag"></i>European Union
            </div>
            <div class="item" data-value="fk">
                <i class="fk flag"></i>Falkland Islands
            </div>
            <div class="item" data-value="fo">
                <i class="fo flag"></i>Faroe Islands
            </div>
            <div class="item" data-value="fj">
                <i class="fj flag"></i>Fiji
            </div>
            <div class="item" data-value="fi">
                <i class="fi flag"></i>Finland
            </div>
            <div class="item" data-value="fr">
                <i class="fr flag"></i>France
            </div>
            <div class="item" data-value="gf">
                <i class="gf flag"></i>French Guiana
            </div>
            <div class="item" data-value="pf">
                <i class="pf flag"></i>French Polynesia
            </div>
            <div class="item" data-value="tf">
                <i class="tf flag"></i>French Territories
            </div>
            <div class="item" data-value="ga">
                <i class="ga flag"></i>Gabon
            </div>
            <div class="item" data-value="gm">
                <i class="gm flag"></i>Gambia
            </div>
            <div class="item" data-value="ge">
                <i class="ge flag"></i>Georgia
            </div>
            <div class="item" data-value="de">
                <i class="de flag"></i>Germany
            </div>
            <div class="item" data-value="gh">
                <i class="gh flag"></i>Ghana
            </div>
            <div class="item" data-value="gi">
                <i class="gi flag"></i>Gibraltar
            </div>
            <div class="item" data-value="gr">
                <i class="gr flag"></i>Greece
            </div>
            <div class="item" data-value="gl">
                <i class="gl flag"></i>Greenland
            </div>
            <div class="item" data-value="gd">
                <i class="gd flag"></i>Grenada
            </div>
            <div class="item" data-value="gp">
                <i class="gp flag"></i>Guadeloupe
            </div>
            <div class="item" data-value="gu">
                <i class="gu flag"></i>Guam
            </div>
            <div class="item" data-value="gt">
                <i class="gt flag"></i>Guatemala
            </div>
            <div class="item" data-value="gw">
                <i class="gw flag"></i>Guinea-Bissau
            </div>
            <div class="item" data-value="gn">
                <i class="gn flag"></i>Guinea
            </div>
            <div class="item" data-value="gy">
                <i class="gy flag"></i>Guyana
            </div>
            <div class="item" data-value="ht">
                <i class="ht flag"></i>Haiti
            </div>
            <div class="item" data-value="hm">
                <i class="hm flag"></i>Heard Island
            </div>
            <div class="item" data-value="hn">
                <i class="hn flag"></i>Honduras
            </div>
            <div class="item" data-value="hk">
                <i class="hk flag"></i>Hong Kong
            </div>
            <div class="item" data-value="hu">
                <i class="hu flag"></i>Hungary
            </div>
            <div class="item" data-value="is">
                <i class="is flag"></i>Iceland
            </div>
            <div class="item" data-value="in">
                <i class="in flag"></i>India
            </div>
            <div class="item" data-value="io">
                <i class="io flag"></i>Indian Ocean Territory
            </div>
            <div class="item" data-value="id">
                <i class="id flag"></i>Indonesia
            </div>
            <div class="item" data-value="ir">
                <i class="ir flag"></i>Iran
            </div>
            <div class="item" data-value="iq">
                <i class="iq flag"></i>Iraq
            </div>
            <div class="item" data-value="ie">
                <i class="ie flag"></i>Ireland
            </div>
            <div class="item" data-value="il">
                <i class="il flag"></i>Israel
            </div>
            <div class="item" data-value="it">
                <i class="it flag"></i>Italy
            </div>
            <div class="item" data-value="jm">
                <i class="jm flag"></i>Jamaica
            </div>
            <div class="item" data-value="jp">
                <i class="jp flag"></i>Japan
            </div>
            <div class="item" data-value="jo">
                <i class="jo flag"></i>Jordan
            </div>
            <div class="item" data-value="kz">
                <i class="kz flag"></i>Kazakhstan
            </div>
            <div class="item" data-value="ke">
                <i class="ke flag"></i>Kenya
            </div>
            <div class="item" data-value="ki">
                <i class="ki flag"></i>Kiribati
            </div>
            <div class="item" data-value="kw">
                <i class="kw flag"></i>Kuwait
            </div>
            <div class="item" data-value="kg">
                <i class="kg flag"></i>Kyrgyzstan
            </div>
            <div class="item" data-value="la">
                <i class="la flag"></i>Laos
            </div>
            <div class="item" data-value="lv">
                <i class="lv flag"></i>Latvia
            </div>
            <div class="item" data-value="lb">
                <i class="lb flag"></i>Lebanon
            </div>
            <div class="item" data-value="ls">
                <i class="ls flag"></i>Lesotho
            </div>
            <div class="item" data-value="lr">
                <i class="lr flag"></i>Liberia
            </div>
            <div class="item" data-value="ly">
                <i class="ly flag"></i>Libya
            </div>
            <div class="item" data-value="li">
                <i class="li flag"></i>Liechtenstein
            </div>
            <div class="item" data-value="lt">
                <i class="lt flag"></i>Lithuania
            </div>
            <div class="item" data-value="lu">
                <i class="lu flag"></i>Luxembourg
            </div>
            <div class="item" data-value="mo">
                <i class="mo flag"></i>Macau
            </div>
            <div class="item" data-value="mk">
                <i class="mk flag"></i>Macedonia
            </div>
            <div class="item" data-value="mg">
                <i class="mg flag"></i>Madagascar
            </div>
            <div class="item" data-value="mw">
                <i class="mw flag"></i>Malawi
            </div>
            <div class="item" data-value="my">
                <i class="my flag"></i>Malaysia
            </div>
            <div class="item" data-value="mv">
                <i class="mv flag"></i>Maldives
            </div>
            <div class="item" data-value="ml">
                <i class="ml flag"></i>Mali
            </div>
            <div class="item" data-value="mt">
                <i class="mt flag"></i>Malta
            </div>
            <div class="item" data-value="mh">
                <i class="mh flag"></i>Marshall Islands
            </div>
            <div class="item" data-value="mq">
                <i class="mq flag"></i>Martinique
            </div>
            <div class="item" data-value="mr">
                <i class="mr flag"></i>Mauritania
            </div>
            <div class="item" data-value="mu">
                <i class="mu flag"></i>Mauritius
            </div>
            <div class="item" data-value="yt">
                <i class="yt flag"></i>Mayotte
            </div>
            <div class="item" data-value="mx">
                <i class="mx flag"></i>Mexico
            </div>
            <div class="item" data-value="fm">
                <i class="fm flag"></i>Micronesia
            </div>
            <div class="item" data-value="md">
                <i class="md flag"></i>Moldova
            </div>
            <div class="item" data-value="mc">
                <i class="mc flag"></i>Monaco
            </div>
            <div class="item" data-value="mn">
                <i class="mn flag"></i>Mongolia
            </div>
            <div class="item" data-value="me">
                <i class="me flag"></i>Montenegro
            </div>
            <div class="item" data-value="ms">
                <i class="ms flag"></i>Montserrat
            </div>
            <div class="item" data-value="ma">
                <i class="ma flag"></i>Morocco
            </div>
            <div class="item" data-value="mz">
                <i class="mz flag"></i>Mozambique
            </div>
            <div class="item" data-value="na">
                <i class="na flag"></i>Namibia
            </div>
            <div class="item" data-value="nr">
                <i class="nr flag"></i>Nauru
            </div>
            <div class="item" data-value="np">
                <i class="np flag"></i>Nepal
            </div>
            <div class="item" data-value="an">
                <i class="an flag"></i>Netherlands Antilles
            </div>
            <div class="item" data-value="nl">
                <i class="nl flag"></i>Netherlands
            </div>
            <div class="item" data-value="nc">
                <i class="nc flag"></i>New Caledonia
            </div>
            <div class="item" data-value="pg">
                <i class="pg flag"></i>New Guinea
            </div>
            <div class="item" data-value="nz">
                <i class="nz flag"></i>New Zealand
            </div>
            <div class="item" data-value="ni">
                <i class="ni flag"></i>Nicaragua
            </div>
            <div class="item" data-value="ne">
                <i class="ne flag"></i>Niger
            </div>
            <div class="item" data-value="ng">
                <i class="ng flag"></i>Nigeria
            </div>
            <div class="item" data-value="nu">
                <i class="nu flag"></i>Niue
            </div>
            <div class="item" data-value="nf">
                <i class="nf flag"></i>Norfolk Island
            </div>
            <div class="item" data-value="kp">
                <i class="kp flag"></i>North Korea
            </div>
            <div class="item" data-value="mp">
                <i class="mp flag"></i>Northern Mariana Islands
            </div>
            <div class="item" data-value="no">
                <i class="no flag"></i>Norway
            </div>
            <div class="item" data-value="om">
                <i class="om flag"></i>Oman
            </div>
            <div class="item" data-value="pk">
                <i class="pk flag"></i>Pakistan
            </div>
            <div class="item" data-value="pw">
                <i class="pw flag"></i>Palau
            </div>
            <div class="item" data-value="ps">
                <i class="ps flag"></i>Palestine
            </div>
            <div class="item" data-value="pa">
                <i class="pa flag"></i>Panama
            </div>
            <div class="item" data-value="py">
                <i class="py flag"></i>Paraguay
            </div>
            <div class="item" data-value="pe">
                <i class="pe flag"></i>Peru
            </div>
            <div class="item" data-value="ph">
                <i class="ph flag"></i>Philippines
            </div>
            <div class="item" data-value="pn">
                <i class="pn flag"></i>Pitcairn Islands
            </div>
            <div class="item" data-value="pl">
                <i class="pl flag"></i>Poland
            </div>
            <div class="item" data-value="pt">
                <i class="pt flag"></i>Portugal
            </div>
            <div class="item" data-value="pr">
                <i class="pr flag"></i>Puerto Rico
            </div>
            <div class="item" data-value="qa">
                <i class="qa flag"></i>Qatar
            </div>
            <div class="item" data-value="re">
                <i class="re flag"></i>Reunion
            </div>
            <div class="item" data-value="ro">
                <i class="ro flag"></i>Romania
            </div>
            <div class="item" data-value="ru">
                <i class="ru flag"></i>Russia
            </div>
            <div class="item" data-value="rw">
                <i class="rw flag"></i>Rwanda
            </div>
            <div class="item" data-value="sh">
                <i class="sh flag"></i>Saint Helena
            </div>
            <div class="item" data-value="kn">
                <i class="kn flag"></i>Saint Kitts and Nevis
            </div>
            <div class="item" data-value="lc">
                <i class="lc flag"></i>Saint Lucia
            </div>
            <div class="item" data-value="pm">
                <i class="pm flag"></i>Saint Pierre
            </div>
            <div class="item" data-value="vc">
                <i class="vc flag"></i>Saint Vincent
            </div>
            <div class="item" data-value="ws">
                <i class="ws flag"></i>Samoa
            </div>
            <div class="item" data-value="sm">
                <i class="sm flag"></i>San Marino
            </div>
            <div class="item" data-value="gs">
                <i class="gs flag"></i>Sandwich Islands
            </div>
            <div class="item" data-value="st">
                <i class="st flag"></i>Sao Tome
            </div>
            <div class="item" data-value="sa">
                <i class="sa flag"></i>Saudi Arabia
            </div>
            <div class="item" data-value="sn">
                <i class="sn flag"></i>Senegal
            </div>
            <div class="item" data-value="cs">
                <i class="cs flag"></i>Serbia
            </div>
            <div class="item" data-value="rs">
                <i class="rs flag"></i>Serbia
            </div>
            <div class="item" data-value="sc">
                <i class="sc flag"></i>Seychelles
            </div>
            <div class="item" data-value="sl">
                <i class="sl flag"></i>Sierra Leone
            </div>
            <div class="item" data-value="sg">
                <i class="sg flag"></i>Singapore
            </div>
            <div class="item" data-value="sk">
                <i class="sk flag"></i>Slovakia
            </div>
            <div class="item" data-value="si">
                <i class="si flag"></i>Slovenia
            </div>
            <div class="item" data-value="sb">
                <i class="sb flag"></i>Solomon Islands
            </div>
            <div class="item" data-value="so">
                <i class="so flag"></i>Somalia
            </div>
            <div class="item" data-value="za">
                <i class="za flag"></i>South Africa
            </div>
            <div class="item" data-value="kr">
                <i class="kr flag"></i>South Korea
            </div>
            <div class="item" data-value="es">
                <i class="es flag"></i>Spain
            </div>
            <div class="item" data-value="lk">
                <i class="lk flag"></i>Sri Lanka
            </div>
            <div class="item" data-value="sd">
                <i class="sd flag"></i>Sudan
            </div>
            <div class="item" data-value="sr">
                <i class="sr flag"></i>Suriname
            </div>
            <div class="item" data-value="sj">
                <i class="sj flag"></i>Svalbard
            </div>
            <div class="item" data-value="sz">
                <i class="sz flag"></i>Swaziland
            </div>
            <div class="item" data-value="se">
                <i class="se flag"></i>Sweden
            </div>
            <div class="item" data-value="ch">
                <i class="ch flag"></i>Switzerland
            </div>
            <div class="item" data-value="sy">
                <i class="sy flag"></i>Syria
            </div>
            <div class="item" data-value="tw">
                <i class="tw flag"></i>Taiwan
            </div>
            <div class="item" data-value="tj">
                <i class="tj flag"></i>Tajikistan
            </div>
            <div class="item" data-value="tz">
                <i class="tz flag"></i>Tanzania
            </div>
            <div class="item" data-value="th">
                <i class="th flag"></i>Thailand
            </div>
            <div class="item" data-value="tl">
                <i class="tl flag"></i>Timorleste
            </div>
            <div class="item" data-value="tg">
                <i class="tg flag"></i>Togo
            </div>
            <div class="item" data-value="tk">
                <i class="tk flag"></i>Tokelau
            </div>
            <div class="item" data-value="to">
                <i class="to flag"></i>Tonga
            </div>
            <div class="item" data-value="tt">
                <i class="tt flag"></i>Trinidad
            </div>
            <div class="item" data-value="tn">
                <i class="tn flag"></i>Tunisia
            </div>
            <div class="item" data-value="tr">
                <i class="tr flag"></i>Turkey
            </div>
            <div class="item" data-value="tm">
                <i class="tm flag"></i>Turkmenistan
            </div>
            <div class="item" data-value="tv">
                <i class="tv flag"></i>Tuvalu
            </div>
            <div class="item" data-value="ug">
                <i class="ug flag"></i>Uganda
            </div>
            <div class="item" data-value="ua">
                <i class="ua flag"></i>Ukraine
            </div>
            <div class="item" data-value="ae">
                <i class="ae flag"></i>United Arab Emirates
            </div>
            <div class="item" data-value="us">
                <i class="us flag"></i>United States
            </div>
            <div class="item" data-value="uy">
                <i class="uy flag"></i>Uruguay
            </div>
            <div class="item" data-value="um">
                <i class="um flag"></i>Us Minor Islands
            </div>
            <div class="item" data-value="vi">
                <i class="vi flag"></i>Us Virgin Islands
            </div>
            <div class="item" data-value="uz">
                <i class="uz flag"></i>Uzbekistan
            </div>
            <div class="item" data-value="vu">
                <i class="vu flag"></i>Vanuatu
            </div>
            <div class="item" data-value="va">
                <i class="va flag"></i>Vatican City
            </div>
            <div class="item" data-value="ve">
                <i class="ve flag"></i>Venezuela
            </div>
            <div class="item" data-value="vn">
                <i class="vn flag"></i>Vietnam
            </div>
            <div class="item" data-value="wf">
                <i class="wf flag"></i>Wallis and Futuna
            </div>
            <div class="item" data-value="eh">
                <i class="eh flag"></i>Western Sahara
            </div>
            <div class="item" data-value="ye">
                <i class="ye flag"></i>Yemen
            </div>
            <div class="item" data-value="zm">
                <i class="zm flag"></i>Zambia
            </div>
            <div class="item" data-value="zw">
                <i class="zw flag"></i>Zimbabwe
            </div>
        </div> */}
  </div>
</div>

//  need to add country codes to the object above
{/* <select name="countryCode" id="">
  <option value="">Country Code</option>
  <option data-countryCode="DZ" value="213">
    Algeria (+213)
  </option>
  <option data-countryCode="AD" value="376">
    Andorra (+376)
  </option>
  <option data-countryCode="AO" value="244">Angola (+244)</option>
  <option data-countryCode="AI" value="1264">
    Anguilla (+1264)
  </option>
  <option data-countryCode="AG" value="1268">
    Antigua &amp; Barbuda (+1268)
  </option>
  <option data-countryCode="AR" value="54">
    Argentina (+54)
  </option>
  <option data-countryCode="AM" value="374">
    Armenia (+374)
  </option>
  <option data-countryCode="AW" value="297">Aruba (+297)</option>
  <option data-countryCode="AU" value="61">
    Australia (+61)
  </option>
  <option data-countryCode="AT" value="43">Austria (+43)</option>
  <option data-countryCode="AZ" value="994">
    Azerbaijan (+994)
  </option>
  <option data-countryCode="BS" value="1242">
    Bahamas (+1242)
  </option>
  <option data-countryCode="BH" value="973">
    Bahrain (+973)
  </option>
  <option data-countryCode="BD" value="880">
    Bangladesh (+880)
  </option>
  <option data-countryCode="BB" value="1246">
    Barbados (+1246)
  </option>
  <option data-countryCode="BY" value="375">
    Belarus (+375)
  </option>
  <option data-countryCode="BE" value="32">Belgium (+32)</option>
  <option data-countryCode="BZ" value="501">Belize (+501)</option>
  <option data-countryCode="BJ" value="229">Benin (+229)</option>
  <option data-countryCode="BM" value="1441">
    Bermuda (+1441)
  </option>
  <option data-countryCode="BT" value="975">Bhutan (+975)</option>
  <option data-countryCode="BO" value="591">
    Bolivia (+591)
  </option>
  <option data-countryCode="BA" value="387">
    Bosnia Herzegovina (+387)
  </option>
  <option data-countryCode="BW" value="267">
    Botswana (+267)
  </option>
  <option data-countryCode="BR" value="55">Brazil (+55)</option>
  <option data-countryCode="BN" value="673">Brunei (+673)</option>
  <option data-countryCode="BG" value="359">
    Bulgaria (+359)
  </option>
  <option data-countryCode="BF" value="226">
    Burkina Faso (+226)
  </option>
  <option data-countryCode="BI" value="257">
    Burundi (+257)
  </option>
  <option data-countryCode="KH" value="855">
    Cambodia (+855)
  </option>
  <option data-countryCode="CM" value="237">
    Cameroon (+237)
  </option>
  <option data-countryCode="CA" value="1">Canada (+1)</option>
  <option data-countryCode="CV" value="238">
    Cape Verde Islands (+238)
  </option>
  <option data-countryCode="KY" value="1345">
    Cayman Islands (+1345)
  </option>
  <option data-countryCode="CF" value="236">
    Central African Republic (+236)
  </option>
  <option data-countryCode="CL" value="56">Chile (+56)</option>
  <option data-countryCode="CN" value="86">China (+86)</option>
  <option data-countryCode="CO" value="57">Colombia (+57)</option>
  <option data-countryCode="KM" value="269">
    Comoros (+269)
  </option>
  <option data-countryCode="CG" value="242">Congo (+242)</option>
  <option data-countryCode="CK" value="682">
    Cook Islands (+682)
  </option>
  <option data-countryCode="CR" value="506">
    Costa Rica (+506)
  </option>
  <option data-countryCode="HR" value="385">
    Croatia (+385)
  </option>
  <option data-countryCode="CU" value="53">Cuba (+53)</option>
  <option data-countryCode="CY" value="90392">
    Cyprus North (+90392)
  </option>
  <option data-countryCode="CY" value="357">
    Cyprus South (+357)
  </option>
  <option data-countryCode="CZ" value="42">
    Czech Republic (+42)
  </option>
  <option data-countryCode="DK" value="45">Denmark (+45)</option>
  <option data-countryCode="DJ" value="253">
    Djibouti (+253)
  </option>
  <option data-countryCode="DM" value="1809">
    Dominica (+1809)
  </option>
  <option data-countryCode="DO" value="1809">
    Dominican Republic (+1809)
  </option>
  <option data-countryCode="EC" value="593">
    Ecuador (+593)
  </option>
  <option data-countryCode="EG" value="20">Egypt (+20)</option>
  <option data-countryCode="SV" value="503">
    El Salvador (+503)
  </option>
  <option data-countryCode="GQ" value="240">
    Equatorial Guinea (+240)
  </option>
  <option data-countryCode="ER" value="291">
    Eritrea (+291)
  </option>
  <option data-countryCode="EE" value="372">
    Estonia (+372)
  </option>
  <option data-countryCode="ET" value="251">
    Ethiopia (+251)
  </option>
  <option data-countryCode="FK" value="500">
    Falkland Islands (+500)
  </option>
  <option data-countryCode="FO" value="298">
    Faroe Islands (+298)
  </option>
  <option data-countryCode="FJ" value="679">Fiji (+679)</option>
  <option data-countryCode="FI" value="358">
    Finland (+358)
  </option>
  <option data-countryCode="FR" value="33">France (+33)</option>
  <option data-countryCode="GF" value="594">
    French Guiana (+594)
  </option>
  <option data-countryCode="PF" value="689">
    French Polynesia (+689)
  </option>
  <option data-countryCode="GA" value="241">Gabon (+241)</option>
  <option data-countryCode="GM" value="220">Gambia (+220)</option>
  <option data-countryCode="GE" value="7880">
    Georgia (+7880)
  </option>
  <option data-countryCode="DE" value="49">Germany (+49)</option>
  <option data-countryCode="GH" value="233">Ghana (+233)</option>
  <option data-countryCode="GI" value="350">
    Gibraltar (+350)
  </option>
  <option data-countryCode="GR" value="30">Greece (+30)</option>
  <option data-countryCode="GL" value="299">
    Greenland (+299)
  </option>
  <option data-countryCode="GD" value="1473">
    Grenada (+1473)
  </option>
  <option data-countryCode="GP" value="590">
    Guadeloupe (+590)
  </option>
  <option data-countryCode="GU" value="671">Guam (+671)</option>
  <option data-countryCode="GT" value="502">
    Guatemala (+502)
  </option>
  <option data-countryCode="GN" value="224">Guinea (+224)</option>
  <option data-countryCode="GW" value="245">
    Guinea - Bissau (+245)
  </option>
  <option data-countryCode="GY" value="592">Guyana (+592)</option>
  <option data-countryCode="HT" value="509">Haiti (+509)</option>
  <option data-countryCode="HN" value="504">
    Honduras (+504)
  </option>
  <option data-countryCode="HK" value="852">
    Hong Kong (+852)
  </option>
  <option data-countryCode="HU" value="36">Hungary (+36)</option>
  <option data-countryCode="IS" value="354">
    Iceland (+354)
  </option>
  <option data-countryCode="IN" value="91">India (+91)</option>
  <option data-countryCode="ID" value="62">
    Indonesia (+62)
  </option>
  <option data-countryCode="IR" value="98">Iran (+98)</option>
  <option data-countryCode="IQ" value="964">Iraq (+964)</option>
  <option data-countryCode="IE" value="353">
    Ireland (+353)
  </option>
  <option data-countryCode="IL" value="972">Israel (+972)</option>
  <option data-countryCode="IT" value="39">Italy (+39)</option>
  <option data-countryCode="JM" value="1876">
    Jamaica (+1876)
  </option>
  <option data-countryCode="JP" value="81">Japan (+81)</option>
  <option data-countryCode="JO" value="962">Jordan (+962)</option>
  <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
  <option data-countryCode="KE" value="254">Kenya (+254)</option>
  <option data-countryCode="KI" value="686">
    Kiribati (+686)
  </option>
  <option data-countryCode="KP" value="850">
    Korea North (+850)
  </option>
  <option data-countryCode="KR" value="82">
    Korea South (+82)
  </option>
  <option data-countryCode="KW" value="965">Kuwait (+965)</option>
  <option data-countryCode="KG" value="996">
    Kyrgyzstan (+996)
  </option>
  <option data-countryCode="LA" value="856">Laos (+856)</option>
  <option data-countryCode="LV" value="371">Latvia (+371)</option>
  <option data-countryCode="LB" value="961">
    Lebanon (+961)
  </option>
  <option data-countryCode="LS" value="266">
    Lesotho (+266)
  </option>
  <option data-countryCode="LR" value="231">
    Liberia (+231)
  </option>
  <option data-countryCode="LY" value="218">Libya (+218)</option>
  <option data-countryCode="LI" value="417">
    Liechtenstein (+417)
  </option>
  <option data-countryCode="LT" value="370">
    Lithuania (+370)
  </option>
  <option data-countryCode="LU" value="352">
    Luxembourg (+352)
  </option>
  <option data-countryCode="MO" value="853">Macao (+853)</option>
  <option data-countryCode="MK" value="389">
    Macedonia (+389)
  </option>
  <option data-countryCode="MG" value="261">
    Madagascar (+261)
  </option>
  <option data-countryCode="MW" value="265">Malawi (+265)</option>
  <option data-countryCode="MY" value="60">Malaysia (+60)</option>
  <option data-countryCode="MV" value="960">
    Maldives (+960)
  </option>
  <option data-countryCode="ML" value="223">Mali (+223)</option>
  <option data-countryCode="MT" value="356">Malta (+356)</option>
  <option data-countryCode="MH" value="692">
    Marshall Islands (+692)
  </option>
  <option data-countryCode="MQ" value="596">
    Martinique (+596)
  </option>
  <option data-countryCode="MR" value="222">
    Mauritania (+222)
  </option>
  <option data-countryCode="YT" value="269">
    Mayotte (+269)
  </option>
  <option data-countryCode="MX" value="52">Mexico (+52)</option>
  <option data-countryCode="FM" value="691">
    Micronesia (+691)
  </option>
  <option data-countryCode="MD" value="373">
    Moldova (+373)
  </option>
  <option data-countryCode="MC" value="377">Monaco (+377)</option>
  <option data-countryCode="MN" value="976">
    Mongolia (+976)
  </option>
  <option data-countryCode="MS" value="1664">
    Montserrat (+1664)
  </option>
  <option data-countryCode="MA" value="212">
    Morocco (+212)
  </option>
  <option data-countryCode="MZ" value="258">
    Mozambique (+258)
  </option>
  <option data-countryCode="MN" value="95">Myanmar (+95)</option>
  <option data-countryCode="NA" value="264">
    Namibia (+264)
  </option>
  <option data-countryCode="NR" value="674">Nauru (+674)</option>
  <option data-countryCode="NP" value="977">Nepal (+977)</option>
  <option data-countryCode="NL" value="31">
    Netherlands (+31)
  </option>
  <option data-countryCode="NC" value="687">
    New Caledonia (+687)
  </option>
  <option data-countryCode="NZ" value="64">
    New Zealand (+64)
  </option>
  <option data-countryCode="NI" value="505">
    Nicaragua (+505)
  </option>
  <option data-countryCode="NE" value="227">Niger (+227)</option>
  <option data-countryCode="NG" value="234">
    Nigeria (+234)
  </option>
  <option data-countryCode="NU" value="683">Niue (+683)</option>
  <option data-countryCode="NF" value="672">
    Norfolk Islands (+672)
  </option>
  <option data-countryCode="NP" value="670">
    Northern Marianas (+670)
  </option>
  <option data-countryCode="NO" value="47">Norway (+47)</option>
  <option data-countryCode="OM" value="968">Oman (+968)</option>
  <option data-countryCode="PW" value="680">Palau (+680)</option>
  <option data-countryCode="PA" value="507">Panama (+507)</option>
  <option data-countryCode="PG" value="675">
    Papua New Guinea (+675)
  </option>
  <option data-countryCode="PY" value="595">
    Paraguay (+595)
  </option>
  <option data-countryCode="PE" value="51">Peru (+51)</option>
  <option data-countryCode="PH" value="63">
    Philippines (+63)
  </option>
  <option data-countryCode="PL" value="48">Poland (+48)</option>
  <option data-countryCode="PT" value="351">
    Portugal (+351)
  </option>
  <option data-countryCode="PR" value="1787">
    Puerto Rico (+1787)
  </option>
  <option data-countryCode="QA" value="974">Qatar (+974)</option>
  <option data-countryCode="RE" value="262">
    Reunion (+262)
  </option>
  <option data-countryCode="RO" value="40">Romania (+40)</option>
  <option data-countryCode="RU" value="7">Russia (+7)</option>
  <option data-countryCode="RW" value="250">Rwanda (+250)</option>
  <option data-countryCode="SM" value="378">
    San Marino (+378)
  </option>
  <option data-countryCode="ST" value="239">
    Sao Tome &amp; Principe (+239)
  </option>
  <option data-countryCode="SA" value="966">
    Saudi Arabia (+966)
  </option>
  <option data-countryCode="SN" value="221">
    Senegal (+221)
  </option>
  <option data-countryCode="CS" value="381">Serbia (+381)</option>
  <option data-countryCode="SC" value="248">
    Seychelles (+248)
  </option>
  <option data-countryCode="SL" value="232">
    Sierra Leone (+232)
  </option>
  <option data-countryCode="SG" value="65">
    Singapore (+65)
  </option>
  <option data-countryCode="SK" value="421">
    Slovak Republic (+421)
  </option>
  <option data-countryCode="SI" value="386">
    Slovenia (+386)
  </option>
  <option data-countryCode="SB" value="677">
    Solomon Islands (+677)
  </option>
  <option data-countryCode="SO" value="252">
    Somalia (+252)
  </option>
  <option data-countryCode="ZA" value="27">
    South Africa (+27)
  </option>
  <option data-countryCode="ES" value="34">Spain (+34)</option>
  <option data-countryCode="LK" value="94">
    Sri Lanka (+94)
  </option>
  <option data-countryCode="SH" value="290">
    St. Helena (+290)
  </option>
  <option data-countryCode="KN" value="1869">
    St. Kitts (+1869)
  </option>
  <option data-countryCode="SC" value="1758">
    St. Lucia (+1758)
  </option>
  <option data-countryCode="SD" value="249">Sudan (+249)</option>
  <option data-countryCode="SR" value="597">
    Suriname (+597)
  </option>
  <option data-countryCode="SZ" value="268">
    Swaziland (+268)
  </option>
  <option data-countryCode="SE" value="46">Sweden (+46)</option>
  <option data-countryCode="CH" value="41">
    Switzerland (+41)
  </option>
  <option data-countryCode="SI" value="963">Syria (+963)</option>
  <option data-countryCode="TW" value="886">Taiwan (+886)</option>
  <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
  <option data-countryCode="TH" value="66">Thailand (+66)</option>
  <option data-countryCode="TG" value="228">Togo (+228)</option>
  <option data-countryCode="TO" value="676">Tonga (+676)</option>
  <option data-countryCode="TT" value="1868">
    Trinidad &amp; Tobago (+1868)
  </option>
  <option data-countryCode="TN" value="216">
    Tunisia (+216)
  </option>
  <option data-countryCode="TR" value="90">Turkey (+90)</option>
  <option data-countryCode="TM" value="7">
    Turkmenistan (+7)
  </option>
  <option data-countryCode="TM" value="993">
    Turkmenistan (+993)
  </option>
  <option data-countryCode="TC" value="1649">
    Turks &amp; Caicos Islands (+1649)
  </option>
  <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
  <option data-countryCode="UG" value="256">Uganda (+256)</option>
  <option data-countryCode="GB" value="44">UK (+44)</option>
  <option data-countryCode="UA" value="380">
    Ukraine (+380)
  </option>
  <option data-countryCode="AE" value="971">
    United Arab Emirates (+971)
  </option>
  <option data-countryCode="UY" value="598">
    Uruguay (+598)
  </option>
  <option data-countryCode="US" value="1">USA (+1)</option>
  <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
  <option data-countryCode="VU" value="678">
    Vanuatu (+678)
  </option>
  <option data-countryCode="VA" value="379">
    Vatican City (+379)
  </option>
  <option data-countryCode="VE" value="58">
    Venezuela (+58)
  </option>
  <option data-countryCode="VN" value="84">Vietnam (+84)</option>
  <option data-countryCode="VG" value="84">
    Virgin Islands - British (+1284)
  </option>
  <option data-countryCode="VI" value="84">
    Virgin Islands - US (+1340)
  </option>
  <option data-countryCode="WF" value="681">
    Wallis &amp; Futuna (+681)
  </option>
  <option data-countryCode="YE" value="969">
    Yemen (North)(+969)
  </option>
  <option data-countryCode="YE" value="967">
    Yemen (South)(+967)
  </option>
  <option data-countryCode="ZM" value="260">Zambia (+260)</option>
  <option data-countryCode="ZW" value="263">
    Zimbabwe (+263)
  </option>
</select> */}