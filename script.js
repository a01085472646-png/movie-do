/**
 * 무비시네마 (MOVIE CINEMA) - 메인 스크립트
 * 영화 데이터, 장르 필터링, 랜덤 티켓 추천, Canvas 간식 룰렛, 오디오 피드백
 */

// ==========================================================================
// 1. 영화 데이터베이스 (12편의 엄선작)
// ==========================================================================
const MOVIES_DATA = [
  {
    id: 1,
    title: "인터스텔라",
    engTitle: "Interstellar (2014)",
    genres: ["SF", "드라마"],
    primaryGenre: "SF",
    rating: 9.3,
    runtime: "169분",
    screen: "IMAX관",
    seat: "G-14 (명당)",
    poster: "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    synopsis: "세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다. 지구를 대체할 새로운 인류의 터전을 찾기 위해 시공간의 웜홀을 넘어 떠난 우주비행사들의 경이롭고 숭고한 여정을 그린 SF 명작."
  },
  {
    id: 2,
    title: "인셉션",
    engTitle: "Inception (2010)",
    genres: ["SF", "액션", "스릴러"],
    primaryGenre: "SF",
    rating: 9.2,
    runtime: "148분",
    screen: "THEATER 2",
    seat: "E-11",
    poster: "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    synopsis: "타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 모든 혐의를 벗을 수 있는 마지막 기회로 타인의 무의식 깊은 곳에 새로운 생각을 심는 불가능에 가까운 '인셉션' 작전을 시작한다."
  },
  {
    id: 3,
    title: "기생충",
    engTitle: "Parasite (2019)",
    genres: ["스릴러", "드라마"],
    primaryGenre: "스릴러",
    rating: 9.3,
    runtime: "132분",
    screen: "THEATER 3",
    seat: "F-12",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    synopsis: "전원 백수로 살아가던 기택네 장남 기우가 박 사장네 고액 과외선생으로 발을 들이며 시작된다. 전혀 다른 두 가족이 얽히며 걷잡을 수 없이 터져 나오는 긴장감과 블랙 코미디의 진수."
  },
  {
    id: 4,
    title: "범죄도시",
    engTitle: "The Outlaws (2017)",
    genres: ["액션", "스릴러"],
    primaryGenre: "액션",
    rating: 8.8,
    runtime: "121분",
    screen: "THEATER 4",
    seat: "H-15",
    poster: "https://image.tmdb.org/t/p/w500/9yi66KlKsDrsu2KuSgtBUmk6Seo.jpg",
    synopsis: "하얼빈에서 넘어와 단숨에 도시를 장악한 극악무도한 신흥 범죄조직 장첸 일당을 단숨에 일망타진하기 위해, 괴물 같은 파워를 지닌 마석도 형사와 강력반이 통쾌한 소탕 작전을 펼친다."
  },
  {
    id: 5,
    title: "극한직업",
    engTitle: "Extreme Job (2019)",
    genres: ["코미디", "액션"],
    primaryGenre: "코미디",
    rating: 9.2,
    runtime: "111분",
    screen: "THEATER 5",
    seat: "D-09",
    poster: "https://image.tmdb.org/t/p/w500/52oLgq2gEiZyDjpJ7tgkGruoQI0.jpg",
    synopsis: "해체 위기에 처한 마약반 5인방이 범죄조직 아지트 앞에서 위장 창업한 치킨집이 뜻밖의 전국구 맛집으로 대박이 터진다! '낮에는 닭을 튀기고, 밤에는 잠복근무'하는 웃음 폭발 코믹 수사극."
  },
  {
    id: 6,
    title: "라라랜드",
    engTitle: "La La Land (2016)",
    genres: ["로맨스", "드라마"],
    primaryGenre: "로맨스",
    rating: 8.9,
    runtime: "128분",
    screen: "THEATER 1",
    seat: "F-10 (스위트석)",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    synopsis: "꿈을 꾸는 사람들을 위한 도시 LA. 정통 재즈 피아니스트 세바스찬과 배우 지망생 미아가 만나 인생에서 가장 빛나는 계절을 함께하며 서로의 꿈을 응원하고 사랑을 키워가는 마법 같은 이야기."
  },
  {
    id: 7,
    title: "어벤져스: 엔드게임",
    engTitle: "Avengers: Endgame (2019)",
    genres: ["액션", "SF"],
    primaryGenre: "액션",
    rating: 9.4,
    runtime: "181분",
    screen: "4DX관",
    seat: "E-13",
    poster: "https://image.tmdb.org/t/p/w500/bR8ISy1O9XQxqiy0fQFw2BX72RQ.jpg",
    synopsis: "타노스의 핑거스냅으로 지구의 절반이 사라진 최악의 비극 이후, 살아남은 영웅들이 인류와 우주의 운명을 되돌리기 위해 모든 것을 걸고 펼치는 마블 시네마틱 유니버스의 위대한 결전."
  },
  {
    id: 8,
    title: "코코",
    engTitle: "Coco (2017)",
    genres: ["애니메이션"],
    primaryGenre: "애니메이션",
    rating: 9.3,
    runtime: "105분",
    screen: "THEATER 3",
    seat: "C-08",
    poster: "https://image.tmdb.org/t/p/w500/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    synopsis: "음악을 사랑하는 소년 미구엘이 전설적인 뮤지션의 기타를 만졌다가 황홀하고 신비로운 '죽은 자들의 세상'에 발을 들이며, 가족의 숨겨진 기억과 진정한 사랑을 찾아가는 가슴 따뜻한 애니메이션."
  },
  {
    id: 9,
    title: "부산행",
    engTitle: "Train to Busan (2016)",
    genres: ["액션", "스릴러"],
    primaryGenre: "스릴러",
    rating: 8.6,
    runtime: "118분",
    screen: "THEATER 2",
    seat: "G-07",
    poster: "https://image.tmdb.org/t/p/w500/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    synopsis: "정체불명의 감염 바이러스가 대한민국 전역을 뒤덮은 가운데, 단 하나의 안전지대인 부산으로 향하는 시속 300km의 KTX 열차 안에서 사랑하는 사람을 지키기 위한 필사의 사투가 벌어진다."
  },
  {
    id: 10,
    title: "타이타닉",
    engTitle: "Titanic (1997)",
    genres: ["로맨스", "드라마"],
    primaryGenre: "로맨스",
    rating: 9.5,
    runtime: "194분",
    screen: "IMAX관",
    seat: "F-16 (로얄석)",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    synopsis: "1912년 4월, 사상 최대의 호화 여객선 타이타닉호에 탑승한 자유로운 영혼의 가난한 화가 잭과 엄격한 상류사회에 갇혀 있던 로즈의 운명적이고 가슴 시린 불멸의 사랑을 그린 대작."
  },
  {
    id: 11,
    title: "스파이더맨: 노 웨이 홈",
    engTitle: "Spider-Man: No Way Home (2021)",
    genres: ["액션", "SF"],
    primaryGenre: "액션",
    rating: 9.1,
    runtime: "148분",
    screen: "THEATER 4",
    seat: "H-12",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    synopsis: "세상에 정체가 탄로 난 피터 파커가 위기를 벗어나기 위해 닥터 스트레인지의 마법을 빌리던 중 멀티버스가 열리며, 차원을 넘어온 역대 최강의 빌런들과 마주하게 되는 초특급 스파이더 어드벤처."
  },
  {
    id: 12,
    title: "월터의 상상은 현실이 된다",
    engTitle: "The Secret Life of Walter Mitty (2013)",
    genres: ["코미디", "드라마"],
    primaryGenre: "코미디",
    rating: 8.8,
    runtime: "114분",
    screen: "THEATER 5",
    seat: "E-10",
    poster: "https://image.tmdb.org/t/p/w500/iAo1hlzsPV9XpYcLQp6Ud065tGO.jpg",
    synopsis: "16년째 잡지사에서 필름 현상 에디터로 무료한 일상을 보내던 월터. 폐간호 마지막 표지에 쓰일 전설의 사진이 사라지자 사진작가를 찾아 생전 떠나본 적 없는 광활한 지구 끝으로 모험을 떠난다."
  }
];

