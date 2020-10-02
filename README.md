[![npm](https://img.shields.io/npm/v/quill-mathquill-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathquill-blot)
[![npm bundle size](https://img.shields.io/bundlephobia/min/quill-mathquill-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathquill-blot)
[![npm](https://img.shields.io/npm/dt/quill-mathquill-blot?style=flat-square)](https://www.npmjs.com/package/quill-mathquill-blot)
![GitHub Lint Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathQuill-blot/Lint%20Library?label=Lint&style=flat-square)
![GitHub CodeQL Workflow Status](https://img.shields.io/github/workflow/status/JonathanTreffler/Quill-mathQuill-blot/CodeQL?label=CodeQL&style=flat-square)
![GitHub](https://img.shields.io/github/license/JonathanTreffler/Quill-mathQuill-blot?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/JonathanTreffler/Quill-mathQuill-blot?style=flat-square)
[![Maintenance](https://img.shields.io/maintenance/yes/2020?style=flat-square)](https://github.com/JonathanTreffler/Quill-mathQuill-blot/commits/)
# Quill mathQuill Blot

A Blot/Extension for Quill.js to embed editable formulas with mathQuill.

## Installation:
```bash
npm install quill-mathquill-blot
```
## Usage:

- import Quill
- import mathQuill ([docs](http://docs.mathquill.com/en/latest/Getting_Started/))

```js
import mathQuillBlot from "quill-mathquill-blot";

var quill = new Quill('#editor-container', {
	modules: {
		toolbar: {
			container: [
				['bold', 'italic', 'underline'],
				['mathQuill']
			],
			handlers: {
				'mathQuill': insert,
			}
		}
	},
	placeholder: '',
	theme: 'snow'
});

mathQuillBlot.register(Quill);

// This function gets called by the quill toolbar handler.
// It can also be called programmatically
function insert() {
	let selection = quill.getSelection();
	// In this example a mathQuill instance will start with the content "x"
	quill.insertEmbed(selection.index, "mathQuill", "x");
}
```

### [Demo](https://jonathan-treffler.de/Quill-mathQuill-blot/)
