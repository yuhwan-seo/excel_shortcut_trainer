const lessons = [
  {
    title: "基本操作",
    description: "対象セルを自分で選択してからショートカットを実行します。キーだけでなく、操作対象まで正しく選べて初めて正解です。",
    items: [
      q("コピー", ["Control","c"], "セル B3（値: 120）を選択し、その値をコピーしてください。", "Ctrl + C", {select:"B3"}),
      q("貼り付け", ["Control","v"], "B3 の値「120」はコピー済みです。セル D5 を選択して貼り付けてください。", "Ctrl + V", {select:"D5"}),
      q("切り取り", ["Control","x"], "セル B3（値: 120）を選択し、切り取り状態にしてください。", "Ctrl + X", {select:"B3"}),
      q("元に戻す", ["Control","z"], "直前の操作で B3 の値が 120 から 999 に変更されました。この変更を元に戻してください。", "Ctrl + Z"),
      q("やり直し", ["Control","y"], "直前に B3 の変更を『元に戻す』で取り消しました。その変更をもう一度適用してください。", "Ctrl + Y"),
      q("上書き保存", ["Control","s"], "現在の『売上管理.xlsx』を上書き保存してください。", "Ctrl + S"),
      q("検索", ["Control","f"], "このワークシート内から『東京』を検索するため、検索画面を開いてください。", "Ctrl + F"),
      q("置換", ["Control","h"], "『東京』を『東京都』へ置換するため、検索と置換画面を開いてください。", "Ctrl + H"),
    ]
  },
  {
    title: "セル編集",
    description: "セルや範囲を自分で選択し、編集・入力・フィル操作を行います。",
    items: [
      q("アクティブセルを編集", ["F2"], "セル B3（値: 120）を選択し、セル内編集状態にしてください。", "F2", {select:"B3"}),
      q("入力を確定して下へ移動", ["Enter"], "B3 に『1200』を入力中です。点滅カーソルを確認し、入力を確定して B4 へ移動してください。", "Enter"),
      q("入力をキャンセル", ["Escape"], "B3 の値を『1200』へ変更中です。点滅カーソルを確認し、この編集をキャンセルしてください。", "Esc"),
      q("セル内で改行", ["Alt","Enter"], "B3 に『東京都熊谷市』を入力中です。『東京都』と『熊谷市』の間にある点滅カーソルの位置でセル内改行してください。", "Alt + Enter"),
      q("上のセルの内容を下へコピー", ["Control","d"], "B3:B4 を選択し、B3 の値を B4 へフィルダウンしてください。", "Ctrl + D", {select:"B3:B4"}),
      q("左のセルの内容を右へコピー", ["Control","r"], "B3:C3 を選択し、B3 の値を C3 へフィルライトしてください。", "Ctrl + R", {select:"B3:C3"}),

    ]
  },
  {
    title: "移動と選択",
    description: "開始セルを自分で選択し、キーボードだけで移動・範囲選択します。",
    items: [
      q("データ範囲の右端まで移動", ["Control","ArrowRight"], "セル B3 を選択してから、同じ行のデータ右端 F3 まで一気に移動してください。", "Ctrl + →", {select:"B3"}),
      q("データ範囲の下端まで移動", ["Control","ArrowDown"], "セル B3 を選択してから、同じ列の連続データの下端 B5 まで一気に移動してください。", "Ctrl + ↓", {select:"B3"}),
      q("右端まで範囲選択", ["Control","Shift","ArrowRight"], "セル B3 を選択してから、B3:F3 を一気に範囲選択してください。", "Ctrl + Shift + →", {select:"B3"}),
      q("下端まで範囲選択", ["Control","Shift","ArrowDown"], "セル B3 を選択してから、連続データの下端まで B3:B5 を一気に範囲選択してください。", "Ctrl + Shift + ↓", {select:"B3"}),
      q("行全体を選択", ["Shift"," "], "セル B3 を選択してから、3行目全体を選択してください。", "Shift + Space", {select:"B3"}),
      q("列全体を選択", ["Control"," "], "セル B3 を選択してから、B列全体を選択してください。", "Ctrl + Space", {select:"B3"}),
      q("シート全体を選択", ["Control","a"], "表内のセル B3 を選択してから、表全体を選択してください。", "Ctrl + A", {select:"B3"}),
      q("A1セルへ移動", ["Control","Home"], "セル E5 を選択してから、A1 へ一気に移動してください。", "Ctrl + Home", {select:"E5"}),
      q("使用範囲の最後へ移動", ["Control","End"], "セル A2 を選択してから、使用範囲の最後 F6 へ移動してください。", "Ctrl + End", {select:"A2"}),
    ]
  },
  {
    title: "書式設定",
    description: "書式を適用するセルを自分で選んでから、ショートカットを実行します。",
    items: [
      q("太字を切り替え", ["Control","b"], "セル B3 を選択し、文字を太字にしてください。", "Ctrl + B", {select:"B3"}),
      q("斜体を切り替え", ["Control","i"], "セル B3 を選択し、文字を斜体にしてください。", "Ctrl + I", {select:"B3"}),
      q("下線を切り替え", ["Control","u"], "セル B3 を選択し、文字に下線を付けてください。", "Ctrl + U", {select:"B3"}),
      q("セルの書式設定を開く", ["Control","1"], "セル D3（値: 960）を選択し、『セルの書式設定』を開いてください。", "Ctrl + 1", {select:"D3"}),

    ]
  },
  {
    title: "行・列・データ",
    description: "セルや表範囲を実際に選択し、表編集やデータ操作を練習します。",
    items: [
      q("行挿入", ["Control","Shift","+"], "行番号3を選択し、その位置に新しい行を挿入してください。", "Ctrl + Shift + +", {select:"ROW3"}),
      q("行削除", ["Control","-"], "行番号3を選択し、3行目を削除してください。", "Ctrl + -", {select:"ROW3"}),
      q("フィルターをオン・オフ", ["Control","Shift","l"], "表内のセル A1 を選択し、表にオートフィルターを設定してください。", "Ctrl + Shift + L", {select:"A1"}),
      q("テーブルを作成", ["Control","t"], "範囲 A1:F5 をドラッグ選択し、Excelテーブルに変換してください。", "Ctrl + T", {select:"A1:F5"}),

      q("オートSUM", ["Alt","="], "セル D6（合計欄）を選択し、上の金額を合計する SUM 関数を自動入力してください。", "Alt + =", {select:"D6"}),
    ]
  },
  {
    title: "シート・ブック",
    description: "シートやブック全体に対するショートカットを練習します。",
    items: [
      q("新しいシートを追加", ["Shift","F11"], "現在のブックに新しいワークシートを追加してください。", "Shift + F11"),
      q("次のシートへ移動", ["Control","PageDown"], "Sheet1 から右隣の Sheet2 へ移動してください。", "Ctrl + PageDown"),
      q("前のシートへ移動", ["Control","PageUp"], "Sheet2 から左隣の Sheet1 へ移動してください。", "Ctrl + PageUp"),
      q("新しいブックを作成", ["Control","n"], "新しい空白ブックを作成してください。", "Ctrl + N"),
      q("ブックを開く", ["Control","o"], "既存のExcelブックを開く画面を表示してください。", "Ctrl + O"),
      q("印刷画面を開く", ["Control","p"], "現在のブックの印刷画面を開いてください。", "Ctrl + P"),
    ]
  }
];

function q(action, keys, task, display, options={}) {
  return { action, keys, task, tip:task, display, level:"必須", ...options };
}


const baseData = [
  ["", "A", "B", "C", "D", "E", "F"],
  ["1","商品","単価","数量","金額","担当","地域"],
  ["2","ノート","250","4","1000","佐藤","東京"],
  ["3","ペン","120","8","960","鈴木","埼玉"],
  ["4","ファイル","380","2","760","田中","千葉"],
  ["5","付箋","180","5","900","高橋","東京"],
  ["6","合計","","","","",""]
];

let currentLesson = 0;
let currentQuestion = 0;
let pressed = new Set();
let answered = false;
let wrongResetTimer = null;
let sim = {};

const TOTAL_ROUNDS = 5;
const STORAGE_KEY = "excelShortcutTrainer_GITHUB_PAGES_v1";

function newLessonState(){
  return { completed:[], attempts:0, correct:0 };
}
function newRoundState(){
  return { lessons: lessons.map(() => newLessonState()) };
}

