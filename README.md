# Code Optimizer VS Code Extension

**Version:** 1.0.0
**Publisher:** Vineeth Prakash Gudipalli

Streamline your coding workflow with the Code Optimizer extension! This tool helps you quickly get optimization suggestions for your selected code snippets by leveraging the power of GitHub Copilot Chat.

## Features

*   **Optimize Selected Code:** Right-click on any selected code in the editor and choose "Optimize Code" from the context menu.
*   **Seamless Copilot Chat Integration:** The extension automatically:
    *   Constructs a prompt to optimize the selected code.
    *   Copies this prompt to your clipboard.
    *   Opens the GitHub Copilot Chat view and pre-fills the chat input with the prompt.
*   **User-Controlled Replacement:**
    *   After you manually submit the prompt in Copilot Chat and receive the optimized code, copy it.
    *   The extension will then display an input box asking you to paste the optimized code.
    *   You'll be presented with "Accept" or "Decline" options to replace your original selection with the optimized version.

## How to Use

1.  **Select Code:** Highlight the code snippet you want to optimize in the VS Code editor.
2.  **Trigger Command:**
    *   Right-click on the selected text.
    *   Click on "Optimize Code" from the context menu.
3.  **Interact with Copilot Chat:**
    *   The GitHub Copilot Chat view will open, and the optimization prompt will be pre-filled.
    *   The prompt is also copied to your clipboard for convenience.
    *   Manually submit the prompt to Copilot Chat (e.g., by pressing Enter).
4.  **Get Optimized Code:**
    *   Copilot Chat will provide an optimized version of your code.
    *   Copy the complete optimized code snippet from the chat.
5.  **Paste and Confirm:**
    *   An input box will appear in VS Code. Paste the optimized code into this box and press Enter.
    *   You will then see "Accept" and "Decline" buttons.
    *   Click "Accept" to replace your original selected code with the pasted optimized code.
    *   Click "Decline" to keep your original code.

## Installation (from .vsix file)

If you have received a `.vsix` file for this extension (e.g., `code-optimizer-1.0.0.vsix`), you can install it directly into VS Code:

1.  Open VS Code.
2.  Go to the Extensions view (you can click the Extensions icon in the Activity Bar on the side of the window or press `⇧⌘X` or `Ctrl+Shift+X`).
3.  Click on the "..." (More Actions) menu in the top-right corner of the Extensions view.
4.  Select "Install from VSIX..."
5.  Navigate to the location of the `.vsix` file, select it, and click "Install".
6.  Reload VS Code if prompted.

## Requirements

*   Visual Studio Code version 1.80.0 or higher.
*   GitHub Copilot and GitHub Copilot Chat extensions must be installed and authenticated.

## Activation

The extension activates when you run the "Optimize Code" command.

## Commands

*   `codeOptimizer.optimizeCode`: Optimizes the selected code snippet. (Title: "Optimize Code")

## Known Issues

No known issues at this time.

## Release Notes

### 1.0.0

*   Initial release of the Code Optimizer extension.
*   Feature: Select code, generate prompt, open Copilot Chat with pre-filled prompt.
*   Feature: Input box to paste optimized code and accept/decline replacement.

---

This README provides a good overview for users of your extension.
