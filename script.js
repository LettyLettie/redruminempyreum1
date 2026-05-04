const pages = [
  {
    type: "text",
    lines: [
      "你想起一些許久之前沒有留意到的事。",
      "身為冒險者的你遊走異邦，原本來自哪裡或許已經沒有那麼重要了，這片大陸上的幾個城邦都像是你的家，在哪裡都有幾名點頭之交、舊識，曾經一起冒險的同伴，或是把酒言歡時總是能在旅店大廳遇見的熟面孔。",
      "當然，你也聽過許多傳聞，你並不是那種對以訛傳訛的事情特別感興趣的人，但長久下來的經驗告知，有些口耳相傳的小事並不是空穴來風，也許被誇大了一些，其中也許還是藏著幾分真實，你如果夠有興趣，有時也會想一探究竟。"
    ]
  },
  {
    type: "chat",
    lines: [
      ["未知A", "你聽說過前陣子伊修加德發生的事嗎？"],
      ["未知B", "你已經去過了嗎？"],
      ["未知A", "我自己還沒去過，不過公會也開始有接洽一些那裡的狩獵委託吧？聽說報酬不錯，我一個朋友就去過幾次。"],
      ["未知B", "他感覺怎麼樣？"],
      ["未知A", "報酬是真的不錯，但冷也是真的冷。"],
      ["未知B", "哦，那你剛才是要說什麼事情？"],
      ["未知A", "聽說有人死了。"],
      ["未知B", "……"],
      ["未知B", "這倒也不是多稀奇的事吧？如果不熟悉那裡的魔物──"],
      ["未知A", "不是參加狩獵隊的人，發生在住宅區，聽說是謀殺。"],
      ["未知B", "謀殺？"],
      ["未知A", "有人在一個什麼貴族的大宅裡面死了。"],
      ["未知A", "是傳聞有幾個冒險者一大早經過那一帶，看見一具屍體被裹著白布抬出來了，附近有幾個他們警備隊……他們那邊是叫什麼？騎士團的人。"],
      ["未知B", "那他們應該會調查吧？也不是我們可以插手的事。"],
      ["未知A", "這才是最奇怪的部分。"],
      ["未知B", "嗯？"],
      ["未知A", "完全沒有任何調查行動的樣子，這件事好像沒有發生過，都已經過去幾個月了，我有在留意一些消息，但是什麼都沒有，一片死寂。"],
      ["未知B", "那這只是奇怪的傳聞吧……"],
      ["未知A", "可能，不過似乎牽扯了一些奇怪的事情，那裡好像是規劃要重建的街道，之前那附近就只有那一棟大宅而已的樣子，原本要把它併入新的街區，因為這件事那附近的工程好像暫時停止了。"],
      ["未知B", "啊，我之前好像聽過有一些格里達尼亞的工匠在講這件事，他們原本要去那裡支援，結果又聽說暫時沒工作，不知道到底是怎樣。"],
      ["未知A", "對吧，超級奇怪。"]
    ]
  },
  {
    type: "text",
    lines: ["這種怪事你也沒有少聽過，當初並不特別在意，更何況只是晚餐時隔壁桌的話題，酒過三巡後他們的音量不自覺地大了一些，你不需要側耳，就聽得一清二楚，也算是不錯的飯後消遣。"]
  },
  {
    type: "text",
    lines: [
      "幾年之後，有一次，你在不滅隊匯報一次尋常的狩獵委託成果，只是為了打發時間而接下的，你也不是很在乎報酬，整個人有些心不在焉，話說著說著，視線就飄向負責派發報酬的補給官後方，有一名新上任的小隊隊長在一張長桌前整理文件，他拿了好幾個檔案夾，有好幾個紙質邊緣都磨到起了毛邊，看起來很有歷史，他從檔案裡翻出幾張羊皮紙，隨手扔到一邊。",
      "你看見其中一張紙印著伊修加德的官方戳印。",
      "「你們要重啟什麼舊案嗎？」你忍不住搭話。",
      "小隊長抬起視線看向你，然後搖搖頭。「這些要清理掉了，有些舊文件現在都已經不適用。」",
      "「只是好奇，我不知道烏爾達哈和伊修加德幾年前就有書信往來，畢竟那裡之前滿封閉的。」",
      "「這個啊。」他暫停了一下。「也不算是書信往來啦，這只是之前的一些通知，說幾個我們在追查的人跑到他們那裡去了，已經是很久之前的事，人也都抓到了，所以長官就說這些可以扔了。」",
      "你點了點頭表示理解，沒有再多說什麼。"
    ]
  },
  {
    type: "text",
    lines: ["你最後一次聽到類似的事，是在冒險者公會裡兩個女孩子的閒聊。"]
  },
  {
    type: "chat",
    lines: [
      ["女孩A", "你知道蒂娜在伊修加德買到凶宅嗎？"],
      ["女孩B", "什麼鬼？超可怕，但她買的不是新屋嗎？"],
      ["女孩A", "也不算凶宅啦，只是聽說那裡原本是一個貴族的房子，後來發生了不好的事情，就被整個拆除蓋了新房子。"],
      ["女孩B", "原來她後來都還是跑去公寓住就是因為這件事啊。"],
      ["女孩A", "聽說有時候會看到一些奇怪的景象，牆壁會變得很舊，突然出現不在那裡的家具之類的，超可怕。"],
      ["女孩B", "那她有看到鬼嗎？"],
      ["女孩A", "這我就沒問她了啦！"]
    ]
  },
  {
    type: "text",
    lines: [
      "冒險者們意外地喜歡靈異話題，明明都是一群在野外出生入死的人，也遇過不少幽靈型態的魔物，一切都可以用乙太學的角度解釋，你也聽過一些關於乙太殘留的理論，生命離世之後似乎會回歸到某處，然後轉化成其他型態，殘留的乙太也許會變成類似幻影的存在，但都只是普通的乙太學現象而已。",
      "也許有些人就是喜歡嚇嚇新人，一到深夜，酒館的話題十之八九和靈異鬼故事有關。",
      "三分真，七分假。"
    ]
  }
];

