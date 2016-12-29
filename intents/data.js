const datas = [
  {
    name: 'l\'Eau Tarie',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
    page: 'https://www.facebook.com/www.leautarielehavre.fr/?fref=ts',
	tags: ['bière', 'charcuterie', 'fromage', 'terrasse', 'terrasse chauffée'],
	avis: 'Un  bien sympa pour prendre un apéro avec une terrasse chauffée pour ne pas trop se les meuler.'
  },
  {
    name: 'l\'Abri Côtier',
    location: 'plage',
    page: 'https://www.facebook.com/abricotier/?fref=ts',
	locationTag : ['mer', 'plage'], 
	tags: ['', 'bière', 'tapas', 'mojito', 'cocktails','cocktail', 'caïpirinha','accras', 'foccacias'],
	avis: 'Pour moi le meilleur  du Havre. Un emplacement parfait, une équipe au top et en plus on peut danser jusqu\'à 2h le samedi soir.'
  },
  {
    name: 'Le Trappiste',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
    page: 'https://www.facebook.com/LeTrappistLeHavre/?fref=ts',
	tags: ['bière', 'belge'],
	avis: 'Un  bien décoré pour celles et ceux qui aiment la bière qui fait mal au crâne.'
  },
  {
    name: 'O\'Brother',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
    page: 'https://www.facebook.com/obrotherlh',
	tags: ['pub', 'bière', 'match', 'tapas', 'sport', 'foot', 'rugby'],
	avis: 'Un  à l\'ambiance irish idéal pour se mater un match. A noter une bouffe excellente le midi.'
  },
    {
    name: 'L\'Etable',
    location: 'rues Piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	tags: ['bière', 'vin', 'tapas', 'charcuterie'],
    page: 'https://www.facebook.com/etable76',
	avis: 'Un lieu agréable et un peu cher.'
  },
    
  {
    name: 'La Petite Rade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
	tags: ['bière', 'burger', 'frites' ],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: 'LE spot pour se siffler une mousse en mangeant un burger délicieux.'
  },
  
  {
    name: 'Crêpe Chignon',
    location: 'Saint-François',
	locationTag : ['saint-françois'],
	tags: ['crêpe', 'crêperie', 'cidre' ],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: '♪ Ils ont des chapeaux ronds, vive la Bretagne... ♪'
  },
  
  {
    name: 'Le Cosmopolitain',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	tags: ['danser', 'boîte de nuit', 'night club' ],
    page: 'https://www.facebook.com/cosmolh/',
	avis: 'Si tu veux guincher tu peux y faire un tour'
  },
  
   {
    name: 'Le Music Bar',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	tags: ['danser', 'boîte de nuit', 'night club', 'karaoké' ],
    page: 'https://www.facebook.com/pages/Music-Bar/158778094180401',
	avis: 'Tu es ivre et tu veux pouvoir t\'exprimer après 2h du matin ? Ce lieu est fait pour toi' 
  },
  
      {
      name: 'le Chat Bleu',
    location: 'Sainte-Adresse',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/chat.jpeg',
	tags: ['café', 'thé', 'tapas', 'charcuterie', 'salon de thé', 'pâtisseries', 'brunch'],
	page: 'https://www.facebook.com/Le-Chat-Bleu-au-bon-goût-dici-et-dailleurs-294275044012714',
	avis: 'Le refuge idéal pour les urbains souhaitant trouver un refuge où manger un bout, prende un thé ou une mousse. Tout est bon, tout est fait maison.'
  },
  
  {
    name: 'Williamsburg',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
    page: 'https://www.facebook.com/Williamsburg-Food-Coffee-771263892910406',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner'],
	avis: 'Le Havre a son coffee shop, tu peux y aller les yeux fermés.'
  },
  
   {
    name: 'French Coffee Shop',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville', 'centre-ville'],
    page: 'https://www.facebook.com/LHfrenchcoffeeshop/',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner'],
	avis: 'Un chouette coffee shop, à la starbuck style.'
  },
  
   {
    name: 'L\'Escapade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['vin', 'charcuterie', 'fromage', 'terrasse'],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
  
     {
    name: 'Chez André',
    location: 'Bellanger',
	locationTag : ['Bellanger', 'saint-vincent'],
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['vin', 'fromage'],
	avis: 'Unun chouette  où siroter du bon pinard.'
  },
  
   {
    name: 'Le Cyclamen',
    location: 'Saint-François',
	locationTag : ['Saint-François', 'centre-ville'],
    page: 'https://www.facebook.com/pages/Le-Cyclamen/178489788865708',
	tags: ['cocktails', 'cocktails','rhum', 'mojito', 'Caïpirinha'],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
    
	{
    name: 'La Cave à bière',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'centre-ville'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
	tags: ['bière', 'exposition', 'artiste', 'bière belge'],
	avis: 'Le lieu idéal pour acheter de la bonne bière et savourer une expo.'
  },
  
  {
    name: 'Naturéo',
    location: 'Le Grand Hameau',
	locationTag : ['Grand Hameau', 'ville haute'],
    page: '',
	tags: ['bio', 'magasin'],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
    {
    name: 'Rayons Verts',
    location: 'Avenue Coty',
	locationTag : ['avenue coty'],
    page: 'https://www.facebook.com/Rayons-Verts-1421643768155053',
	tags: ['bio', 'magasin'],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
   {
    name: 'Le Marché Bio',
    location: 'rue de Paris',
	locationTag : ['centre-ville', 'Notre-Dame'],
    page: 'https://www.facebook.com/lemarchebioLH/',
	tags: ['bio', 'magasin'],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
  {
    name: 'All in Bagels',
    location: 'Saint-Nicolas et Niemeyer',
	locationTag : ['Saint-Nicolas', 'Niemeyer', 'centre-ville'],
    page: 'https://www.facebook.com/AllInBagels',
	tags: ['bagels'],
	avis: 'Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'
  },
  
    {
    name: 'Istanbul',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'plage'],
    page: 'https://www.facebook.com/pages/Istanbul-Kebab/251742424858786',
	tags: ['kebab'],
	avis: 'Le meilleur kebab de France par kebab-frites.com'
  },
  
  {
    name: 'Sushis Makers',
    location: 'Notre-Dame',
	locationTag : ['Notre-dame', 'centre-ville'],
    page: 'https://www.facebook.com/sushimakers',
	tags: ['sushis', 'japonais'],
	avis: 'Du japonais fait maison. Si si'
  },
  
  {
    name: 'Le Grignot',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'Notre-Dame'],
    page: 'https://www.facebook.com/legrignotLH',
	tags: ['brasserie', 'fruits de mer', '', 'viande', 'bavette', 'Niemeyer', 'centre-ville'],
	avis: 'Une chouette brasserie à la déco typique'
  },
  
  {
    name: 'Saïgon',
    location: 'saint-vincent',
	locationTag : ['centre-ville', 'saint-vincent'],
    page: '',
	tags: ['chinois', 'emporter', 'nems', 'acheter'],
	avis: 'LE meilleur chinois de la ville'
  },
  
   {
    name: 'Le Palais Impérial',
    location: 'rue Aristide Briant',
	locationTag : ['centre-ville', 'saint-vincent'],
    page: 'http://www.palais-imperial.fr/',
	tags: ['chinois', 'nems', 'livrer'],
	avis: 'Un bon  où manger chinois'
  },
  
   {
    name: 'Al Dente',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
    page: 'https://www.facebook.com/Al-Dente-Ristorante-196816710348037',
	tags: ['pizza', 'emporter', 'pizzeria', 'italien'],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'O Délices du Liban',
    location: 'Rue de la Soif',
	locationTag : ['plage'],
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['libanais', 'mezzé', 'chawerma', 'à emporter'],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'Le Fifty\'s',
    location: 'Rue de la Soif',
	locationTag : ['niemeyer', 'centre-ville'],
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['burger'],
	avis: 'Un burger comme dans les 50\'s. Sors ton costume champion et fais comme les américains'
  },
  
  {
    name: 'La Petite Savoie',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
    page: 'https://www.facebook.com/pages/La-Petite-Savoie/156213701077390',
	tags: ['fromage','raclette'],
	avis: 'Si tu veux manger du fromage et avoir une haleine de raclette c\'est là que ça se passe'
  },
    
	  {
    name: 'Le Lyonnais',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
    page: 'https://www.facebook.com/pages/Le-Lyonnais/206566939421182',
	tags: ['gastronomie française', 'escargots'],
	avis: 'Un excellent  pour une bonne gastronomie française'
  },
  
    {
    name: 'Taverne Paillette',
    location: 'Saint-Roch',
	locationTag : ['centre-ville', 'saint-roch'],
    page: 'https://www.facebook.com/La-Taverne-Paillette-176529912364014',
	tags: ['moules', 'fruit de mer', 'choucroute', 'brasserie'],
	avis: 'Un excellent  pour une bonne gastronomie française'
  },
  
   {
    name: 'Le Bureau',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer'],
    page: 'https://www.facebook.com/aubureau.lehavre',
	tags: ['fish\'n ships'],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships'
  },
  
   {
    name: 'Ortiz',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'plage', 'mer'],
    page: 'https://www.facebook.com/aubureau.lehavre',
	tags: ['glace', 'glace italienne'],
	avis: 'L\'institution glacière au Havre. Idéal pour une glace à la plage'
  },
  
  {
    name: 'Fleur de Sel',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'Saint-François'],
    page: 'https://www.facebook.com/Fleur-de-Sel-665021900279649',
	tags: ['gastronomique', 'truffe'],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships'
  },
  
   {
    name: 'Saveurs Île Maurice',
    location: 'quai Southampton',
	locationTag : ['centre-ville', 'quai Southampton'],
    page: 'https://www.facebook.com/Saveurs-Ile-Maurice-282357235180859',
	tags: ['accras', 'samoussas', 'pina colada'],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships'
  },
  
    {
    name: 'Louise',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	tags: ['glace'],
	avis: 'Pour savourer une bonne glasse avec un café'
  },
  
  
      {
    name: 'le Bistrot',
    location: 'avenue Coty',
	locationTag : ['coty'],
    page: 'https://www.facebook.com/lebistrotcoty',
	tags: ['concert', 'bistrot', 'bière' ],
	avis: 'Une institution pour écouter un concert'
  },
  
  {
    name: 'le Merle Moqueur',
    location: 'notre-dame',
	locationTag : ['notre-dame'],
    page: 'https://www.facebook.com/Le-Merle-Moqueur-383939731755519',
	tags: ['concert', 'bistrot', 'bière', 'rock' ],
	avis: 'Un bon rade pour une bonne binouse accompagnée d\'un concert'
  },
  
    {
    name: 'Zazous',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville'],
    page: 'https://www.facebook.com/leszazouslehavre',
	tags: ['concert', 'bistrot','bière', 'rock', 'blind test' ],
	avis: 'bonne ambiance, bon délire et des sessions blind test chaque semaine pour se fendre la poire.'
  },
  
  {
    name: 'Wallaby Bar',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
    page: 'https://www.facebook.com/wallaby..7',
	tags: ['concert', 'bistrot','cocktail', 'mojito', 'caïpirinha', 'bière' ],
	avis: 'Un bon rade niché dans Saint-François qui te donne l\'impression de vivre un été permanent.'
  },
    
  {
    name: 'Bistrot de Quentin',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
    page: 'https://www.facebook.com/lebistrotdequentin',
	tags: ['happy hour', 'bistrot', 'burger', 'midi', 'bavette' ],
	avis: 'Un très bon  le midi et un très bon  le soir.'
  },
  
   {
    name: 'Black Café',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
    page: 'https://www.facebook.com/Black-Café-739396976180251',
	tags: ['bière', 'billard', 'fléchettes' ],
	avis: 'Le spot idéal pour se faire un billard'
  },
  
   {
    name: 'Mac Daid\'s',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
    page: 'https://www.facebook.com/pages/Mac-Daids/115590181861208',
	tags: ['pub', 'bière', 'billard', 'fléchettes', 'guiness' ],
	avis: 'LE pub havrais'
  },
    

  
 {
    name: 'LH Store',
    location: 'Rues piétonnes',
	locationTag : ['rues piétonnes'],
    page: 'https://www.facebook.com/LH-CONCEPT-STORE-226383204081032',
	tags: ['vêtements', 'homme', 'femme','LH', 'T-shirts', 'sweats', 'polos'  ],
	avis: 'LA boutique pour avoir le style façon LH '
  },
  
    {
    name: 'LOHO',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
    page: 'https://www.facebook.com/lelocalshop.loho',
	tags: ['vêtements', 'homme', 'femme', 'T-shirts','produits locaux', 'souvenirs','illustrations' ],
	avis: 'La boutique consommer local'
  },
  
    {
    name: 'Docks Vauban',
    location: 'Vauban',
	locationTag : ['Vauban'],
    page: 'https://www.facebook.com/Docksvauban/',
	tags: ['vêtements', 'homme', 'femme', 'T-shirts','Carnets de vol', 'Zara','H&M', 'librairie', 'jouets' ],
	avis: 'Un centre commercial bien désigné rempli de franchises'
  },
  
   {
    name: 'Split',
    location: 'Vauban',
	locationTag : ['Vauban'],
    page: 'https://www.facebook.com/Split-Le-Havre-113149882080660',
	tags: ['tennis', 'baskets', 'sweat', 'skateur','vêtements', 'femmes','hommes', 'lunettes', 'planches de skate', 'chaussures' ],
	avis: 'Le lieu pour avoir du style'
  },
  
  {
    name: 'Piscine des Docks',
    location: 'Vauban',
	locationTag : ['Vauban'],
    page: 'https://www.facebook.com/pages/Les-Bains-des-Docks/1417724998465411',
	tags: ['piscine', 'nager', 'spa', 'massage','sport', 'salle de sport','aquabiking'],
	avis: 'Une piscine qui aura coûté un bras mais qui est vraiment splendide'
  },
  
       {
    name: 'Vent d\'Ouest',
    location: 'Saint-Joseph',
	locationTag : ['saint-joseph'],
    page: 'https://www.facebook.com/pages/Hôtel-Vent-dOuest/148982211803940',
	tags: ['hôtel', 'spa', 'petit-déjeuner', 'massage','dormir'],
	avis: 'Un bien chouette hôtel qui propose de quoi se détendre (non pas de prestations sexuelles)'
  },
  
       {
    name: 'Muséum d\'Histoire Naturelle',
    location: 'Notre-Dame',
	locationTag : ['notre-dame'],
    page: 'https://www.facebook.com/pages/Muséum-dhistoire-naturelle-du-Havre/145058868870605',
	tags: ['visite', 'histoire', 'expositions', 'exposition'],
	avis: 'Si tu n\'as pas visité ce musée avant 50 ans t\'as loupé ta vie'
  },
  
   {
    name: 'Sirius',
    location: 'La gare',
	locationTag : ['gare'],
    page: 'https://www.facebook.com/pages/Le-Sirius/656479911083484',
	tags: ['cinéma', 'blockbusters', 'film', 'film d\'auteur' ],
	avis: 'Le lieu pour se mater un film bien noté par Télérama'
  },
  
  {
    name: 'skate park',
    location: 'La plage',
	locationTag : ['plage'],
    page: '',
	tags: ['skate', 'roller' ],
	avis: 'ride on !'
  },
  
  	{
    name: 'Gaumont',
    location: 'Les docks vaubans',
	locationTag : ['docks vaubans'],
    page: 'https://www.facebook.com/GaumontDocksVaubanLeHavre',
	tags: ['cinéma', 'blockbusters', 'film' ],
	avis: 'Le cinéma pour se mater un bon spectable en grand format'
  },
  
    {
    name: 'Tétris',
    location: 'fort de tourneville',
	locationTag : ['tourneville'],
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	tags: ['concert', 'musique électro','rap','électro' ],
	avis: 'Le lieu pour un concert'
  },
 ]

module.exports = datas
