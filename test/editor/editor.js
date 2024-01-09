var editor = CodeMirror(document.getElementById('editor'), {
    lineNumbers: true, // 行番号を表示
    tabSize: 4, // タブのサイズを４に設定
    indentUnit: 4, // インデントサイズを４に設定
    indentWithTabs: true, // タブでインデント
    mode: 'htmlmixed', // HTMLミックスモード
    theme: 'monokai', // テーマ適用
    autoCloseBrackets: true, // 自動で括弧をつける
    lineWrapping: true, //ラインナップを有効にする
    extraKeys: {
        "Tab": function(cm) {
            cm.replaceSelection("    ", "end"); // Tabキーで４スペースのインデント
        }
    }
});

    // HTMLヒントを有効にする
    editor.on("inputRead", function(cm, event) {
        if (!cm.state.completionActive && /* 現在コード補完が行われていない */
            event.origin !== '+input' && event.origin !== '+delete') { // これは入力時のみにトリガー
            CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
        }
    });