// ==========================================================================
// 2. 간식 룰렛 데이터베이스 (10가지 극장 간식)
// ==========================================================================
const SNACKS_DATA = [
  {
    name: "팝콘",
    icon: "🍿",
    color: "#e50914",
    textColor: "#ffffff",
    desc: "영화관 최고의 클래식! 고소하고 바삭한 버터 팝콘과 함께 영화에 푹 빠져보세요."
  },
  {
    name: "나초",
    icon: "🧀",
    color: "#182030",
    textColor: "#f5c518",
    desc: "진한 치즈 소스와 매콤한 살사에 콕 찍어먹는 바삭바삭 극장 나초의 치명적 매력!"
  },
  {
    name: "핫도그",
    icon: "🌭",
    color: "#b30b14",
    textColor: "#ffffff",
    desc: "출출할 땐 든든하게! 육즙 가득한 소시지와 피클, 머스터드가 어우러진 시네마 핫도그."
  },
  {
    name: "감자튀김",
    icon: "🍟",
    color: "#222c42",
    textColor: "#fcd34d",
    desc: "겉은 바삭, 속은 촉촉 짭조름한 케이준 감자튀김으로 멈출 수 없는 핑거푸드 타임!"
  },
  {
    name: "치킨",
    icon: "🍗",
    color: "#940911",
    textColor: "#ffffff",
    desc: "바삭한 순살 치킨 한입, 영화 한 장면! 한 번 맛보면 극장 필수 코스가 됩니다."
  },
  {
    name: "피자",
    icon: "🍕",
    color: "#151b29",
    textColor: "#fb923c",
    desc: "고소한 치즈가 듬뿍 늘어나는 갓 구운 조각 피자로 든든하고 특별한 영화 감상!"
  },
  {
    name: "초콜릿",
    icon: "🍫",
    color: "#73060c",
    textColor: "#ffffff",
    desc: "달콤 쌉싸름한 한 조각으로 영화 보는 내내 기분 좋은 도파민과 당 충전 완료!"
  },
  {
    name: "젤리",
    icon: "🍬",
    color: "#1c2538",
    textColor: "#f472b6",
    desc: "쫄깃쫄깃 상큼달콤, 지루할 틈 없이 씹는 재미가 가득한 알록달록 과즙 젤리."
  },
  {
    name: "아이스크림",
    icon: "🍦",
    color: "#520408",
    textColor: "#ffffff",
    desc: "입안 가득 부드럽고 시원하게 녹아내리는 프리미엄 디저트로 달콤한 힐링."
  },
  {
    name: "콜라",
    icon: "🥤",
    color: "#0f1522",
    textColor: "#60a5fa",
    desc: "가슴속까지 시원해지는 청량한 탄산! 팝콘과 영화의 영원한 단짝 음료."
  }
];

