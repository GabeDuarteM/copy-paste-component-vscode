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
      const { rootPath } = vscode.workspace

      const newComponentName = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the name of the new component?",
      })

      const defaultComponentPath = getDefaultComponentPath(
        componentPath,
        newComponentName,
      ).replace(rootPath + slash, "")

      const newComponentPath = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the location of the new component?",
        value: defaultComponentPath,
      })

      await copyPasteComponent(
        componentPath,
        newComponentName,
        join(rootPath, newComponentPath),
      )

      vscode.window.showInformationMessage(
        `Component ${newComponentName} successfully created at ${newComponentPath}`,
      )
    },
  )

  context.subscriptions.push(disposable)
}
