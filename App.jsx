import './App.css';

const profile = {
  name: '伊蕾娜',
  jpName: 'イレイナ',
  enName: 'Elaina',
  title: '灰之魔女',
  work: '《魔女之旅》',
  identity: '旅行魔女 / 魔法师',
  hair: '灰白色长发',
  eyes: '琉璃色 / 蓝紫色',
  personality: ['自信', '聪明', '毒舌', '冷静', '自由主义', '有时略显自恋'],
};

const timeline = [
  {
    year: '幼年',
    title: '受到妮可冒险故事影响',
    desc: '伊蕾娜从小阅读《妮可冒险谭》，因此产生了成为魔女并环游世界的梦想。',
  },
  {
    year: '少女时期',
    title: '成为见习魔女',
    desc: '凭借优秀天赋，伊蕾娜年纪轻轻便通过考试，成为见习魔女。',
  },
  {
    year: '修行阶段',
    title: '拜芙兰为师',
    desc: '伊蕾娜在芙兰门下修行，经历挫折后逐渐理解魔女的责任与自我选择。',
  },
  {
    year: '正式出发',
    title: '成为“灰之魔女”',
    desc: '取得魔女称号后，伊蕾娜开始独自旅行，记录旅途中遇到的国家、人和故事。',
  },
  {
    year: '旅行中',
    title: '见证世界的温柔与残酷',
    desc: '她不会总是成为救世主，而是以旅行者身份观察、选择、记录。',
  },
];

const relations = [
  {
    name: '芙兰',
    role: '师父',
    desc: '伊蕾娜的老师，教导她魔法与人生选择，是影响她成长的重要人物。',
  },
  {
    name: '沙耶',
    role: '朋友 / 崇拜者',
    desc: '非常仰慕伊蕾娜，对她有强烈好感。两人关系轻松又带点喜剧色彩。',
  },
  {
    name: '席拉',
    role: '前辈魔女',
    desc: '魔法统合协会成员，与芙兰关系密切，也与伊蕾娜有交集。',
  },
  {
    name: '维多利加 / 妮可',
    role: '母亲 / 启蒙者',
    desc: '伊蕾娜的母亲，同时也是影响她旅行梦想的关键人物之一。',
  },
  {
    name: '艾姆妮西亚',
    role: '旅途中相遇者',
    desc: '伊蕾娜旅行途中遇见的重要角色之一，与她共同经历过事件。',
  },
];

