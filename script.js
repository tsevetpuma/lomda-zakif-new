const questions = [
  {
    question: "מהן מטרות האבטחה?",
    answers: [
      "מניעת גניבת חומר מסווג",
      "מניעת פגיעה בחיי אדם",
      "מניעת פגיעה בסמלי שלטון",
      "כל התשובות נכונות"
    ],
    correct: [3]
  },
  {
    question: "מהן הדרישות אשר חלות על השומר?",
    answers: [
      "תגובה הולמת בשעת לחץ ובקיאות בתפקיד ובנהלי השמירה",
      "מיומנות בתפעול הנשק וערנות מקסימלית",
      "תשובות א וב נכונות",
      "ערנות ליציאות וכניסות מהבסיס ויכולת חלוקת קשב"
    ],
    correct: [2]
  },
  {
    question: "מהם המקרים בהם נגדיר אדם כחשוד?",
    answers: [
      "אדם החשוד בגניבת אמל״ח/תחמושת",
      "אדם בלבוש אזרחי",
      "אדם הנושא נשק קר/חם, אקדח, סכין וכדומה",
      "אדם שלא ראינו בעבר נכנס למחנה"
    ],
    correct: [0, 2]
  },
  {
    question: "האם נחשיב כחשוד אדם אשר מסיג גבול?",
    answers: [
      "רק במידה והאדם נושא נשק חם או קר",
      "רק כאשר האדם לבוש אזרחי",
      "אדם אשר מסיג גבול ייחשב כחשוד",
      "נחקור כל מקרה לגופו"
    ],
    correct: [2]
  },
  {
    question: "מהו צל מוטל?",
    answers: [
      "צל שנמצא מתחת לעצם כלשהו ונע בהתאם לתנועת השמש",
      "צל שנמצא מתחת לעצם עצמו",
      "צל הנגרם ע״י עצם המסתיר את קרני השמש ונע בהתאם לתנועת השמש במהלך היום",
      "צל של עצם הנמצא בתוך חלל סגור"
    ],
    correct: [2]
  },
  {
    question: "מה ההבדל בין צל מוצל לצל מוכל?",
    answers: [
      "צל מוצל נמצא מתחת לעצם עצמו ומשתנה מעט עקב תנועת השמש לעומת צל מוכל שנמצא בתוך חלל סגור",
      "צל מוצל ניתן למצוא במקומות סגורים ופתוחים",
      "צל מוצל משמש הגנה מהשמש לעומת צל מוכל שאינו מגן",
      "צל מוצל נגרם ע״י עצם המסתיר את קרני השמש"
    ],
    correct: [0]
  },
  {
    question: "איזה מהאפשרויות הבאות אינו עיקרון לבחירת מחסה?",
    answers: [
      "עמדת המחסה מאפשרת תנועה קצרה ומהירה למחסה הבא",
      "לבדוק יכולת מתן אש מהעמדה",
      "לשים לב כי העמדה נוחה לתצפית, לירי ולשהייה",
      "להימנע ממקורות אור"
    ],
    correct: [3]
  },
  {
    question: "מה ההבדל בין מסתור למחסה?",
    answers: [
      "מחסה מגן על החייל אבל לא בהכרח מסתיר אותו לעומת מסתור שמסתיר את החייל אבל לא בהכרח מגן עליו",
      "אין הבדל בין שני המושגים",
      "מסתור מגן על החייל אבל לא בהכרח מסתיר אותו",
      "מחסה גם מגן וגם מסתיר"
    ],
    correct: [0]
  },
  {
    question: "מה מהבאים אינו מחסה?",
    answers: [
      "זכוכית משוריינת",
      "שקי פק״ל",
      "גדר חשמלית",
      "בטונדה"
    ],
    correct: [2]
  },
  {
    question: "מה מהבאים אינו מסתור?",
    answers: [
      "גדר חשמלית",
      "שיח",
      "צליית עלים",
      "עץ"
    ],
    correct: [0]
  },
  {
    question: "בנוהל מעצר חשוד רכוב כיצד יש לפעול לאחר שלב הירי לאוויר?",
    answers: [
      "נכוון לכיוון שמשת הרכב",
      "נכוון על מנוע הרכב",
      "נכוון למרכז גוף מסה",
      "נכוון על גלגלי הרכב"
    ],
    correct: [3]
  },
  {
    question: "מהם שלושת השלבים בנוהל מעצר חשוד?",
    answers: [
      "קריאת אזהרה, ירי אזהרה לאוויר, ירי מכוון לרגליים/לגלגלי הרכב",
      "קריאה לעזרה, ירי אזהרה לאוויר, ירי אל עבר מרכז מסה",
      "קריאת אזהרה, ירי אזהרה לרגליים, ירי אזהרה לאוויר",
      "קריאה לחשוד, ירי אזהרה לאוויר, קריאה לעזרה"
    ],
    correct: [0]
  },
  {
    question: "מהם הדוגמאות לסכנת חיים ממשית שבעקבותה נפתח באש?",
    answers: [
      "ניסיון דריסה או חטיפה של חייל",
      "השלכת רימון או בקבוק תבערה",
      "שימוש בנשק חם או קר",
      "כל התשובות נכונות"
    ],
    correct: [3]
  },
  {
    question: "מה מבין העקרונות הבאים הוא עיקרון מנחה בבחירת מחסה?",
    answers: [
      "גישה",
      "כוננות",
      "נוחות",
      "הסתר"
    ],
    correct: [2, 3]
  },
  {
    question: "מהם שלושת התנאים הנדרשים טרם פתיחה בנוהל פתיחה באש?",
    answers: [
      "אמצעי, תכנון מקדים ויכולת",
      "אמצעי, כוונה ויכולת",
      "התנהגות חשודה, תכנון מקדים ויכולת",
      "כוונה, תכנון מקדים וכוונה"
    ],
    correct: [1]
  },
  {
    question: "מבין האפשרויות הבאות, איזה מתארת נכון את המושג 'מידור'?",
    answers: [
      "העברת מידע מסווג רק לגורמים מורשים ורלוונטיים",
      "רק אדם בעל סיווג ביטחוני מתאים יכול לעסוק בתפקיד מסווג",
      "גילוי ערנות לדמויות חשודות",
      "כל התשובות נכונות"
    ],
    correct: [3]
  },
  {
    question: "מה מהבאים הוא מידע שאינו מסווג?",
    answers: [
      "מספרי יחידות",
      "סד״כ",
      "אווירה כללית ביחידה",
      "הבעת רגשות/חוויות אישיות"
    ],
    correct: [2, 3]
  },
  {
    question: "איזו הגדרה תואמת לרמת סיווג ביטחוני 'שמור'?",
    answers: [
      "חשיפת המידע עלולה לגרום לנזק לביטחון המדינה או ליחסי החוץ שלה",
      "חשיפת המידע עלולה לגרום לנזק קל בלבד",
      "חשיפת המידע תגרום לנזק בלתי הפיך",
      "חשיפת המידע תגרום לנזק לביטחון המדינה בלבד"
    ],
    correct: [0]
  },
  {
    question: "מהי אינה דרך פעולה שבה האויב יכול להשתמש לצורך איסוף מידע?",
    answers: [
      "האזנה ותקשורת גלויה",
      "תצפית ואנוש",
      "טכנולוגיית מידע",
      "שימוש בנדב״ר בעת עליה בקשר"
    ],
    correct: [3]
  },
  {
    question: "כיצד נשמור על מידע ברמת סיווג 'סודי'?",
    answers: [
      "ללא נעילה",
      "בתוך כספת בעלת מורשי גישה בתוך חדר נעול עם סורגים",
      "בתוך ארון נעול בתוך חדר נעול עם סורגים",
      "בתוך חדר נעול עם סורגים"
    ],
    correct: [1]
  },
  {
    question: "מהו מידור?",
    answers: [
      "הגבלת ידיעותיהם המסווגות של בעלי התפקידים רק למידע הנחוץ להם",
      "הגבלת אמצעי ההתקשרות של כלל בעלי התפקידים",
      "הגבלת זמן השימוש באמצעי ההתקשרות",
      "הגבלת מספר החיילים ביחידות המסווגות"
    ],
    correct: [0]
  },
  {
    question: "מדוע פרצה מלחמת לבנון הראשונה?",
    answers: [
      "במטרה להרחיק את ארגוני הטרור הפלסטינים אש״ף מדרום לבנון",
      "מתקפת פתע מצד מצרים וירדן",
      "חטיפת שלושה נערים בגוש עציון",
      "סגירת מיצרי טיראן"
    ],
    correct: [0]
  },
  {
    question: "באיזו שנה התרחשה מלחמת לבנון השנייה?",
    answers: ["2008", "2014", "2006", "2005"],
    correct: [2]
  },
  {
    question: "באיזו שנה פרצה מלחמת ששת הימים?",
    answers: ["1956", "1965", "1973", "1967"],
    correct: [3]
  },
  {
    question: "איזו מלחמה פרצה בעקבות ההכרזה על תוכנית החלוקה?",
    answers: [
      "מלחמת סיני",
      "מלחמת לבנון השנייה",
      "מלחמת העצמאות",
      "מלחמת ההתשה"
    ],
    correct: [2]
  },
  {
    question: "מה מסמלים שבעת הכוכבים שהציע הרצל לדגל מדינת ישראל?",
    answers: [
      "יום שבת",
      "שבעה ימים בשבוע",
      "שבע שעות עבודה ביום",
      "שבע שעות שינה"
    ],
    correct: [2]
  },
  {
    question: "באיזו שנה נכתב מסמך רוח צה״ל?",
    answers: ["1980", "1948", "1994", "1983"],
    correct: [2]
  },
  {
    question: "באיזו שנה הוגדרה 'התקווה' כהמנון מדינת ישראל?",
    answers: ["1990", "1948", "1978", "2004"],
    correct: [3]
  },
  {
    question: "מהי מטרתו של מסמך רוח צה״ל?",
    answers: [
      "רוח צה״ל וכללי הפעולה הנגזרים ממנו הם הקוד האתי של צה״ל וישמשו את חיילי צה״ל בעיצוב דפוסי הפעולה שלהם",
      "רוח צה״ל הוא מסמך שמחייב רק מפקדים",
      "רוח צה״ל מחייב רק קצינים",
      "רוח צה״ל מפרט את רוח הצבא בלבד"
    ],
    correct: [0]
  },
  {
    question: "מה הייתה מטרתו העיקרית של מבצע שומר חומות?",
    answers: [
      "כל התשובות נכונות",
      "הפסקת ירי הרקטות לעבר ישראל ופגיעה בתשתיות טרור",
      "מיטוט כלל ארגוני הטרור באזור הדרום",
      "הרחבת שטח השליטה של ישראל ברצועת עזה"
    ],
    correct: [1]
  },
  {
    question: "מי היה הנשיא הראשון של מדינת ישראל?",
    answers: [
      "חיים ויצמן",
      "יצחק בן צבי",
      "דוד בן גוריון",
      "חיים הרצוג"
    ],
    correct: [0]
  },
  {
    question: "מי היה ראש הממשלה הראשון של מדינת ישראל?",
    answers: [
      "דוד בן גוריון",
      "משה שרת",
      "לוי אשכול",
      "חיים ויצמן"
    ],
    correct: [0]
  },
  {
    question: "כמה זמן נמשכה מלחמת ההתשה?",
    answers: [
      "שנה",
      "חודש וחצי",
      "שנתיים",
      "שלוש שנים"
    ],
    correct: [3]
  }
];

let queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
let currentIndex = 0;
let attemptedCount = 0;
let wrongCount = 0;
let selectedAnswers = [];
let advanceTimer = null;
let quizStarted = false;

const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const quizHeader = document.getElementById("quizHeader");
const questionCard = document.getElementById("questionCard");
const endScreen = document.getElementById("endScreen");
const restartQuizBtn = document.getElementById("restartQuizBtn");

const els = {
  questionCounter: document.getElementById("questionCounter"),
  progressFill: document.getElementById("progressFill"),
  wrongCounter: document.getElementById("wrongCounter"),
  questionText: document.getElementById("questionText"),
  questionSubtext: document.getElementById("questionSubtext"),
  answers: document.getElementById("answers")
};

function setScreenTheme(screen) {
  const body = document.body;

  if (screen === "start") {
    body.style.backgroundColor = "#e8f5e9";
    startScreen.style.backgroundColor = "#e8f5e9";
    quizScreen.style.backgroundColor = "#e8f5e9";
    endScreen.style.backgroundColor = "#e8f5e9";
  } else if (screen === "quiz") {
    body.style.backgroundColor = "#e8f5e9";
    startScreen.style.backgroundColor = "#e8f5e9";
    quizScreen.style.backgroundColor = "#e8f5e9";
    endScreen.style.backgroundColor = "#e8f5e9";
  } else if (screen === "end") {
    body.style.backgroundColor = "#e8f5e9";
    startScreen.style.backgroundColor = "#e8f5e9";
    quizScreen.style.backgroundColor = "#e8f5e9";
    endScreen.style.backgroundColor = "#e8f5e9";
  }
}

