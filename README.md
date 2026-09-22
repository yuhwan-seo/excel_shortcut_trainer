# excel_shortcut_trainer

Excel の必須ショートカットを、ブラウザ上で実際にキー入力しながら練習する日本語教材です。

## 公開URL

GitHub Pages を有効にすると、通常は次のURLで公開できます。

```text
https://<GitHubユーザー名>.github.io/excel_shortcut_trainer/
```

例：

```text
https://example.github.io/excel_shortcut_trainer/
```

## GitHub Pages で公開する方法

1. GitHub で新しいリポジトリを作成します。
2. リポジトリ名を `excel_shortcut_trainer` にします。
3. このフォルダ内のファイルを、リポジトリの **ルート直下** にアップロードします。
   - `index.html`
   - `app.js`
   - `style.css`
   - `.nojekyll`
   - `README.md`
4. GitHub のリポジトリで **Settings** を開きます。
5. 左側の **Pages** を開きます。
6. **Build and deployment** → **Source** を `Deploy from a branch` にします。
7. **Branch** を `main`、フォルダを `/(root)` にして **Save** します。
8. 公開処理後、Pages に表示されたURLを学生へ配布します。

GitHub Pages 公式ドキュメント：
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 学生の利用方法

1. 配布された GitHub Pages のURLを開きます。
2. `Ctrl + T` などブラウザ自身が使うショートカットを練習するときは、右上の **ショートカット練習モード** をONにします。
3. 5回の練習を完了します。
4. 最終画面の **画面キャプチャー** を押します。
5. ダウンロードされた `excelショートカット練習.png` を Teams の課題へ提出します。

## 推奨ブラウザ

Windows の最新版 **Google Chrome / Microsoft Edge** を推奨します。

Keyboard Lock API はブラウザによって対応状況が異なります。GitHub Pages は HTTPS で配信されるため、対応ブラウザでは Keyboard Lock を利用しやすくなります。

## ファイル構成

```text
excel_shortcut_trainer/
├── index.html
├── app.js
├── style.css
├── .nojekyll
└── README.md
```

このGitHub Pages版では、Electron・Node.js・ローカルサーバー用ファイルは使用しません。