const lock = document.getElementById("lock");
const story = document.getElementById("story");
const error = document.getElementById("error");
const content = document.getElementById("content");
const pageLabel = document.getElementById("pageLabel");
const nextBtn = document.getElementById("nextBtn");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");

for (const sel of document.querySelectorAll("select")) {
  for (let i = 1; i <= 99; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = String(i).padStart(2, "0");
    sel.appendChild(opt);
  }
}

document.getElementById("unlockBtn").onclick = async () => {
  error.textContent = "";

  const res = await fetch("/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      a: n1.value,
      b: n2.value,
      c: n3.value
    })
  });

  const data = await res.json();

  if (!data.ok) {
    error.textContent = "通行碼錯誤。";
    return;
  }

  lock.classList.add("hidden");
  story.classList.remove("hidden");
  showPage();
};

let page = 0;
let line = 0;
let typing = false;

async function typeText(target, text) {
  typing = true;
  target.textContent = "";
  for (const ch of text) {
    target.textContent += ch;
    await new Promise(r => setTimeout(r, 28));
  }
  typing = false;
}

function showPage() {
  content.innerHTML = "";
  pageLabel.textContent = `PAGE ${page + 1} / ${pages.length}`;
  line = 0;
  nextLine();
}

async function nextLine() {
  if (typing) return;

  const current = pages[page];

  if (line >= current.lines.length) {
    page++;
    if (page >= pages.length) {
      nextBtn.textContent = "END";
      nextBtn.disabled = true;
      return;
    }
    showPage();
    return;
  }

  if (current.type === "chat") {
    const [speaker, text] = current.lines[line++];
    const bubble = document.createElement("div");
    const side = speaker.endsWith("B") ? "right" : "left";
    bubble.className = `bubble ${side}`;
    bubble.innerHTML = `<span>${speaker}</span><p></p>`;
    content.appendChild(bubble);
    await typeText(bubble.querySelector("p"), `「${text}」`);
  } else {
    const p = document.createElement("p");
    p.className = "story-line";
    content.appendChild(p);
    await typeText(p, current.lines[line++]);
  }

  content.scrollTop = content.scrollHeight;
}

nextBtn.onclick = nextLine;
