import mathQuillBlot from "quill-mathquill-blot";
import "./style.css";

var quill = new Quill('#editor-container', {
	modules: {
		toolbar: {
			container: [
				[{
					header: [1, 2, false]
				}],
				['bold', 'italic', 'underline'],
				['image', 'code-block'],
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
