# GitHub Pages 公開手順

## 1. リポジトリ作成

GitHub で以下の名前のリポジトリを作成してください。

```text
excel_shortcut_trainer
```

## 2. ファイルをアップロード

このZIPを展開して、中のファイルをすべてリポジトリ直下へアップロードしてください。

`excel_shortcut_trainer` というフォルダそのものをアップロードするのではなく、
**フォルダの中身**がGitHubリポジトリのトップに見える状態にしてください。

正しい例：

```text
excel_shortcut_trainer
  ├ index.html
  ├ app.js
  ├ style.css
  ├ .nojekyll
  └ README.md
```

## 3. Pagesを有効化

GitHub：

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: /(root)
→ Save
```

## 4. 学生へURLを配布

公開URL：

```text
https://<GitHubユーザー名>.github.io/excel_shortcut_trainer/
```

GitHub側の公開処理が完了すると利用できます。
