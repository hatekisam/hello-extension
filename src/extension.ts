import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "hellobroony" is now active!');
	let disposable = vscode.commands.registerCommand('hellobroony.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from My first extension that will help me to learn how to develop my elearning extension!');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
