module.exports = {

//LOGIN
	randomEmailForTesting: 'user+test' + Math.random() * 100 + 1 + '@gmail.com',
	randomPhone: Math.floor(Math.random() * (100000000 - 999999999) + 999999999),
	randomDayBirth: Math.floor(Math.random() * (1 - 31) + 31),	
	randomYearBirth: Math.floor(Math.random() * (1916 - 2016) + 2016),
	randomPostalCode: Math.floor(Math.random() * (10000 - 99999) + 99999),

	//URLs:
	baseUrl: "http://beta.sportmaniacs.com/",
	tpvUrl: 'https://sis-t.redsys.es:25443/sis/realizarPago',
	
	inscriptionTest: {
		home: "races/10km-villa-de-pantoja/",
		eventsList: "services/inscription/10km-villa-de-pantoja",
		eventLogin: "services/inscription/10km-villa-de-pantoja/56e709de-26fc-4c75-b1a1-4088bc5ffd28/login",
		eventForm: "services/inscription/10km-villa-de-pantoja/56e709de-26fc-4c75-b1a1-4088bc5ffd28"
	},

	preferentialInscription: {		
		eventsPreferentialInscription: "services/inscription/carrera-inscriptiones-test/367",
		eventPreferentialLogin: "services/inscription/carrera-inscriptiones-test/367/login"		
	},

	fetriInscription: {		
		eventsFetriInscription: "services/inscription/carrera-inscriptiones-test/368",
		eventFetriLogin: "services/inscription/carrera-inscriptiones-test/368/login"		
	},

	rfeaInscription: {		
		eventsRfeaInscription: "services/inscription/carrera-inscriptiones-test/369",
		eventRfeaLogin: "services/inscription/carrera-inscriptiones-test/369/login"		
	},

	supersprintInscription: {		
		eventsSupersprintInscription: "services/inscription/carrera-inscriptiones-test/371",
		eventSupersprintLogin: "services/inscription/carrera-inscriptiones-test/371/login"		
	},	

	sampleRaceRelativeUrl: "races/sportmaniacs-clasificacion",
	infoAtheleteUrl: "races/sportmaniacs-clasificacion/330/results/athlete/12685/results",
	infoClubUrl: "races/sportmaniacs-clasificacion/330/results/clubs/search/AD%20SEVILLA",
	searchAthleteUrl: "races/sportmaniacs-clasificacion/330/results/official/search/yessica",
	classificationRelativeUrl: "races/sportmaniacs-clasificacion/330/results/official",

	//TEXTS
	partialRaceSearch: "sportmaniacs clasi",
	sampleTitleEnglish: "Browse and compete in races around the world",
	sampleRaceName: "sportmaniacs clasificacion",
	classificationSubtitle: "Clasificación oficial evento con clasificacion",
	race: '5ª Carrera "Fiestas de El Niño de Mula". La Carrera de Moncho',

	//ELEMENTS:
	contactForm: "body > footer > div.footer > div > div > nav.col-md-7.text-md-left.text-xs-center.footer-legal > ul > li:nth-child(4) > a",
	english: "body > footer > div.footer > div > div > nav.col-md-5.u-fw-600.text-md-right.text-xs-center > ul > li:nth-child(1) > a",
	spanish: "body > footer > div.footer > div > div > nav.col-md-5.u-fw-600.text-md-right.text-xs-center > ul > li:nth-child(2) > a",
	polski: "body > footer > div.footer > div > div > nav.col-md-5.u-fw-600.text-md-right.text-xs-center > ul > li:nth-child(3) > a",
	catalan: "body > footer > div.footer > div > div > nav.col-md-5.u-fw-600.text-md-right.text-xs-center > ul > li:nth-child(4) > a",
	classificationButton: "#results > div:nth-child(2) > div.col-xs-7.col-md-4 > a",
	classificationSubtitleP: "body > main > header > div.container.text-xs-left > p",
	rankingTable: "#rankingTable > table > tbody > tr:nth-child(1) > td:nth-child(3)",
	browserClub: "body > main > div > article > div > div > form > div > div.col-md-8.col-xs-10 > span > input.typeahead.form-control.tt-input",
	nameRace: "#nameRace",
	searchForm: "form.searchForm",
	cardTitle: "h3.card-title",
	athelete: "YESSICA SANCHEZ SANTOS",
	checkButton: "body > main > div > section.u-mb-lg > div:nth-child(2) > div.col-md-4.u-mb-0 > a",
	checkRace: "//*[@id='check.race']",
	checkDni: "//*[@id='check.dni']",
	checkSelectDay: "//*[@id='checkInscriptionFormContent']/div[3]/div[1]/select",
	checkSelectMonth: "//*[@id='checkInscriptionFormContent']/div[3]/div[2]/select",
	checkSelectYear: "//*[@id='checkInscriptionFormContent']/div[3]/div[3]/select",
	checkFormButton: "//*[@id='checkInscriptionFormContent']/div[4]/button",
	checkAlert: "//*[@id='checkInscriptionFormContent']/div[5]",
	logIn: '//*[@id="topBar"]/div/nav/ul/li[3]/a',
	logOut: '//*[@id="topBar"]/div/nav/ul/li[3]/div/a[2]',
	loginEmail: '//*[@id="loginFormEmail"]',
	loginButton: '//*[@id="ajax-modal-body"]/form/fieldset/div[4]/div/div[1]/button',
	loginAlert: '//*[@id="ajax-modal-body"]/form/fieldset/div[1]',
	newUser: '//*[@id="ajax-modal-body"]/a',
	signupName: '//*[@id="signupFormName"]',
	signupSurName: '//*[@id="signupFormSurname"]',
	signupEmail: '//*[@id="signupFormEmail"]',
	signupPass: '//*[@id="signupFormPassword"]',
	signupButton: '//*[@id="signupForm"]/fieldset/div[6]/button',
	profileButton: '//*[@id="topBar"]/div/nav/ul/li[3]/div/a[1]',

	//KEYS:
	keys : {
		arrowDown: '\uE015',
		enter: '\uE006'
	}
}