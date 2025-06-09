import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "code-optimizer" is now active!');

    let disposable = vscode.commands.registerCommand('codeOptimizer.optimizeCode', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found.');
            return;
        }

        const selection = editor.selection;
        if (selection.isEmpty) {
            vscode.window.showErrorMessage('No text selected. Please select code to optimize.');
            return;
        }

        const selectedText = editor.document.getText(selection);
        const languageId = editor.document.languageId;
        const optimizationPrompt = `Optimize the following ${languageId} code snippet:\n\n\`\`\`${languageId}\n${selectedText}\n\`\`\`\n\nReturn only the optimized code block.`;

        // Directly go to the manual Copilot Chat interaction
        // vscode.window.showInformationMessage('Preparing to open Copilot Chat with the optimization prompt...');
        console.log('[CodeOptimizer] Skipping vscode.lm and proceeding to manual chat interaction.');

        await vscode.env.clipboard.writeText(optimizationPrompt);
        try {
            // Attempting to open chat with query and participant parameters
            await vscode.commands.executeCommand('workbench.action.chat.open',
                {
                    query: optimizationPrompt,
                    // participant: 'copilot' // The 'participant' parameter is often specific to more integrated chat APIs, 
                    // and might not be standard for 'workbench.action.chat.open'. 
                    // Let's try with just query first, as 'participant' might cause an error if not supported.
                    // If this doesn't work, we can test adding participant if you have specific info it's supported here.
                }
            );
            // vscode.window.showInformationMessage('Attempted to open Copilot Chat with the prompt. If the prompt is not pre-filled, please paste it from your clipboard. The prompt has been copied.');
        } catch (openChatError) {
            console.error("[CodeOptimizer] Failed to open the chat panel automatically with parameters:", openChatError);
            vscode.window.showInformationMessage('Prompt copied to clipboard. Please open Copilot Chat manually and paste the prompt.');
        }
    });

    context.subscriptions.push(disposable);
}
