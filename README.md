# XliffEditor (WIP)

Editor for  [Xliff version 2](http://docs.oasis-open.org/xliff/xliff-core/v2.0/os/xliff-core-v2.0-os.html)

### Sample file
```
<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0"
 srcLang="en-US" trgLang="ja-JP">
 <file id="f1" original="Graphic Example.psd">
  <skeleton href="Graphic Example.psd.skl"/>
  <unit id="1">
   <segment>
    <source>Quetzal</source>
    <target>Quetzal</target>
   </segment>
  </unit>
  <unit id="2">
   <segment>
    <source>An application to manipulate and process XLIFF documents</source>
    <target>XLIFF 文書を編集、または処理 するアプリケーションです。</target>
   </segment>
  </unit>
  <unit id="3">
   <segment>
    <source>XLIFF Data Manager</source>
    <target>XLIFF データ・マネージャ</target>
   </segment>
  </unit>
 </file>
</xliff>
```

### Xliff Tree Structure

Legend:
1 = one
+ = one or more
? = zero or one
* = zero or more

```
<xliff>
|
+---<file> +
  |
  +---<skeleton> ?
  | |
  | +---<other> *
  |
  +---<other> *
  |
  +---<notes> ?
  | |
  | +---<note> +
  |
  +---At least one of (<unit> OR <group>)
      | |
      | +---<unit>
      |   |
      |   +---<other> *
      |   |
      |   +---<notes> ?
      |   | |
      |   | +---<note> +
      |   |
      |   +---<originalData> ?
      |   | |
      |   | +---<data> +
      |   |
      |   +---At least one of (<segment> OR <ignorable>)
      |       | |
      |       | +---<segment>
      |       |   |
      |       |   +---<source> 1
      |       |   |
      |       |   +---<target> ?
      |       |
      |       +---<ignorable>
      |           |
      |           +---<source> 1
      |           |
      |           +---<target> ?
      |
      +---<group>
          |
          +---<other> *
          |
          +---<notes> ?
          | |
          | +---<note> +
          |
          +---At least one of (<unit> OR <group>)

```

##
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
