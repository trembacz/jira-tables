import * as types from './types';

export function addTableItem(sectionIndex, itemIndex) {
	return {
		type: types.ADD_TABLE_ITEM,
		sectionIndex,
		itemIndex
	};
}

export function removeTableItem(sectionIndex, itemIndex, rowIndex) {
	return {
		type: types.REMOVE_TABLE_ITEM,
		sectionIndex,
		itemIndex,
		rowIndex
	};
}

export function changeItemValue(sectionIndex, itemIndex, rowIndex, tdIndex, newValue, itemType) {
	return {
		type: types.CHANGE_ITEM_VALUE,
		sectionIndex,
		itemIndex,
		rowIndex,
		tdIndex,
		newValue,
		itemType
	};
}
