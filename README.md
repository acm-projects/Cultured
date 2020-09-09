# Cultured

### Overview
Introducing Cultured, a website where you choose a country, and you are immersed in music/news/entertainment from that country

### Minimum Viable Product
> - Randomizer to randomly “visit” a country
> - Provides fast facts about culture of a country
> - Trending articles from that country’s leading newspapers are translated and available to read
> - The site plays a radio station from that country in the background as you browse
> - Suggests YouTubers/TV Shows/Movies from that country to watch
> - Suggests recipes to cook that country’s most popular dishes
> - Shows top tourist points for the country

### Stretch Goals
> - Quiz to match a country to your personality
> - Choose two countries and get a side-by-side comparison of culture
> - Allow users to create an account and keep track of countries they have virtually “visited” 
> 	- Would require user authentication and building out a user profile page
> 	- Have a passport with stamps that can be shared on social media

## Technologies

### Framework
- React
	- [React.js](https://reactjs.org/) (Frontend)
	- [NodeJS](https://nodejs.org/en/) (Backend)
- GitHub Pages
	- Deploy the web pages
### Database
- [MongoDB](https://www.mongodb.com/)
- [DynamoDB](https://aws.amazon.com/dynamodb/)
- [Firebase](https://firebase.google.com/pricing/?authuser=0)

### APIs
- [YouTube API](https://developers.google.com/youtube/v3)
	- Can query by location - we can use it to find popular YouTube videos posted from a certain country
- [Contextual Web Search API](https://contextualwebsearch.com/)
	- Pricing: Limited free version available
	- Use for pulling news articles from the given country
- [Cloud Translation API](https://cloud.google.com/translate/docs)
	- Use to translate articles into English
- [Spoontacular API](https://spoonacular.com/food-api)
	- Pricing: 150 calls/day for free
	- Allows you to get recipes with different keywords
- [Shoutcast Radio API](https://directory.shoutcast.com/Developer)
	- Pricing: Freemium plan - does require credit card
	- Allows you to access radio stations from around the world
- [Sygic Travel API](https://travel.sygic.com/en/b2b)
	- 1000 calls/month for free (may need to make multiple accounts if this becomes an issue)
	- Returns tourist attractions for a location

### Data Sources
- [CIA World Factbook Data](https://old.datahub.io/dataset/cia-world-factbook)
- [Countries Database](https://www.back4app.com/database/back4app/list-of-all-continents-countries-cities)
	- Name, language spoken, country code, phone code, flag emoji, country capital, and the currencies for all countries
	- Download data for free

### Competition
- [Commisceo Global](https://www.commisceo-global.com/resources/country-guides)
	- Provides good info about culture for 80+ countries
	- Pretty boring UI, not very interactive
- [Culture Trip](https://theculturetrip.com/our-app/)
	- Mobile app, not a web app
	- Aimed more at planning trips than education
- [Hofstede Insights](https://play.google.com/store/apps/details?id=com.hofstedeinsights.culturefactor&hl=en)
	- Mobile app that compares culture of two countries

You can do this! :D

