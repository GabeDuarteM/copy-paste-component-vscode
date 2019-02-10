import {
  componentFinder,
  copyPasteComponent,
  getDefaultComponentPath,
} from "copy-paste-component"
import { lstatSync } from "fs"
import { join, normalize, sep as slash } from "path"
import * as vscode from "vscode"

const validatePath = async (
  workspaceFolder: string,
  componentPath: string,
): Promise<boolean> => {
  const arrCompPathDenormalized: ReadonlyArray<string> = await componentFinder(
    workspaceFolder,
  )
  const arrComponentPath = arrCompPathDenormalized.map(path => normalize(path))

  const pathInfo = lstatSync(componentPath)

  if (pathInfo.isDirectory()) {
    vscode.window.showErrorMessage(
      `The path that you tried to copy is a folder. Please, select the file that contains the component.`,
    )

    return false
  }

  const relativeComponentPath = componentPath.replace(
    workspaceFolder + slash,
    "",
  )

  if (!arrComponentPath.includes(relativeComponentPath)) {
    vscode.window.showErrorMessage(
      `File ${componentPath} is not a valid component.`,
    )

    return false
  }

  return true
}

export const activate = (context: vscode.ExtensionContext): void => {
  const disposable = vscode.commands.registerCommand(
    "extension.cpc",
    async (file: vscode.Uri) => {
      const componentPath: string = file.fsPath

      const workspaceFolder = vscode.workspace.getWorkspaceFolder(file)

      if (!workspaceFolder) {
        throw new Error("Workspace folder not found")
      }

      const workspaceFolderFsPath = workspaceFolder.uri.fsPath

      const isValidComponent = await validatePath(
        workspaceFolderFsPath,
        componentPath,
      )

      if (!isValidComponent) {
        return
      }

      const newComponentName = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the name of the new component?",
      })

      if (!newComponentName) {
        vscode.window.showErrorMessage(
          `The name "${newComponentName}" is not valid.`,
        )

        return
      }

      const defaultComponentPath = getDefaultComponentPath(
        componentPath,
        newComponentName,
      ).replace(workspaceFolderFsPath + slash, "")

      const newComponentPath = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        placeHolder: "App",
        prompt: "What is the location of the new component?",
        value: defaultComponentPath,
      })

      if (!newComponentPath) {
        vscode.window.showErrorMessage(
          `The location "${newComponentPath}" is not valid.`,
        )

        return
      }

      copyPasteComponent(
        componentPath,
        newComponentName,
        join(workspaceFolderFsPath, newComponentPath),
      )

      vscode.window.showInformationMessage(
        `Component ${newComponentName} successfully created at ${newComponentPath}`,
      )
    },
  )

  context.subscriptions.push(disposable)
}
