import { Plugin } from 'obsidian';
import { showMinimap } from "./src";

export default class MyPlugin extends Plugin {

	async onload() {
		this.registerEditorExtension([
			showMinimap.compute(['doc'], (state) => {
				let create = () => {
					const dom = createEl('div');
					return {dom};
				};

				return {
					create,
					/* optional */
					displayText: 'characters',
					showOverlay: 'always',
				};
			})
		]);
	}

	onunload() {

	}

}
