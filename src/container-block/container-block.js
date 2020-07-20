const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
const { InnerBlocks } = wp.blockEditor;

// Importer le style
import './style.scss';
import './editor.scss';

// Enregistrement du block
registerBlockType('card-container/main', {   
	title: 'Container',
	icon: 'heart',
	category: 'formatting',

	edit: (props) => { 
		return (
			<div className="d-flex justify-content-center align-items-strech my-4 flex-wrap">
				<InnerBlocks />
			</div>
		);
	  },


	  save: (props) => { 
		return (
		<div className="d-flex justify-content-center align-items-strech my-4 flex-wrap">
			<InnerBlocks.Content />
		</div>
		);
	  }


  });