const getEntities = (res, user) => {
  var entities = {}
  entities.restaurantName = res.get('restoinfo')    
  entities.activiteType = res.all('activiteinfo')
  entities.achatType = res.all('achatinfo')
  entities.locationType = res.all('customlocation')
 entities.typeType = res.all('type')
 entities.boissonType = res.all('boisson')
 entities.nourritureType = res.all('nourriture')
 entities.animationType = res.all('animation')
 entities.musiqueType = res.all('musique')
 entities.aménagementType = res.all('amenagement')
 entities.livraisonType = res.all('livraison')
 entities.ouvertureType = res.all('ouverture')
  if (entities.locationType.length > 0) {
    user.locationType = entities.locationType
  } else if (user.locationType) {
    entities.locationType = user.locationType
  }
  
  return entities
}
module.exports = getEntities