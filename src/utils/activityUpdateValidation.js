const activityUpdateValidation = (newDifficulty, newDuration, newSeasons) => {
	//values confirmation and normalization
	const valuesToUpdate = {};

	if (newDifficulty !== null && typeof newDifficulty === 'number')
		valuesToUpdate.difficulty = parseInt(newDifficulty);

	if (newDuration !== null && typeof newDuration === 'number')
		valuesToUpdate.duration = parseFloat(newDuration);

	//season normalization
	const validSeasons = ['Winter', 'Summer', 'Spring', 'Autumn'];
	const userSeasons = [];
	if (newSeasons) {
		newSeasons.forEach((season) => {
			if (validSeasons.includes(season)) {
				userSeasons.push(season);
			}
		});
	}
	if (userSeasons.length > 0) valuesToUpdate.seasons = userSeasons;

	return valuesToUpdate;
};

module.exports = activityUpdateValidation;
