import { getFrontMatter } from "src/frontmatter";
import { IMainController } from "../main.ctrlr";
import { App, Modal } from "obsidian";
// import { inviteToPod } from "pod";

export class WhitelistAuthorModal extends Modal {

    main;

	constructor(app: App, main: IMainController) {
		super(app);
        this.main = main;
	}

	async onOpen() {

		this.setTitle("whitelist author:");

		const {contentEl} = this;

		const containerDiv = contentEl.createEl('div');
		containerDiv.setCssStyles({ "margin": "0 0 1rem 0", "width": "100%", "display": "flex", "flexDirection":"column", "justifyContent": "flex-start", "alignItems" : "flex-start"})

		containerDiv.createEl('label', { text: 'Publication' });	
		const pub_input = containerDiv.createEl('select', { text: 'name' });

		// how to query pubs 

		const allFiles = this.app.vault.getFiles();

		// Filter files to find those in the specified folder
		const publications = allFiles.filter(file => file.path.startsWith("publications"));
	
		for (let file of publications) {
			const fm = await getFrontMatter(this.app, file); 
			const option = pub_input.createEl('option', { text: file.name.split('.')[0], value: file.name });
		}

		pub_input.setCssStyles({ "margin": "0.33rem 0rem 1.5rem 0", "width": "100%", "borderRadius": "4px", "padding": "6px 10px", "borderColor": "rgb(171, 171, 171)"});
        
		containerDiv.createEl('label', { text: 'Author' });	
		const author_input = containerDiv.createEl('input', { text: 'author' });
        author_input.setCssStyles({ "margin": "0.33rem 0rem 1.5rem 0", "width": "100%", "borderRadius": "4px", "padding": "6px 10px", "borderColor": "rgb(171, 171, 171)"});

		const button = containerDiv.createEl('button', { text: 'create' });

		const publication = allFiles.find(file => file.name == pub_input.value);
		if (publication) {
			const fm = await getFrontMatter(this.app, publication); 

			button.addEventListener('click', () => {

				this.main.publication.whitelistAuthor(fm.contract, fm.controller, author_input.value);
				this.close()
			});
		}
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}