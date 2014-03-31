function setSomePropertiesOn (item) {
	item.x = 7;
	item.y = 8;

	item.onePlus = function (piece) {
		return ++piece;
	};
}