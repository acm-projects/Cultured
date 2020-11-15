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
    constructor(props) {
        super(props);
        this.state = {
            list: null
    }
}
    
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
    console.log(response);
    /*this.setState ({
      countryData: {name: body.name}
    })
    console.log(this.state.countryData.name);
    console.log(body); 
    if (response.status !== 200) throw Error(body.message);*/
    };



    componentDidMount() {   
          this.displayCountryData().catch(err => console.log(err))
      };
    

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
        
            music={""} musicUrl={"https://www.youtube.com/watch?v=xRTxf6FiVEI"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/Qtan8kA8dOs"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png"} />} />  
        
            //Vietnam
            <Route path="/Vietnam" exact render={() => <CountryPage title={"Vietnam"} capital={"Hanoi"} foodTag={"vietnamese"} area={"331,212"} currency={"Vietnamese Dong"} language={"Vietnamese"} religion={"Atheist, Buddhism, Catholicism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/EUcmb3NHOlM"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/BieMdOAZjsI"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/wPrH3WUZEVg"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"} />} /> 
        
        
            //Philippines
            <Route path="/Philippines" exact render={() => <CountryPage title={"Philippines"} capital={"Manila"} foodTag={"filipino"} area={"342,353"} currency={"Philippine Peso"} language={"Tagalog, English"} religion={"Catholic Christianity, Protestand Christianity"}
        
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
            <Route path="/Indonesia" exact render={() => <CountryPage title={"Indonesia"} capital={"Jakarta"} foodTag={"indonesian"} area={"1,904,569"} currency={"Indonesian Rupiah"} language={"Indonesian"} religion={"Muslim"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/6ev16pDe_hc"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/UEWCCSuHsuQ"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/XrdVOE-WR9o"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/800px-Flag_of_Indonesia.svg.png"} />} />  
        
        
            //Thailand
            <Route path="/Thailand" exact render={() => <CountryPage title={"Thailand"} capital={"Bangkok"} foodTag={"thai"} area={"513,120"} currency={"Thai Bhat"} language={"Thai"} religion={"Buddhism"}
        
            clothes={""} clothesUrl={"https://www.youtube.com/embed/TeGG6Z6N16M"}
        
            music={""} musicUrl={"https://www.youtube.com/embed/SXXK4P2Ogs0"}
        
            culture={""} cultureUrl={"https://www.youtube.com/embed/DYwG1ap7Gic"}
        
            flagUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/800px-Flag_of_Thailand.svg.png"} />} />  
        
        
            //Malaysian
            <Route path="/Malaysian" exact render={() => <CountryPage title={"Malaysian"} capital={"Kuala Lumpur"} foodTag={"malaysian"} area={"330,803"} currency={"Malaysian ringgit"} language={"Malay"} religion={"Islam"}
        
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
        
            //Country
            <Route path="/" exact render={() => <CountryPage title={""} capital={""} foodTag={""} area={""} currency={""} language={""} religion={""}
        
            clothes={""} clothesUrl={""}
        
            music={""} musicUrl={""}
        
            culture={""} cultureUrl={""}
        
            flagUrl={""} />} />  
        
            //Egypt
            <Route path="/Egypt" exact render={() => <CountryPage title={"Egypt"} capital={"Cairo"} foodTag={"african"} area={"1,010,408"} currency={"Egyptian Pound "} language={"Egyptian Arabic"} religion={"Sunni Islam"}
        
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
            <Route path="/Kenya" exact render={() => <CountryPage title={"Kenya"} capital={"Nairobi"} foodTag={"african"} area={"580,367"} currency={"Kenyan shilling"} language={"English, Swahili"} religion={"Christianity"}
        
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