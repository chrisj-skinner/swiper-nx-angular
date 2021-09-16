# dgx-template-monorepo-spa

Template for a Nx based Monorepo SPA Project.

## Usage

1. Create `temp` directory and set as working directory.
2. Run `npx create-nx-workspace <NxWorkSpaceName> --preset=angular --appName=component-development --cli=angular --style=scss --nx-cloud=no`
3. Move all files/folders from the `temp/<NxWorkSpaceName>` folder to the root of the repo, overwriting any files.
4. Set your working directory to root and delete `temp` directory.
5. Edit `package.json`:
   1. Set `license` to `"SEE LICENSE IN LICENSE"`
6. Run `npm install @domgen/nx-angular --save-dev` to install the D&G Nx Angular Plugin.
7. Apply D&G Nx Angular Schematic changes:
   1. Run `npx nx generate @domgen/nx-angular:lint component-development`
   2. Run `npx nx generate @domgen/nx-angular:jest component-development --setupFile=angular`
8. Run `npm install @domgen/nx-aws-cache --save-dev` to install the D&G NX AWS Cache custom task runner.
9. Edit `.prettierrc`:
   1. Add `"endOfLine": "auto"`
10. Edit `.prettierignore`:
    1. Add `.context.json`.
11. Edit '.gitignore':
    1. Add `.reports` to misc section.
12. Edit `nx.json`:

    1. Set `Affected.DefaultBase` to `develop`
    2. Add the following to `tasksRunnerOptions`:

       ```json
           "nx-aws-cache": {
             "runner": "@domgen/nx-aws-cache",
             "options": {
               "cacheableOperations": [
                 "build",
                 "lint",
                 "test",
                 "e2e",
                 "build-storybook"
               ]
             }
           }
       ```

13. Edit `README.md`:
    1. Add `![Build Status]({CodeBuildBadgeUrl})` replacing `{CodeBuildBadgeUrl}` with the CodeBuild build badge URL,
       changing the `branch` parameter from `master` to `develop`.
14. Run `npx nx format` to correctly format all the updated files.

###### Notes

_CodeBuild Image: aws/codebuild/standard:4.0-21.08.20_
