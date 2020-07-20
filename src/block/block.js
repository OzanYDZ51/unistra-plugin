const { MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;
const { InnerBlocks } = wp.blockEditor;

// Importer le style
import './style.scss';
import './editor.scss';

// Enregistrement du block
registerBlockType('card-block/main', {   
	title: 'Carte',
	icon: 'heart',
	category: 'common',
	attributes: {
		title: {
		  source: 'text',
		  attribute: 'title',
		  selector: '.h6 .text-center'
		},
		imageAlt: {
		  attribute: 'alt',
		  selector: '.img-fluid'
		},
		imageUrl: {
		  attribute: 'src',
		  selector: '.img-fluid'
		}
	  },

	  edit({ attributes, className, setAttributes }) {
		const getImageButton = (openEvent) => {
			if(attributes.imageUrl) {
			  return (
				<img 
				  src={ attributes.imageUrl }
				  onClick={ openEvent }
				  className="image"
				/>
			  );
			}
			else {
			  return (
				<div className="button-container">
				  <Button 
					onClick={ openEvent }
					className="button button-large"
				  >
					Choisir une image
				  </Button>
				</div>
			  );
			}
		  };
		return (
			<div className="container">
			<PlainText
				onChange={ content => setAttributes({ title: content }) }
				value={ attributes.title }
				placeholder="Titre de votre carte"
				className="heading"
			/>
			<MediaUpload
				onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
				type="image"
				value={ attributes.imageID }
				render={ ({ open }) => getImageButton(open) }
			/>
			<div className="container-fluid p-0">
				<InnerBlocks />
			</div>
			</div>
		);
	  },


	  save({ attributes }) {

		const cardImage = (src, alt) => {
		  if(!src) return null;
	  
		  if(alt) {
			return (
			  <img 
				className="img-fluid" 
				src={ src }
				alt={ alt }
			  /> 
			);
		  }
		  
		  // No alt set, so let's hide it from screen readers
		  return (
			<img 
			  className="img-fluid" 
			  src={ src }
			  alt=""
			  aria-hidden="true"
			/> 
		  );
		};
		
		return (
		<div class="p-2 col-6 col-md-5 col-lg-3 col-xl-2">
			<div class="d-flex flex-column justify-content-between align-items-center shadow p-4 rounded bg-light">
				<header>
					<h3 className="h6 text-center">{ attributes.title }</h3>
				</header>
				<div>
					{ cardImage(attributes.imageUrl, attributes.imageAlt) }
				</div>
				<div className="container-fluid p-0">
					<InnerBlocks.Content />
				</div>
		  </div>
		</div>
		);
	  }


  });