function setOverflow(mode) {
  document.documentElement.style.overflowX = "auto";
  document.body.style.overflowX = "auto";
  // document.documentElement.style.overflowY = mode;
  // document.body.style.overflowY = mode;
}

startQuizBtn.addEventListener("click", () => {
  quizStarted = true;
  setScreenTheme("quiz");
  setOverflow("auto");

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  renderQuestion();
});

restartQuizBtn.addEventListener("click", () => {
  queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
  currentIndex = 0;
  attemptedCount = 0;
  wrongCount = 0;
  selectedAnswers = [];
  clearTimeout(advanceTimer);
  quizStarted = false;

  setScreenTheme("start");
  setOverflow("hidden");

  endScreen.classList.add("hidden");
  quizHeader.classList.add("hidden");
  questionCard.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  updateHeader();
});

function updateHeader() {
  const total = questions.length;
  const progress = total === 0 ? 0 : Math.round((attemptedCount / total) * 100);
  els.questionCounter.textContent = `${attemptedCount}/${total}`;
  els.progressFill.style.width = `${progress}%`;
  els.wrongCounter.textContent = wrongCount;
}

function renderQuestion() {
  clearTimeout(advanceTimer);
  selectedAnswers = [];

  if (!quizStarted) return;

  if (queue.length === 0) {
    setScreenTheme("end");
    setOverflow("hidden");
    quizHeader.classList.add("hidden");
    questionCard.classList.add("hidden");
    endScreen.classList.remove("hidden");
    return;
  }

  setScreenTheme("quiz");
  setOverflow("auto");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  if (currentIndex >= queue.length) currentIndex = 0;

  const q = queue[currentIndex];
  const needed = q.correct.length;

  els.questionText.textContent = q.question;
  els.questionSubtext.textContent = needed === 1 ? "בחר תשובה אחת" : `בחר ${needed} תשובות`;
  els.answers.innerHTML = "";

  q.answers.forEach((answerText, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answerText;
    btn.onclick = () => selectAnswer(index, btn);
    els.answers.appendChild(btn);
  });

  updateHeader();
}

