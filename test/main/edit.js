var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: 'htmlmixed',
    theme: 'monokai',
    autoCloseTags: true,          // 自動閉じタグを有効にする
    autoCloseBrackets: true,      // 自動閉じ括弧を有効にする
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {
        "Tab": function(cm) {
            cm.replaceSelection("    ", "end"); // Tabキーで4スペースのインデント
        }
    }
});

// HTMLヒントを有効にする
editor.on("inputRead", function(cm, event) {
    if (!cm.state.completionActive && /* 現在コード補完が行われていない */
        event.origin !== '+input' && event.origin !== '+delete') { // これは入力時のみにトリガーするように
        CodeMirror.commands.autocomplete(cm, null, {completeSingle: false});
    }
});