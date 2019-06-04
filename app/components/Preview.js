import PropTypes from 'prop-types';
import React  from 'react';

const Preview = (props) => {
	const { translations, data } = props;

	const generateOutput = state => {
		let outputText = '';
		const globalState = JSON.parse(JSON.stringify(state));

		globalState.map(section => {
			if (section.type === 'tag') {
				outputText += (section.title.length > 0) ? `${section.title}\n` : '';
			} else {
				section.tableItems.map(tableItem => {
					// table header
					if (tableItem.headers) {
						let headerText = '';

						tableItem.headers.map(header => {
							headerText += header.wrapper ? `${header.wrapper}${header.title}|` : header.title;
						});

						// add empty line before the headers if provided in config
						outputText += (tableItem.blankLine === 'before' || tableItem.blankLine === 'both') ? '\n' : '';

						// append header into output
						outputText += `|${headerText}|\n`;
					}

					// table items
					if (tableItem.items) {
						tableItem.items.map(item => {
							if (tableItem.indexItems !== undefined) {
								item[tableItem.indexItems] = `|${item[tableItem.indexItems]}`;
							}
							outputText += `|${item.join(' | ')}|\n`;
						});
					}

					// add empty line after the output if provided in config
					(tableItem.blankLine === 'after' || tableItem.blankLine === 'both') && ( outputText += '\n' );
				});
			}
		});
		return outputText;
	};

	const output = generateOutput(data);

	const copyToClipboard = () => {
		if (output.length > 0) {
			const textField = document.createElement('textarea');
			textField.textContent = output;
			document.body.appendChild(textField);
			textField.select();
			document.execCommand('copy');
			textField.remove();
		}
	};

	return (
		<div className="preview-container">
			<h2>{translations.preview}</h2>
			<textarea readOnly value={output} />
 			<button onClick={copyToClipboard}>{translations.clipboardCopy}</button>
 	    </div>
	);
};

Preview.propTypes = {
	translations: PropTypes.object,
	data: PropTypes.any
};

export default Preview;
