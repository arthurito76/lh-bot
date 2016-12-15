const datas = [
  {
    name: 'l\'Eau Tarie',
    location: 'Rues piétonnes',
	locationTag : ['centre ville', 'rues piétonnes', 'frites'],
    page: 'https://www.facebook.com/www.leautarielehavre.fr/?fref=ts',
	tags: ['bar', 'bière', 'charcuterie', 'fromage'],
	avis: 'Un bar bien sympa pour prendre un apéro avec une terrasse chauffée pour ne pas trop se les meuler.'
  },
  {
    name: 'l\'Abri Côtier',
    location: 'Plage',
    page: 'https://www.facebook.com/abricotierbar/?fref=ts',
	locationTag : ['mer', 'plage'], 
	tags: ['bar', 'bière', 'tapas', 'mojito', 'cocktails'],
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
	tags: ['pub', 'bière', 'match', 'tapas', 'sport'],
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
	tags: ['bar', 'bière', 'burger', 'frites'],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: 'LE spot pour se siffler une mousse en mangeant un burger délicieux.'
  },
  
      {
      name: 'le Chat Bleu',
    location: 'Sainte-Adresse',
	locationTag : ['plage', 'mer'],
	tags: ['café', 'thé', 'tapas', 'charcuterie', 'salon de thé', 'pâtisseries', 'brunch'],
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
    name: 'L\'Escapade',
    location: 'plage',
	locationTag : ['plage'],
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['vin', 'charcuterie', 'fromage'],
	avis: 'Une cave et un bar à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
  
   {
    name: 'Le Cyclamen',
    location: 'Saint-François',
	locationTag : ['Saint-François'],
    page: 'https://www.facebook.com/pages/Le-Cyclamen/178489788865708',
	tags: ['cocktails', 'rhum', 'mojito'],
	avis: 'Une cave et un bar à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
    
	{
    name: 'La Cave à bière',
    location: 'Saint-François',
	locationTag : ['Saint-François'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
	tags: ['bière', 'exposition', 'artiste'],
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
	tags: ['brasserie', 'fruits de mer', 'restaurant', 'viande'],
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
	tags: ['50\'s', 'cheeseburger', 'burger'],
	avis: 'L\'un des meilleurs burgers avec une ambiance des 50\'s !'
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
    name: 'LOHO',
    location: 'Notre Dame',
	locationTag : ['Notre-Dame'],
    page: 'https://www.facebook.com/lelocalshop.loho',
	tags: ['souvenirs', 'mugs', 'produits locaux'],
	avis: 'Va à LOHO ! C\'est une super boutique'
  },
  
  
  {
    name: 'Berigny',
    location: 'rues piétonnes',
	locationTag : ['rues piétonnes'],
    page: 'https://www.facebook.com/pages/Cave-Berigny-Le-Havre/',
	tags: ['vin', 'rhum', 'whisky'],
	avis: 'Une institution dans le pinard et autres liquoreux'
  },
    
]

module.exports = datas
