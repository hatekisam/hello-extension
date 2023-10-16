import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "hellobroony" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('hellobroony.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from My first extension that will help me to learn how to develop my elearning extension!');
	}));
	const currentTime = new Date();
	context.subscriptions.push(vscode.commands.registerCommand('hellobroony.currentTime', () => {
		vscode.window.showInformationMessage(`Today is ${currentTime.toLocaleDateString()} and we are at ${currentTime.toLocaleTimeString()}`);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("hellobroony.warningMessage",()=>{
		vscode.window.showWarningMessage("Your vscode may be hacked cause it is giving this warnign message from Broonys extension");
	}));

}
export function deactivate() {}
