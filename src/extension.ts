"use strict"
import * as vscode from "vscode"
import {
  getDefaultComponentPath,
  copyPasteComponent,
} from "copy-paste-component"
import { join, sep as slash, resolve } from "path"

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.cpc",
    async (file: vscode.Uri) => {
      const componentPath: string = file.fsPath
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(file).uri
        .fsPath

      const newComponentName = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the name of the new component?",
      })

      if (!newComponentName) {
        return
      }

      const defaultComponentPath = getDefaultComponentPath(
        componentPath,
        newComponentName,
      ).replace(workspaceFolder + slash, "")

      const newComponentPath = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the location of the new component?",
        value: defaultComponentPath,
      })

      if (!newComponentPath) {
        return
      }

      await copyPasteComponent(
        componentPath,
        newComponentName,
        join(workspaceFolder, newComponentPath),
      )

      vscode.window.showInformationMessage(
        `Component ${newComponentName} successfully created at ${newComponentPath}`,
      )
    },
  )

  context.subscriptions.push(disposable)
}