const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
if(!Array.isArray(state.rounds)){
  state.rounds = Array.from({length:TOTAL_ROUNDS}, () => newRoundState());
}
while(state.rounds.length < TOTAL_ROUNDS) state.rounds.push(newRoundState());
state.rounds = state.rounds.slice(0, TOTAL_ROUNDS);

state.rounds.forEach(round => {
  if(!Array.isArray(round.lessons)) round.lessons = lessons.map(() => newLessonState());
  while(round.lessons.length < lessons.length) round.lessons.push(newLessonState());
});

if(!Number.isInteger(state.currentRound)) state.currentRound = 0;
state.currentRound = Math.max(0, Math.min(TOTAL_ROUNDS - 1, state.currentRound));
if(typeof state.finished !== "boolean") state.finished = false;
if(!state.finishedAt) state.finishedAt = "";

function currentRoundLessons(){
  return state.rounds[state.currentRound].lessons;
}

function totalQuestionsPerRound(){
  return lessons.reduce((sum, lesson) => sum + lesson.items.length, 0);
}

function allRoundsComplete(){
  return state.rounds.every(round =>
    round.lessons.every((st, lessonIndex) =>
      st.completed.length >= lessons[lessonIndex].items.length
    )
  );
}

const els = Object.fromEntries([
  "lessonList","lessonTag","lessonTitle","lessonDescription","lessonProgressText","questionNo","actionText","hintText","pressedKeys","feedback","nextBtn","skipBtn","overallText","overallBar","correctTotal","attemptTotal","accuracyTotal","grid","resetBtn","nameBox","formulaValue","simOverlay","simToast","statusText","workbookTitle","saveState","sheetTabs","fakeBold","retryVisualBtn","inputResetBtn","practiceModeBtn","practiceModeStatus","keyboardNotice","excelWindow","roundText","completionScreen","completionCaptureArea","captureBtn","completionDate","completionCount","captureStatus",
  "roundCompleteOverlay",
  "roundCompleteTitle",
  "roundCompleteMessage",
  "roundContinueBtn",
  "finalCompletionMessage"
].map(id => [id, document.getElementById(id)]));

function freshSim(){
  sim = { data:baseData.map(r=>[...r]), active:null, selection:null, anchor:null, copied:null, cut:null, filters:false, table:false, sheet:0, edit:false, editText:null, editCaretIndex:null };
  hideOverlay(); hideToast();
  els.workbookTitle.textContent = "売上管理.xlsx - Excel";
  els.saveState.textContent = "保存済み";
  els.statusText.textContent = "準備完了";
  els.fakeBold.classList.remove("sim-on");
  renderSheetTabs();
  renderGrid();
}

function lessonUnlocked(i){ const rs=currentRoundLessons(); return i===0 || rs[i-1].completed.length >= lessons[i-1].items.length; }

function setCorrectAnswerLock(locked){
  // 正解後は補助操作と「次の問題」だけ利用可能にする。
  els.skipBtn.disabled=locked;
  els.practiceModeBtn.disabled=locked;
  els.resetBtn.disabled=locked;
  els.inputResetBtn.disabled=false;
  if(locked){
    els.nextBtn.disabled=false;
    els.retryVisualBtn.disabled=false;
  }
}

function renderLessons(){
  const rs=currentRoundLessons();
  els.lessonList.innerHTML="";

  if(isRandomRound()){
    const remaining=incompleteQuestionRefs().length;
    const btn=document.createElement("button");
    btn.className="lesson-btn random-only";
    btn.disabled=true;
    btn.innerHTML=`
      <span class="lesson-index">?</span>
      <span class="lesson-info">
        <strong>ランダム練習</strong>
        <small>Lessonに関係なく出題・残り ${remaining}問</small>
      </span>`;
    els.lessonList.appendChild(btn);

    const note=document.createElement("div");
    note.className="random-mode-note";
    note.textContent=`第${state.currentRound+1}回は全問題からランダムに出題されます。`;
    els.lessonList.appendChild(note);
    return;
  }

  lessons.forEach((lesson,i)=>{
    const done=rs[i].completed.length, total=lesson.items.length, locked=!lessonUnlocked(i);
    const btn=document.createElement("button");
    btn.className=`lesson-btn ${i===currentLesson?"active":""} ${locked?"locked":""}`;
    btn.disabled=locked || answered;
    btn.innerHTML=`<span class="lesson-index">${i+1}</span><span class="lesson-info"><strong>${lesson.title}</strong><small>${done}/${total} 完了</small></span><span class="lesson-check">${done===total?"✓":""}</span>`;
    btn.onclick=()=>{
      currentLesson=i;
      const n=lesson.items.findIndex((_,idx)=>!rs[i].completed.includes(idx));
      currentQuestion=n>=0?n:0;
      renderAll();
    };
    els.lessonList.appendChild(btn);
  });
}

function renderGrid(){
  els.grid.innerHTML="";
  sim.data.flat().forEach((value,idx)=>{
    const row=Math.floor(idx/7), col=idx%7;
    const d=document.createElement("div");
    d.className="cell"; d.dataset.row=row; d.dataset.col=col;

    const isEditingCell = !!(
      sim.edit &&
      sim.active &&
      row===sim.active[0] &&
      col===sim.active[1] &&
      row>0 && col>0
    );

    if(isEditingCell){
      const editValue=String(sim.editText ?? value ?? "");
      const caretPos=Math.max(0,Math.min(
        Number.isInteger(sim.editCaretIndex) ? sim.editCaretIndex : editValue.length,
        editValue.length
      ));
      const before=editValue.slice(0,caretPos);
      const after=editValue.slice(caretPos);

      d.classList.add("editing-cell");
      d.append(document.createTextNode(before));

      const caret=document.createElement("span");
      caret.className="cell-edit-caret";
      caret.setAttribute("aria-hidden","true");
      d.append(caret);

      d.append(document.createTextNode(after));
    }else{
      d.textContent=value;
    }

    if(row===0||col===0) d.classList.add("header-cell");
    if(sim.active && row===sim.active[0]&&col===sim.active[1]) d.classList.add("active-cell");
    if(sim.selection && insideSelection(row,col,sim.selection) && row>0 && col>0) d.classList.add("user-selected");
    if(sim.filters && row===1 && col>0) d.classList.add("filter-header");
    if(sim.table && row===1 && col>0) d.classList.add("table-header");
    if(sim.table && row>1 && col>0) d.classList.add("table-body");
    els.grid.appendChild(d);
  });
  updateFormulaBar();
}

