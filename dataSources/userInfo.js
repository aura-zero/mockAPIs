const chance = require("chance").Chance();

module.exports = () => {
  return {
    id: chance.guid(),
    email: chance.email(),
    name: chance.name_prefix(),
  };
};
