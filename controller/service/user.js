const mapUsertoUUID = new Map();

function setMappingUUID(uuid, id) {
  mapUsertoUUID.set(uuid, id);
}

function getMappingUUID(uuid) {
  return mapUsertoUUID.get(uuid);
}

module.exports = {
  setMappingUUID,
  getMappingUUID,
};
