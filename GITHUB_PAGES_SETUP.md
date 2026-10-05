# GitHub Pages 公開・更新手順

## 既に公開している場合

このZIPを展開し、既存リポジトリの同じ場所に中身を上書きしてコミットします。特に `index.html`、`app.js`、`style.css` の3ファイルを同時に更新してください。`.nojekyll` は引き続き配置します。

GitHub 側の公開処理が完了したら、現在の公開URLで内容を確認します。フッターの「GitHub Pages版 v2（F4・書式コピー追加）」が更新版の目印です。通常、リポジトリ名や公開設定を変える必要はありません。

同じブラウザ・同じ公開URLで既存の保存データが残っていれば、正解履歴を引き継ぎます。追加問題を以前の回でも練習するため、進捗率や現在の回が戻る場合があります。詳しくは `README.md` を確認してください。

この配布ZIPの作成のみで、既存サイトの更新は行われません。

## 新しく公開する場合

1. GitHub に `excel_shortcut_trainer` リポジトリを作成します。
2. このZIPの中身を、リポジトリのルート直下へアップロードします。フォルダを丸ごと入れて `index.html` が一段下に入らないようにしてください。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment → Source** で **Deploy from a branch** を選択します。
5. **Branch** に `main`、フォルダに `/(root)` を選び、**Save** します。
6. 公開処理が終わったら、Pages に表示されたURLを開いて確認し、そのURLを配布します。

```text
リポジトリ直下
├── index.html
├── app.js
├── style.css
├── .nojekyll
├── README.md
├── GITHUB_PAGES_SETUP.md
├── CHANGELOG.md
└── TESTING.md
```

一般的なプロジェクトサイトのURL：

```text
https://<GitHubユーザー名>.github.io/excel_shortcut_trainer/
```

GitHub Pages の利用条件はアカウントのプランとリポジトリの公開範囲により異なります。設定の詳細は公式資料を参照してください。

https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
