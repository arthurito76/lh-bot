const datas = [
  {
    name: 'l\'Eau Tarie',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/eauta.jpg',
    page: 'https://www.facebook.com/www.leautarielehavre.fr/?fref=ts',
	typetag : ['bar' ],
	boissonstag : ['mojito', 'bière', 'caïpirihna' ],
	nourrituretag : ['tapas', 'burger' ],
	produitstag : [''],
animationtag : ['danser'],
	musiquetag: ['' ],
	amenagementtag: ['terrasse', 'terrasse chauffée' ],
	ouverturetag : ['dimanche', 'lundi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un rade bien sympa pour manger sans se saigner le midi, et prendre un apéro sans trop se les meuler grâce à la terrasse chauffée.'
  },
  {
    name: 'l\'Abri Côtier',
    location: 'plage',
    page: 'https://www.facebook.com/abricotier/?fref=ts',
	locationTag : ['mer', 'plage'],
	image : 'http://arthurfortin.fr/images/abri.jpg', 
	typetag : ['bar' ],
	boissonstag : ['mojito', 'bière', 'caïpirihna', 'cocktail' ],
	nourrituretag : ['tapas', 'accras', 'foccacias' ],
	produitstag : [''],
animationtag : ['expo', 'exposition'],
	musiquetag: [''],
	amenagementtag: ['terrasse', 'terrasse chauffée' ],
	ouverturetag : ['midi', 'dimanche'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le meilleur bar du Havre. Un emplacement parfait, une équipe au top et en plus on peut danser jusqu\'à 2h le samedi soir.'
  },
  {
    name: 'Le Trappiste',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
	image : 'http://arthurfortin.fr/images/abri.jpg',
    page: 'https://www.facebook.com/LeTrappistLeHavre/?fref=ts',
	typetag : ['bar' ],
	boissonstag : ['bière', 'bière belge'],
	nourrituretag : ['saucisson'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: ['terrasse', 'terrasse chauffée' ],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un rade bien décoré pour celles et ceux qui aiment la bière qui fait mal aux boulons.'
  },
  {
    name: 'O\'Brother',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'halles'], 
	image : 'http://arthurfortin.fr/images/obr.jpg',
    page: 'https://www.facebook.com/obrotherlh',
	typetag : ['bar' ],
	boissonstag : ['bière'],
	nourrituretag : ['saucisson', 'tapas', 'burger','hamburger'],
	produitstag : [''],
animationtag : ['match', 'rugby', 'foot'],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un bar à l\'ambiance irish idéal pour se mater un match. A noter une bouffe excellente le midi.'
  },
    {
    name: 'L\'Etable',
    location: 'rues Piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/eta.jpg',
    page: 'https://www.facebook.com/etable76',
	typetag : ['bar' ],
	boissonstag : ['bière', 'vin'],
	nourrituretag : ['tapas', 'charcuterie'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un lieu agréable pour se prendre un coup au calme. '
  },
    
  {
    name: 'La Petite Rade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/rade.jpg',
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	typetag : ['bar' ],
	boissonstag : ['bière', 'mojito'],
	nourrituretag : ['burger', 'tapas', 'frites'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : ['dimanche'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'LE spot pour se siffler une mousse en mangeant un burger délicieux.'
  },
  
  {
    name: 'Crêpe Chignon',
    location: 'Saint-François',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/chign.jpg',
	typetag : ['restaurant', 'resto', 'crêperie' ],
	boissonstag : ['cidre'],
	nourrituretag : ['crêpes'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
    page: 'https://www.facebook.com/La-Petite-Rade-188341881206913',
	avis: '♪ Ils ont des chapeaux ronds, vive la Bretagne... ♪'
  },
  
  {
    name: 'Le Cosmopolite',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	image : 'http://arthurfortin.fr/images/cosm.jpg',
	typetag : ['boîte de nuit' ],
	boissonstag : ['bière','cocktails'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['danser'],
	musiquetag: ['électro', 'mainstream', 'dj'],
	amenagementtag: [''],
	ouverturetag : ['après 2h'],
	livraisontag : [''],
	marquetag : [''],
    page: 'https://www.facebook.com/cosmolh/',
	avis: 'Si tu veux guincher tu peux y faire un tour'
  },
  
   {
    name: 'Le Music Bar',
    location: 'Saint-Nicolas',
	locationTag : ['saint-nicolas'],
	image : 'http://arthurfortin.fr/images/musbar.jpg',
	typetag : ['boîte de nuit' ],
	boissonstag : ['bière','cocktails'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['danser', 'karaoké'],
	musiquetag: ['électro', 'mainstream', 'dj'],
	amenagementtag: [''],
	ouverturetag : ['après 2h'],
	livraisontag : [''],
	marquetag : [''],
    page: 'https://www.facebook.com/pages/Music-Bar/158778094180401',
	avis: 'Tu es ivre et tu veux pouvoir t\'exprimer après 2h du matin ? Ce lieu est fait pour toi' 
  },
  
      {
      name: 'le Chat Bleu',
    location: 'Sainte-Adresse',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/chat.jpeg',
	typetag : ['salon de thé', 'brocante', 'restaurant' ],
	boissonstag : ['bière','café', 'thé','vin', 'vin bio' ],
	nourrituretag : ['quiches', 'salades'],
	produitstag : [''],
animationtag : ['expos', 'expositions', 'concerts', 'brunch'],
	musiquetag: ['électro', 'jazz', 'piano'],
	amenagementtag: ['terrasse'],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	page: 'https://www.facebook.com/Le-Chat-Bleu-au-bon-goût-dici-et-dailleurs-294275044012714',
	avis: 'Le refuge idéal pour les urbains souhaitant trouver un refuge où manger un bout, prende un thé ou une mousse. Tout est bon, tout est fait maison.'
  },
  
  {
    name: 'Williamsburg',
    location: 'Rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/will.jpg',
    page: 'https://www.facebook.com/Williamsburg-Food-Coffee-771263892910406',
	typetag : ['coffee shop' ],
	boissonstag : ['café','cappucino', 'chocolat chaud'],
	nourrituretag : ['cheesecake', 'sandwich', 'muffin', 'salade', 'cheesecake'],
	produitstag : [''],
animationtag : ['petit déjeuner', 'goûter'],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le Havre a son coffee shop, tu peux y aller les yeux fermés.'
  },
  
   {
    name: 'French Coffee Shop',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/french.jpg',
    page: 'https://www.facebook.com/LHfrenchcoffeeshop/',
	typetag : ['coffee shop' ],
	boissonstag : ['café','cappucino', 'chocolat chaud'],
	nourrituretag : ['cheesecake', 'sandwich', 'muffin', 'salade', 'cheesecake'],
	produitstag : [''],
animationtag : ['petit déjeuner', 'goûter'],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un chouette coffee shop, à la starbuck style.'
  },
  
   {
    name: 'L\'Escapade',
    location: 'plage',
	locationTag : ['plage', 'mer'],
	image : 'http://arthurfortin.fr/images/esc.jpg',
    page: 'https://www.facebook.com/Lescapade76',
	typetag : ['bar' ],
	boissonstag : ['vin'],
	nourrituretag : ['charcuterie', 'fromage'],
	produitstag : [''],
animationtag : ['dégustations'],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
  
     {
    name: 'Chez André',
    location: 'Bellanger',
	locationTag : ['Bellanger', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/andre.jpg',
    page: 'https://www.facebook.com/restaurantchezandre/',
	typetag : ['restaurant', 'resto' ],
	boissonstag : ['vin'],
	nourrituretag : ['fromage'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Unun chouette  où siroter du bon pinard.'
  },
  
   {
    name: 'Le Cyclamen',
    location: 'Saint-François',
	locationTag : ['Saint-François', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/cycl.jpg',
    page: 'https://www.facebook.com/pages/Le-Cyclamen/178489788865708',
	typetag : ['bar' ],
	boissonstag : ['cocktails', 'rhum', 'mojito', 'Caïpirinha'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Une cave et un  à vin vraiment sympas avec un petit coin jardin où siroter du bon pinard.'
  },
    
	{
    name: 'La Cave à bière',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'centre-ville'],
    page: 'https://www.facebook.com/AffichesLaCaveABieresLeHavre',
	typetag : ['magasin' ],
	boissonstag : ['bière', 'bière belge'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le lieu idéal pour acheter de la bonne bière et savourer une expo.'
  },
  
  {
    name: 'Naturéo',
    location: 'Le Grand Hameau',
	locationTag : ['Grand Hameau', 'ville haute'],
	image : 'http://arthurfortin.fr/images/natur.jpg',
    page: '',
	typetag : ['magasin' , 'bio'],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
    {
    name: 'Rayons Verts',
    location: 'Avenue Coty',
	locationTag : ['avenue coty'],
	image : 'http://arthurfortin.fr/images/ray.jpg',
    page: 'https://www.facebook.com/Rayons-Verts-1421643768155053',
	typetag : ['magasin' , 'bio'],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
   {
    name: 'Le Marché Bio',
    location: 'rue de Paris',
	locationTag : ['centre-ville', 'Notre-Dame'],
	image : 'http://arthurfortin.fr/images/marchbio.jpg',
    page: 'https://www.facebook.com/lemarchebioLH/',
	typetag : ['magasin' , 'bio'],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un endroit pour acheter bio avec du choix'
  },
  
  {
    name: 'All in Bagels',
    location: 'Saint-Nicolas et Niemeyer',
	locationTag : ['Saint-Nicolas', 'Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/all.jpg',
    page: 'https://www.facebook.com/AllInBagels',
	typetag : ['fast food' ],
	boissonstag : ['café','cappucino'],
	nourrituretag : ['bagels', 'salade'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['à emporter'],
	marquetag : [''],
	avis: 'Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'
  },
  
    {
    name: 'Istanbul',
    location: 'saint-vincent',
	locationTag : ['saint-vincent', 'plage'],
	image : 'http://arthurfortin.fr/images/ist.jpg',
    page: 'https://www.facebook.com/pages/Istanbul-Kebab/251742424858786',
	typetag : ['fast food' ],
	boissonstag : [''],
	nourrituretag : ['kebab'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi', 'dimanche'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le meilleur kebab de France par kebab-frites.com'
  },
  
  {
    name: 'Sushis Makers',
    location: 'Notre-Dame',
	locationTag : ['Notre-dame', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/sush.jpg',
    page: 'https://www.facebook.com/sushimakers',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['japonais', 'sushis'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['livraison', 'livre'],
	marquetag : [''],
	avis: 'Du japonais fait maison. Si si'
  },
  
  {
    name: 'Le Grignot',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer'],
	image : 'http://arthurfortin.fr/images/grign.jpg',
    page: 'https://www.facebook.com/legrignotLH',
	typetag : ['brasserie' ],
	boissonstag : [''],
	nourrituretag : ['fruits de mer', 'fruits de mer', 'entrecôte', 'viande', 'bavette'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Une chouette brasserie à la déco typique'
  },
  
   {
    name: 'La Pierrade ',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/pier.jpg',
    page: 'https://www.facebook.com/Restaurant-La-Pierrade-333339363534814/',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['pierrade', 'poulet', 'boeuf', 'porc', 'saucisses', 'boudin', 'crevettes', 'saumon', 'poivron', 'champignons', 'oignons', 'fromage'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le concept : proposer des produits frais à volonté qu\'on fait ensuite griller sur une plaque en fonte à sa table.'
  },
  
    {
    name: 'La Case à Café ',
    location: 'Université',
	locationTag : ['centre-ville', 'université', 'gare', 'Sirius'],
	image : 'http://arthurfortin.fr/images/case.jpg',
    page: 'https://www.facebook.com/pages/La-Case-%C3%80-Caf%C3%A9/143960425640419',
	typetag : ['pizzeria'],
	boissonstag : [''],
	nourrituretag : ['pizza'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Une bonne pizza à un tarif très doux (5/10 balles la pizz).'
  },
  
    {
    name: 'Le Chieng Mai ',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer', 'rues piétonnes', 'volcan'],
	image : 'http://arthurfortin.fr/images/chieng.jpg',
    page: 'https://www.facebook.com/pages/Chieng-Ma%C3%AF/207650709284713',
	typetag : ['restaurant'],
	boissonstag : [''],
	nourrituretag : ['chinois', 'asiatique', 'thaï', 'japonais', 'bo bun', 'raviolis', 'nems', 'canard laqué', 'canard de pékin', ],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un vrai restau rendant hommage au raffinement de la cuisine asiatique.'
  },
  
  {
    name: 'Fun Food ',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/funbar.jpg',
    page: 'https://www.facebook.com/pages/Chieng-Ma%C3%AF/207650709284713',
	typetag : ['restaurant'],
	boissonstag : [''],
	nourrituretag : ['frites', 'burger', 'cheeseburger', 'hamburger'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['livraison', 'livrer', 'emporter'],
	marquetag : [''],
	avis: 'Se faire livrer un burger et des frites maisons ? C\'est possible. Et c’est bon'
  },
  
    {
    name: 'Home Made ',
    location: 'Coty',
	locationTag : ['centre-ville', 'coty'],
	image : 'http://arthurfortin.fr/images/home.jpg',
    page: 'https://www.facebook.com/homemadelehavre',
	typetag : ['restaurant'],
	boissonstag : ['bubble tea'],
	nourrituretag : ['banh mi', 'sandwich', 'vietnamien', 'hamburger'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
	avis: 'Un air de New York à LH pour s\'empiffrer de petits sandwichs vietnamiens et de bubble tea'
  },
  
  {
    name: 'Woke-Up ',
    location: 'Coty',
	locationTag : ['centre-ville', 'coty'],
	image : 'http://arthurfortin.fr/images/woke.jpg',
    page: 'https://www.facebook.com/homemadelehavre',
	typetag : ['restaurant'],
	boissonstag : [''],
	nourrituretag : ['thaï', 'thaïlandais'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
	avis: 'Un fast food thaï où fast ne rime pas avec mal au bide et gastro'
  },
  
  {
    name: 'Le Bouche à Oreille ',
    location: 'Rue Paul Doumer',
	locationTag : ['centre-ville', 'Paul Doumer', 'avenue foch'],
	image : 'http://arthurfortin.fr/images/bouche.jpg',
    page: 'https://www.facebook.com/pg/Le-bouche-À-Oreille-1451134798499043',
	typetag : ['restaurant', 'gastronomique', 'gastro'],
	boissonstag : [''],
	nourrituretag : ['pain perdu', 'bavette', 'Magret de canard', 'foie gras'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un très bon resto, une cuisine raffinée pour un coût abordable. '
  },
  
  {
    name: 'La Maison ',
    location: 'Saint-Nicolas',
	locationTag : ['centre-ville', 'Saint-Nicolas', 'docks'],
	image : 'http://arthurfortin.fr/images/maison.jpg',
    page: 'https://www.facebook.com/restaurantlamaisonlehavre',
	typetag : ['restaurant', 'afterwork'],
	boissonstag : [''],
	nourrituretag : ['tartare', 'bavette', 'frites', 'cabillaud', 'poisson'],
	produitstag : [''],
animationtag : ['concert', 'concerts'],
	musiquetag: ['jazz'],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un très bon resto, une cuisine raffinée et un porte-feuille encore en vie à la fin. '
  },
  
  {
    name: 'Punjab ',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/punjab.jpg',
    page: 'https://www.facebook.com/pages/Le-Punjab/143344159044020',
	typetag : ['restaurant'],
	boissonstag : [''],
	nourrituretag : ['indien', 'poulet madras', 'shaki korma', 'tikka massala', 'nan', 'curry madras'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'De la bonne cuisine typique indienne avec des nans à tomber'
  },
  
   {
    name: 'Le New Delhi ',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/newdel.jpg',
    page: 'https://www.facebook.com/pages/Le-Punjab/143344159044020',
	typetag : ['restaurant'],
	boissonstag : [''],
	nourrituretag : ['indien', 'poulet madras', 'shaki korma', 'tikka massala', 'nan', 'curry madras'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'De la bonne cuisine typique indienne avec des nans à tomber'
  },
  
  {
    name: 'L\'Adresse',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes', 'volcan' ],
	image : 'http://arthurfortin.fr/images/adr.jpg',
    page: 'https://www.facebook.com/ladresse.lehavre',
		typetag : ['restaurant', 'bar' ],
	boissonstag : ['bière', 'café', 'vin'],
	nourrituretag : ['risotto', 'magret de canard'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'L\'une des meilleures tables de la ville. Créativité et saveurs unies pour ton palais. C\'est ti pas beau ça ?'
  },
  
  {
    name: 'Saïgon',
    location: 'saint-vincent',
	locationTag : ['centre-ville', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/sai.jpg',
    page: 'https://www.petitfute.com/v16634-le-havre-76600/c650-produits-gourmands-vins/c1108-produits-du-monde/421611-saigon.html',
		typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['chinois', 'nems'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
	avis: 'LE meilleur chinois de la ville'
  },
  
   {
    name: 'Le Palais Impérial',
    location: 'rue Aristide Briant',
	locationTag : ['centre-ville', 'saint-vincent'],
	image : 'http://arthurfortin.fr/images/pal.jpg',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['chinois', 'nems'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
    page: 'http://www.palais-imperial.fr/',
	avis: 'J\'ai pas test pour être franc mais il est bien noté'
  },
  
   {
    name: 'Al Dente',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/ald.jpg',
    page: 'https://www.facebook.com/Al-Dente-Ristorante-196816710348037',
	typetag : ['restaurant', 'pizzeria' ],
	boissonstag : [''],
	nourrituretag : ['pizza', 'italien', 'pâtes'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
	avis: 'L\'un des meilleurs italiens de la ville, basta !'
  },
  
   {
    name: 'O Délices du Liban',
    location: 'Rue de la Soif',
	locationTag : ['plage'],
	image : 'http://arthurfortin.fr/images/odel.jpg',
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['libanais', 'mezzé', 'chawerma', 'falafel'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
	avis: 'Un excellent Libanais'
  },
  
   {
    name: 'Le Fifty\'s',
    location: 'Rue de la Soif',
	locationTag : ['les halles', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/fift.jpg',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['burger'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : ['emporter'],
	marquetag : [''],
    page: 'https://www.facebook.com/odelicesdulibanduhavre',
	avis: 'Un burger comme dans les 50\'s. Sors ton costume champion et fais comme les américains. En plus ils font des apéros avec de vrais assiettes qui te calent. Pas comme ces voleurs qui te mettent 3 trucs à becqueter'
  },
  
  {
    name: 'La Petite Savoie',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/savoi.jpg',
    page: 'https://www.facebook.com/pages/La-Petite-Savoie/156213701077390',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['fromage','raclette'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Si tu veux manger du fromage et avoir une haleine de raclette c\'est là que ça se passe'
  },
    
	  {
    name: 'Le Lyonnais',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'saint-françois'],
	image : 'http://arthurfortin.fr/images/lyo.jpg',
    page: 'https://www.facebook.com/pages/Le-Lyonnais/206566939421182',
	typetag : ['restaurant' ],
	boissonstag : [''],
	nourrituretag : ['escargots'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un excellent resto pour une bonne gastronomie française au sein d\'un environnement chaleureux'
  },
  
    {
    name: 'Taverne Paillette',
    location: 'Saint-Roch',
	locationTag : ['centre-ville', 'saint-roch'],
	image : 'http://arthurfortin.fr/images/pail.jpg',
    page: 'https://www.facebook.com/La-Taverne-Paillette-176529912364014',
	typetag : ['brasserie' ],
	boissonstag : [''],
	nourrituretag : ['moules', 'fruits de mer', 'choucroute'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi', 'dimanche'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un classique havrais. Si t\'as pas essayé cette brasserie typique t\'as loupé ta vie '
  },
  
   {
    name: 'Le Bureau',
    location: 'Niemeyer',
	locationTag : ['centre-ville', 'niemeyer'],
	image : 'http://arthurfortin.fr/images/bur.jpg',
    page: 'https://www.facebook.com/aubureau.lehavre',
	typetag : ['brasserie', 'bar' ],
	boissonstag : [''],
	nourrituretag : ['fish\'n ships', 'burger', 'hamburger'],
	produitstag : [''],
animationtag : ['concert', 'afterwork'],
	musiquetag: ['rock'],
	amenagementtag: [''],
	ouverturetag : ['midi', 'dimanche'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'L\'un des seuls lieux où manger un fish\'n ships. A 3h de l\'Irlande c\'est à noter'
  },
  
   {
    name: 'Ortiz',
    location: 'Plage',
	locationTag : ['centre-ville', 'plage', 'mer'],
	image : 'http://arthurfortin.fr/images/ortiz.jpg',
    page: 'https://www.facebook.com/aubureau.lehavre',
	typetag : ['glacier'],
	boissonstag : [''],
	nourrituretag : ['glace', 'glace italienne'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'L\'institution glacière au Havre. Idéal pour une glace à la plage'
  },
  
  {
    name: 'Batistin Burger',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/batis.jpg',
    page: 'https://www.facebook.com/batistinburger',
	typetag : ['fast-food'],
	boissonstag : ['milkshake'],
	nourrituretag : ['burger', 'cheeseburger', 'salade', 'frites'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['dimanche', 'midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Des burgers constitués de bons produits. Fuck you Mc Do!'
  },
  
  {
    name: 'Le Funiculaire',
    location: 'coty',
	locationTag : ['centre-ville', 'coty'],
	image : 'http://arthurfortin.fr/images/funi.jpg',
    page: 'https://www.facebook.com/batistinburger',
	typetag : ['resto', 'restaurant', 'brasserie'],
	boissonstag : ['café'],
	nourrituretag : ['cabillaud', 'tripes', 'veau', 'faux-filer', 'bavette', 'faux filet', 'langue de boeuf', 'terrine', 'oeufs mayonnaises', 'poule au pot', 'entrecôte', 'filet de lieu', 'filet mignon'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'L\'une des meilleures viandes de la ville à déguster dans un cadre encore dans son jus. Incontournable'
  },
  
   {
    name: 'Phildar',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/nofoto.jpg',
    page: 'http://www.phildar.fr/magasin/le-havre-phildar.r.html',
	typetag : ['magasin'],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['laine', 'aiguilles à tricoter', 'tricot', 'crochet'],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'C\'est beau et design,'
  },
  
   {
    name: 'L\'aiguillon',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : 'http://arthurfortin.fr/images/nofoto.jpg',
    page: 'https://www.facebook.com/Boucherie-Laiguillon-337793553093831',
	typetag : ['boucherie'],
	boissonstag : [''],
	nourrituretag : ['saucisses', 'marguez', 'boudin', 'pommes dauphines', 'coquelet', 'poulet', 'pintade', 'volaille', 'steack haché', 'tournedos', 'bavette'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'LA meilleure boucherie'
  },
  
  {
    name: 'Fleur de Sel',
    location: 'Saint-François',
	locationTag : ['centre-ville', 'Saint-François'],
	image : 'http://arthurfortin.fr/images/fleur.jpg',
    page: 'https://www.facebook.com/Fleur-de-Sel-665021900279649',
	typetag : ['restaurant', 'gastronomique'],
	boissonstag : [''],
	nourrituretag : ['truffe', 'poisson'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Raffiné et abordable'
  },
  
    {
    name: 'Tartarin',
    location: 'avenue foch',
	locationTag : ['centre-ville', 'avenue foch'],
	image : 'http://arthurfortin.fr/images/tart.png',
    page: 'https://www.facebook.com/Restaurant-Jean-Luc-Tartarin-146369338737976',
	typetag : ['restaurant', 'gastronomique'],
	boissonstag : [''],
	nourrituretag : ['truffe', 'poisson'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'La crème de la crème'
  },
  
   {
    name: 'Saveurs Île Maurice',
    location: 'quai Southampton',
	locationTag : ['centre-ville', 'quai Southampton'],
	image : 'http://arthurfortin.fr/images/odel.jpg',
    page: 'https://www.facebook.com/Saveurs-Ile-Maurice-282357235180859',
	typetag : ['restaurant'],
	boissonstag : ['pina colada'],
	nourrituretag : ['accras', 'samoussas'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Connais pas mais j\'ai entendu de bonnes choses donc...'
  },
  
    {
    name: 'Louise',
    location: 'rues piétonnes',
	locationTag : ['centre-ville', 'rues piétonnes'],
	image : '',
    page: 'https://www.facebook.com/louise.cafe.le.havre',
	typetag : ['glacier'],
	boissonstag : [''],
	nourrituretag : ['glace', 'glace italienne'],
	produitstag : [''],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Pour savourer une bonne glace avec un café'
  },
  
  
      {
    name: 'le Bistrot',
    location: 'avenue Coty',
	locationTag : ['coty'],
	image : 'http://arthurfortin.fr/images/lebis.jpg',
    page: 'https://www.facebook.com/lebistrotcoty',
	typetag : ['bistrot', 'bar'],
	boissonstag : ['bière'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['concert'],
	musiquetag: ['rock'],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Une institution qui mérite d\'être redécouverte par les jeunes générations.'
  },
  
  {
    name: 'le Merle Moqueur',
    location: 'notre-dame',
	locationTag : ['notre-dame'],
	image : 'http://arthurfortin.fr/images/merl.jpg',
    page: 'https://www.facebook.com/Le-Merle-Moqueur-383939731755519',
	typetag : ['bistrot', 'bar'],
	boissonstag : ['bière'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['concert'],
	musiquetag: ['rock'],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un rade à la bonne franquette comme vous dîtes vous autres les humains'
  },
  
    {
    name: 'Zazous',
    location: 'hôtel-de-ville',
	locationTag : ['hôtel-de-ville'],
	image : 'http://arthurfortin.fr/images/zaz.jpg',
    page: 'https://www.facebook.com/leszazouslehavre',
	typetag : ['bistrot', 'bar'],
	boissonstag : ['bière'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['concert', 'blind test'],
	musiquetag: ['rock'],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'bonne ambiance, bon délire et des sessions blind test chaque semaine pour se fendre la poire et écouter des gens mal chanter.'
  },
  
  {
    name: 'Wallaby Bar',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/zaz.jpg',
    page: 'https://www.facebook.com/wallaby..7',
	typetag : ['bistrot', 'bar'],
	boissonstag : ['bière', 'mojito'],
	nourrituretag : [''],
	produitstag : [''],
animationtag : ['concert'],
	musiquetag: ['rock'],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un bon rade niché dans Saint-François qui te donne l\'impression de vivre un été permanent'
  },
    
  {
    name: 'Bistrot de Quentin',
    location: 'hôtel-de-ville',
	locationTag : ['saint-françois'],
	image : 'http://arthurfortin.fr/images/quentin.jpg',
    page: 'https://www.facebook.com/lebistrotdequentin',
	typetag : ['bar' ],
	boissonstag : ['bière'],
	nourrituretag : ['saucisson', 'tapas', 'burger','hamburger'],
	produitstag : [''],
animationtag : ['happy hours'],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Un très bon resto le midi et un très bon rade le soir.'
  },
  
   {
    name: 'Black Café',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
	image : 'http://arthurfortin.fr/images/bla.jpg',
    page: 'https://www.facebook.com/Black-Café-739396976180251',
	typetag : ['bar' ],
	boissonstag : ['bière'],
	nourrituretag : ['saucisson', 'tapas'],
	produitstag : [''],
animationtag : ['billard', 'fléchettes'],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : ['midi'],
	livraisontag : [''],
	marquetag : [''],
	avis: 'Le spot idéal pour se faire un billard'
  },
  
   {
    name: 'Mac Daid\'s',
    location: 'Niemeyer',
	locationTag : ['Niemeyer', 'centre-ville'],
	image : 'http://arthurfortin.fr/images/mac.jpg',
    page: 'https://www.facebook.com/pages/Mac-Daids/115590181861208',
	typetag : ['bar' ],
	boissonstag : ['bière'],
	nourrituretag : ['saucisson', 'tapas'],
	produitstag : [''],
animationtag : ['billard', 'fléchettes'],
	musiquetag: [''],
	amenagementtag: ['terrasse'],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : ['guinness'],
	avis: 'LE pub havrais'
  },
    
	{
    name: 'LH Store',
    location: 'Rues piétonnes',
	locationTag : ['rues piétonnes'],
	image : 'http://arthurfortin.fr/images/lh.jpg',
    page: 'https://www.facebook.com/LH-CONCEPT-STORE-226383204081032',
	typetag : ['magasin' ],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['vêtements','T-shirts', 'sweats', 'polos', 'CD'],
animationtag : [''],
	musiquetag: ['rap'],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : ['LH'],
	avis: 'LA boutique pour avoir le style façon LH '
  },
  
    {
    name: 'LOHO',
    location: 'Niemeyer',
	locationTag : ['Niemeyer'],
	image : 'http://arthurfortin.fr/images/loho.jpg',
    page: 'https://www.facebook.com/lelocalshop.loho',
	typetag : ['magasin','boutique' ],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['vêtements', 'T-shirts','produits locaux', 'souvenirs','illustrations', 'mugs'],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : ['Karsenty', 'Marygribouille'],
	avis: 'La boutique consommer local'
  },
  
    {
    name: 'Docks Vauban',
    location: 'Vauban',
	locationTag : ['Vauban'],
	image : 'http://arthurfortin.fr/images/dock.jpg',
    page: 'https://www.facebook.com/Docksvauban/',
	typetag : ['centre commercial' ],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['vêtements', 'T-shirts', 'librairie', 'jouets'],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : ['dimanche'],
	livraisontag : [''],
	marquetag : ['Carnets de vol', 'Zara','H&M'],
	avis: 'Un centre commercial bien désigné rempli de franchises'
  },
  
   {
    name: 'Split',
    location: 'Vauban',
	locationTag : ['Vauban'],
	image : 'http://arthurfortin.fr/images/split.jpg',
    page: 'https://www.facebook.com/Split-Le-Havre-113149882080660',
	typetag : ['centre commercial' ],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['vêtements','tennis', 'baskets', 'sweat', 'lunettes', 'planches de skate', 'chaussures', 'chemise', 'polo'],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : ['carhart', 'nike', 'veja'],
	avis: 'Le lieu pour avoir du style'
  },
  
  
   {
    name: 'Printemps',
    location: 'Coty',
	locationTag : ['Coty'],
	image : 'http://arthurfortin.fr/images/print.ppg',
    page: 'https://www.facebook.com/Split-Le-Havre-113149882080660',
	typetag : ['centre commercial' ],
	boissonstag : [''],
	nourrituretag : [''],
	produitstag : ['vêtements', 'tennis', 'baskets', 'sweat', 'skateur', 'lunettes', 'jean','pantalon','robe','jupe', 'manteau', 'chaussures', 'chemise', 'polo'],
animationtag : [''],
	musiquetag: [''],
	amenagementtag: [''],
	ouverturetag : [''],
	livraisontag : [''],
	marquetag : ['lacoste', 'chevignon', 'ralph lauren', 'tommy hilfiger', 'diesel', 'kaporal', 'g-star'],
	avis: 'L\'un des premiers Printemps (le magasin, pas la saison ahaha)'
  },

  
 ]

module.exports = datas
