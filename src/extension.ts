"use strict"
import * as vscode from "vscode"
import {
  getDefaultComponentPath,
  copyPasteComponent,
} from "copy-paste-component"

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.cpc",
    async (file: vscode.Uri) => {
      const componentPath: string = file.fsPath

      vscode.window.showInformationMessage(file.fsPath)

      const newComponentName = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the name of the new component?",
      })

      const newComponentPath = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the location of the new component?",
        value: getDefaultComponentPath(componentPath, newComponentName),
      })

      copyPasteComponent(componentPath, newComponentName, newComponentPath)

      vscode.window.showInformationMessage(
        `Component ${newComponentName} successfully created at ${newComponentPath}`,
      )
    },
  )

  context.subscriptions.push(disposable)
}
