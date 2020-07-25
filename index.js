const ATTRIBUTES = ['font-size'];

export default {
	register: function(Quill) {
		let BlockEmbed = Quill.import("blots/block/embed");

		class MathQuillBlot extends BlockEmbed {
			static create(content) {
		    	let node = super.create();
				node.setAttribute("contenteditable", false);

				var config = {
				  spaceBehavesLikeTab: true,
				};

				let span = document.createElement("span");

				$(node).append(span);
				console.log(node);

				this.MQ = MathQuill.getInterface(2);
				node.mathField = this.MQ.MathField(span, config);

				//let self = this;
				node.addEventListener("click", function() {
					node.mathField.focus();
				});

		    	return node;
		  	}
			static value(node) {
				return node.mathField.latex();
			}
			update(mutations, context) {
				console.log(mutations, context);
			}
			/*format(name, value) {
				if (ATTRIBUTES.indexOf(name) > -1) {
				  if (value) {
					this.domNode.setAttribute(name, value);
				  } else {
					this.domNode.removeAttribute(name);
				  }
				} else {
				  super.format(name, value);
				}
			}
			static formats(domNode) {
				return ATTRIBUTES.reduce((formats, attribute) => {
				  if (domNode.hasAttribute(attribute)) {
					formats[attribute] = domNode.getAttribute(attribute);
				  }
				  return formats;
				}, {});
			}*/
			format(name, value) {
				if(name == "size") {
					domNode.style.FontSize = value;
				}
			}
			static formats(domNode) {
				if(domNode.style.FontSize) {
					var size = domNode.style.FontSize;
				}

				return {
					size: size,
				};
			}
		}

		MathQuillBlot.blotName = "mathQuill";
		MathQuillBlot.tagName = "div";
		MathQuillBlot.className = "mathQuillBlot";

		Quill.register(MathQuillBlot);
	}
};