const datas = [
  {
    name: 'l\'Eau Tarie',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/eauta.jpg',
    page: 'https://www.facebook.com/www.leautarielehavre.fr/?fref=ts',
	tags: ['bar','bière', 'foster', 'charcuterie', 'fromage', 'mojito', 'burger','hamburger', 'match', 'foot', 'rugby', 'manger' ],
	detailsTag: ['terrasse chauffée','terrasse', 'midi'],
	avis: 'Un rade bien sympa pour manger sans se saigner le midi, et prendre un apéro sans trop se les meuler grâce à la terrasse chauffée.'
  },
  {
    name: 'l\'Abri Côtier',
    location: 'plage',
    page: 'https://www.facebook.com/abricotier/?fref=ts',
	locationTag : ['mer', 'plage'],
	image : 'http://arthurfortin.fr/images/abri.jpg', 
	tags: ['bar', 'bière', 'tapas', 'mojito', 'cocktails','cocktail', 'caïpirinha','accras', 'foccacias', 'exposition', 'expo'],
	detailsTag: ['terrasse chauffée', 'danser', 'terrasse', 'ouvert le dimanche' ],
	avis: 'Le meilleur bar du Havre. Un emplacement parfait, une équipe au top et en plus on peut danser jusqu\'à 2h le samedi soir.'
  },
  {
    name: 'Le Trappiste',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
	image : 'http://arthurfortin.fr/images/abri.jpg',
    page: 'https://www.facebook.com/LeTrappistLeHavre/?fref=ts',
	tags: ['bar', 'bière', 'belge'],
	detailsTag: ['terrasse' ],
	avis: 'Un rade bien décoré pour celles et ceux qui aiment la bière qui fait mal aux boulons.'
  },
  {
    name: 'O\'Brother',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
	image : 'http://arthurfortin.fr/images/obr.jpg',
    page: 'https://www.facebook.com/obrotherlh',
	tags: ['pub', 'bière', 'tapas', 'burger','hamburger', 'match', 'foot', 'rugby'],
	detailsTag: ['terrasse',  'midi' ],
	avis: 'Un bar à l\'ambiance irish idéal pour se mater un match. A noter une bouffe excellente le midi.'
  },
    {
    name: 'L\'Etable',
    location: 'rues Piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/eta.jpg',
	tags: ['bar', 'bière', 'vin', 'tapas', 'charcuterie'],
	detailsTag: ['terrasse' ],
    page: 'https://www.facebook.com/etable76',
	avis: 'Un lieu agréable pour se prendre un coup au calme. '
  },
    
  {
    name: 'La Petite Rade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/rade.jpg',
	tags: ['bar', 'bière', 'burger','hamburger', 'frites', 'tapas'],
	detailsTag: ['terrasse', 'ouvert le dimanche' ],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: 'LE spot pour se siffler une mousse en mangeant un burger délicieux.'
  },
  
  {
    name: 'Crêpe Chignon',
    location: 'Saint-François',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/chign.jpg',
	tags: ['restaurant','resto','crêpe', 'crêperie', 'cidre' ],
	detailsTag: [''],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: '♪ Ils ont des chapeaux ronds, vive la Bretagne... ♪'
  },
  
  {
    name: 'Le Cosmopolite',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	image : 'http://arthurfortin.fr/images/cosm.jpg',
	tags: ['danser', 'boîte de nuit', 'night club' ],
	detailsTag: ['danser après 2h' ],
    page: 'https://www.facebook.com/cosmolh/',
	avis: 'Si tu veux guincher tu peux y faire un tour'
  },
  
   {
    name: 'Le Music Bar',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	image : 'http://arthurfortin.fr/images/musbar.jpg',
	tags: ['danser', 'boîte de nuit', 'night club', 'karaoké' ],
	detailsTag: ['danser après 2h' ],
    page: 'https://www.facebook.com/pages/Music-Bar/158778094180401',
	avis: 'Tu es ivre et tu veux pouvoir t\'exprimer après 2h du matin ? Ce lieu est fait pour toi' 
  },
  
      {
      name: 'le Chat Bleu',
    location: 'Sainte-Adresse',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/chat.jpeg',
	tags: ['café', 'thé', 'tapas', 'charcuterie', 'salon de thé', 'pâtisseries', 'brunch', 'exposition', 'expo', 'goûter'],
	detailsTag: ['terrasse', 'ouvert le dimanche' ],
	page: 'https://www.facebook.com/Le-Chat-Bleu-au-bon-goût-dici-et-dailleurs-294275044012714',
	avis: 'Le refuge idéal pour les urbains souhaitant trouver un refuge où manger un bout, prende un thé ou une mousse. Tout est bon, tout est fait maison.'
  },
  
  {
    name: 'Williamsburg',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/will.jpg',
    page: 'https://www.facebook.com/Williamsburg-Food-Coffee-771263892910406',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner', 'muffin', 'salade', 'goûter', 'petit-déjeuner'],
	detailsTag: [''],
	avis: 'Le Havre a son coffee shop, tu peux y aller les yeux fermés.'
  },
  
   {
    name: 'French Coffee Shop',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/french.jpg',
    page: 'https://www.facebook.com/LHfrenchcoffeeshop/',
	tags: ['coffee shop', 'café', 'cheescake', 'sandwichs', 'cappucino', 'petit déjeuner', 'goûter'],
	detailsTag: ['' ],
	avis: 'Un chouette coffee shop, à la starbuck style.'
  },
  
   {
    name: 'L\'Escapade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/esc.jpg',
    page: 'https://www.facebook.com/Lescapade76',
	tags: ['bar', 'vin', 'charcuterie', 'fromage'],
	detailsTag: ['terrasse'],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
  
     {
    name: 'Chez André',
    location: 'Bellanger',
	locationTag : ['Bellanger', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/andre.jpg',
    page: 'https://www.facebook.com/restaurantchezandre/',
	tags: ['restaurant','resto', 'vin', 'fromage'],
	detailsTag: ['' ],
	avis: 'Unun chouette  où siroter du bon pinard.'
  },
  
   {
    name: 'Le Cyclamen',
    location: 'Saint-François',
	locationTag : ['Saint-François', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/cycl.jpg',
    page: 'https://www.facebook.com/pages/Le-Cyclamen/178489788865708',
	tags: ['bar', 'cocktails', 'cocktails','rhum', 'mojito', 'Caïpirinha'],
	detailsTag: ['' ],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
    
	{
    name: 'La Cave à bière',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'centre-ville'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
	tags: ['bière', 'bière belge',  'exposition', 'artiste'],
	detailsTag: ['' ],
	avis: 'Le lieu idéal pour acheter de la bonne bière et savourer une expo.'
  },
  
  {
    name: 'Naturéo',
    location: 'Le Grand Hameau',
	locationTag : ['Grand Hameau', 'ville haute'],
	image : 'http://arthurfortin.fr/images/natur.jpg',
    page: '',
	tags: ['bio', 'magasin'],
	detailsTag: ['' ],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
    {
    name: 'Rayons Verts',
    location: 'Avenue Coty',
	locationTag : ['avenue coty'],
	image : 'http://arthurfortin.fr/images/ray.jpg',
    page: 'https://www.facebook.com/Rayons-Verts-1421643768155053',
	tags: ['bio', 'magasin'],
	detailsTag: ['' ],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
   {
    name: 'Le Marché Bio',
    location: 'rue de Paris',
	locationTag : ['centre-ville', 'Notre-Dame'],
	image : 'http://arthurfortin.fr/images/marchbio.jpg',
    page: 'https://www.facebook.com/lemarchebioLH/',
	tags: ['bio', 'magasin'],
	detailsTag: ['' ],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
  {
    name: 'All in Bagels',
    location: 'Saint-Nicolas et Niemeyer',
	locationTag : ['Saint-Nicolas', 'Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/all.jpg',
    page: 'https://www.facebook.com/AllInBagels',
	tags: ['bagels', 'salade'],
	detailsTag: ['' ],
	avis: 'Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'
  },
  
    {
    name: 'Istanbul',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'plage'],
	image : 'http://arthurfortin.fr/images/ist.jpg',
    page: 'https://www.facebook.com/pages/Istanbul-Kebab/251742424858786',
	tags: ['kebab'],
	detailsTag: ['' ],
	avis: 'Le meilleur kebab de France par kebab-frites.com'
  },
  
  {
    name: 'Sushis Makers',
    location: 'Notre-Dame',
	locationTag : ['Notre-dame', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/sush.jpg',
    page: 'https://www.facebook.com/sushimakers',
	tags: ['sushis', 'japonais'],
	detailsTag: ['livre à domicile', 'livraison' ],
	avis: 'Du japonais fait maison. Si si'
  },
  
  {
    name: 'Le Grignot',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer'],
	image : 'http://arthurfortin.fr/images/grign.jpg',
    page: 'https://www.facebook.com/legrignotLH',
	tags: ['brasserie', 'fruits de mer', 'entrecôte', 'viande', 'bavette'],
	detailsTag: ['brasserie' ],
	avis: 'Une chouette brasserie à la déco typique'
  },
  
  {
    name: 'Saïgon',
    location: 'saint-vincent',
	locationTag : ['centre-ville', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/sai.jpg',
    page: 'https://www.petitfute.com/v16634-le-havre-76600/c650-produits-gourmands-vins/c1108-produits-du-monde/421611-saigon.html',
	tags: ['chinois', 'nems'],
	detailsTag: ['à emporter' ],
	avis: 'LE meilleur chinois de la ville'
  },
  
   {
    name: 'Le Palais Impérial',
    location: 'rue Aristide Briant',
	locationTag : ['centre-ville', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/pal.jpg',
    page: 'http://www.palais-imperial.fr/',
	tags: ['restaurant', 'chinois', 'nems', 'nouilles'],
	detailsTag: ['' ],
	avis: 'J\'ai pas test pour être franc mais il est bien noté'
  },
  
   {
    name: 'Al Dente',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/ald.jpg',
    page: 'https://www.facebook.com/Al-Dente-Ristorante-196816710348037',
	tags: ['restaurant', 'resto', 'pizza', 'pizzeria', 'italien', 'pâtes'],
	detailsTag: ['emporter' ],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'O Délices du Liban',
    location: 'Rue de la Soif',
	locationTag : ['plage'],
	image : 'http://arthurfortin.fr/images/odel.jpg',
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['libanais', 'mezzé', 'chawerma', 'falafel'],
	detailsTag: ['à emporter' ],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'Le Fifty\'s',
    location: 'Rue de la Soif',
	locationTag : ['les halles', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/fift.jpg',
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	tags: ['burger', 'mini-burgers'],
	detailsTag: [''],
	avis: 'Un burger comme dans les 50\'s. Sors ton costume champion et fais comme les américains. En plus ils font des apéros avec de vrais assiettes qui te calent. Pas comme ces voleurs qui te mettent 3 trucs à becqueter'
  },
  
  {
    name: 'La Petite Savoie',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/savoi.jpg',
    page: 'https://www.facebook.com/pages/La-Petite-Savoie/156213701077390',
	tags: ['restaurant’, ‘resto' ,'fromage','raclette'],
	detailsTag: ['' ],
	avis: 'Si tu veux manger du fromage et avoir une haleine de raclette c\'est là que ça se passe'
  },
    
	  {
    name: 'Le Lyonnais',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/lyo.jpg',
    page: 'https://www.facebook.com/pages/Le-Lyonnais/206566939421182',
	tags: ['gastronomie française', 'escargots'],
	detailsTag: ['' ],
	avis: 'Un excellent resto pour une bonne gastronomie française au sein d\'un environnement chaleureux'
  },
  
    {
    name: 'Taverne Paillette',
    location: 'Saint-Roch',
	locationTag : ['centre-ville', 'saint-roch'],
	image : 'http://arthurfortin.fr/images/pail.jpg',
    page: 'https://www.facebook.com/La-Taverne-Paillette-176529912364014',
	tags: ['restaurant','resto', 'moules', 'fruits de mer', 'choucroute', 'brasserie'],
	detailsTag: ['ouvert le dimanche' ],
	avis: 'Un classique havrais. Si t\'as pas essayé cette brasserie typique t\'as loupé ta vie '
  },
  
   {
    name: 'Le Bureau',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer'],
	image : 'http://arthurfortin.fr/images/bur.jpg',
    page: 'https://www.facebook.com/aubureau.lehavre',
	tags: ['bar','fish\'n ships', 'afterwork', 'bière', 'burger','hamburger', 'restaurant', 'concert'],
	detailsTag: ['ouvert le dimanche', 'rock' ],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships. A 3h de l\'Irlande c\'est à noter'
  },
  
   {
    name: 'Ortiz',
    location: 'Plage',
	locationTag : ['centre-ville', 'plage', 'mer'],
	image : 'http://arthurfortin.fr/images/ortiz.jpg',
    page: 'https://www.facebook.com/aubureau.lehavre',
	tags: ['glacier', 'glace', 'glace italienne'],
	detailsTag: ['ouvert le dimanche' ],
	avis: 'L\'institution glacière au Havre. Idéal pour une glace à la plage'
  },
  
  {
    name: 'Fleur de Sel',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'Saint-François'],
	image : 'http://arthurfortin.fr/images/fleur.jpg',
    page: 'https://www.facebook.com/Fleur-de-Sel-665021900279649',
	tags: [ 'truffe', 'poisson'],
	detailsTag: ['gastronomique' ],
	avis: 'Raffiné et abordable'
  },
  
    {
    name: 'Tartarin',
    location: 'avenue foch',
	locationTag : ['centre-ville', 'avenue foch'],
	image : 'http://arthurfortin.fr/images/tart.png',
    page: 'https://www.facebook.com/Restaurant-Jean-Luc-Tartarin-146369338737976',
	tags: [ 'truffe', 'poisson'],
	detailsTag: ['gastronomique' ],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships'
  },
  
   {
    name: 'Saveurs Île Maurice',
    location: 'quai Southampton',
	locationTag : ['centre-ville', 'quai Southampton'],
	image : 'http://arthurfortin.fr/images/odel.jpg',
    page: 'https://www.facebook.com/Saveurs-Ile-Maurice-282357235180859',
	tags: ['restaurant', 'resto', 'accras', 'samoussas', 'pina colada'],
	detailsTag: ['' ],
	avis: 'Connais pas mais j\'ai entendu de bonnes choses donc...'
  },
  
    {
    name: 'Louise',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : '',
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	tags: ['glacier','glace', 'café'],
	detailsTag: ['terrasse' ],
	avis: 'Pour savourer une bonne glace avec un café'
  },
  
  
      {
    name: 'le Bistrot',
    location: 'avenue Coty',
	locationTag : ['coty'],
	image : 'http://arthurfortin.fr/images/lebis.jpg',
    page: 'https://www.facebook.com/lebistrotcoty',
	tags: ['bar', 'bière', 'concert' ],
	detailsTag: [ 'rock' ],
	avis: 'Une institution qui mérite d\'être redécouverte par les jeunes générations.'
  },
  
  {
    name: 'le Merle Moqueur',
    location: 'notre-dame',
	locationTag : ['notre-dame'],
	image : 'http://arthurfortin.fr/images/merl.jpg',
    page: 'https://www.facebook.com/Le-Merle-Moqueur-383939731755519',
	tags: ['bar','bière', 'concert' ],
	detailsTag: ['rock' ],
	avis: 'Un rade à la bonne franquette comme vous dîtes vous autres les humains'
  },
  
    {
    name: 'Zazous',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville'],
	image : 'http://arthurfortin.fr/images/zaz.jpg',
    page: 'https://www.facebook.com/leszazouslehavre',
	tags: ['bar','bière', 'concert', 'blind test'],
	detailsTag: ['rock' ],
	avis: 'bonne ambiance, bon délire et des sessions blind test chaque semaine pour se fendre la poire et écouter des gens mal chanter.'
  },
  
  {
    name: 'Wallaby Bar',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/zaz.jpg',
    page: 'https://www.facebook.com/wallaby..7',
	tags: ['bar','cocktail', 'mojito', 'caïpirinha', 'bière' ],
	detailsTag: [ 'concert' ],
	avis: 'Un bon rade niché dans Saint-François qui te donne l\'impression de vivre un été permanent'
  },
    
  {
    name: 'Bistrot de Quentin',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/quentin.jpg',
    page: 'https://www.facebook.com/lebistrotdequentin',
	tags: ['bar','restaurant','resto', 'happy hour', 'bistrot', 'burger','hamburger', 'bavette' ],
	detailsTag: ['terrasse', 'midi'],
	avis: 'Un très bon resto le midi et un très bon rade le soir.'
  },
  
   {
    name: 'Black Café',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
	image : 'http://arthurfortin.fr/images/bla.jpg',
    page: 'https://www.facebook.com/Black-Café-739396976180251',
	tags: ['bar','bière', 'fléchettes', 'billard' ],
	detailsTag: ['ouvert le dimanche' ],
	avis: 'Le spot idéal pour se faire un billard'
  },
  
   {
    name: 'Mac Daid\'s',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/mac.jpg',
    page: 'https://www.facebook.com/pages/Mac-Daids/115590181861208',
	tags: ['pub','bar', 'bière', 'guiness', 'billard', 'fléchettes', 'concert' ],
	detailsTag: ['ouvert le dimanche', 'metal', 'rock' ],
	avis: 'LE pub havrais'
  },
    

  
 {
    name: 'LH Store',
    location: 'Rues piétonnes',
	locationTag : ['rues piétonnes'],
	image : 'http://arthurfortin.fr/images/lh.jpg',
    page: 'https://www.facebook.com/LH-CONCEPT-STORE-226383204081032',
	tags: ['vêtements', 'homme', 'femme', 'T-shirts', 'sweats', 'polos'  ],
	detailsTag: ['LH' ],
	avis: 'LA boutique pour avoir le style façon LH '
  },
  
    {
    name: 'LOHO',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
	image : 'http://arthurfortin.fr/images/loho.jpg',
    page: 'https://www.facebook.com/lelocalshop.loho',
	tags: ['vêtements', 'homme', 'femme', 'T-shirts','produits locaux', 'souvenirs','illustrations', 'mugs' ],
	detailsTag: ['Karsenty', 'Marygribouille' ],
	avis: 'La boutique consommer local'
  },
  
    {
    name: 'Docks Vauban',
    location: 'Vauban',
	locationTag : ['Vauban'],
	image : 'http://arthurfortin.fr/images/dock.jpg',
    page: 'https://www.facebook.com/Docksvauban/',
	tags: ['vêtements', 'homme', 'femme', 'T-shirts','Carnets de vol', 'Zara','H&M', 'librairie', 'jouets' ],
	detailsTag: ['ouvert le dimanche' ],
	avis: 'Un centre commercial bien désigné rempli de franchises'
  },
  
   {
    name: 'Split',
    location: 'Vauban',
	locationTag : ['Vauban'],
	image : 'http://arthurfortin.fr/images/split.jpg',
    page: 'https://www.facebook.com/Split-Le-Havre-113149882080660',
	tags: ['tennis', 'baskets', 'sweat', 'skateur','vêtements', 'femmes','hommes', 'lunettes', 'planches de skate', 'chaussures', 'chemise', 'polo' ],
	detailsTag: ['carhart', 'nike', 'veja' ],
	avis: 'Le lieu pour avoir du style'
  },
  
  
   {
    name: 'Printemps',
    location: 'Coty',
	locationTag : ['Coty'],
	image : 'http://arthurfortin.fr/images/print.ppg',
    page: 'https://www.facebook.com/Split-Le-Havre-113149882080660',
	tags: ['tennis', 'baskets', 'sweat', 'skateur','vêtements', 'femmes','hommes', 'lunettes', 'jean','pantalon','robe','jupe', 'manteau', 'chaussures', 'chemise', 'polo' ],
	detailsTag: ['lacoste', 'chevignon', 'ralph lauren', 'tommy hilfiger', 'diesel', 'kaporal', 'g-star' ],
	avis: 'L\'un des premiers Printemps (le magasin, pas la saison ahaha)'
  },
  
  {
    name: 'Piscine des Docks',
    location: 'Vauban',
	locationTag : ['Vauban'],
	image : 'http://arthurfortin.fr/images/pis.jpg',
    page: 'https://www.facebook.com/pages/Les-Bains-des-Docks/1417724998465411',
	tags: ['piscine', 'nager', 'spa', 'massage','sport', 'salle de sport','aquabiking'],
	detailsTag: ['ouverture le dimanche' ],
	avis: 'Une piscine qui aura coûté un bras mais qui est vraiment splendide'
  },
  
       {
    name: 'Vent d\'Ouest',
    location: 'Saint-Joseph',
	locationTag : ['saint-joseph'],
	image : 'http://arthurfortin.fr/images/split.jpg',
    page: 'https://www.facebook.com/pages/Hôtel-Vent-dOuest/148982211803940',
	tags: ['hôtel', 'spa', 'petit-déjeuner', 'massage','dormir'],
	detailsTag: ['' ],
	avis: 'Un bien chouette hôtel qui propose de quoi se détendre (non pas de prestations sexuelles)'
  },
  
       {
    name: 'Muséum d\'Histoire Naturelle',
    location: 'Notre-Dame',
	locationTag : ['notre-dame'],
	image : 'http://arthurfortin.fr/images/histnat.jpg',
    page: 'https://www.facebook.com/pages/Muséum-dhistoire-naturelle-du-Havre/145058868870605',
	tags: ['visite', 'histoire', 'expositions', 'exposition'],
	detailsTag: ['' ],
	avis: 'Si tu n\'as pas visité ce musée avant 50 ans t\'as loupé ta vie'
  },
  
   {
    name: 'Sirius',
    location: 'La gare',
	locationTag : ['gare'],
	image : 'http://arthurfortin.fr/images/sir.jpg',
    page: 'https://www.facebook.com/pages/Le-Sirius/656479911083484',
	tags: ['cinéma', 'blockbusters', 'film', 'film d\'auteur', 'café' ],
	detailsTag: ['' ],
	avis: 'Le lieu pour se mater un film bien noté par Télérama'
  },
  
  {
    name: 'skate park',
    location: 'La plage',
	locationTag : ['plage'],
	image : '',
    page: '',
	tags: ['skate', 'roller' ],
	detailsTag: ['' ],
	avis: 'ride on !'
  },
  
  	{
    name: 'Gaumont',
    location: 'Les docks vaubans',
	locationTag : ['docks vaubans'],
	image : 'http://arthurfortin.fr/images/gaum.jpg',
    page: 'https://www.facebook.com/GaumontDocksVaubanLeHavre',
	tags: ['cinéma', 'blockbusters', 'film' ],
	detailsTag: ['' ],
	avis: 'Le cinéma pour se mater un bon spectable en grand format'
  },
  
    {
    name: 'Tétris',
    location: 'fort de tourneville',
	locationTag : ['tourneville'],
	image : 'http://arthurfortin.fr/images/tet.jpg',
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	tags: ['concert' ],
	detailsTag: ['rap', 'rock', 'électro' ],
	avis: 'Le lieu pour un concert'
  },
 ]

module.exports = datas
