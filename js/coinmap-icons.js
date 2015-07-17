window.coinmap_icons = {};

var addIcon = function(str, icon, promoted) {
	var size = promoted ? '32' : '24';
	var color = promoted ? 'F7931A' : '999999';
	window.coinmap_icons[str] = L.icon({
		iconUrl:'img/map/' + icon + '.n.' + color + '.' + size + '.png',
		shadowUrl: 'img/shadow.' + size + '.png',
		iconSize: promoted ? [32,32] : [24,24],
		shadowSize: promoted ? [44, 58] : [36, 50],
		iconAnchor: promoted ? [16, 50] : [12, 42],
		shadowAnchor: promoted ? [22, 57] : [18, 49],
		popupAnchor: promoted ? [0, -58] : [0, -50]
	});
}

var icons = [
'_bitcoin',
'accommodation_alpinehut',
'accommodation_bed_and_breakfast',
'accommodation_camping',
'accommodation_caravan_park',
'accommodation_chalet',
'accommodation_hotel',
'accommodation_motel',
'accommodation_shelter2',
'accommodation_youth_hostel',
'amenity_bench',
'amenity_firestation2',
'amenity_fountain2',
'amenity_information',
'amenity_library',
'amenity_playground',
'amenity_police2',
'amenity_post_box',
'amenity_post_office',
'amenity_recycling',
'amenity_telephone',
'amenity_toilets',
'amenity_town_hall',
'amenity_waste_bin',
'barrier_bloc',
'barrier_bollard',
'barrier_cattle_gr',
'barrier_cycle_barri',
'barrier_gate',
'barrier_kissing_ga',
'barrier_lift_gate',
'barrier_stile',
'barrier_toll_booth',
'building_ge',
'education_nursery3',
'education_school',
'education_university',
'emergency_telepho',
'food_bar',
'food_cafe',
'food_drinkingtap',
'food_fastfood',
'food_nightclub',
'food_pub',
'food_restaurant',
'health_hospital',
'health_pharmacy',
'health_veterinary',
'landuse_coniferous',
'landuse_grass',
'money_atm',
'money_bank2',
'place_of_worship_unknown3',
'place_of_worship_unknown',
'poi_boundary_administrative',
'poi_military_bunker',
'poi_mine',
'poi_place_city',
'poi_place_hamlet',
'poi_place_suburb',
'poi_place_town',
'poi_place_village',
'power_st',
'power_substation',
'power_tower_high2',
'power_tower_low',
'power_transformer',
'shopping_alcohol',
'shopping_bakery',
'shopping_bicycle',
'shopping_book',
'shopping_butcher',
'shopping_car',
'shopping_car_repair',
'shopping_clothes',
'shopping_computer',
'shopping_confectionery',
'shopping_convenience',
'shopping_department_store',
'shopping_diy',
'shopping_fish',
'shopping_florist',
'shopping_garden_centre',
'shopping_gift',
'shopping_greengrocer',
'shopping_hairdresser',
'shopping_hifi',
'shopping_jewelry',
'shopping_kiosk',
'shopping_laundrette',
'shopping_marketplace',
'shopping_mobile_phone',
'shopping_motorcycle',
'shopping_music',
'shopping_newspaper',
'shopping_supermarket',
'shopping_toys',
'shopping_vending_machine',
'sport_golf',
'sport_leisure_centre',
'sport_shooting',
'sport_stadium',
'sport_swimming_outdoor',
'tourist_archaeological',
'tourist_art_gallery2',
'tourist_attraction',
'tourist_battlefield',
'tourist_castle',
'tourist_cinema',
'tourist_memorial',
'tourist_monument',
'tourist_museum',
'tourist_picnic',
'tourist_ruin',
'tourist_theatre',
'tourist_theme_park',
'tourist_view_point',
'tourist_zoo',
'transport_airport_gate',
'transport_airport',
'transport_airport_terminal',
'transport_bus_station',
'transport_bus_stop2',
'transport_car_wash',
'transport_fuel',
'transport_helicopter_pad',
'transport_marina',
'transport_miniroundabout_anticlockwise',
'transport_parking_bicycle',
'transport_parking_car',
'transport_port',
'transport_rental_bicycle',
'transport_rental_car',
'transport_slipway',
'transport_speedbump',
'transport_taxi_rank',
'transport_train_station',
'transport_tram_stop',
'transport_turning_circle',
'transport_weir',
'transport_zebracrossing',
];

for (var i = 0; i < icons.length; i++) {
	addIcon(icons[i], icons[i]);
	addIcon(icons[i] + '.p', icons[i], true);
}
