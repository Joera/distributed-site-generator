import { IMainController } from "../main.ctrlr";
import { App, Modal } from "obsidian";
// import { inviteToPod } from "pod";

export class NewPublicationModal extends Modal {

    main;

	constructor(app: App, main: IMainController) {
		super(app);
        this.main = main;
	}

	onOpen() {

		this.setTitle("New publication:");

		const {contentEl} = this;

		const containerDiv = contentEl.createEl('div');
		containerDiv.setCssStyles({ "margin": "0 0 1rem 0", "width": "100%", "display": "flex", "flexDirection":"column", "justifyContent": "flex-start", "alignItems" : "flex-start"})

		containerDiv.createEl('label', { text: 'Name' });	
		const name_input = containerDiv.createEl('input', { text: 'name' });
        name_input.setCssStyles({ "margin": "0rem 0rem 1.5rem 0", "width": "100%", "borderRadius": "4px", "padding": "6px 10px", "borderColor": "rgb(171, 171, 171)"});
        
		containerDiv.createEl('label', { text: 'Members' });	
		const members_input = containerDiv.createEl('input', { text: 'members' });
        members_input.setCssStyles({ "margin": "0rem 0rem 1.5rem 0", "width": "100%", "borderRadius": "4px", "padding": "6px 10px", "borderColor": "rgb(171, 171, 171)"});
        members_input.value = this.main.oxo.ctrlr.author.eoa;

		// containerDiv.createEl('label', { text: 'Development directory' });	
		// const dev_input = containerDiv.createEl('input', { text: 'dev_folder' });
        // dev_input.setCssStyles({ "margin": "0rem 0rem 1.5rem 0", "width": "100%", "borderRadius": "4px", "padding": "6px 10px", "borderColor": "rgb(171, 171, 171)"});
        // dev_input.value = this.main.plugin.settings.dev_folder + "/<name>"

		const button = containerDiv.createEl('button', { text: 'create' });
        button.addEventListener('click', () => {
            this.main.publication.new(name_input.value, [members_input.value]);
			this.close()
        });
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}