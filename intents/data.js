const datas = [
  {
    name: 'l\'Eau Tarie',
    location: 'Rues piétonnes',
	locationTag : ['centre ville', 'rues piétonnes', 'frites'],
    page: 'https://www.facebook.com/www.leautarielehavre.fr/?fref=ts',
	tags: ['bar', 'bière', 'charcuterie', 'fromage', 'terrasse', 'terrasse chauffée'],
	avis: 'Un bar bien sympa pour prendre un apéro avec une terrasse chauffée pour ne pas trop se les meuler.'
  },
  {
    name: 'l\'Abri Côtier',
    location: 'Plage',
    page: 'https://www.facebook.com/abricotierbar/?fref=ts',
	locationTag : ['mer', 'plage'], 
	tags: ['bar', 'bière', 'tapas', 'mojito', 'cocktails','cocktail', 'caïpirinha','accras', 'foccacias', 'mer', 'plage'],
	avis: 'Pour moi le meilleur bar du Havre. Un emplacement parfait, une équipe au top et en plus on peut danser jusqu\'à 2h le samedi soir.'
  },
  {
    name: 'Le Trappiste',
    location: 'Niemeyer',
	locationTag : ['centre ville', 'niemeyer'], 
    page: 'https://www.facebook.com/LeTrappistLeHavre/?fref=ts',
	tags: ['bar', 'bière', 'belge'],
	avis: 'Un bar bien décoré pour celles et ceux qui aiment la bière qui fait mal au crâne.'
  },
  {
    name: 'O\'Brother',
    location: 'Niemeyer',
	locationTag : ['centre ville', 'niemeyer'], 
    page: 'https://www.facebook.com/obrotherlh',
	tags: ['pub', 'bière', 'match', 'tapas', 'sport', 'foot', 'rugby'],
	avis: 'Un bar à l\'ambiance irish idéal pour se mater un match. A noter une bouffe excellente le midi.'
  },
    {
    name: 'L\'Etable',
    location: 'rues Piétonnes',
	locationTag : ['centre ville', 'rues piétonnes'],
	tags: ['bar', 'bière', 'vin', 'tapas', 'charcuterie'],
    page: 'https://www.facebook.com/etable76',
	avis: 'Un lieu agréable et un peu cher.'
  },
    
  {
    name: 'La Petite Rade',
    location: 'plage',
	locationTag : ['plage'],
	tags: ['bar', 'bière', 'burger', 'frites', 'plage', 'mer' ],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: 'LE spot pour se siffler une mousse en mangeant un burger délicieux.'
  },
  
      {
      name: 'le Chat Bleu',
    location: 'Sainte-Adresse',
	locationTag : ['plage', 'mer'],
	tags: ['café', 'thé', 'tapas', 'charcuterie', 'salon de thé', 'pâtisseries', 'brunch', 'plage', 'mer'],
	page: 'https://www.facebook.com/Le-Chat-Bleu-au-bon-goût-dici-et-dailleurs-294275044012714',
	avis: 'Le refuge idéal pour les urbains souhaitant trouver un refuge où manger un bout, prende un thé ou une mousse. Tout est bon, tout est fait maison.'
  },
  
  {
    name: 'Williamsburg',
    location: 'Rues piétonnes',
	locationTag : ['centre ville'],
    page: 'https://www.facebook.com/Williamsburg-Food-Coffee-771263892910406',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner'],
	avis: 'Le Havre a son coffee shop, tu peux y aller les yeux fermés.'
  },
  
   {
    name: 'French Coffee Shop',
    location: 'hôtel de Ville',
	locationTag : ['hôtel de Ville'],
    page: 'https://www.facebook.com/LHfrenchcoffeeshop/',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner'],
	avis: 'Un chouette coffee shop, à la starbuck style.'
  },
  
   {
    name: 'L\'Escapade',
    location: 'plage',
	locationTag : ['plage'],
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['vin', 'charcuterie', 'fromage'],
	avis: 'Une cave et un bar à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
  
     {
    name: 'Chez André',
    location: 'Bellanger',
	locationTag : ['Bellanger'],
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['vin', 'restaurant', 'fromage'],
	avis: 'Unun chouette bar où siroter du bon pinard.'
  },
  
   {
    name: 'Le Cyclamen',
    location: 'Saint-François',
	locationTag : ['Saint-François'],
    page: 'https://www.facebook.com/pages/Le-Cyclamen/178489788865708',
	tags: ['cocktails', 'cocktails','rhum', 'mojito', 'Caïpirinha'],
	avis: 'Une cave et un bar à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
    
	{
    name: 'La Cave à bière',
    location: 'Saint-François',
	locationTag : ['Saint-François'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
	tags: ['bière', 'exposition', 'artiste', 'bière belge'],
	avis: 'Le lieu idéal pour acheter de la bonne bière et savourer une expo.'
  },
  
  {
    name: 'Naturéo',
    location: 'Le Grand Hameau',
	locationTag : ['Grand Hameau, ville haute'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
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
	locationTag : ['centre-ville, Notre-Dame'],
    page: 'https://www.facebook.com/lemarchebioLH/',
	tags: ['bio', 'magasin'],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
  {
    name: 'All in Bagels',
    location: 'Saint-Nicolas et Niemeyer',
	locationTag : ['Saint-Nicolas', 'Niemeyer'],
    page: 'https://www.facebook.com/AllInBagels',
	tags: ['bagels'],
	avis: 'Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'
  },
  
    {
    name: 'Istanbul',
    location: 'Saint-Vincent',
	locationTag : ['Saint-Vincent', 'plage'],
    page: 'https://www.facebook.com/pages/Istanbul-Kebab/251742424858786',
	tags: ['kebab'],
	avis: 'Le meilleur kebab de France par kebab-frites.com'
  },
  
  {
    name: 'Sushis Makers',
    location: 'Notre-Dame',
	locationTag : ['Notre-dame'],
    page: 'https://www.facebook.com/sushimakers',
	tags: ['sushis, japonais'],
	avis: 'Du japonais fait maison. Si si'
  },
  
  {
    name: 'Le Grignot',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'Notre-Dame'],
    page: 'https://www.facebook.com/legrignotLH',
	tags: ['brasserie', 'fruits de mer', 'restaurant', 'viande', 'bavette'],
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
	tags: ['chinois', 'restaurant', 'nems', 'livrer'],
	avis: 'Un bon resto où manger chinois'
  },
  
   {
    name: 'Al Dente',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
    page: 'https://www.facebook.com/Al-Dente-Ristorante-196816710348037',
	tags: ['pizza', 'emporter', 'pizzeria', 'italien'],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'O Délices du Liban',
    location: 'Rue de la Soif',
	locationTag : ['plage'],
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['libanais', 'mezzé', 'chawerma', 'emporter'],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'Le Fifty\'s',
    location: 'Rue de la Soif',
	locationTag : ['plage'],
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['libanais', 'mezzé', 'chawerma', 'emporter'],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
  {
    name: 'La Petite Savoie',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
    page: 'https://www.facebook.com/pages/La-Petite-Savoie/156213701077390',
	tags: ['fromage', 'restaurant', 'raclette'],
	avis: 'Si tu veux manger du fromage et avoir une haleine de raclette c\'est là que ça se passe'
  },
    
	  {
    name: 'Le Lyonnais',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
    page: 'https://www.facebook.com/pages/Le-Lyonnais/206566939421182',
	tags: ['gastronomie française', 'escargots'],
	avis: 'Un excellent resto pour une bonne gastronomie française'
  },
  
    {
    name: 'Taverne Paillette',
    location: 'Saint-Roch',
	locationTag : ['centre-ville', 'saint-roch'],
    page: 'https://www.facebook.com/La-Taverne-Paillette-176529912364014',
	tags: ['moules', 'fruit de mer', 'choucroute', 'brasserie'],
	avis: 'Un excellent resto pour une bonne gastronomie française'
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
	locationTag : ['centre-ville', 'plage'],
    page: 'https://www.facebook.com/aubureau.lehavre',
	tags: ['glace', 'plage', 'mer', 'glace italienne'],
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
    name: 'Tétris',
    location: 'fort de tourneville',
	locationTag : ['tourneville'],
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	tags: ['concert', 'musique électro' ],
	avis: 'Le lieu pour un concert'
  },
  
      {
    name: 'le Bistrot',
    location: 'avenue Coty',
	locationTag : ['coty'],
    page: 'https://www.facebook.com/lebistrotcoty',
	tags: ['concert', 'bistrot', 'bar', 'bière' ],
	avis: 'Une institution pour écouter un concert'
  },
  
  {
    name: 'le Merle Moqueur',
    location: 'Notre Dame',
	locationTag : ['notre dame'],
    page: 'https://www.facebook.com/Le-Merle-Moqueur-383939731755519',
	tags: ['concert', 'bistrot', 'bar', 'bière', 'rock' ],
	avis: 'Un bon rade pour une bonne binouse accompagnée d\'un concert'
  },
  
    {
    name: 'Zazous',
    location: 'Hôtel de Ville',
	locationTag : ['Hôtel de Ville'],
    page: 'https://www.facebook.com/leszazouslehavre',
	tags: ['concert', 'bistrot', 'bar', 'bière', 'rock', 'blind test' ],
	avis: 'bonne ambiance, bon délire et des sessions blind test chaque semaine pour se fendre la poire.'
  },
  
  {
    name: 'Wallaby Bar',
    location: 'Hôtel de Ville',
	locationTag : ['Saint François'],
    page: 'https://www.facebook.com/wallaby.bar.7',
	tags: ['concert', 'bistrot', 'bar', 'cocktail', 'mojito', 'caïpirinha' ],
	avis: 'bonne ambiance, bon délire et des sessions blind test chaque semaine pour se fendre la poire.'
  },
    
  {
    name: 'Bistrot de Quentin',
    location: 'Hôtel de Ville',
	locationTag : ['Saint François'],
    page: 'https://www.facebook.com/lebistrotdequentin',
	tags: ['happy hour', 'bistrot', 'bar', 'burger', 'restaurant', 'midi', 'resto', 'bavette' ],
	avis: 'Un très bon resto le midi et un très bon bar le soir.'
  },
  
   {
    name: 'Black Café',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
    page: 'https://www.facebook.com/Black-Café-739396976180251',
	tags: ['bar', 'bière', 'billard', 'fléchettes' ],
	avis: 'Le spot idéal pour se faire un billard'
  },
  
   {
    name: 'Mac Daid\'s',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
    page: 'https://www.facebook.com/pages/Mac-Daids/115590181861208',
	tags: ['pub', 'bière', 'billard', 'fléchettes', 'guiness' ],
	avis: 'LE pub havrais'
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
    page: 'https://www.facebook.com/pages/Le-Sirius/656479911083484',
	tags: ['skate', 'roller', 'plage' ],
	avis: 'ride on !'
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
	tags: ['tennis', 'baskets', 'sweat', 'skateur','vêtements', 'femmes','hommes', 'lunettes', 'planches de skate' ],
	avis: 'Le lieu pour avoir du style'
  },
  
  
]

module.exports = datas
