const getEntities = (res, user) => {
  var entities = {}
  entities.restaurantName = res.get('restoinfo')    
  entities.activiteType = res.all('activiteinfo')
  entities.locationType = res.all('customlocation')
 entities.typeType = res.all('type')
 entities.boissonType = res.all('boisson')
 entities.nourritureType = res.all('nourriture')
 entities.produitType = res.all('produit')
 entities.animationType = res.all('animation')
 entities.musiqueType = res.all('musique')
 entities.amenagementType = res.all('amenagement')
 entities.livraisonType = res.all('livraison')
 entities.ouvertureType = res.all('ouverture')
 entities.marqueType = res.all('marque')
 
  if (entities.locationType.length > 0) {
    user.locationType = entities.locationType
  } else if (user.locationType) {
    entities.locationType = user.locationType
	}
  
    if (entities.typeType.length > 0) {
    user.typeType = entities.typeType
  } else if (user.typeType) {
    entities.typeType = user.typeType
	}
   
    if (entities.ouvertureType.length > 0) {
    user.ouvertureType = entities.ouvertureType
  } else if (user.ouvertureType) {
    entities.ouvertureType = user.ouvertureType

  }
  
   if (entities.marqueType.length > 0) {
    user.marqueType = entities.marqueType
  } else if (user.ouvertureType) {
    entities.marqueType = user.marqueType
	
  }

  
  return entities
}
module.exports = getEntities