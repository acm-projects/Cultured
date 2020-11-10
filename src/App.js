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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        
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