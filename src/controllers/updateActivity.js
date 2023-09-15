const { Activity, Country } = require('../db');
const activityUpdateValidation = require('../utils/activityUpdateValidation');

const updateActivity = async (req, res) => {
	const { newDifficulty, newDuration, newSeasons, newCountries } = req.body;
	const { name } = req.params;

	const valuesToUpdate = activityUpdateValidation(
		newDifficulty,
		newDuration,
		newSeasons
	);

	try {
		const activityToUpdate = await Activity.findOne({ where: { name: name } });
		if (!activityToUpdate)
			return res
				.status(404)
				.send('No entries matching the activity name in database');

		//update activity
		await Activity.update(valuesToUpdate, {
			where: { name: name },
		});

		//associate to new countries
		const associatedCountries = await Country.findAll({
			where: { id: newCountries },
		});

		await activityToUpdate.setCountries(associatedCountries);
		//await activityToUpdate.addCountries(associatedCountries);

		return res
			.status(200)
			.send(`Activity ${name} succesfully updated in database`);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

module.exports = updateActivity;