function cell(r,c){ return els.grid.querySelector(`[data-row="${r}"][data-col="${c}"]`); }
function insideSelection(r,c,s){
  const r1=Math.min(s.r1,s.r2),r2=Math.max(s.r1,s.r2),c1=Math.min(s.c1,s.c2),c2=Math.max(s.c1,s.c2);
  return r>=r1&&r<=r2&&c>=c1&&c<=c2;
}
function applySelectionVisual(){
  [...els.grid.querySelectorAll(".cell")].forEach(el=>{
    el.classList.remove("active-cell","user-selected","row-header-selected");
    const r=+el.dataset.row, c=+el.dataset.col;
    if(sim.selection && insideSelection(r,c,sim.selection) && r>0 && c>0) el.classList.add("user-selected");
    if(sim.active && r===sim.active[0] && c===sim.active[1]) el.classList.add("active-cell");
  });

  const item=lessons[currentLesson]?.items?.[currentQuestion];
  const rowMatch=/^ROW(\d+)$/i.exec(item?.select||"");
  if(rowMatch && selectionMatches(item)){
    const header=cell(+rowMatch[1],0);
    if(header) header.classList.add("row-header-selected");
  }
  updateFormulaBar();
}
function setActive(r,c){ sim.active=[r,c]; sim.anchor=[r,c]; sim.selection={r1:r,c1:c,r2:r,c2:c}; applySelectionVisual(); }
function clearSelection(){ sim.active=null; sim.anchor=null; sim.selection=null; applySelectionVisual(); }
function updateFormulaBar(){
  if(!sim.active){ els.nameBox.textContent=""; els.formulaValue.textContent=""; return; }
  const [r,c]=sim.active; const letters=["","A","B","C","D","E","F"];
  if(sim.selection){
    const a=rcToRef(sim.selection.r1,sim.selection.c1), b=rcToRef(sim.selection.r2,sim.selection.c2);
    els.nameBox.textContent = a===b ? a : `${a}:${b}`;
  } else els.nameBox.textContent=rcToRef(r,c);
  els.formulaValue.textContent = sim.edit && sim.editText!==null ? sim.editText : (sim.data[r]?.[c] ?? "");
}
function flashCell(r,c){ const el=cell(r,c); if(el) el.classList.add("target-flash"); }
function selectRange(r1,c1,r2,c2){
  sim.selection={r1,c1,r2,c2}; sim.anchor=[r1,c1]; sim.active=[r2,c2];
  applySelectionVisual();
  [...els.grid.children].forEach(el=>{
    el.classList.remove("whole-selected");
    const r=+el.dataset.row,c=+el.dataset.col;
    if(r>=Math.min(r1,r2)&&r<=Math.max(r1,r2)&&c>=Math.min(c1,c2)&&c<=Math.max(c1,c2)) el.classList.add("whole-selected");
  });
}
function rcToRef(r,c){ const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; return (letters[c-1]||"A")+r; }
function refToRC(ref){ const m=/^([A-Z]+)(\d+)$/i.exec(ref); if(!m) return null; let c=0; for(const ch of m[1].toUpperCase()) c=c*26+(ch.charCodeAt(0)-64); return [+m[2],c]; }
function requiredRect(spec){
  if(!spec) return null;
  const rowMatch=/^ROW(\d+)$/i.exec(spec);
  if(rowMatch){
    const r=+rowMatch[1];
    return {r1:r,c1:1,r2:r,c2:6,rowSelection:true};
  }
  const parts=spec.split(":");
  const a=refToRC(parts[0]), b=refToRC(parts[1]||parts[0]);
  return {r1:Math.min(a[0],b[0]),c1:Math.min(a[1],b[1]),r2:Math.max(a[0],b[0]),c2:Math.max(a[1],b[1])};
}
function selectionSpecLabel(spec){
  const m=/^ROW(\d+)$/i.exec(spec||"");
  return m ? `${m[1]}行目` : spec;
}
function normalizedSelection(){
  if(!sim.selection) return null; return {r1:Math.min(sim.selection.r1,sim.selection.r2),c1:Math.min(sim.selection.c1,sim.selection.c2),r2:Math.max(sim.selection.r1,sim.selection.r2),c2:Math.max(sim.selection.c1,sim.selection.c2)};
}
function selectionMatches(item){
  if(!item.select) return true; const need=requiredRect(item.select), got=normalizedSelection();
  return !!got && need.r1===got.r1&&need.c1===got.c1&&need.r2===got.r2&&need.c2===got.c2;
}
function selectedCellCoords(){ if(!sim.active) return null; return [...sim.active]; }

function editingQuestionLocksCellSelection(){
  const item=lessons[currentLesson]?.items?.[currentQuestion];
  if(!item || item.select || !sim.edit) return false;
  return [
    "入力を確定して下へ移動",
    "入力をキャンセル",
    "セル内で改行"
  ].includes(item.action);
}

function keepEditingCellFixed(){
  if(!sim.edit) return;
  sim.active=[3,2];
  sim.anchor=[3,2];
  sim.selection={r1:3,c1:2,r2:3,c2:2};
  applySelectionVisual();
}

let isDragging=false;
let dragPointerId=null;

function selectableCellFromPoint(x,y){
  const node=document.elementFromPoint(x,y);
  const el=node?.closest?.(".cell");
  if(!el || !els.grid.contains(el)) return null;
  const r=+el.dataset.row, c=+el.dataset.col;
  if(r===0 || c===0) return null;
  return {el,r,c};
}

function beginUserSelection(r,c,extend=false){
  if(extend && sim.anchor){
    sim.active=[r,c];
    sim.selection={r1:sim.anchor[0],c1:sim.anchor[1],r2:r,c2:c};
  } else {
    sim.anchor=[r,c];
    sim.active=[r,c];
    sim.selection={r1:r,c1:c,r2:r,c2:c};
  }
  applySelectionVisual();
  updateSelectionGuidance();
}

