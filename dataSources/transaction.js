const chance = require('chance').Chance();

module.exports = () => {
	return {
		id: chance.guid(),
		name: chance.name(),
		amount: chance.floating({ min: 0, max: 1000, fixed: 2 })
	};
}
