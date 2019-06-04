import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addTableItem, removeTableItem, changeItemValue } from 'actions/settings';
import { translations } from 'constants/index.js';

const TableItem = (props) => {
	const { data } = props;

	const addTableItemEvent = () => {
		const { sectionIndex, itemIndex } = props;
		props.dispatch(addTableItem(sectionIndex, itemIndex));
	};

	const removeTableItemEvent = (e) => {
		const { sectionIndex, itemIndex } = props;
		const trkey = e.currentTarget.dataset.trkey;
		if (trkey !== undefined) {
			props.dispatch(removeTableItem(sectionIndex, itemIndex, trkey));
		}
	};

	const handleItemChangeEvent = (e) => {
		const { sectionIndex, itemIndex } = props;
		const { trkey, tdkey, type } = e.currentTarget.dataset;
		props.dispatch(changeItemValue(sectionIndex, itemIndex, trkey, tdkey, e.currentTarget.value, type));
	};

	return (
		<table className="confluenceTable">
			<tbody>
				{/* Headers */}
				{data.headers && (
					<tr>
						{data.headers.map(
							(headerItem, trIndex) => {
								return (
									headerItem.editable ? (
										<td key={trIndex} className="confluenceTd">
											<textarea
												data-type="header"
												data-trkey={trIndex}
												onChange={handleItemChangeEvent}
												value={headerItem.title}
											/>
										</td>
									) : (
										<th key={trIndex} className="confluenceTh">
											{headerItem.title}
										</th>
									)
								);
							}
						)}
					</tr>
				)}
				{/* Items */}
				{data.items && (
					data.items.map((trItem, trIndex) => {
						return (
							<tr key={trIndex} className="confluenceTr">
								{trItem.map((tdItem, tdIndex) => {
									return (
										(data.indexItems !== undefined && data.indexItems === tdIndex) ? (
											<th className="confluenceTh" key={tdIndex}>
												{trIndex + 1}
											</th>
										) : (
											<td className="confluenceTd" key={tdIndex}>
												<textarea
													data-type="item"
													data-trkey={trIndex}
													data-tdkey={tdIndex}
													onChange={handleItemChangeEvent}
													value={tdItem}
												/>
											</td>
										)
									);
								})}
								{data.addItems && (
									<td className="confluenceTd remove-item" data-trkey={trIndex} onClick={removeTableItemEvent}>
										<span>x</span>
									</td>
								)}
							</tr>
						);
					})
				)}
			</tbody>
			<tfoot>
				{/* Add new items */}
				{data.addItems && (
					<tr>
						<th scope="row" colSpan={data.headers.length + 1}>
							<button onClick={addTableItemEvent}>{translations.addNewItem}</button>
						</th>
					</tr>
				)}
			</tfoot>
		</table>
	);
};

TableItem.propTypes = {
	dispatch: PropTypes.func,
	sectionIndex: PropTypes.any,
	itemIndex: PropTypes.any,
	data: PropTypes.object
};

const mapStateToProps = (state) => { return { ...state }; };
export default connect(mapStateToProps)(TableItem);
