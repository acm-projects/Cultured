//https://github.com/acmutd/web-dev-workshop
import React from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//import components
import Navbar from "./components/Navbar"
import frontPage from "./pages/Frontpage"
import CountryPage from "./pages/Countrypage"
import countryTrash from "./pages/countryTrash"

import './addedClasses.css';

/*
const {MongoClient} = require('mongodb');
async function main(){
    const uri = "<database>";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        
        console.log("before obtaining result");
        var result = await client.db("Cultured").collection("Counties").findOne({ name: "USA"});
        console.log("after obtaining result");
        console.log(result);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

    console.log("after not obtaining 1");

*/


class App extends React.Component {
   /*
    
    constructor(props) {
        super(props);
        this.state = {
            list: null
    }
}
    /*
    displayCountryData = async () => {
      console.log("here 1");
      let response = await fetch('http://localhost:5000/api/all')
      /*.then(body => body.json())
      .then(body => {
       console.log(body);
          var data = body.name;
          this.setState({ list:body})
      });
       console.log("here 2");*/
    //console.log(response);
    /*this.setState ({
      countryData: {name: body.name}
    })
    console.log(this.state.countryData.name);
    console.log(body); 
    if (response.status !== 200) throw Error(body.message);*/
   /* };



    componentDidMount() {   
          this.displayCountryData().catch(err => console.log(err))
      };
    */

