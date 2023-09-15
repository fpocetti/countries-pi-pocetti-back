const { Activity } = require('../db');

const deleteActivity = async (req, res) => {
	const { id } = req.params;

	try {
		const existingActivity = await Activity.findByPk(id);
		if (!existingActivity)
			return res.status(404).send('No activitiy matching the id');

		await Activity.destroy({ where: { id: id } });
		return res
			.status(200)
			.send(`Activity with id: ${id} succesfully removed from database`);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = deleteActivity;
