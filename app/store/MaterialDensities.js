Ext.define('motioncalc.store.MaterialDensities', {
	extend: 'Ext.data.Store',

	config: {
		storeId:'_MaterialDensities',
		model: 'motioncalc.model.MaterialDensities',
		autoLoad: true,
		fields: ['name','density'],
		sorters: [{
			property: 'name',
			direction: 'ASC'
		}],
		data: [
			{name: 'Alcohol, ethyl',density: 788.5}, { name:  'Alcohol, methyl', density: 790.9}, { name:  'Aluminum', density: 2643}, { name:  'Aluminum alloy 3003', density: 2730}, { name:  'Aluminum alloy 360', density: 2640}, { name:  'Aluminum bronze', density: 7800}, { name:  'Antimonial lead', density: 10900}, { name:  'Asphalt', density: 720.8}, { name:  'Beryllium copper 25', density: 8230}, { name:  'Brick, common red', density: 1922.2}, { name:  'Carbon', density: 2146.5}, { name:  'Cast gray iron', density: 7200}, { name:  'CO2', density: 2}, { name:  'Coal, anthracite', density: 1506}, { name:  'Concrete, gravel', density: 2403}, { name:  'Copper', density: 8682}, { name:  'Copper, electrolytic', density: 8940}, { name:  'Cork', density: 240.3}, { name:  'Crude oil', density: 881}, { name:  'Cupronickel 30%', density: 8940}, { name:  'Cupronickel 55-45', density: 8900}, { name:  'Delrin', density: 1561}, { name:  'Earth-dry, excavated', density: 1249}, { name:  'Flour, wheat', density: 592.7}, { name:  'Glass, window', density: 2579}, { name:  'Gold, 24 Kt', density: 19320}, { name:  'Granite, solid', density: 2691}, { name:  'Gravel, dry loose', density: 1521.8}, { name:  'Ice', density: 919.5}, { name:  'Lexan', density: 1198}, { name:  'Malleable iron', density: 7300}, { name:  'Nickel (commercial)', density: 8890}, { name:  'Nylon, type 6', density: 1190}, { name:  'O2', density: 1.4}, { name:  'Oak, red', density: 704.8}, { name:  'Pine, Sothrn. yellow', density: 720.8}, { name:  'Pine, white', density: 416.5}, { name:  'Plain carbon steel', density: 7860}, { name:  'Platinum', density: 21452}, { name:  'Pure water', density: 999.6}, { name:  'PVC', density: 1439}, { name:  'Red brass 85%', density: 8750}, { name:  'Rubber, hard', density: 1190}, { name:  'Salt water', density: 1026.5}, { name:  'Salt, cake', density: 1442}, { name:  'Sand, dry', density: 1601.8}, { name:  'Silver', density: 10491}, { name:  'Solder 50-50', density: 8890}, { name:  'Steel, rolled', density: 7930}, { name:  'Sugar, granulated', density: 849}, { name:  'Titanium (commercial)', density: 4500}, { name:  'Yellow brass', density: 8470}, { name:  'Zinc (commercial)', density: 7140}, { name:  'Zirconium (commercial)', density: 6500}
		]
	}
});
