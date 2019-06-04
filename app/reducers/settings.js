import * as types from 'actions/types';
const clone = (item) => JSON.parse(JSON.stringify(item));

const templateConfig = window.templateConfig || {};
const initState = { ...templateConfig };

function addTableItem(state, sectionIndex, itemIndex) {
	const newState = clone(state);
	const config = newState.sections[sectionIndex].tableItems[itemIndex];
	const emptyArray = new Array(config.headers.length).fill('');
	if (config.indexItems !== undefined) {
		emptyArray[config.indexItems] = config.items.length + 1;
	}
	newState.sections[sectionIndex].tableItems[itemIndex].items.push(emptyArray);
	return newState;
}

function removeTableItem(state, sectionIndex, itemIndex, rowIndex) {
	const newState = clone(state);
	newState.sections[sectionIndex].tableItems[itemIndex].items.splice(rowIndex, 1);
	return newState;
}

function changeItemValue(state, sectionIndex, itemIndex, trIndex, tdIndex, newValue, itemType) {
	const newState = clone(state);
	if (itemType === 'item') {
		newState.sections[sectionIndex].tableItems[itemIndex].items[trIndex][tdIndex] = newValue;
	} else if (itemType === 'tag') {
		newState.sections[sectionIndex].title = newValue;
	} else {
		newState.sections[sectionIndex].tableItems[itemIndex].headers[trIndex].title = newValue;
	}
	return newState;
}

export default function settings(state = initState, action) {
	switch (action.type) {
		case types.ADD_TABLE_ITEM:
			return addTableItem(state, action.sectionIndex, action.itemIndex);
		case types.REMOVE_TABLE_ITEM:
			return removeTableItem(state, action.sectionIndex, action.itemIndex, action.rowIndex);
		case types.CHANGE_ITEM_VALUE:
			return changeItemValue(state, action.sectionIndex, action.itemIndex, action.rowIndex, action.tdIndex, action.newValue, action.itemType);
		default:
			return state;
	}
}