// ==========================================================================
// 3. Web Audio API 사운드 효과음 (외부 파일 없이 동작)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 룰렛 바늘 틱 소리
  playTick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // AudioContext 정책 관련 무시
    }
  }

  // 당첨 팡파르 소리
  playFanfare() {
    try {
      this.init();
      if (!this.ctx) return;

      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {
      // 무시
    }
  }
}

const sfx = new SoundFX();

// ==========================================================================
// 4. 영화 목록 렌더링 & 장르 필터링
// ==========================================================================
let currentGenre = "전체";
const moviesGrid = document.getElementById("movies-grid");
const filteredCountEl = document.getElementById("filtered-count");
const genreFilterBar = document.getElementById("genre-filter-bar");

function renderMovies(genre = "전체") {
  currentGenre = genre;
  moviesGrid.innerHTML = "";

  const filteredMovies = MOVIES_DATA.filter(movie => {
    if (genre === "전체") return true;
    return movie.genres.includes(genre) || movie.primaryGenre === genre;
  });

  filteredCountEl.textContent = filteredMovies.length;

  if (filteredMovies.length === 0) {
    moviesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-gray-300);">
        <i class="fa-solid fa-film-slash" style="font-size: 3rem; color: var(--primary-red); margin-bottom: 16px;"></i>
        <h3>해당 장르의 영화를 찾을 수 없습니다.</h3>
        <p>다른 장르를 선택해보세요.</p>
      </div>
    `;
    return;
  }

  filteredMovies.forEach(movie => {
    const card = document.createElement("article");
    card.className = "movie-card";
    card.setAttribute("data-id", movie.id);

    card.innerHTML = `
      <div class="card-poster-wrap">
        <span class="card-genre-pill">${movie.primaryGenre}</span>
        <span class="card-rating-badge"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
        <img 
          src="${movie.poster}" 
          alt="${movie.title} 영화 포스터" 
          class="card-poster-img"
          loading="lazy"
          onerror="handlePosterError(this, '${movie.title}', '${movie.primaryGenre}')"
        >
      </div>
      <div class="card-info">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-meta">
          <span>${movie.runtime}</span> • <span>${movie.genres.join(", ")}</span>
        </div>
        <p class="card-synopsis">${movie.synopsis}</p>
        <div class="card-action-bar">
          <span class="card-ticket-icon"><i class="fa-solid fa-ticket"></i> ${movie.screen}</span>
          <span class="btn-card-detail">상세보기 <i class="fa-solid fa-chevron-right"></i></span>
        </div>
      </div>
    `;

    // 카드 클릭 시 상세 티켓 모달 오픈
    card.addEventListener("click", () => {
      openTicketModal(movie);
    });

    moviesGrid.appendChild(card);
  });
}

// 포스터 로딩 실패 시 호출되는 고품질 폴백 함수
window.handlePosterError = function(imgElement, title, genre) {
  const parent = imgElement.parentElement;
  if (!parent) return;

  const fallbackDiv = document.createElement("div");
  fallbackDiv.className = "card-poster-fallback";
  fallbackDiv.innerHTML = `
    <i class="fa-solid fa-clapperboard"></i>
    <span class="fallback-title">${title}</span>
    <span style="font-size: 0.8rem; margin-top: 6px; color: var(--accent-gold);">${genre}</span>
  `;
  imgElement.remove();
  parent.appendChild(fallbackDiv);
};

// 장르 필터 버튼 이벤트 바인딩
genreFilterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".genre-btn");
  if (!btn) return;

  genreFilterBar.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const selectedGenre = btn.getAttribute("data-genre");
  renderMovies(selectedGenre);
});

// ==========================================================================
// 5. 랜덤 영화 추천 & 티켓 모달
// ==========================================================================
const movieModalBackdrop = document.getElementById("movie-modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close-btn");
const ticketConfirmBtn = document.getElementById("ticket-confirm-btn");
const rerollRandomBtn = document.getElementById("reroll-random-btn");
const heroRandomBtn = document.getElementById("hero-random-btn");
const navRandomBtn = document.getElementById("nav-random-btn");

let currentSelectedMovie = null;

function getRandomMovie() {
  const randomIndex = Math.floor(Math.random() * MOVIES_DATA.length);
  return MOVIES_DATA[randomIndex];
}

function openTicketModal(movie) {
  currentSelectedMovie = movie;
  sfx.init();

  const posterImg = document.getElementById("ticket-poster-img");
  posterImg.src = movie.poster;
  posterImg.onerror = () => {
    posterImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"><rect width="300" height="450" fill="%23141824"/><text x="50%" y="45%" fill="%23e50914" font-size="40" font-family="sans-serif" text-anchor="middle">🎬</text><text x="50%" y="60%" fill="%23ffffff" font-size="20" font-weight="bold" font-family="sans-serif" text-anchor="middle">${encodeURIComponent(movie.title)}</text></svg>`;
  };

  document.getElementById("ticket-rating").querySelector("span").textContent = movie.rating;
  document.getElementById("ticket-genre").textContent = movie.genres.join(" / ");
  document.getElementById("ticket-title").textContent = movie.title;
  document.getElementById("ticket-eng-title").textContent = movie.engTitle;
  document.getElementById("ticket-screen").textContent = movie.screen;
  document.getElementById("ticket-seat").textContent = movie.seat;
  document.getElementById("ticket-runtime").textContent = movie.runtime;
  document.getElementById("ticket-synopsis").textContent = movie.synopsis;

  movieModalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeTicketModal() {
  movieModalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

function triggerRandomRecommendation() {
  // 현재 영화와 다른 무작위 영화 추천
  let movie = getRandomMovie();
  if (currentSelectedMovie && MOVIES_DATA.length > 1) {
    while (movie.id === currentSelectedMovie.id) {
      movie = getRandomMovie();
    }
  }
  openTicketModal(movie);
}

heroRandomBtn.addEventListener("click", triggerRandomRecommendation);
navRandomBtn.addEventListener("click", triggerRandomRecommendation);
rerollRandomBtn.addEventListener("click", triggerRandomRecommendation);

modalCloseBtn.addEventListener("click", closeTicketModal);
ticketConfirmBtn.addEventListener("click", () => {
  closeTicketModal();
  alert(`🍿 [${currentSelectedMovie.title}] 영화가 마음에 드셨군요!\n맛있는 간식과 함께 즐거운 관람 되세요!`);
});

movieModalBackdrop.addEventListener("click", (e) => {
  if (e.target === movieModalBackdrop) {
    closeTicketModal();
  }
});

// ==========================================================================
// 6. 영화 간식 캔버스 룰렛 (Snack Roulette)
// ==========================================================================
const canvas = document.getElementById("roulette-canvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-roulette-btn");
const spinBtnText = document.getElementById("spin-btn-text");
const centerHub = document.getElementById("roulette-center-hub");
const roulettePointer = document.getElementById("roulette-pointer");
const snackPillsContainer = document.getElementById("snack-pills");
const inlineResultName = document.getElementById("recent-snack-name");
const inlineResultIcon = document.getElementById("recent-snack-icon");

// 간식 모달 엘리먼트
const snackModalBackdrop = document.getElementById("snack-modal-backdrop");
const snackCloseBtn = document.getElementById("snack-close-btn");
const snackConfirmBtn = document.getElementById("snack-confirm-btn");
const snackSpinAgainBtn = document.getElementById("snack-spin-again-btn");
const winnerIcon = document.getElementById("winner-snack-icon");
const winnerTitle = document.getElementById("winner-snack-title");
const winnerDesc = document.getElementById("winner-snack-desc");
const confettiContainer = document.getElementById("confetti-container");

const NUM_SNACKS = SNACKS_DATA.length; // 10
const ARC_ANGLE = (2 * Math.PI) / NUM_SNACKS; // 36도 = 0.6283 rad

let currentAngle = 0; // 현재 룰렛 회전 각도
let isSpinning = false;
let lastTickIndex = -1;

// 간식 미니 필 뱃지 렌더링
function renderSnackPills() {
  snackPillsContainer.innerHTML = "";
  SNACKS_DATA.forEach((snack, idx) => {
    const pill = document.createElement("span");
    pill.className = "snack-pill";
    pill.id = `snack-pill-${idx}`;
    pill.innerHTML = `<span>${snack.icon}</span> <span>${snack.name}</span>`;
    snackPillsContainer.appendChild(pill);
  });
}

// 캔버스 룰렛 드로잉 함수
function drawRoulette() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = centerX - 14;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 각 섹터 그리기
  for (let i = 0; i < NUM_SNACKS; i++) {
    const startAngle = currentAngle + i * ARC_ANGLE;
    const endAngle = startAngle + ARC_ANGLE;
    const snack = SNACKS_DATA[i];

    // 부채꼴 섹터 배경
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fillStyle = snack.color;
    ctx.fill();

    // 섹터 테두리선
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.stroke();

    // 간식 이름 & 아이콘 텍스트 렌더링
    ctx.save();
    ctx.translate(centerX, centerY);
    // 각 섹터의 정중앙 각도로 회전
    const textAngle = startAngle + ARC_ANGLE / 2;
    ctx.rotate(textAngle);

    // 텍스트 위치: 바깥쪽에서 안쪽 방향으로
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    
    // 이모지
    ctx.font = "24px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
    ctx.fillText(snack.icon, radius - 20, 0);

    // 간식 명칭
    ctx.font = "bold 15px 'Noto Sans KR', sans-serif";
    ctx.fillStyle = snack.textColor;
    ctx.fillText(snack.name, radius - 54, 0);

    ctx.restore();
  }

  // 룰렛 외곽 림(Rim) 장식
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 8;
  ctx.strokeStyle = "#e50914";
  ctx.stroke();

  // 외곽 조명 전구(도트) 20개
  const numDots = 20;
  for (let d = 0; d < numDots; d++) {
    const dotAngle = (d * (2 * Math.PI)) / numDots;
    const dotX = centerX + (radius + 2) * Math.cos(dotAngle);
    const dotY = centerY + (radius + 2) * Math.sin(dotAngle);

    ctx.beginPath();
    ctx.arc(dotX, dotY, 3, 0, 2 * Math.PI);
    ctx.fillStyle = d % 2 === 0 ? "#f5c518" : "#ffffff";
    ctx.shadowColor = "#f5c518";
    ctx.shadowBlur = 6;
    ctx.fill();
  }
  ctx.restore();
}