function RelationGraph() {
  return (
    <div className="graph-card">
      <div className="section-title">
        <span>✦</span>
        <h2>人物关系图</h2>
      </div>

      <div className="graph-wrapper">
        <svg viewBox="0 0 900 560" className="relation-svg" role="img" aria-label="伊蕾娜人物关系图">
          <defs>
            <linearGradient id="centerGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff6d7" />
              <stop offset="100%" stopColor="#d8c3ff" />
            </linearGradient>
            <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#efe6ff" />
            </linearGradient>
            <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#6f4aa8" floodOpacity="0.18" />
            </filter>
          </defs>
          {/* Lines */}
          <line x1="450" y1="280" x2="450" y2="95" className="graph-line" />
          <line x1="450" y1="280" x2="730" y2="175" className="graph-line" />
          <line x1="450" y1="280" x2="725" y2="400" className="graph-line" />
          <line x1="450" y1="280" x2="175" y2="400" className="graph-line" />
          <line x1="450" y1="280" x2="170" y2="170" className="graph-line" />
          {/* Relationship Labels */}
          <text x="462" y="178" className="edge-label">师徒</text>
          <text x="585" y="206" className="edge-label">朋友 / 崇拜</text>
          <text x="600" y="358" className="edge-label">前辈</text>
          <text x="260" y="358" className="edge-label">母女 / 启蒙</text>
          <text x="250" y="210" className="edge-label">旅途相遇</text>
          {/* Center Node */}
          <g filter="url(#softShadow)">
            <circle cx="450" cy="280" r="86" fill="url(#centerGradient)" className="center-node" />
            <text x="450" y="265" textAnchor="middle" className="center-name">伊蕾娜</text>
            <text x="450" y="295" textAnchor="middle" className="center-sub">灰之魔女</text>
          </g>
          {/* Top Node */}
          <g className="person-node">
            <rect x="360" y="35" width="180" height="78" rx="28" fill="url(#nodeGradient)" />
            <text x="450" y="66" textAnchor="middle" className="node-name">芙兰</text>
            <text x="450" y="91" textAnchor="middle" className="node-role">师父</text>
          </g>
          {/* Right Top */}
          <g className="person-node">
            <rect x="645" y="128" width="180" height="78" rx="28" fill="url(#nodeGradient)" />
            <text x="735" y="159" textAnchor="middle" className="node-name">沙耶</text>
            <text x="735" y="184" textAnchor="middle" className="node-role">朋友 / 崇拜者</text>
          </g>
          {/* Right Bottom */}
          <g className="person-node">
            <rect x="645" y="360" width="180" height="78" rx="28" fill="url(#nodeGradient)" />
            <text x="735" y="391" textAnchor="middle" className="node-name">席拉</text>
            <text x="735" y="416" textAnchor="middle" className="node-role">前辈魔女</text>
          </g>
          {/* Left Bottom */}
          <g className="person-node">
            <rect x="75" y="360" width="205" height="78" rx="28" fill="url(#nodeGradient)" />
            <text x="177" y="391" textAnchor="middle" className="node-name">维多利加 / 妮可</text>
            <text x="177" y="416" textAnchor="middle" className="node-role">母亲 / 启蒙者</text>
          </g>
          {/* Left Top */}
          <g className="person-node">
            <rect x="70" y="128" width="205" height="78" rx="28" fill="url(#nodeGradient)" />
            <text x="172" y="159" textAnchor="middle" className="node-name">艾姆妮西亚</text>
            <text x="172" y="184" textAnchor="middle" className="node-role">旅途中相遇者</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg-orb orb-one"></div>
        <div className="hero-bg-orb orb-two"></div>

        <div className="hero-content">
          <div className="hero-label">Character Wiki</div>
          <h1>{profile.name}</h1>
          <p className="hero-jp">{profile.jpName} / {profile.enName}</p>
          <p className="hero-desc">
            她是一位自由旅行于各国之间的魔女，以旁观者、记录者和旅人的身份，
            见证世界中温柔、奇异、荒诞与残酷的一面。
          </p>

          <div className="hero-actions">
            <a href="#wiki" className="primary-btn">查看人物资料</a>
            <a href="#relation" className="ghost-btn">人物关系图</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="witch-hat">✦</div>
          <div className="avatar-circle">
            <div className="avatar-face">灰</div>
          </div>
          <h2>灰之魔女</h2>
          <p>“没错，就是我。”</p>
        </div>
      </section>

      <section id="wiki" className="content-grid">
        <article className="wiki-card main-wiki">
          <div className="section-title">
            <span>✦</span>
            <h2>人物简介</h2>
          </div>

          <p>
            伊蕾娜是轻小说及动画《魔女之旅》的主角。她年纪轻轻便成为魔女，
            获得了“灰之魔女”的称号。受书中旅行魔女妮可的故事影响，她从小便梦想
            亲眼看看广阔世界，于是踏上了独自旅行的道路。
          </p>

          <p>
            与传统英雄型主角不同，伊蕾娜并不会在每一个国家中主动拯救所有人。
            她更像一名旅人和记录者：有时介入，有时旁观，有时离开。
            这种设定让她的人物形象更接近现实中的旅行者，也使故事带有寓言感。
          </p>
        </article>

        <aside className="wiki-card info-card">
          <div className="section-title">
            <span>☽</span>
            <h2>基本资料</h2>
          </div>

          <ul className="info-list">
            <li><strong>姓名：</strong>{profile.name}</li>
            <li><strong>日文名：</strong>{profile.jpName}</li>
            <li><strong>英文名：</strong>{profile.enName}</li>
            <li><strong>称号：</strong>{profile.title}</li>
            <li><strong>登场作品：</strong>{profile.work}</li>
            <li><strong>身份：</strong>{profile.identity}</li>
            <li><strong>发色：</strong>{profile.hair}</li>
            <li><strong>瞳色：</strong>{profile.eyes}</li>
          </ul>
        </aside>
      </section>

      <section className="wiki-card">
        <div className="section-title">
          <span>✧</span>
          <h2>性格特点</h2>
        </div>

        <div className="tag-list">
          {profile.personality.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>

        <div className="feature-grid">
          <div className="feature-item">
            <h3>自信且略显自恋</h3>
            <p>
              伊蕾娜非常清楚自己的优秀，偶尔会用轻快又自恋的语气评价自己，
              这也是她角色魅力的一部分。
            </p>
          </div>

          <div className="feature-item">
            <h3>理性旁观者</h3>
            <p>
              面对复杂事件时，她并不总以救世主姿态行动，而是根据自己的判断作出选择。
            </p>
          </div>

          <div className="feature-item">
            <h3>温柔但不天真</h3>
            <p>
              她并非冷漠无情，而是明白世界并不总能被简单拯救，因此保留了克制与距离。
            </p>
          </div>
        </div>
      </section>

      <section className="wiki-card">
        <div className="section-title">
          <span>⌛</span>
          <h2>经历时间线</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot">{index + 1}</div>
              <div className="timeline-content">
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="relation">
        <RelationGraph />
      </section>

      <section className="wiki-card">
        <div className="section-title">
          <span>✦</span>
          <h2>人物关系说明</h2>
        </div>

        <div className="relation-list">
          {relations.map((item) => (
            <div className="relation-card" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>伊蕾娜 Character Wiki Page · React Demo</p>
      </footer>
    </main>
  );
}

export default App;