    render() {
        
        //main();
        
        /*
        // assuming data is like [{path:'/', name:'Home'}, {path: '/page1', name: 'Page 1'}, ...] 
        

            <Route path="/Country" exact component={countryPage} />

        <Route component={App}>
          {data.map((obj, i) => { <Route name={obj.name} path={obj.path} component={Page}/> }
        </Route>
        */

  return (
      
      
      <div className="App">
      
            
    <div className="bg-color align-center full-height">
      {/*renders navbar*/}
      ReactDOM.render(<Navbar/>, document.getElementById('root'));
    
    <div className="">
      
    {/*routing information*/}
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={frontPage} />
            <Route path="/Country" exact component={CountryPage} />
            
            //brazil
            <Route path="/Brazil" exact render={() => <CountryPage title={"Brazil"} capital={"Brasília"} foodTag={"latin_american"} area={"8,515,767"} currency={"Real"} language={"Portuguese"} religion={"Christianity"}
        
            clothes={"Learn about Samba Costumes"} clothesUrl={"https://www.youtube.com/embed/vRnIWyEmIvM"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/MsksC_3Jr4M"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/rbkPcc1-SH4"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/400px-Flag_of_Brazil.svg.png"} />} />
        
            //canada
            <Route path="/Canada" exact render={() => <CountryPage title={"Canada"} capital={"Ottawa"} foodTag={"american"} area={"9,984,670"} currency={"Canadian Dollar"} language={"English, French"} religion={"CHristianity"}
        
            clothes={"Learn about Winter Clothing"} clothesUrl={"https://www.youtube.com/embed/kfPjDACrVyU"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/fuEGV4Pju5M"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/vDYXbUrcT7k"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png"} />} />
        
            //japan
            <Route path="/Japan" exact render={() => <CountryPage title={"Japan"} capital={"Tokyo"} foodTag={"chinese"} area={"377,916"} currency={"yen"} language={"Japanese"} religion={"Shinto, Buddhism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/vCRjSLNHr44"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/TXvopa2MNPg"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/PksWHKLmf0o"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/400px-Flag_of_Japan.svg.png"} />} />
        
            //mexico
            <Route path="/Mexico" exact render={() => <CountryPage title={"Mexico"} capital={"Mexico City"} foodTag={"mexican"} area={"1,972,550"} currency={"Peso"} language={"Spanish"} religion={"Christianity (Roman Catholicism)"}
        
            clothes={"Learn about Mestizo Dresses"} clothesUrl={"https://www.youtube.com/embed/SspJaxM-TbE"}
        
            music={"Learn about types of Mexican Music"} musicUrl={"https://www.youtube.com/embed/o8DXItxL4Qo"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/MXmo1yf6or4"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png"} />} />
        
            //nigeria
            <Route path="/Nigeria" exact render={() => <CountryPage title={"Nigeria"} capital={"Abuja"} foodTag={"mediterranean"} area={"923,769"} currency={"Naira"} language={"Yoruba, Hausa, Igbo"} religion={"Islam, Christianity"}
            //for unknown reasons recipe API wont call african food, but only from react code
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/pAioOlHmIvk"}
        
            music={"Explore some traditional music"} musicUrl={"https://www.youtube.com/embed/0O7_-_iA1cc"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/-dwzFtDQQqM"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png"} />} />
        
            //romania
            <Route path="/Romania" exact render={() => <CountryPage title={"Romania"} capital={"Bucharest"} foodTag={"eastern_european"} area={"238,397"} currency={"Romanian Leu"} language={"Romanian"} religion={"Romanian Orthodoxy"}
        
            clothes={"Learn about traditional Romanian Blouses"} clothesUrl={"https://www.youtube.com/embed/try51F0u04o"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/va5qp3w3YnI"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/zBBB6QgfydQ"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png"} />} />
        
            //uganda
            <Route path="/Uganda" exact render={() => <CountryPage title={"Uganda"} capital={"Kampala"} foodTag={"mediterranean"} area={"241,038"} currency={"Ugandan Shilling"} language={"English, Swahili"} religion={"Christianity, Islam"}
        
            clothes={"Learn about the Gomesi"} clothesUrl={"https://www.youtube.com/embed/SJucZbxmcMk"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/9DQRrYQw3SE"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/3QXKug2HWcM"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1280px-Flag_of_Uganda.svg.png"} />} />
        
            //usa
            <Route path="/United-States-of-America" exact render={() => <CountryPage title={"United States of America"} capital={"Washington D.C."} foodTag={"american"} area={"9,833,520"} currency={"United States Dollar"} language={"English"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/h_A3HmegYJ0"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/Lvz6dcq80oU"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/tLTCXNqjiE8"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"} />} />
        
            //China
            <Route path="/China" exact render={() => <CountryPage title={"China"} capital={"Beijing"} foodTag={"chinese"} area={"9,706,961"} currency={"Renminbi"} language={"Mandarin, Cantonese"} religion={"Buddhism, Taoism, Islam, Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/wiWEBzZofjo"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/9M4gca_uLB4"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/NBVuHhCPFxE"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"} />} />        
        
        
            //South Korea
            <Route path="/South-Korea" exact render={() => <CountryPage title={"South Korea"} capital={"Seoul"} foodTag={"korean"} area={"100,210"} currency={"South Korean Won"} language={"Korean"} religion={"Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/xY2Gm2EdhsU"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/xRTxf6FiVEI"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/Qtan8kA8dOs"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png"} />} />  
        
            //Vietnam
            <Route path="/Vietnam" exact render={() => <CountryPage title={"Vietnam"} capital={"Hanoi"} foodTag={"vietnamese"} area={"331,212"} currency={"Vietnamese Dong"} language={"Vietnamese"} religion={"Atheist, Buddhism, Catholicism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/EUcmb3NHOlM"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/BieMdOAZjsI"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/wPrH3WUZEVg"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"} />} /> 
        
        
            //Philippines
            <Route path="/Philippines" exact render={() => <CountryPage title={"Philippines"} capital={"Manila"} foodTag={"vietnamese"} area={"342,353"} currency={"Philippine Peso"} language={"Tagalog, English"} religion={"Catholic Christianity, Protestand Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/4pXdvVQQ1pQ"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/SZI8Q3ZXeek"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/mZ_9-mwC1ww"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/800px-Flag_of_the_Philippines.svg.png"} />} />  
        
        
            //India
            <Route path="/India" exact render={() => <CountryPage title={"India"} capital={"New Delhi"} foodTag={"indian"} area={"3,287,590"} currency={"Indian Rupee"} language={"Hindi, Bengali, Marathi"} religion={"Hinduism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/ckng1U7-fUk"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/jM9b2Qo5qwM"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/lK3oqU2WNY0"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"} />} />  
        
        
            //Indonesia
            <Route path="/Indonesia" exact render={() => <CountryPage title={"Indonesia"} capital={"Jakarta"} foodTag={"korean"} area={"1,904,569"} currency={"Indonesian Rupiah"} language={"Indonesian"} religion={"Muslim"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/6ev16pDe_hc"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/UEWCCSuHsuQ"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/XrdVOE-WR9o"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png"} />} />  
        
        
            //Thailand
            <Route path="/Thailand" exact render={() => <CountryPage title={"Thailand"} capital={"Bangkok"} foodTag={"korean"} area={"513,120"} currency={"Thai Bhat"} language={"Thai"} religion={"Buddhism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/TeGG6Z6N16M"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/SXXK4P2Ogs0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/DYwG1ap7Gic"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/800px-Flag_of_Thailand.svg.png"} />} />  
        
        
            //Malaysia
            <Route path="/Malaysia" exact render={() => <CountryPage title={"Malaysia"} capital={"Kuala Lumpur"} foodTag={"indian"} area={"330,803"} currency={"Malaysian ringgit"} language={"Malay"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/8HUfguoyvYc"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/lj2Ehv21VGQ"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/JHQNLN_tK1k"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/800px-Flag_of_Singapore.svg.png"} />} />  
        
        
            //Chile
            <Route path="/Chile" exact render={() => <CountryPage title={"Chile"} capital={"Santiago"} foodTag={"spanish"} area={"756,096.30"} currency={"Chilean Peso"} language={"Spanish"} religion={"Christianity, Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/2LgAbnsXaNQ"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/3g22qRZpNt0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/nHLRRo-zQUI"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"} />} />  
        
            //Egypt
            <Route path="/Egypt" exact render={() => <CountryPage title={"Egypt"} capital={"Cairo"} foodTag={"mediterranean"} area={"1,010,408"} currency={"Egyptian Pound "} language={"Egyptian Arabic"} religion={"Sunni Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/foAtVsElRT0"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/FAPfjrVb650"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/mghTfA2Zfa0"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1200px-Flag_of_Egypt.svg.png"} />} />  
        
            //Czech Republic
            <Route path="/Czech-Republic" exact render={() => <CountryPage title={"Czech Republic"} capital={"Prague"} foodTag={"european"} area={"78,866"} currency={"Czech koruna"} language={"Czech"} religion={"Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/5xV8FYgi3pk"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/QmRSIXmXB3k"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/OkyWd9rFhg8"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1200px-Flag_of_the_Czech_Republic.svg.png"} />} />  
        
            //Finland
            <Route path="/Finland" exact render={() => <CountryPage title={"Finland"} capital={"Helsinki"} foodTag={"european"} area={"338,455"} currency={"Euro "} language={"Finnish, Swedish"} religion={"Evangelical Lutheran Church"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/dh8cVMQCDLw"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/uMszu_VgMfY"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/ZXVU3Lbgt9Y"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png"} />} />  
        
            //Kenya
            <Route path="/Kenya" exact render={() => <CountryPage title={"Kenya"} capital={"Nairobi"} foodTag={"mediterranean"} area={"580,367"} currency={"Kenyan shilling"} language={"English, Swahili"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/enKp1Bp3CzA"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/anli6AYKGnk"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/krw3FT1vLA8"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png"} />} />  
            
            //New Zealand
            <Route path="/New-Zealand" exact render={() => <CountryPage title={"New Zealand"} capital={"Wellington"} foodTag={"european"} area={"268,021"} currency={"New Zealand dollar"} language={"English, Māori"} religion={"Non-Religious, Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/JaBpdH0o8aY"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/kr5Znx4cxKQ"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/yqnz2cQiz68"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1200px-Flag_of_New_Zealand.svg.png"} />} />  
        
            //United Kingdom
            <Route path="/United-Kingdom" exact render={() => <CountryPage title={"United Kingdom"} capital={"London"} foodTag={"european"} area={"242,495"} currency={"Pound sterling"} language={"English"} religion={"Christianity, Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/8XOtuQASPeo"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/h2nJGv8N7O8"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/eghVORquCQI"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"} />} />  
        
            //Belize
            <Route path="/Belize" exact render={() => <CountryPage title={"Belize"} capital={"Belmopan"} foodTag={"mexican"} area={"22,966"} currency={"Belize dollar"} language={"English, Belizean Creole"} religion={"Christianity, Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/8q2meFaZrZs"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/aEI6y5I4TiE"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/RVi9wfZe3XU"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/1200px-Flag_of_Belize.svg.png"} />} />  
        
        
            //Italy
            <Route path="/Italy" exact render={() => <CountryPage title={"Italy"} capital={"Rome"} foodTag={"italian"} area={"301,340"} currency={"Euro"} language={"Italian"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/DEbZrFVG-zo"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/aiENvviVSO4"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/T_f_U7XEhcc"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png"} />} />  
        
            //Greece
            <Route path="/Greece" exact render={() => <CountryPage title={"Greece"} capital={"Athens"} foodTag={"mediterranean"} area={"131,957"} currency={"Euro"} language={"Greek"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/mWNoVial-9w"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/kG12C1oX5Eo"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/6bDrYTXQLu8"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/900px-Flag_of_Greece.svg.png"} />} />  
        
        //Spain
            <Route path="/Spain" exact render={() => <CountryPage title={"Spain"} capital={"Madrid"} foodTag={"spanish"} area={"505,990"} currency={"Euro"} language={"Spanish"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/pn21YkAoY7M"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/MNWC4NMWfe8"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/5e9IHzfiipU"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1125px-Flag_of_Spain.svg.png"} />} />  
        
        //Russia
            <Route path="/Russia" exact render={() => <CountryPage title={"Russia"} capital={"Moscow"} foodTag={"eastern-european"} area={"17,098,246"} currency={"Russian ruble"} language={"Russian"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/5nOydHTc3S4"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/PlD84j7DcJU"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/HE6rSljTwdU"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"} />} />  
        
        //Argentina
            <Route path="/Argentina" exact render={() => <CountryPage title={"Argentina"} capital={"Buenos Aires"} foodTag={"spanish"} area={"2,780,400"} currency={"Peso"} language={"Spanish"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/duGe_WFR5EE"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/tIyc1A5F1DY"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/qia91ykg3g4"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"} />} />  
        
                    //Kazakhstan
            <Route path="/Kazakhstan" exact render={() => <CountryPage title={"Kazakhstan"} capital={"Nur-Sultan"} foodTag={"eastern-european"} area={"2,724,900"} currency={"Tenge"} language={"Zazakh, Russian"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/leiDah9P9Uk"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/7_QpkcqjZD0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/2lTmvHk0mMc"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1200px-Flag_of_Kazakhstan.svg.png"} />} />  
        
            //Algeria
            <Route path="/Algeria" exact render={() => <CountryPage title={"Algeria"} capital={"Algiers"} foodTag={"mediterranean"} area={"2,381,741"} currency={"Dinar"} language={"Arabic, Berber"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/cA3rBSdc574"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/RHMzwIN4zN0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/c9yJVF4zzYU"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1200px-Flag_of_Algeria.svg.png"} />} />  
        
        //Greenland
            <Route path="/Greenland" exact render={() => <CountryPage title={"Greenland"} capital={"Nuuk"} foodTag={"european"} area={"2,166,086"} currency={"Danish krone"} language={"Greenlandic, English, Danish"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/5zsa_vp8vb8"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/Gp-fckkHG7M"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/RYMEoFOZavs"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/1200px-Flag_of_Greenland.svg.png"} />} />  
        
        //Saudi Arabia
            <Route path="/Saudi-Arabia" exact render={() => <CountryPage title={"Saudi Arabia"} capital={"Riyadh"} foodTag={"mediterranean"} area={"2,149,690"} currency={"Saudi Riyal"} language={"Arabic"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/ber_XhUQQdc"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/6kKWtiNowB0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/PvVEbJoDago"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png"} />} />  
        
        //Sudan
            <Route path="/Sudan" exact render={() => <CountryPage title={"Sudan"} capital={"Khartoum"} foodTag={"mediterranean"} area={"1,886,068"} currency={"Sudanese pound"} language={"Arabic, English"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/be-d-n2T114"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/ND4Jo2Z0gEs"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/X7To9avIQQQ"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/1200px-Flag_of_Sudan.svg.png"} />} />  
        
                    //Libya
            <Route path="/Libya" exact render={() => <CountryPage title={"Libya"} capital={"Tripoli"} foodTag={"mediterranean"} area={"1,759,541"} currency={"Libyan dinar"} language={"Arabic"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/jWVlgXFB-_g"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/bpYFxLVUbsA"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/TBEfVYBohzc"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/1200px-Flag_of_Libya.svg.png"} />} />  
        
            //Iran
            <Route path="/Iran" exact render={() => <CountryPage title={"Iran"} capital={"Tehran"} foodTag={"mediterranean"} area={"1,648,195"} currency={"Rial"} language={"Persian"} religion={"Islam"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/jvR1JgOipWg"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/RKn_D6FNUL0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/NWTLzKYKaQI"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/945px-Flag_of_Iran.svg.png"} />} />  
        
        //Mongolia
            <Route path="/Mongolia" exact render={() => <CountryPage title={"Mongolia"} capital={"Ulaanbaatar"} foodTag={"chinese"} area={"1,566,000"} currency={"Togrog"} language={"Mongolian"} religion={"Buddhismn, Non-Religious"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/z4Y4-5iKnyA"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/v4xZUr0BEfE"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/Q_ME77BeKGE"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/1200px-Flag_of_Mongolia.svg.png"} />} />  
        
        //Peru
            <Route path="/Peru" exact render={() => <CountryPage title={"Peru"} capital={"Lima"} foodTag={"latin-american"} area={"1,285,216"} currency={"Sol"} language={"Spanish"} religion={"Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/duGe_WFR5EE"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/M_gSydN_BYM"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/xCoUkpZUnc4"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1200px-Flag_of_Peru.svg.png"} />} />  
        
        //Chad
            <Route path="/Chad" exact render={() => <CountryPage title={"Chad"} capital={"N'Djamena"} foodTag={"mediterranean"} area={"1,284,000"} currency={"Central African CAF franc"} language={"French, Arabic"} religion={"Islam, Christianity"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/e2sk6-jA0QI"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/8lyiixToyUU"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/jJZ66hPQLe4"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/1200px-Flag_of_Chad.svg.png"} />} />  
        
                //Country
            <Route path="/" exact render={() => <CountryPage title={""} capital={""} foodTag={""} area={""} currency={""} language={""} religion={""}
        
            clothes={""} clothesUrl={""}
        
            music={""} musicUrl={""}
        
            culture={""} cultureUrl={""}
        
            flagUrl={""} />} />  

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
    </div>
      
    </div>
  );
}
}

export default App;