/**
 * 룰렛 상단 바늘(12시 방향 = -PI/2 각도)이 가리키는 정확한 간식 인덱스 계산
 * 각도 공식:
 * 바늘 위치는 화면 기준 12시 방향 (-Math.PI / 2).
 * 캔버스 각도 currentAngle에서 i번째 섹터는 [currentAngle + i * ARC_ANGLE, currentAngle + (i+1) * ARC_ANGLE].
 * 12시 바늘에 닿아 있는 섹터의 인덱스를 완벽하게 역계산한다.
 */
function getSelectedSnackIndex(angle) {
  // 포인터 각도: 12시 방향 (3 * Math.PI / 2 = 270도)
  const pointerAngle = (3 * Math.PI) / 2;
  const normalizedAngle = (pointerAngle - (angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const index = Math.floor(normalizedAngle / ARC_ANGLE) % NUM_SNACKS;
  return index;
}

// 룰렛 회전 실행 함수
function spinRoulette() {
  if (isSpinning) return;
  sfx.init();

  isSpinning = true;
  spinBtn.classList.add("spinning");
  spinBtnText.textContent = "두근두근 회전 중...";

  // 1. 당첨될 항목 인덱스를 무작위로 선택 (0 ~ 9)
  const targetIndex = Math.floor(Math.random() * NUM_SNACKS);
  const targetSnack = SNACKS_DATA[targetIndex];

  // 2. 바늘(12시 = 270도 = 3*PI/2)이 targetIndex 섹터의 '정중앙'에 오도록 최종 정지 각도 계산
  // targetIndex의 섹터 중심: targetIndex * ARC_ANGLE + ARC_ANGLE / 2
  // 회전 후 (3 * Math.PI / 2 - targetCenterAngle)이 되어야 바늘과 일치함.
  const targetCenterAngle = targetIndex * ARC_ANGLE + ARC_ANGLE / 2;
  const desiredBaseAngle = (3 * Math.PI / 2) - targetCenterAngle;

  // 최소 5바퀴 ~ 8바퀴 이상 시원하게 회전
  const extraFullSpins = 6 + Math.floor(Math.random() * 3); // 6 ~ 8 바퀴
  const startAngle = currentAngle;
  
  // 현재 각도에서 최소 회전량을 더한 후 정확한 위치로 수렴
  let targetTotalAngle = startAngle + (extraFullSpins * 2 * Math.PI);
  // desiredBaseAngle과 동일한 위상이 되도록 보정
  const remainder = (targetTotalAngle - desiredBaseAngle) % (2 * Math.PI);
  targetTotalAngle = targetTotalAngle - remainder + (remainder < 0 ? 0 : 2 * Math.PI);

  const duration = 4500; // 4.5초
  const startTime = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 부드러운 감속 이징 (Cubic Ease-Out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    currentAngle = startAngle + (targetTotalAngle - startAngle) * easeOut;

    // 핀 틱 사운드 및 바늘 튕김 애니메이션
    const currentIndex = getSelectedSnackIndex(currentAngle);
    if (currentIndex !== lastTickIndex) {
      lastTickIndex = currentIndex;
      sfx.playTick();
      roulettePointer.classList.add("tick");
      setTimeout(() => roulettePointer.classList.remove("tick"), 60);

      // 미니 배지 실시간 하이라이트 효과
      document.querySelectorAll(".snack-pill").forEach(p => p.classList.remove("highlight"));
      const currentPill = document.getElementById(`snack-pill-${currentIndex}`);
      if (currentPill) currentPill.classList.add("highlight");
    }

    drawRoulette();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // 회전 완료!
      isSpinning = false;
      spinBtn.classList.remove("spinning");
      spinBtnText.textContent = "간식 룰렛 돌리기!";

      // 최종 당첨 결과 확인 (수학적으로 targetIndex와 100% 동일)
      const finalIndex = getSelectedSnackIndex(currentAngle);
      const wonSnack = SNACKS_DATA[finalIndex];

      // 최근 결과 인라인 배너 갱신
      inlineResultName.textContent = wonSnack.name;
      inlineResultIcon.textContent = wonSnack.icon;

      // 팡파르 사운드 및 당첨 팝업 오픈
      sfx.playFanfare();
      setTimeout(() => {
        openSnackWinnerModal(wonSnack);
      }, 300);
    }
  }

  requestAnimationFrame(animate);
}

// 간식 당첨 팝업 모달
function openSnackWinnerModal(snack) {
  winnerIcon.textContent = snack.icon;
  winnerTitle.textContent = snack.name;
  winnerDesc.textContent = snack.desc;

  createConfetti();
  snackModalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSnackWinnerModal() {
  snackModalBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// 꽃가루 파티클 효과
function createConfetti() {
  confettiContainer.innerHTML = "";
  const colors = ["#e50914", "#f5c518", "#ffffff", "#3b82f6", "#10b981", "#ec4899"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = `${Math.random() * 8 + 6}px`;
    confetti.style.height = `${Math.random() * 12 + 6}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.top = "-20px";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.opacity = Math.random() * 0.9 + 0.1;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.borderRadius = "2px";
    confetti.style.transition = `top ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 2s ease`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = `${Math.random() * 80 + 80}%`;
      confetti.style.transform = `rotate(${Math.random() * 720}deg) scale(0.6)`;
    }, 20);
  }
}

// 룰렛 버튼 및 센터 허브 클릭 이벤트 바인딩
spinBtn.addEventListener("click", spinRoulette);
centerHub.addEventListener("click", spinRoulette);

snackCloseBtn.addEventListener("click", closeSnackWinnerModal);
snackConfirmBtn.addEventListener("click", closeSnackWinnerModal);
snackSpinAgainBtn.addEventListener("click", () => {
  closeSnackWinnerModal();
  setTimeout(() => {
    spinRoulette();
  }, 400);
});

snackModalBackdrop.addEventListener("click", (e) => {
  if (e.target === snackModalBackdrop) {
    closeSnackWinnerModal();
  }
});

// ==========================================================================
// 7. 모바일 햄버거 메뉴 & 스크롤 네비게이션
// ==========================================================================
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const icon = mobileToggle.querySelector("i");
  if (navMenu.classList.contains("open")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});

// 네비 링크 클릭 시 모바일 메뉴 닫기
navMenu.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    const icon = mobileToggle.querySelector("i");
    if (icon) icon.className = "fa-solid fa-bars";
  });
});

// 스크롤 시 헤더 그림자 스타일링
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ==========================================================================
// 8. 초기화 실행
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 영화 렌더링
  renderMovies("전체");
  
  // 간식 룰렛 렌더링
  renderSnackPills();
  drawRoulette();

  // 첫 사용자 인터랙션 시 사운드 컨텍스트 초기화
  document.addEventListener("click", () => sfx.init(), { once: true });
});