function selectAnswer(index, btn) {
  const q = queue[currentIndex];
  const needed = q.correct.length;
  const buttons = [...document.querySelectorAll(".answer-btn")];

  if (!q.attempted) {
    q.attempted = true;
    attemptedCount++;
    updateHeader();
  }

  if (selectedAnswers.includes(index)) return;

  selectedAnswers.push(index);

  const isThisCorrect = q.correct.includes(index);
  btn.classList.add(isThisCorrect ? "correct" : "wrong");

  if (selectedAnswers.length < needed) return;

  buttons.forEach(b => b.classList.add("disabled"));

  const selectedSorted = [...selectedAnswers].sort((a, b) => a - b);
  const correctSorted = [...q.correct].sort((a, b) => a - b);
  const isFullyCorrect =
    selectedSorted.length === correctSorted.length &&
    selectedSorted.every((v, i) => v === correctSorted[i]);

  if (isFullyCorrect) {
    if (q.wasWrong) {
      wrongCount--;
      q.wasWrong = false;
    }

    advanceTimer = setTimeout(() => {
      queue.splice(currentIndex, 1);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 700);
  } else {
    if (!q.wasWrong) {
      q.wasWrong = true;
      wrongCount++;
      updateHeader();
    }

    advanceTimer = setTimeout(() => {
      const [wrongQuestion] = queue.splice(currentIndex, 1);
      queue.push(wrongQuestion);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 900);
  }
}

setScreenTheme("start");
setOverflow("auto");
updateHeader();