els.grid.addEventListener("pointerdown",e=>{
  if(e.button!==0) return;

  // v13: 正解後はセル選択・ドラッグも変更できない。
  if(answered){
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  const el=e.target.closest(".cell");
  if(!el) return;
  const r=+el.dataset.row,c=+el.dataset.col;

  const item=lessons[currentLesson].items[currentQuestion];

  // Lesson 2 の編集継続問題は、すでに B3 を編集中。
  // 別セル・行列見出しをクリックしても編集対象を移動させない。
  if(editingQuestionLocksCellSelection()){
    e.preventDefault();
    e.stopPropagation();
    keepEditingCellFixed();
    return;
  }

  if(r===0) return;

  // 行挿入・行削除では、Excelと同様に左側の行番号をクリックして行全体を選択。
  if(c===0){
    if(item.select===`ROW${r}`){
      e.preventDefault();
      isDragging=false;
      dragPointerId=null;
      sim.anchor=[r,1];
      sim.active=[r,1];
      sim.selection={r1:r,c1:1,r2:r,c2:6};
      applySelectionVisual();
      const header=cell(r,0);
      if(header) header.classList.add("row-header-selected");
      updateSelectionGuidance();
    }
    return;
  }

  e.preventDefault();
  dragPointerId=e.pointerId;
  isDragging=!e.shiftKey;
  beginUserSelection(r,c,e.shiftKey);
});

window.addEventListener("pointermove",e=>{
  if(!isDragging || e.pointerId!==dragPointerId || !sim.anchor) return;
  const hit=selectableCellFromPoint(e.clientX,e.clientY);
  if(!hit) return;
  const current=normalizedSelection();
  if(current && sim.active && sim.active[0]===hit.r && sim.active[1]===hit.c) return;
  sim.active=[hit.r,hit.c];
  sim.selection={r1:sim.anchor[0],c1:sim.anchor[1],r2:hit.r,c2:hit.c};
  applySelectionVisual();
});

window.addEventListener("pointerup",e=>{
  if(e.pointerId!==dragPointerId) return;
  isDragging=false;
  dragPointerId=null;
  updateSelectionGuidance();
});

window.addEventListener("pointercancel",e=>{
  if(e.pointerId!==dragPointerId) return;
  isDragging=false;
  dragPointerId=null;
});

// Pointer Events 非対応環境や単純クリックでも確実に選択できるようにするフォールバック。
els.grid.addEventListener("click",e=>{
  if(answered){
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  const el=e.target.closest(".cell");
  if(!el) return;

  if(editingQuestionLocksCellSelection()){
    e.preventDefault();
    e.stopPropagation();
    keepEditingCellFixed();
    return;
  }

  const r=+el.dataset.row,c=+el.dataset.col;
  if(r===0||c===0) return;
  if(!sim.selection || !insideSelection(r,c,sim.selection)) beginUserSelection(r,c,e.shiftKey);
});

function updateSelectionGuidance(){
  if(answered) return; const item=lessons[currentLesson].items[currentQuestion];
  if(!item.select) return;
  if(selectionMatches(item)){
    els.feedback.className="feedback neutral ready";
    els.feedback.innerHTML=`選択は正しいです（<b>${selectionSpecLabel(item.select)}</b>）。次にショートカットキーを入力してください。`;
  } else if(sim.selection){
    const got=normalizedSelection(); const a=rcToRef(got.r1,got.c1),b=rcToRef(got.r2,got.c2);
    els.feedback.className="feedback neutral";
    els.feedback.textContent=`現在の選択: ${a===b?a:`${a}:${b}`}。問題文で指定されたセル／範囲を選択してください。`;
  }
}

function renderQuestion(){
  clearTimeout(wrongResetTimer); answered=false; pressed.clear(); freshSim();
  setCorrectAnswerLock(false);
  const lesson=lessons[currentLesson], item=lesson.items[currentQuestion];
  const rs=currentRoundLessons();
  els.roundText.textContent=`${state.currentRound+1} / ${TOTAL_ROUNDS}`;

  if(isRandomRound()){
    const remainingAll=incompleteQuestionRefs().length;
    const totalAll=totalQuestionsPerRound();
    const doneAll=totalAll-remainingAll;
    els.lessonTag.textContent="ランダム練習";
    els.lessonTitle.textContent=`第${state.currentRound+1}回　ランダム出題`;
    els.lessonDescription.textContent=`Lessonに関係なく、全${totalAll}問からランダムに出題しています。`;
    els.lessonProgressText.textContent=`${doneAll} / ${totalAll}`;
    els.questionNo.textContent=`第${state.currentRound+1}回 / ${TOTAL_ROUNDS}回　ランダム問題　未達成 ${remainingAll}問`;
  }else{
    els.lessonTag.textContent=`Lesson ${currentLesson+1}`;
    els.lessonTitle.textContent=lesson.title;
    els.lessonDescription.textContent=lesson.description;
    els.lessonProgressText.textContent=`${rs[currentLesson].completed.length} / ${lesson.items.length}`;
    const remaining=incompleteQuestionIndices(currentLesson).length;
    els.questionNo.textContent=`第${state.currentRound+1}回 / ${TOTAL_ROUNDS}回　問題 ${currentQuestion+1} / ${lesson.items.length}　未達成 ${remaining}問`;
  }
  els.actionText.textContent=item.task; els.hintText.textContent=item.select ? `操作対象も採点されます。指定されたセル／範囲をマウスで選択してください。` : item.tip;
  els.pressedKeys.innerHTML=`<span class="placeholder">キー入力待ち</span>`;
  els.feedback.className="feedback neutral"; els.feedback.textContent=item.select ? "まず、問題文で指定されたセル／範囲をマウスで選択してください。" : "ショートカットキーを入力してください。";
  els.skipBtn.disabled=false; els.nextBtn.disabled=true; els.retryVisualBtn.disabled=true;
  prepareQuestionScene(item.action);
}

function prepareQuestionScene(action){
  if(action==="貼り付け") { sim.copied={value:"120",from:[3,2]}; renderGrid(); showToast("B3 の「120」はコピー済みです。貼り付け先 D5 を自分で選択してください。",5000); }
  if(action==="元に戻す") { sim.data[3][2]="999"; renderGrid(); flashCell(3,2); showToast("直前の操作で B3 が 120 → 999 に変更されました。",5000); }
  if(action==="やり直し") { sim.data[3][2]="120"; renderGrid(); showToast("直前に 999 → 120 へ『元に戻す』を実行済みです。",5000); }
  if(action==="入力を確定して下へ移動" || action==="入力をキャンセル" || action==="セル内で改行") {
    sim.edit=true;
    sim.active=[3,2];
    sim.anchor=[3,2];
    sim.selection={r1:3,c1:2,r2:3,c2:2};

    if(action==="セル内で改行"){
      sim.editText="東京都熊谷市";
      sim.editCaretIndex=3; // 東京都｜熊谷市
    }else{
      sim.editText="1200";
      sim.editCaretIndex=4; // 1200｜
    }

    renderGrid();
    els.statusText.textContent="セルを編集中";
  }
  if(action==="前のシートへ移動") { sim.sheet=1; renderSheetTabs(); }
}

function formatKbd(display){ return display.split(" + ").map(x=>`<kbd>${escapeHtml(x)}</kbd>`).join(" + "); }
function escapeHtml(s){ return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function canonicalKey(e){
  if(["Control","Shift","Alt","Escape","Enter","Home","End","PageDown","PageUp"].includes(e.key)) return e.key;
  if(e.key.startsWith("Arrow") || /^F\d+$/.test(e.key)) return e.key;
  if(e.code==="Space") return " ";

  // 記号は e.code より e.key を優先する。
  // JIS/US配列で物理キー位置が違っても、実際に入力された記号で判定する。
  if(e.key==="+") return "+";
  if(e.key==="=") return "=";
  if(e.key==="^") return "^";

  // Ctrl+Shift+^:
  // JISでは Shift+^ が "~" と通知されるブラウザがあるため教材上は ^ とみなす。
  if(e.ctrlKey && e.shiftKey && e.key==="~") return "^";

  if(e.code==="NumpadAdd") return "+";
  if(e.code==="NumpadSubtract") return "-";
  if(e.code==="NumpadEqual") return "=";

  // 一部JIS環境では "=" が Minus / IntlYen / Equal 付近から生成される。
  // e.key で拾えなかった場合のみコードを補助的に使う。
  if(e.code==="Equal"){
    if(e.shiftKey) return "+";
    return "=";
  }
  if(e.code==="Semicolon"){
    if(e.shiftKey && e.key==="+") return "+";
    return ";";
  }
  if(e.code==="Minus"){
    if(e.key==="=") return "=";
    return "-";
  }

  if(/^Digit[0-9]$/.test(e.code)) return e.code.replace("Digit","");
  if(e.key.length===1) return e.key.toLowerCase();
  return e.key;
}

function normalizeCombo(combo){
  const order=["Control","Shift","Alt"];
  const unique=[...new Set(combo)];
  return [...order.filter(k=>unique.includes(k)), ...unique.filter(k=>!order.includes(k))];
}

function comboFromEvent(e, key){
  const combo=[];
  if(e.ctrlKey) combo.push("Control");
  if(e.shiftKey) combo.push("Shift");
  if(e.altKey) combo.push("Alt");
  if(!["Control","Shift","Alt"].includes(key)) combo.push(key);
  return normalizeCombo(combo);
}

function expectedCombo(){
  return normalizeCombo(lessons[currentLesson].items[currentQuestion].keys);
}

function exactCombo(a,b){
  const aa=normalizeCombo(a), bb=normalizeCombo(b);
  return aa.length===bb.length && aa.every((v,i)=>v===bb[i]);
}

function sameCombo(actual, expected){
  const a=normalizeCombo(actual), b=normalizeCombo(expected);
  if(exactCombo(a,b)) return true;

  // JISキーボードでは "=" を入力するため Shift が必要な場合がある。
  // Excelの Alt+= としては Shift を補助キーとして許容する。
  if(b.includes("Alt") && b.includes("=") && !b.includes("Shift")){
    const relaxed=a.filter(k=>k!=="Shift");
    if(exactCombo(relaxed,b)) return true;
  }

  // Ctrl+Shift++ は、テンキー + では Shift を伴わずに + が入力できる。
  if(b.includes("Control") && b.includes("Shift") && b.includes("+")){
    const withoutShift=b.filter(k=>k!=="Shift");
    if(exactCombo(a,withoutShift)) return true;
  }

  return false;
}

function comboSignature(keys){ return normalizeCombo(keys).join("|"); }

function findCommand(combo){
  for(const l of lessons){
    for(const item of l.items){
      if(sameCombo(combo,item.keys)) return item;
    }
  }
  return null;
}

function displayKey(k){
  const m={
    Control:"Ctrl",Shift:"Shift",Alt:"Alt",Escape:"Esc"," ":"Space",
    "^":"^","+":"+","=":"=",
    ArrowRight:"→",ArrowLeft:"←",ArrowUp:"↑",ArrowDown:"↓"
  };
  return m[k]||k.toUpperCase();
}

function renderPressed(combo){
  els.pressedKeys.innerHTML=combo.length
    ? combo.map((k,i)=>`${i?'<span class="plus">+</span>':''}<span class="keycap">${displayKey(k)}</span>`).join("")
    : `<span class="placeholder">キー入力待ち</span>`;
}

function shouldPrevent(e){
  // 教材で使う修飾キーショートカットは可能な限りブラウザ既定動作を抑止する。
  return e.ctrlKey || e.altKey || ["F2","F11","Escape"].includes(e.key);
}

function handleShortcutKeydown(e){
  if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) return;

  // v13: 正解後は「次の問題」を押すまで、すべてのキー入力を無効化。
  if(answered){
    e.preventDefault();
    e.stopPropagation();
    if(typeof e.stopImmediatePropagation==="function") e.stopImmediatePropagation();
    return;
  }

  if(shouldPrevent(e)){
    e.preventDefault();
    e.stopPropagation();
    // 同じページ内の他ハンドラより先に処理する。
    if(typeof e.stopImmediatePropagation==="function") e.stopImmediatePropagation();
  }

  const k=canonicalKey(e);
  if(!k) return;

  // 修飾キー単体を押した段階でも表示する。
  const combo=comboFromEvent(e,k);
  renderPressed(combo);

  // Ctrl/Shift/Alt 単体では採点しない。
  if(["Control","Shift","Alt"].includes(k)) return;

  const command=findCommand(combo);
  if(command) grade(combo,command);
}

// capture:true でページ内の他要素より先に受け取る。
// ただし Ctrl+T などブラウザ予約キーは Keyboard Lock がないと
// JavaScriptへ届かないブラウザがある。
document.addEventListener("keydown", handleShortcutKeydown, {capture:true, passive:false});

document.addEventListener("keyup", e=>{
  if(answered){
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  setTimeout(()=>renderPressed([]),180);
}, {capture:true, passive:false});

let practiceMode = false;
let keyboardLockActive = false;

function setPracticeModeUI(mode, message){
  els.practiceModeStatus.className=`practice-mode-status ${mode}`;
  els.practiceModeStatus.textContent = mode==="on" ? "ON" : mode==="partial" ? "部分" : "OFF";
  els.practiceModeBtn.classList.toggle("active", mode!=="off");
  document.body.classList.toggle("practice-mode-active", mode!=="off");
  if(message) els.keyboardNotice.textContent=message;
}

async function enterPracticeMode(){
  let fullscreenOk=false;
  let browserLockRequested=false;
  let keyboardApiOk=false;

  // 新しい Fullscreen Keyboard Lock オプションをまず試す。
  try{
    if(!document.fullscreenElement){
      try{
        await document.documentElement.requestFullscreen({
          navigationUI:"hide",
          keyboardLock:"browser"
        });
        browserLockRequested=true;
      }catch(_){
        await document.documentElement.requestFullscreen({navigationUI:"hide"});
      }
    }
    fullscreenOk=!!document.fullscreenElement;
  }catch(_){
    fullscreenOk=false;
  }

  // 対応ブラウザでは Keyboard Lock API でも全キー捕捉を試みる。
  try{
    if(navigator.keyboard && typeof navigator.keyboard.lock==="function"){
      await navigator.keyboard.lock();
      keyboardApiOk=true;
      keyboardLockActive=true;
    }
  }catch(_){
    keyboardApiOk=false;
    keyboardLockActive=false;
  }

  practiceMode=true;

  if(keyboardApiOk || browserLockRequested){
    setPracticeModeUI(
      "on",
      "練習モード ON：ブラウザ予約ショートカットの捕捉を試みています。Ctrl+T、Ctrl+N などもこの画面内で練習してください。"
    );
  }else if(fullscreenOk){
    setPracticeModeUI(
      "partial",
      "練習モード（部分対応）：全画面には入りましたが Keyboard Lock は利用できません。Ctrl+T など一部のブラウザ予約キーはブラウザ側が優先される場合があります。"
    );
  }else{
    setPracticeModeUI(
      "partial",
      "練習モード（部分対応）：通常の preventDefault で抑止しています。Ctrl+T など一部の予約キーは止められない場合があります。"
    );
  }
}

async function exitPracticeMode(){
  try{
    if(navigator.keyboard && typeof navigator.keyboard.unlock==="function"){
      navigator.keyboard.unlock();
    }
  }catch(_){}
  keyboardLockActive=false;

  try{
    if(document.fullscreenElement) await document.exitFullscreen();
  }catch(_){}

  practiceMode=false;
  setPracticeModeUI(
    "off",
    "Ctrl+T などのブラウザ予約キーを練習するときは「ショートカット練習モード」をONにしてください。Chrome / Edge 推奨です。"
  );
}

els.practiceModeBtn.onclick=async()=>{
  if(practiceMode || document.fullscreenElement) await exitPracticeMode();
  else await enterPracticeMode();
};

document.addEventListener("fullscreenchange", ()=>{
  if(!document.fullscreenElement && practiceMode){
    practiceMode=false;
    keyboardLockActive=false;
    setPracticeModeUI(
      "off",
      "全画面を終了したため練習モードをOFFにしました。Ctrl+T などを練習するときは再度ONにしてください。"
    );
  }
});


function grade(combo,command){
  if(answered) return;
  const st=currentRoundLessons()[currentLesson]; st.attempts++;
  const item=lessons[currentLesson].items[currentQuestion];
  const keyCorrect=sameCombo(combo,expectedCombo());
  const selectionCorrect=selectionMatches(item);

  if(keyCorrect && selectionCorrect){
    simulateAction(command.action);
    answered=true;
    st.correct++;
    if(!st.completed.includes(currentQuestion)) st.completed.push(currentQuestion);
    saveState();

    const justFinishedRound=roundIsComplete(state.currentRound);

    setCorrectAnswerLock(true);
    els.feedback.className="feedback ok";

    if(justFinishedRound){
      // v20: 回の最終問題は遅延処理を使わず、その場で完了画面へ進む。
      // ブラウザ予約キーやフォーカス変化があっても setTimeout に依存しない。
      els.nextBtn.disabled=true;
      els.skipBtn.disabled=true;

      renderLessons();
      renderStats();
      els.lessonProgressText.textContent=`${st.completed.length} / ${lessons[currentLesson].items.length}`;

      const completedRound=state.currentRound;

      if(completedRound===TOTAL_ROUNDS-1){
        // 第5回：最後の正解を保存した同じイベント内で最終画面を即表示。
        state.finished=true;
        state.finishedAt=new Date().toISOString();
        saveState();
        showCompletionScreen();
        return;
      }

      // 第1～4回も同様に、タイマーを使わず終了メッセージを即表示。
      saveState();
      showRoundComplete(completedRound);
      return;
    }

    els.feedback.innerHTML=`正解です！ <b>${item.select?selectionSpecLabel(item.select)+" を選択 → ":""}</b>${formatKbd(command.display)}<br><small>「次の問題」を押すまで、キー入力とセル操作はロックされています。</small>`;
    renderLessons();
    renderStats();
    els.lessonProgressText.textContent=`${st.completed.length} / ${lessons[currentLesson].items.length}`;
    return;
  }

  saveState(); renderStats();
  if(keyCorrect && !selectionCorrect){
    simulateAction(command.action);
    els.feedback.className="feedback bad";
    els.feedback.innerHTML=`ショートカットキーは正しいですが、<b>選択セル／範囲が違います</b>。<br><small>指定された ${item.select} を選択してから、もう一度 ${formatKbd(item.display)} を押してください。</small>`;
  } else {
    simulateAction(command.action);
    els.feedback.className="feedback bad";
    els.feedback.innerHTML=`そのキーは「${command.action}」です。${item.select&&!selectionCorrect?` また、選択は ${selectionSpecLabel(item.select)} にしてください。`:""}<br><small>約1.4秒後に問題の状態へ戻ります。</small>`;
  }
  wrongResetTimer=setTimeout(()=>{ if(!answered){ freshSim(); prepareQuestionScene(item.action); } },1400);
}

function simulateAction(action){
  hideOverlay(); hideToast(); els.statusText.textContent=action;
  switch(action){
    case "コピー": { const p=selectedCellCoords()||[3,2]; sim.copied={value:sim.data[p[0]][p[1]],from:p}; cell(p[0],p[1])?.classList.add("copied-cell"); showToast(`${rcToRef(p[0],p[1])} をコピーしました。`,2200); break; }
    case "貼り付け": { const p=selectedCellCoords()||[5,4]; sim.data[p[0]][p[1]]=sim.copied?.value||"120"; renderGrid(); flashCell(p[0],p[1]); showToast(`${rcToRef(p[0],p[1])} に貼り付けました。`,2200); break; }
    case "切り取り": { const p=selectedCellCoords()||[3,2]; sim.cut={value:sim.data[p[0]][p[1]],from:p}; cell(p[0],p[1])?.classList.add("cut-cell"); showToast(`${rcToRef(p[0],p[1])} を切り取り状態にしました。`,2200); break; }
    case "元に戻す": sim.data[3][2]="120"; renderGrid(); flashCell(3,2); showToast("変更を元に戻しました：999 → 120",2400); break;
    case "やり直し": sim.data[3][2]="999"; renderGrid(); flashCell(3,2); showToast("変更をやり直しました：120 → 999",2400); break;
    case "上書き保存": els.saveState.textContent="保存中…"; setTimeout(()=>{els.saveState.textContent="保存済み ✓";},450); showToast("ブックを保存しました。",1800); break;
    case "検索": showDialog("検索", `<div>検索する文字列:</div><div class="sim-field">東京</div><div>検索結果: E2 / E5</div>`, "次を検索"); break;
    case "置換": showDialog("検索と置換", `<div>検索する文字列:</div><div class="sim-field">東京</div><div>置換後の文字列:</div><div class="sim-field">東京都</div>`, "すべて置換"); break;
    case "アクティブセルを編集":
      sim.edit=true;
      sim.editText=String(sim.data[3][2] ?? "");
      sim.editCaretIndex=sim.editText.length;
      sim.active=[3,2];
      sim.anchor=[3,2];
      sim.selection={r1:3,c1:2,r2:3,c2:2};
      renderGrid();
      els.statusText.textContent="セルを編集中";
      showToast("B3 をセル内編集しています。",2200);
      break;
    case "入力を確定して下へ移動": sim.data[3][2]="1200"; sim.edit=false; sim.editText=null; sim.editCaretIndex=null; sim.active=[4,2]; sim.anchor=[4,2]; sim.selection={r1:4,c1:2,r2:4,c2:2}; renderGrid(); flashCell(3,2); showToast("入力を確定して B4 へ移動しました。",2200); break;
    case "入力をキャンセル": sim.edit=false; sim.editText=null; sim.editCaretIndex=null; sim.active=[3,2]; sim.anchor=[3,2]; sim.selection={r1:3,c1:2,r2:3,c2:2}; renderGrid(); showToast("編集内容をキャンセルし、元の値「120」に戻しました。",2200); break;
    case "セル内で改行": sim.data[3][2]="東京都\n熊谷市"; sim.edit=false; sim.editText=null; sim.editCaretIndex=null; renderGrid(); const br=cell(3,2); if(br){br.style.whiteSpace="pre-line";br.style.lineHeight="12px";} showToast("「東京都」と「熊谷市」の間にセル内改行を挿入しました。",2200); break;
    case "上のセルの内容を下へコピー": sim.data[4][2]=sim.data[3][2]; renderGrid(); flashCell(4,2); showToast("B3 の値を B4 へコピーしました。",2200); break;
    case "左のセルの内容を右へコピー": sim.data[3][3]=sim.data[3][2]; renderGrid(); flashCell(3,3); showToast("B3 の値を C3 へコピーしました。",2200); break;
    case "データ範囲の右端まで移動": setActive(3,6); flashCell(3,6); break;
    case "データ範囲の下端まで移動": setActive(5,2); flashCell(5,2); break;
    case "右端まで範囲選択": renderGrid(); selectRange(3,2,3,6); showToast("B3:F3 を選択しました。",2000); break;
    case "下端まで範囲選択": renderGrid(); selectRange(3,2,5,2); showToast("B3:B5 を選択しました。",2000); break;
    case "行全体を選択": renderGrid(); selectRange(3,0,3,6); showToast("3行目を選択しました。",2000); break;
    case "列全体を選択": renderGrid(); selectRange(0,2,6,2); showToast("B列を選択しました。",2000); break;
    case "シート全体を選択": renderGrid(); selectRange(0,0,6,6); showToast("表全体を選択しました。",2000); break;
    case "A1セルへ移動": setActive(1,1); flashCell(1,1); break;
    case "使用範囲の最後へ移動": setActive(6,6); flashCell(6,6); break;
    case "太字を切り替え": cell(3,2)?.classList.add("bold-cell"); els.fakeBold.classList.add("sim-on"); showToast("B3 を太字にしました。",2000); break;
    case "斜体を切り替え": cell(3,2)?.classList.add("italic-cell"); showToast("B3 を斜体にしました。",2000); break;
    case "下線を切り替え": cell(3,2)?.classList.add("underline-cell"); showToast("B3 に下線を付けました。",2000); break;
    case "セルの書式設定を開く": showDialog("セルの書式設定", `<div style="display:flex;gap:12px;margin-bottom:12px"><b>表示形式</b><span>配置</span><span>フォント</span><span>罫線</span></div><div>分類:</div><div class="sim-field">標準</div><div>サンプル: 120</div>`, "OK"); break;
    case "行挿入": insertFakeRow(); break;
    case "行削除": deleteFakeRow(); break;
    case "フィルターをオン・オフ": sim.filters=!sim.filters; renderGrid(); showToast(sim.filters?"フィルターを設定しました。":"フィルターを解除しました。",2200); break;
    case "テーブルを作成": sim.table=true; renderGrid(); showToast("選択範囲をテーブルに変換しました。",2200); break;
    case "オートSUM": sim.data[6][4]="=SUM(D2:D5)"; sim.active=[6,4]; renderGrid(); els.formulaValue.textContent="=SUM(D2:D5)"; flashCell(6,4); showToast("SUM 関数を自動入力しました。",2200); break;
    case "新しいシートを追加": addSheet(); break;
    case "次のシートへ移動": sim.sheet=Math.min(sim.sheet+1,2); renderSheetTabs(); showToast("Sheet2 へ移動しました。",1800); break;
    case "前のシートへ移動": sim.sheet=Math.max(sim.sheet-1,0); renderSheetTabs(); showToast("Sheet1 へ移動しました。",1800); break;
    case "新しいブックを作成": showNewWorkbook(); break;
    case "ブックを開く": showOpenPanel(); break;
    case "印刷画面を開く": showPrintPreview(); break;
  }
}

function insertFakeRow(){ const row=["4","新規行","","","","",""]; sim.data.splice(4,0,row); sim.data=sim.data.slice(0,8); renderGrid(); [...els.grid.querySelectorAll('[data-row="4"]')].forEach(e=>e.classList.add("inserted")); showToast("新しい行を挿入しました。",2200); }
function deleteFakeRow(){ [...els.grid.querySelectorAll('[data-row="3"]')].forEach(e=>e.classList.add("deleted")); setTimeout(()=>{ sim.data.splice(3,1); sim.data.push(["6","","","","","",""]); renderGrid(); },430); showToast("選択行を削除しました。",2200); }

function renderSheetTabs(){
  const names=["Sheet1","Sheet2","集計"]; els.sheetTabs.innerHTML=`<button class="sheet-add" type="button">＋</button>`+names.map((n,i)=>`<button class="sheet-tab ${i===sim.sheet?"active":""}" type="button">${n}</button>`).join("");
}
function addSheet(){ renderSheetTabs(); const b=document.createElement("button"); b.className="sheet-tab active new-sheet"; b.textContent="Sheet4"; [...els.sheetTabs.querySelectorAll('.sheet-tab')].forEach(x=>x.classList.remove('active')); els.sheetTabs.appendChild(b); showToast("新しいワークシートを追加しました。",2200); }

function showDialog(title,body,action){ els.simOverlay.hidden=false; els.simOverlay.innerHTML=`<div class="sim-dialog"><div class="sim-dialog-title"><span>${title}</span><span>×</span></div><div class="sim-dialog-body">${body}<div class="sim-dialog-actions"><span>キャンセル</span><span class="accent">${action}</span></div></div></div>`; }
function showPrintPreview(){ els.simOverlay.hidden=false; els.simOverlay.innerHTML=`<div class="print-preview"><div class="print-sidebar"><b>印刷</b><div class="sim-field">1 部</div><div class="sim-field">プリンター</div><div class="sim-field">設定</div></div><div class="print-paper"><b>売上管理.xlsx</b><hr><p>商品　単価　数量　金額</p><p>ノート　250　4　1000</p><p>ペン　120　8　960</p><p>ファイル　380　2　760</p></div></div>`; }
function showNewWorkbook(){ els.simOverlay.hidden=false; els.simOverlay.innerHTML=`<div class="new-workbook"><h4>新規</h4><div class="blank-book-card">空白のブック</div></div>`; }
function showOpenPanel(){ els.simOverlay.hidden=false; els.simOverlay.innerHTML=`<div class="open-panel"><h4>開く</h4><div class="file-row"><span>最近使ったファイル</span><span>〉</span></div><div class="file-row"><span>売上管理_先月.xlsx</span><span>今日</span></div><div class="file-row"><span>予算2026.xlsx</span><span>昨日</span></div><div class="file-row"><span>参照...</span><span>📁</span></div></div>`; }
function hideOverlay(){ els.simOverlay.hidden=true; els.simOverlay.innerHTML=""; }
function showToast(msg,ms=2000){ clearTimeout(showToast.t); els.simToast.textContent=msg; els.simToast.hidden=false; showToast.t=setTimeout(hideToast,ms); }
function hideToast(){ clearTimeout(showToast.t); els.simToast.hidden=true; }

function resetCurrentInput(){
  const wasAnswered=answered;
  clearTimeout(wrongResetTimer);
  wrongResetTimer=null;
  pressed.clear();
  freshSim();

  const item=lessons[currentLesson].items[currentQuestion];
  els.pressedKeys.innerHTML=`<span class="placeholder">キー入力待ち</span>`;
  prepareQuestionScene(item.action);

  if(wasAnswered){
    // 正解済みの場合は表示だけリセットし、正解ロックは解除しない。
    answered=true;
    setCorrectAnswerLock(true);
    els.feedback.className="feedback ok";
    els.feedback.innerHTML=`正解済みです。入力表示をリセットしました。<br><small>「次の問題」を押すまで入力はロックされています。</small>`;
    renderLessons();
    return;
  }

  answered=false;
  setCorrectAnswerLock(false);
  els.skipBtn.disabled=false;
  els.feedback.className="feedback neutral";
  els.feedback.textContent=item.select
    ? "入力をリセットしました。まず、問題文で指定されたセル／範囲をマウスで選択してください。"
    : "入力をリセットしました。ショートカットキーを入力してください。";
  els.nextBtn.disabled=true;
  els.retryVisualBtn.disabled=true;
  renderLessons();
}

els.inputResetBtn.onclick=resetCurrentInput;

els.retryVisualBtn.onclick=()=>{
  const keepLocked=answered;
  freshSim();
  prepareQuestionScene(lessons[currentLesson].items[currentQuestion].action);
  setTimeout(()=>{
    simulateAction(lessons[currentLesson].items[currentQuestion].action);
    if(keepLocked){ answered=true; setCorrectAnswerLock(true); renderLessons(); }
  },250);
};
els.skipBtn.onclick=()=>{
  // スキップした問題は completed に入れない。
  // そのためLesson末尾で、この問題だけが再出題対象になる。
  nextQuestion();
};
els.nextBtn.onclick=nextQuestion;

function incompleteQuestionIndices(lessonIndex){
  const done = new Set(currentRoundLessons()[lessonIndex].completed);
  return lessons[lessonIndex].items
    .map((_, idx) => idx)
    .filter(idx => !done.has(idx));
}

function isRandomRound(roundIndex=state.currentRound){
  return roundIndex >= 3; // 第4回・第5回
}

function incompleteQuestionRefs(){
  const refs=[];
  lessons.forEach((lesson,li)=>{
    const done=new Set(currentRoundLessons()[li].completed);
    lesson.items.forEach((_,qi)=>{
      if(!done.has(qi)) refs.push({lessonIndex:li,questionIndex:qi});
    });
  });
  return refs;
}

function currentQuestionIsIncomplete(){
  return incompleteQuestionIndices(currentLesson).includes(currentQuestion);
}

function selectRandomPendingQuestion(avoidCurrent=true){
  let refs=incompleteQuestionRefs();
  if(!refs.length) return false;

  if(avoidCurrent && refs.length>1){
    const filtered=refs.filter(r=>!(r.lessonIndex===currentLesson && r.questionIndex===currentQuestion));
    if(filtered.length) refs=filtered;
  }

  const pick=refs[Math.floor(Math.random()*refs.length)];
  currentLesson=pick.lessonIndex;
  currentQuestion=pick.questionIndex;
  return true;
}

function roundIsComplete(roundIndex=state.currentRound){
  const round=state.rounds[roundIndex];
  return round.lessons.every((st,li)=>st.completed.length >= lessons[li].items.length);
}

let pendingCompletedRound=null;
let roundCompletionTransitionPending=false;

function showRoundComplete(roundIndex){
  const displayRound=roundIndex+1;

  // 第5回終了時は中間画面を表示せず、そのまま提出用最終画面へ。
  if(displayRound===5){
    pendingCompletedRound=null;
    els.roundCompleteOverlay.hidden=true;
    state.finished=true;
    state.finishedAt=new Date().toISOString();
    saveState();
    showCompletionScreen();
    return;
  }

  pendingCompletedRound=roundIndex;
  els.roundCompleteTitle.textContent=`${displayRound}回終わりました！`;

  if(displayRound===3){
    els.roundCompleteMessage.textContent="お疲れ様でした。次の4回目からは、Lessonに関係なく全問題からランダムに出題されます。";
    els.roundContinueBtn.textContent="4回目のランダム練習へ";
  }else if(displayRound===4){
    els.roundCompleteMessage.textContent="お疲れ様でした。5回目もLessonに関係なくランダムに出題されます。";
    els.roundContinueBtn.textContent="5回目のランダム練習へ";
  }else{
    els.roundCompleteMessage.textContent=`お疲れ様でした。次の${displayRound+1}回目の練習へ進んでください。`;
    els.roundContinueBtn.textContent=`${displayRound+1}回目へ`;
  }

  els.roundCompleteOverlay.hidden=false;
}

els.roundContinueBtn.onclick=()=>{
  if(pendingCompletedRound===null) return;
  const completedRound=pendingCompletedRound;
  pendingCompletedRound=null;
  roundCompletionTransitionPending=false;
  els.roundCompleteOverlay.hidden=true;

  state.currentRound=completedRound+1;
  currentLesson=0;
  currentQuestion=0;

  if(isRandomRound()){
    selectRandomPendingQuestion(false);
  }else{
    const first=incompleteQuestionIndices(0);
    currentQuestion=first.length ? first[0] : 0;
  }

  saveState();
  renderAll();
};

function nextQuestion(){
  if(roundCompletionTransitionPending) return;

  // 第4・第5回：Lessonに関係なく、未達成問題からランダムに次を選ぶ。
  if(isRandomRound()){
    if(roundIsComplete()){
      saveState();
      showRoundComplete(state.currentRound);
      return;
    }

    selectRandomPendingQuestion(true);
    saveState();
    renderAll();
    return;
  }

  // 第1～第3回：従来どおりLesson順。
  const incomplete=incompleteQuestionIndices(currentLesson);

  if(incomplete.length===0){
    if(currentLesson < lessons.length-1 && lessonUnlocked(currentLesson+1)){
      currentLesson++;
      const nextIncomplete=incompleteQuestionIndices(currentLesson);
      currentQuestion=nextIncomplete.length ? nextIncomplete[0] : 0;
      saveState();
      renderAll();
      return;
    }

    if(currentLesson===lessons.length-1 && roundIsComplete()){
      saveState();
      showRoundComplete(state.currentRound);
      return;
    }
  }

  // 同じLesson内では未達成だけを繰り返す。
  const later=incomplete.find(idx=>idx>currentQuestion);
  currentQuestion=later!==undefined ? later : incomplete[0];
  saveState();
  renderAll();
}

els.resetBtn.onclick=()=>{
  if(!confirm("5回分を含む、すべての進捗と正答履歴をリセットしますか？")) return;
  state.rounds=Array.from({length:TOTAL_ROUNDS},()=>newRoundState());
  state.currentRound=0;
  state.finished=false;
  state.finishedAt="";
  pendingCompletedRound=null;
  els.roundCompleteOverlay.hidden=true;
  currentLesson=0;
  currentQuestion=0;
  saveState();

  document.querySelector(".layout").hidden=false;
  els.completionScreen.hidden=true;
  renderAll();
};

function saveState(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}

function renderStats(){
  const totalPerRound=totalQuestionsPerRound();
  const target=totalPerRound*TOTAL_ROUNDS;

  let completed=0, attempts=0, correct=0;
  state.rounds.forEach(round=>{
    round.lessons.forEach(st=>{
      completed+=st.completed.length;
      attempts+=st.attempts;
      correct+=st.correct;
    });
  });

  const progress=Math.round(completed/target*100);
  const accuracy=attempts ? Math.round(correct/attempts*100) : 0;
  els.overallText.textContent=`${progress}%`;
  els.overallBar.style.width=`${progress}%`;
  els.correctTotal.textContent=correct;
  els.attemptTotal.textContent=attempts;
  els.accuracyTotal.textContent=`${accuracy}%`;
  els.roundText.textContent=`${state.currentRound+1} / ${TOTAL_ROUNDS}`;
}

function formatCompletionDate(){
  const d = state.finishedAt ? new Date(state.finishedAt) : new Date();
  const pad=n=>String(n).padStart(2,"0");
  return `${d.getFullYear()}/${pad(d.getMonth()+1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function showCompletionScreen(){
  state.finished=true;
  if(!state.finishedAt) state.finishedAt=new Date().toISOString();
  saveState();

  roundCompletionTransitionPending=false;
  pendingCompletedRound=null;

  if(els.roundCompleteOverlay){
    els.roundCompleteOverlay.hidden=true;
    els.roundCompleteOverlay.style.display="none";
  }

  const layout=document.querySelector(".layout");
  if(layout){
    layout.hidden=true;
    layout.style.display="none";
  }

  // v20: hidden属性とinline styleの両方で最終画面を確実に表示。
  els.completionScreen.hidden=false;
  els.completionScreen.removeAttribute("hidden");
  els.completionScreen.style.display="grid";
  els.completionScreen.style.visibility="visible";
  els.completionScreen.style.opacity="1";

  // 最終メッセージはHTML固定文言。表示状態だけを強制する。
  els.finalCompletionMessage.hidden=false;
  els.finalCompletionMessage.removeAttribute("hidden");
  els.finalCompletionMessage.style.display="block";
  els.finalCompletionMessage.style.visibility="visible";
  els.finalCompletionMessage.style.opacity="1";

  els.roundText.textContent=`5 / 5`;

  const target=totalQuestionsPerRound()*TOTAL_ROUNDS;
  els.completionCount.textContent=`${target} / ${target}`;
  els.completionDate.textContent=formatCompletionDate();
  els.captureStatus.className="capture-status";
  els.captureStatus.textContent='ボタンを押すと「excelショートカット練習.png」を保存します。';

  els.overallText.textContent="100%";
  els.overallBar.style.width="100%";

  window.scrollTo({top:0, behavior:"smooth"});
}

function collectLocalCss(){
  let cssText="";
  for(const sheet of document.styleSheets){
    try{
      for(const rule of sheet.cssRules) cssText+=rule.cssText+"\n";
    }catch(_){}
  }
  return cssText;
}

async function captureCompletionInBrowser(){
  // v21:
  // SVG foreignObject を使わず、Canvas に提出用終了画面を直接描画する。
  // file:// で index.html を開いた場合でも安定して PNG を作成できる。

  const canvas=document.createElement("canvas");
  const W=1600, H=1080;
  canvas.width=W;
  canvas.height=H;

  const ctx=canvas.getContext("2d");
  if(!ctx) throw new Error("Canvasを初期化できませんでした。");

  // --- background ---
  ctx.fillStyle="#f5f7fb";
  ctx.fillRect(0,0,W,H);

  // --- helpers ---
  function roundRect(x,y,w,h,r,fill,stroke=null,lineWidth=1){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
    if(fill){ ctx.fillStyle=fill; ctx.fill(); }
    if(stroke){ ctx.strokeStyle=stroke; ctx.lineWidth=lineWidth; ctx.stroke(); }
  }

  function centerText(text,y,font,color){
    ctx.font=font;
    ctx.fillStyle=color;
    ctx.textAlign="center";
    ctx.textBaseline="alphabetic";
    ctx.fillText(text,W/2,y);
  }

  function wrapCentered(text, y, maxWidth, lineHeight, font, color){
    ctx.font=font;
    ctx.fillStyle=color;
    ctx.textAlign="center";
    const chars=[...text];
    const lines=[];
    let line="";
    for(const ch of chars){
      const test=line+ch;
      if(ctx.measureText(test).width>maxWidth && line){
        lines.push(line);
        line=ch;
      }else{
        line=test;
      }
    }
    if(line) lines.push(line);
    lines.forEach((ln,i)=>ctx.fillText(ln,W/2,y+i*lineHeight));
    return y+(lines.length-1)*lineHeight;
  }

  // --- main white card ---
  const cardX=170, cardY=85, cardW=1260, cardH=900;
  roundRect(cardX,cardY,cardW,cardH,28,"#ffffff","#d7e4dc",2);

  // badge
  roundRect(675,125,250,54,27,"#e8f3ed","#b9d7c4",2);
  centerText("5 / 5 回 完了",162,'700 24px "Yu Gothic","Meiryo",sans-serif',"#17633b");

  // check circle
  ctx.beginPath();
  ctx.arc(W/2,245,55,0,Math.PI*2);
  ctx.fillStyle="#217346";
  ctx.fill();
  centerText("✓",264,'900 62px "Segoe UI Symbol","Yu Gothic","Meiryo",sans-serif',"#ffffff");

  // Title
  centerText("5回終わりました！",355,'900 52px "Yu Gothic","Meiryo",sans-serif',"#17633b");

  // Message box
  roundRect(300,395,1000,190,20,"#eef8f2","#217346",2);
  centerText(
    "5回の練習がすべて終了しました。下の画面キャプチャーボタンを押し、",
    460,'600 27px "Yu Gothic","Meiryo",sans-serif',"#18212f"
  );
  centerText(
    "「ダウンロード」に保存されたキャプチャー画面を",
    505,'600 27px "Yu Gothic","Meiryo",sans-serif',"#18212f"
  );
  centerText(
    "Teamsの課題に提出してお帰りください！",
    550,'700 29px "Yu Gothic","Meiryo",sans-serif',"#18212f"
  );

  // Summary cards
  const summaryY=625;
  const boxW=310, gap=35;
  const startX=(W-(boxW*3+gap*2))/2;
  const items=[
    ["練習回数","5 / 5 回"],
    ["必須ショートカット", els.completionCount?.textContent || "完了"],
    ["総合進捗","100%"]
  ];
  items.forEach((item,i)=>{
    const x=startX+i*(boxW+gap);
    roundRect(x,summaryY,boxW,130,18,"#f7faf8","#e0e9e3",2);
    ctx.textAlign="center";
    ctx.fillStyle="#667085";
    ctx.font='500 21px "Yu Gothic","Meiryo",sans-serif';
    ctx.fillText(item[0],x+boxW/2,summaryY+42);
    ctx.fillStyle="#17633b";
    ctx.font='800 32px "Yu Gothic","Meiryo",sans-serif';
    ctx.fillText(item[1],x+boxW/2,summaryY+92);
  });

  // Date
  const dateText=els.completionDate?.textContent || formatCompletionDate();
  centerText("完了日時",815,'500 21px "Yu Gothic","Meiryo",sans-serif',"#667085");
  centerText(dateText,855,'700 25px "Yu Gothic","Meiryo",sans-serif',"#344054");

  // Footer
  centerText(
    "Excelショートカット練習　5回完了",
    925,'700 22px "Yu Gothic","Meiryo",sans-serif',"#17633b"
  );

  // Convert canvas directly to PNG.
  const blob=await new Promise((resolve,reject)=>{
    canvas.toBlob(b=>{
      if(b) resolve(b);
      else reject(new Error("PNGの作成に失敗しました。"));
    },"image/png");
  });

  const pngUrl=URL.createObjectURL(blob);
  try{
    const a=document.createElement("a");
    a.href=pngUrl;
    a.download="excelショートカット練習.png";
    a.style.display="none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }finally{
    setTimeout(()=>URL.revokeObjectURL(pngUrl),3000);
  }

  return "Downloads";
}

els.captureBtn.onclick=async()=>{
  els.captureBtn.disabled=true;
  els.captureStatus.className="capture-status";
  els.captureStatus.textContent="キャプチャーを作成しています…";

  try{
    let savedTo="Downloads";

    if(window.excelTrainer && typeof window.excelTrainer.saveCompletionScreenshot==="function"){
      const r=els.completionCaptureArea.getBoundingClientRect();
      savedTo=await window.excelTrainer.saveCompletionScreenshot({
        x:Math.max(0,Math.round(r.x)),
        y:Math.max(0,Math.round(r.y)),
        width:Math.max(1,Math.round(r.width)),
        height:Math.max(1,Math.round(r.height))
      });
    }else{
      savedTo=await captureCompletionInBrowser();
    }

    els.captureStatus.className="capture-status success";
    els.captureStatus.textContent=`保存しました：${savedTo} / excelショートカット練習.png　Teamsの課題に提出してください。`;
  }catch(err){
    console.error(err);
    els.captureStatus.className="capture-status error";
    els.captureStatus.textContent="キャプチャーの保存に失敗しました。もう一度ボタンを押してください。";
  }finally{
    els.captureBtn.disabled=false;
  }
};

function renderAll(){
  // v20 fallback: 完了データが揃っていれば、どの経路から来ても必ず最終画面へ。
  if(allRoundsComplete() || state.finished){
    showCompletionScreen();
    return;
  }

  // 第4・第5回で、現在位置がすでに正解済みならランダムな未達成問題へ。
  if(isRandomRound() && !currentQuestionIsIncomplete()){
    selectRandomPendingQuestion(false);
  }

  document.querySelector(".layout").hidden=false;
  els.completionScreen.hidden=true;
  renderQuestion();
  renderLessons();
  renderStats();
}

renderAll();
