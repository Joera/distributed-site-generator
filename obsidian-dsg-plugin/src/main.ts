import { IMainController, MainController } from "./main.ctrlr";

import {
	FileSystemAdapter,
	Plugin,
} from "obsidian";

import { DSGSettingsTab, DEFAULT_SETTINGS, Settings } from './settings'
import { NewPublicationModal } from "./ui/new_publication.modal";
import { WhitelistAuthorModal } from "./ui/whitelist_author.modal";

export default class DSG extends Plugin {

	settings: Settings;
	ctrlr: IMainController;

	async onload() {

        this.addSettingTab(new DSGSettingsTab(this.app, this));
		await this.loadSettings();

		this.ctrlr = new MainController(this);
		

		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {

				menu.addItem((item) => {
					item
						.setTitle("Propose to print")
						.setIcon("document")
						.onClick(() => this.ctrlr.proposeNote(file))
				});
			})
		);

		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {

				menu.addItem((item) => {
					item
						.setTitle("Update publication")
						.setIcon("document")
						.onClick(() => this.ctrlr.publication.update())
				});
			})
		);

		this.registerEvent(
			this.app.workspace.on("file-menu", (menu, file) => {

				menu.addItem((item) => {
					item
						.setTitle("Update author")
						.setIcon("document")
						.onClick(() => this.ctrlr.updateAuthor(file))
				});
			})
		);

		// this.registerEvent(
		// 	this.app.workspace.on("file-menu", (menu, file) => {

		// 		menu.addItem((item) => {
		// 			item
		// 				.setTitle("Bulk upload publication")
		// 				.setIcon("document")
		// 				.onClick(() => publicationCtrlr.bulkUpload(this.app))
		// 		});
		// 	})
		// );

		// this.registerEvent(
		// 	this.app.workspace.on("file-menu", (menu, file) => {

		// 		const pubName = "unamore";
		// 		const post_type = "serie";

		// 		menu.addItem((item) => {
		// 			item
		// 				.setTitle("Bulk render")
		// 				.setIcon("document")
		// 				.onClick(() => publicationCtrlr.bulkRender(pubName, post_type, this.app))
		// 		});
		// 	})
		// );

		this.addCommand({
			id: 'dsg-update-publication',
			name: 'update publication',
			callback: () => this.ctrlr.publication.update(),
		  });

		this.addCommand({
			id: 'dsg-new-publication',
			name: 'new publication',
			callback: () => {
				return new NewPublicationModal(this.app,this.ctrlr).open();
			}
		  });

		this.addCommand({
			id: 'dsg-whitelist-author',
			name: 'whitelist author',
			callback: () => {
				return new WhitelistAuthorModal(this.app,this.ctrlr).open();
			}
		  });
		
		  this.addCommand({
			id: 'dsg-bulk-upload',
			name: 'bulk upload',
			callback: () => {
				return this.ctrlr.bulkUpload();
			}
		  });

		
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}


}

