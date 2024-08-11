import {
	App,
	PluginSettingTab,
	Setting,
} from "obsidian";

export interface Settings {
	chain_id: number;
	db_gateway: string,
	db_rpc: string,
	storage: string,
	dev_folder: string
	n_printer: string,
	safe_factory: string,
	pub_factory: string,
	arbiscan_key: string
}

export const DEFAULT_SETTINGS: Settings = {
	chain_id: 421614,
	db_gateway: "https://tableland.autonomous-times.com",
	db_rpc: "https://arb-sepolia.g.alchemy.com/v2/DAfzjixY82ICdLCssh_dTQpoN0I2mthW",
	storage: "https://ipfs.autonomous-times.com",
	dev_folder: "~/Documents/DSG/publications",
	n_printer: "0x686b455ffe7acd5173C4AE3137d7E87cd0120380",
	safe_factory: "0x3b83F6b392D18267f35ab570e3F6914B6d646255",
	pub_factory: "0x3AB14D654E556b1D50f8664F7F2FFbaA383e4042",
	arbiscan_key: "RPG6FJDHR6FM8Q1FDU8CQCT2VKXXU8R98V"
};

export class DSGSettingsTab extends PluginSettingTab {
	
	plugin: any;
	name: string

	constructor(app: App, plugin: any) {
		super(app, plugin);
		this.plugin = plugin;
		this.name = "0xO DSG settings";
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h3", { text: "DSG ettings" });

		// new Setting(containerEl)
		// .setName('Publications')
		// .setDesc('Create a publication')
		// .addButton( button => button
		// 	.setButtonText("New")
		// 	.onClick( async () => {
		// 		// @ts-ignore
		// 		this.app.setting.hide()
		// 		await this.plugin.ctrlr.publication.new("test");
		// 	})
		// );

		new Setting(containerEl)
			.setName("NPRINTER")
			.setDesc(
				"Contract address of the Neutral Printer"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.n_printer)
					.onChange(async (value) => {
						this.plugin.settings.n_printer = value;
						await this.plugin.saveSettings();
					})
			);

		// new Setting(containerEl)
		// 	.setName("Chain ID")
		// 	.setDesc(
		// 		"This should be a POST url where the file is sent as a multipart/form-data body to."
		// 	)
		// 	.addText((text) =>
		// 		text
		// 			.setValue(this.plugin.settings.chain_id)
		// 			.onChange(async (value) => {
		// 				this.plugin.settings.chain_id = value;
		// 				await this.plugin.saveSettings();
		// 			})
		// 	);

		new Setting(containerEl)
			.setName("DB gateway")
			.setDesc(
				"Gateway to database where content is queriable "
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.db_gateway)
					.onChange(async (value) => {
						this.plugin.settings.db_gateway = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("DB RPC")
			.setDesc(
				"Endpoint to call chain to interact with Tableland DB"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.db_rpc)
					.onChange(async (value) => {
						this.plugin.settings.db_rpc = value;
						await this.plugin.saveSettings();
					})
			);

		// new Setting(containerEl)
		// 	.setName("DB OWNER")
		// 	.setDesc(
		// 		"Account to interact with Tableland DB"
		// 	)
		// 	.addText((text) =>
		// 		text
		// 			.setValue(this.plugin.settings.db_owner)
		// 			.onChange(async (value) => {
		// 				this.plugin.settings.db_owner = value;
		// 				await this.plugin.saveSettings();
		// 			})
		// 	);

		new Setting(containerEl)
			.setName("STORAGE")
			.setDesc(
				"Addresses of IPFS nodes"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.storage)
					.onChange(async (value) => {
						this.plugin.settings.storage = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("DEV FOLDER")
			.setDesc(
				"Directory on local machine to store template files and assets"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.dev_folder)
					.onChange(async (value) => {
						this.plugin.settings.dev_folder = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("SAFE FACTORY")
			.setDesc(
				"Contract address for gnosis safe factory, used to control publication"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.safe_factory)
					.onChange(async (value) => {
						this.plugin.settings.safe_factory = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Publication FACTORY")
			.setDesc(
				"Contract address for factory that creates publications"
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.pub_factory)
					.onChange(async (value) => {
						this.plugin.settings.pub_factory = value;
						await this.plugin.saveSettings();
					})
			);
		
		new Setting(containerEl)
			.setName("ARBISCAN KEY")
			.setDesc(
				""
			)
			.addText((text) =>
				text
					.setValue(this.plugin.settings.arbiscan_key)
					.onChange(async (value) => {
						this.plugin.settings.arbiscan_key = value;
						await this.plugin.saveSettings();
					})
			);

	}
}
