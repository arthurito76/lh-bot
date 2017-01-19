const getEntities = (res, user) => {
  var entities = {}
  entities.restaurantName = res.get('restoinfo')    
  entities.specialitiesType = res.all('specialities')
  entities.activiteType = res.all('activiteinfo')
  entities.achatType = res.all('achatinfo')
  entities.locationType = res.all('customlocation')
  entities.detailType = res.all('detail')

  if (entities.locationType.length > 0) {
    user.locationType = entities.locationType
  } else if (user.locationType) {
    entities.locationType = user.locationType
  }
  
  

  return entities
}
module.exports = getEntities