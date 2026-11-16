// Upskill Lab: 2-week sprint, Mon Nov 16 to Sun Nov 29, 2026.
// 3 hours a day = 90 min Educative + 90 min projects / online courses.
window.SPRINT = { start: "2026-11-16", end: "2026-11-29", race: "2026-11-26" };

window.COURSES = {
  sdf: { name: "Grokking the Fundamentals of System Design", url: "https://www.educative.io/courses/grokking-system-design-fundamentals", color: "#2F6FD0" },
  asd: { name: "Agentic System Design Crash Course", url: "https://www.educative.io/courses/agentic-system-design-crash-course", color: "#7C4DDB" },
  gci: { name: "Grokking the Coding Interview Patterns in Python", url: "https://www.educative.io/courses/grokking-coding-interview-in-python", color: "#C2410C" }
};

window.TRACKS = {
  strava: { name: "Strava data pipeline", color: "#E8590C" },
  claude: { name: "Claude API course", color: "#B4532A" },
  genai:  { name: "GenAI final project", color: "#1E8A5A" },
  db:     { name: "DB Systems Part 2", color: "#0E7C86" },
  agent:  { name: "Agent build", color: "#7C4DDB" },
  sql:    { name: "SQL interview drills", color: "#2F6FD0" },
  review: { name: "Review & portfolio", color: "#5B6475" }
};

// edu.steps / build.steps: [task, minutes]
window.DAYS = [
{
  date: "2026-11-16", theme: "Kickoff: finish distributed systems basics, fix the Strava sync",
  edu: { c: "sdf", unit: "Module 2 · Distributed System Fundamentals (last 4 lessons + quiz)",
    steps: [
      ["Open the course and confirm where you left off (you were ~35% in). If you're past this, skip to the next unchecked lesson and pull later days forward.", 5],
      ["Processes vs. Threads for Scalable Distributed Systems: draw one process with 3 threads sharing memory vs. 3 processes with their own", 18],
      ["Concurrency vs. Parallelism: write one example of each from your CommonSpirit pipelines (e.g. async BigQuery jobs vs. parallel Airflow tasks)", 18],
      ["CPU Scheduling and Memory Management in Distributed Systems", 18],
      ["Observability: Metrics, Logs, and Traces. Map each to a tool you know (Looker usage stats, Airflow logs, Cloud Trace)", 18],
      ["Take the module quiz. Write every missed question into tonight's flashcards", 13]
    ],
    out: "One page of notes: a 3-column table (concept | one-line definition | example from my work)." },
  build: { t: "strava", title: "Turn on the Strava → GitHub → website pipeline",
    steps: [
      ["Go to strava.com/settings/api and create an API app (Website: rishikkolli.github.io, Callback domain: localhost)", 10],
      ["Open the authorize URL in a browser with scope=read,activity:read_all and approve; copy the `code` from the redirect URL", 10],
      ["Exchange the code for tokens: POST https://www.strava.com/oauth/token with client_id, client_secret, code, grant_type=authorization_code (curl or Python requests)", 15],
      ["GitHub repo → Settings → Secrets and variables → Actions: add STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN", 10],
      ["Actions tab → 'Sync Strava runs' → Run workflow. Read the log: you want 'Wrote N active days', not 'secrets not set'", 10],
      ["Open basecamp/strava.json on GitHub and sanity-check 3 dates against the Strava app", 10],
      ["Write a short README section: what the pipeline does, schedule, secrets, how token refresh works", 25]
    ],
    done: "strava.json is committed by the bot and the Basecamp page shows your real numbers.",
    links: [["Strava API settings","https://www.strava.com/settings/api"],["Strava: getting started","https://developers.strava.com/docs/getting-started/"],["Strava OAuth docs","https://developers.strava.com/docs/authentication/"]] },
  cards: [
    ["Process vs. thread?", "A process has its own memory space; threads inside one process share memory, so they are cheaper to create but need locks to avoid races."],
    ["Concurrency vs. parallelism?", "Concurrency: many tasks make progress over the same period (interleaved). Parallelism: tasks literally run at the same instant on different cores/machines."],
    ["Metrics vs. logs vs. traces?", "Metrics: numeric time series (latency p95). Logs: discrete event records. Traces: one request's path across services, as timed spans."],
    ["What does an OAuth refresh token do?", "Lets a server get a new short-lived access token without the user logging in again. Strava access tokens expire after 6 hours."]
  ]
},
{
  date: "2026-11-17", theme: "How services talk + your first Claude API calls",
  edu: { c: "sdf", unit: "Module 3 · Communication in Distributed Systems (all 5 lessons)",
    steps: [
      ["Flashcards from yesterday (spaced review)", 10],
      ["Lesson 1 and 2: read, then redraw each diagram from memory", 30],
      ["Lessons 3 and 4: for each protocol/style, note when you'd pick it (REST vs. gRPC vs. message queue vs. WebSocket)", 30],
      ["Lesson 5 + module quiz", 15],
      ["Write tonight's cards", 5]
    ],
    out: "A decision table: sync request/response vs. async messaging, with one real use case each." },
  build: { t: "claude", title: "Anthropic Academy · Building with the Claude API: setup + Messages API",
    steps: [
      ["Continue the course from your current lesson; keep notes in Notion → Claude Academy → this course's subpage", 35],
      ["Create a Console API key, store it in a .env file, add .env to .gitignore", 10],
      ["Write ask.py: one Messages API call with a system prompt, print the text and the usage (input/output tokens)", 20],
      ["Make it multi-turn: keep a messages list, append user/assistant turns in a loop until you type 'q'", 20],
      ["Commit to a new repo `claude-lab` with a 5-line README", 5]
    ],
    done: "`python ask.py` holds a multi-turn chat and prints token usage for each reply.",
    links: [["Anthropic Academy","https://anthropic.skilljar.com/"],["Messages API docs","https://docs.claude.com/en/api/messages"],["Python SDK","https://github.com/anthropics/anthropic-sdk-python"]] },
  cards: [
    ["When pick async messaging over a REST call?", "When the caller doesn't need the answer right away, or you want to absorb bursts and decouple failures (queue keeps work if the consumer is down)."],
    ["Why gRPC inside a backend?", "Binary Protocol Buffers over HTTP/2: smaller payloads, streaming, and typed contracts. Less handy for browsers than REST/JSON."],
    ["What's stateless about the Messages API?", "Each request must resend the whole conversation; the API keeps no chat history for you."],
    ["Where should an API key live?", "In an environment variable or secret store, never in code or git. Add .env to .gitignore."]
  ]
},
{
  date: "2026-11-18", theme: "Storage I + upgrade the Strava ETL",
  edu: { c: "sdf", unit: "Module 4 · Storage and Data Management (lessons 1–4)",
    steps: [
      ["Flashcard review", 10],
      ["Lessons 1–2: SQL vs. NoSQL and data models. Compare against your BigQuery + DB Systems class knowledge", 35],
      ["Lessons 3–4: replication and partitioning/sharding. Draw leader–follower replication and a hash-sharded table", 35],
      ["Cards", 10]
    ],
    out: "Diagram: one table sharded by user_id across 3 nodes, each with 1 replica. Label what happens when a node dies." },
  build: { t: "strava", title: "Strava ETL v2: richer fields + tests",
    steps: [
      ["In basecamp/scripts/strava-sync.mjs keep per-day `mi` and `n`, and add `sec` (moving_time), `elev_ft`, and `hr` (avg heartrate when present)", 25],
      ["Add a `weeks` rollup keyed by ISO week Monday: total miles, runs, avg pace (sec/mi)", 20],
      ["Move the aggregation into a pure function `aggregate(activities)` so it's testable", 15],
      ["Write 3 tests with node:test: empty list, two runs on one day, a Ride that must be ignored", 20],
      ["Run the workflow manually and check the new JSON shape", 10]
    ],
    done: "Tests pass (`node --test`) and strava.json has `days` and `weeks` with pace.",
    links: [["Strava activity fields","https://developers.strava.com/docs/reference/#api-models-SummaryActivity"],["node:test docs","https://nodejs.org/api/test.html"]] },
  cards: [
    ["Replication vs. partitioning?", "Replication copies the same data to several nodes (availability, read scale). Partitioning splits data across nodes (write scale, size)."],
    ["Risk of async replication?", "Replica lag: a read from a follower can return stale data, and a leader crash can lose the last few writes."],
    ["Bad shard key symptom?", "Hot spots: one shard gets most traffic (e.g. sharding by date puts all of today's writes on one node)."],
    ["Pace from Strava fields?", "moving_time (s) ÷ (distance m ÷ 1609.344) = seconds per mile."]
  ]
},
{
  date: "2026-11-19", theme: "Storage II + tool use with Claude",
  edu: { c: "sdf", unit: "Module 4 · Storage and Data Management (lessons 5–8 + quiz)",
    steps: [
      ["Flashcard review", 10],
      ["Lessons 5–6: caching and indexing. Note cache-aside vs. write-through, and B-tree vs. LSM", 35],
      ["Lessons 7–8: consistency in storage and data lifecycle", 30],
      ["Module quiz", 10],
      ["Cards", 5]
    ],
    out: "Write 5 sentences: how you'd cache the slowest Looker dashboard query and when you'd invalidate." },
  build: { t: "claude", title: "Claude API course: tool use → 'run coach' bot",
    steps: [
      ["Course: tool use lessons; notes in Notion", 35],
      ["Define a tool `get_week(week_start)` with a JSON schema; implement it by reading strava.json", 15],
      ["Run the tool loop: send tools → if stop_reason is tool_use, run the tool, send a tool_result, repeat", 25],
      ["Ask it: 'How many miles did I run the week of Nov 9 and what was my average pace?' and check the math by hand", 10],
      ["Commit to claude-lab/coach.py", 5]
    ],
    done: "The bot answers with numbers that match strava.json.",
    links: [["Tool use docs","https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview"]] },
  cards: [
    ["Cache-aside in one line?", "App reads cache; on a miss it reads the DB and fills the cache. Writes go to the DB and invalidate the cache entry."],
    ["B-tree vs. LSM tree?", "B-tree updates pages in place, good for reads. LSM buffers writes in memory and flushes sorted files, good for heavy writes, with compaction."],
    ["What ends a tool-use turn?", "stop_reason == 'tool_use'. You run the tool and reply with a tool_result block carrying the same tool_use_id."],
    ["Why give tools a JSON schema?", "So the model produces valid, typed arguments you can parse and validate."]
  ]
},
{
  date: "2026-11-20", theme: "Security + GenAI project evaluation set",
  edu: { c: "sdf", unit: "Module 5 · Security in System Design (all 5 lessons)",
    steps: [
      ["Flashcard review", 10],
      ["Lessons 1–2: authentication vs. authorization, tokens/sessions", 30],
      ["Lessons 3–4: encryption in transit/at rest, secrets", 30],
      ["Lesson 5 + connect it to your AI in Cybersecurity class notes", 15],
      ["Cards", 5]
    ],
    out: "Threat list for your Strava pipeline: 3 risks and the control for each (e.g. leaked token → GitHub secret + read-only scope)." },
  build: { t: "genai", title: "scope3-naics-classifier: build a labeled eval set + baseline",
    steps: [
      ["Pull the latest from the team repo and read what Simran and Bineet pushed", 10],
      ["Create eval/gold.csv: 50 procurement descriptions with the correct 6-digit NAICS (mix of easy/hard; use census.gov NAICS search to verify)", 35],
      ["Write eval/run_eval.py: runs the current zero-shot prompt over gold.csv and saves predictions.csv", 25],
      ["Report exact-match accuracy at 6-digit, 4-digit and 2-digit level", 15],
      ["Commit as one small commit (team rule: incremental)", 5]
    ],
    done: "A results table with 3 accuracy numbers in the repo README.",
    links: [["NAICS search (Census)","https://www.census.gov/naics/"],["Prompt engineering guide","https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"]] },
  cards: [
    ["AuthN vs. AuthZ?", "Authentication: who are you. Authorization: what you're allowed to do."],
    ["Why least-privilege scopes?", "If a token leaks, the damage is limited to what that scope allows (e.g. read-only activity, no write)."],
    ["Encryption at rest vs. in transit?", "At rest protects stored data (disk, DB). In transit protects data moving over a network (TLS)."],
    ["Why report accuracy at 2/4/6-digit NAICS?", "Shows whether errors are near misses (right sector, wrong industry) or totally wrong."]
  ]
},
{
  date: "2026-11-21", theme: "Finish System Design Fundamentals + few-shot prompting",
  edu: { c: "sdf", unit: "Module 6 · Trade-Offs and Real-World Design Principles + Module 7 · Wrap-up",
    steps: [
      ["Flashcard review", 10],
      ["Module 6, 4 lessons: for every trade-off, write 'I'd choose X when…'", 50],
      ["Module 7, 2 lessons", 15],
      ["Finish any leftover quizzes; grab the completion certificate and add it to LinkedIn", 10],
      ["Cards", 5]
    ],
    out: "Course complete ✅. One-page cheat sheet of the 10 trade-offs you'd mention in an interview." },
  build: { t: "genai", title: "scope3-naics-classifier: few-shot + structured output",
    steps: [
      ["Add 8 few-shot examples (not from gold.csv) to the prompt", 20],
      ["Force JSON output: {naics_code, naics_title, confidence, reason}; validate with a pydantic model and retry once on bad JSON", 25],
      ["Rerun the eval; add a row to the results table (baseline vs. few-shot)", 15],
      ["Look at the 10 worst misses and tag the cause (ambiguous text, wrong sector, made-up code)", 25],
      ["Commit", 5]
    ],
    done: "Results table has two rows and an error-analysis list.",
    links: [["Structured outputs","https://docs.claude.com/en/docs/build-with-claude/structured-outputs"],["pydantic","https://docs.pydantic.dev/latest/"]] },
  cards: [
    ["Consistency vs. latency trade-off example?", "Strong consistency waits for replicas to agree (slower). Eventual consistency answers fast but may serve stale reads."],
    ["Why validate LLM JSON with a schema?", "Models can return missing fields or invalid codes; validation catches it so you can retry or flag."],
    ["What is error analysis?", "Reading failed predictions by hand and grouping them by cause, so the next change targets the biggest group."]
  ]
},
{
  date: "2026-11-22", theme: "Agent fundamentals + DB project web app skeleton",
  edu: { c: "asd", unit: "Module 1 · Agent Design Fundamentals (lessons 1–3)",
    steps: [
      ["Flashcard review + week-1 recap: skim all your notes", 15],
      ["What Makes a System Agentic", 20],
      ["Agent Architecture and Control Loops: draw the perceive → plan → act → observe loop", 30],
      ["Trust, Reliability, and Production Design: list the guardrails", 20],
      ["Cards", 5]
    ],
    out: "Diagram of an agent loop with where you'd add a human approval step." },
  build: { t: "db", title: "CS-GY 6083 Part 2: web frontend skeleton on the Part 1 schema",
    steps: [
      ["Sync with George and Aayush: confirm stack (e.g. Flask + MySQL/Postgres), page list, and who owns what", 15],
      ["Create the app: Flask project, DB connection from env vars, base template", 25],
      ["Login page with hashed passwords (werkzeug.security) and sessions", 25],
      ["Every query uses parameters (no string-built SQL) to block SQL injection; test with ' OR 1=1 --", 15],
      ["Push to the team repo", 10]
    ],
    done: "You can log in as a seeded user and see a 'Hello <name>' page.",
    links: [["Flask tutorial","https://flask.palletsprojects.com/en/stable/tutorial/"],["OWASP SQL injection","https://owasp.org/www-community/attacks/SQL_Injection"]] },
  cards: [
    ["What makes a system agentic?", "It decides its own next step in a loop (plan, call tools, observe results) rather than following one fixed path."],
    ["Workflow vs. agent?", "Workflow: code fixes the steps and the LLM fills them in. Agent: the LLM picks which steps and tools to use."],
    ["Why parameterized queries?", "The DB treats user input as data, never as SQL, which blocks injection."],
    ["Why hash passwords?", "If the DB leaks, attackers get hashes, not passwords. Use a slow salted hash (bcrypt/scrypt/pbkdf2)."]
  ]
},
{
  date: "2026-11-23", theme: "Designing real agents + DB project CRUD",
  edu: { c: "asd", unit: "Module 2 · lessons 4–6",
    steps: [
      ["Flashcard review", 10],
      ["How to Analyze Agentic Systems Using a Structured Framework: copy the framework into your notes as a template", 30],
      ["Designing Multimodal Web Agents", 25],
      ["Thought Exercise: Design a Self-Improving Web Agent. Do it on paper before reading the answer", 20],
      ["Cards", 5]
    ],
    out: "The framework as a fill-in template you'll reuse on Day 12." },
  build: { t: "db", title: "CS-GY 6083 Part 2: CRUD pages + a transaction",
    steps: [
      ["List + detail pages for the 2 main entities (e.g. cruises/trips and bookings)", 30],
      ["Create/edit forms with server-side validation", 25],
      ["Wrap a multi-table insert (booking + payment row) in one transaction; roll back on error", 20],
      ["Screenshot each page for the report; push", 15]
    ],
    done: "A booking can be created, viewed and edited in the browser, and a forced error leaves no half-written rows.",
    links: [["Flask-SQLAlchemy","https://flask-sqlalchemy.readthedocs.io/"]] },
  cards: [
    ["ACID in one line each?", "Atomic: all or nothing. Consistent: rules hold. Isolated: concurrent txns don't see half-work. Durable: committed data survives crashes."],
    ["Why validate on the server, too?", "Client checks can be bypassed; the server is the only trusted gate."],
    ["One risk of a self-improving agent?", "It can learn the wrong lesson from bad feedback (reward hacking), so changes need evaluation before they ship."]
  ]
},
{
  date: "2026-11-24", theme: "Multi-agent systems + RAG for the classifier",
  edu: { c: "asd", unit: "Module 2 · lessons 7–9",
    steps: [
      ["Flashcard review", 10],
      ["Designing a Multi-Agent Conversational Recommender System", 25],
      ["Designing an Autonomous Reward Learning Agent", 25],
      ["Implementing it with Google ADK: read the code; note what an orchestrator does", 25],
      ["Cards", 5]
    ],
    out: "When would you split one agent into several? Write 3 reasons and 1 cost." },
  build: { t: "claude", title: "Claude API course: retrieval → RAG in the NAICS classifier",
    steps: [
      ["Course: RAG / retrieval lessons; notes in Notion", 30],
      ["Load the official NAICS code + title list; embed or BM25-index the titles/descriptions", 20],
      ["Per description, retrieve the top 10 candidate codes and put only those in the prompt", 20],
      ["Rerun the eval: third row in the results table (RAG). Check if made-up codes went to 0", 15],
      ["Commit + message the team the new numbers", 5]
    ],
    done: "Results table shows baseline vs. few-shot vs. RAG.",
    links: [["Contextual retrieval","https://www.anthropic.com/news/contextual-retrieval"],["rank_bm25","https://pypi.org/project/rank-bm25/"]] },
  cards: [
    ["What does RAG fix?", "The model answers from retrieved, current facts instead of memory, cutting made-up answers."],
    ["BM25 vs. embeddings?", "BM25 matches exact words (great for codes/names). Embeddings match meaning. Hybrid often wins."],
    ["Cost of multi-agent designs?", "More calls, more latency and cost, and harder debugging across hand-offs."]
  ]
},
{
  date: "2026-11-25", theme: "Race eve: light day. Finish the agent course + SQL drills",
  edu: { c: "asd", unit: "Module 2 · lesson 10 + breakout + Module 3 wrap-up",
    steps: [
      ["Flashcard review", 10],
      ["Designing a Multimodal-LLM Agent for Multi-Object Diffusion", 25],
      ["Design Your First Agent breakout session", 30],
      ["Final Thoughts + both quizzes", 20],
      ["Cards", 5]
    ],
    out: "Course complete ✅. Keep the breakout design: it's the starting point for Day 12." },
  build: { t: "sql", title: "SQL interview drills (data engineering interviews: Q2, KKR)",
    steps: [
      ["DataLemur: 3 window-function problems (ROW_NUMBER, LAG, running SUM)", 40],
      ["DataLemur: 2 problems with self-joins or CTEs", 30],
      ["Write each solution's idea in one sentence in a 'SQL patterns' note", 15],
      ["Lay out race kit, bib and shoes. Bed early", 5]
    ],
    done: "5 problems solved, patterns note started.",
    links: [["DataLemur","https://datalemur.com/questions"],["Mode: window functions","https://mode.com/sql-tutorial/sql-window-functions/"]] },
  cards: [
    ["ROW_NUMBER vs. RANK vs. DENSE_RANK?", "ROW_NUMBER: always unique 1,2,3. RANK: ties share a rank and skip (1,1,3). DENSE_RANK: ties share, no skip (1,1,2)."],
    ["What does LAG() do?", "Returns a value from a previous row in the window, e.g. yesterday's miles next to today's."],
    ["Running total in SQL?", "SUM(x) OVER (ORDER BY day ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)."]
  ]
},
{
  date: "2026-11-26", theme: "🦃 Race day: Thanksgiving 5K. Learning after you're home",
  edu: { c: "gci", unit: "Two Pointers (intro + 3 problems)",
    steps: [
      ["Introduction to Two Pointers", 15],
      ["Valid Palindrome: solve in Python before reading the solution", 20],
      ["3Sum", 30],
      ["Sort Colors", 20],
      ["Cards", 5]
    ],
    out: "Template: the two-pointer loop skeleton written from memory." },
  build: { t: "strava", title: "Post-race analysis in pandas",
    steps: [
      ["Export the race activity's streams or GPX from Strava", 10],
      ["Load into pandas; compute per-km and per-mile splits and pace", 30],
      ["Plot pace and heart rate vs. distance with matplotlib", 20],
      ["Compare splits to your race plan (even pace / negative split?) in 5 sentences", 15],
      ["Post the chart in your running notes and add the finish to Basecamp", 15]
    ],
    done: "A splits table + one chart saved in the repo.",
    links: [["pandas getting started","https://pandas.pydata.org/docs/getting_started/index.html"],["gpxpy","https://pypi.org/project/gpxpy/"]] },
  cards: [
    ["When use two pointers?", "Sorted arrays or strings where you compare/move from both ends or at two speeds, turning O(n²) pairs into O(n)."],
    ["3Sum key trick?", "Sort, fix i, then two pointers on the rest; skip duplicate values to avoid repeated triplets. O(n²)."],
    ["Sort Colors (Dutch flag) idea?", "Three pointers low/mid/high: swap 0s to the front, 2s to the back, move mid over 1s. One pass."]
  ]
},
{
  date: "2026-11-27", theme: "Fast & slow pointers + design your own agent",
  edu: { c: "gci", unit: "Two Pointers (2 more) + Fast and Slow Pointers (intro + 2)",
    steps: [
      ["Flashcard review", 10],
      ["Remove nth Node from End of List", 15],
      ["Reverse Words in a String", 15],
      ["Introduction to Fast and Slow Pointers", 15],
      ["Happy Number + Linked List Cycle", 30],
      ["Cards", 5]
    ],
    out: "List which problems you solved without hints." },
  build: { t: "agent", title: "Design doc: job-posting triage agent",
    steps: [
      ["Use the Day-8 framework template: goal, users, inputs, tools, loop, failure modes, evals", 30],
      ["Tools: search_postings(query), score_fit(posting, resume), save_to_tracker(row)", 15],
      ["Guardrails: never applies or messages anyone; human approves every tracker write", 10],
      ["Write 10 test cases (posting → expected decision) for evals", 25],
      ["Commit design.md to claude-lab", 10]
    ],
    done: "A 1–2 page design.md with a loop diagram and 10 eval cases.",
    links: [["Building effective agents","https://www.anthropic.com/research/building-effective-agents"]] },
  cards: [
    ["Why does fast/slow detect a cycle?", "In a cycle the fast pointer gains one step per move on the slow one, so they must meet."],
    ["Remove nth from end in one pass?", "Move a lead pointer n steps, then move both until lead hits the end; the trailing pointer is right before the target."],
    ["Why write evals before building an agent?", "You can tell if a change helped instead of guessing from a few chats."]
  ]
},
{
  date: "2026-11-28", theme: "More fast/slow + build the agent",
  edu: { c: "gci", unit: "Fast and Slow Pointers (3 problems) + Sliding Window intro",
    steps: [
      ["Flashcard review", 10],
      ["Middle of the Linked List", 15],
      ["Find The Duplicate Number (Floyd's)", 25],
      ["Palindrome Linked List", 20],
      ["Sliding Window intro lesson", 15],
      ["Cards", 5]
    ],
    out: "Note how Find the Duplicate maps an array onto a linked-list cycle." },
  build: { t: "agent", title: "Implement the triage agent (Claude tool use)",
    steps: [
      ["Implement the 3 tools against a local postings.csv (20 rows you paste from job boards)", 30],
      ["Agent loop with a max of 8 tool calls and a final structured summary", 25],
      ["Run your 10 eval cases; record pass/fail", 25],
      ["Fix the worst failure, rerun, commit", 10]
    ],
    done: "≥8/10 eval cases pass and the summary prints a ranked shortlist.",
    links: [["Tool use docs","https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview"]] },
  cards: [
    ["Find the Duplicate in O(1) space?", "Treat value as next index; the duplicate is the cycle entrance. Use Floyd's: meet, then restart one pointer at 0 and step both by 1."],
    ["Middle of a linked list?", "Slow moves 1, fast moves 2; when fast hits the end, slow is at the middle."],
    ["Sliding window signal?", "'Longest/shortest/max subarray or substring with a condition' over a contiguous range."]
  ]
},
{
  date: "2026-11-29", theme: "Sliding window + sprint wrap-up",
  edu: { c: "gci", unit: "Sliding Window (3 problems) + review",
    steps: [
      ["Flashcard review (all decks)", 15],
      ["Sliding Window problem 1 (first in the chapter)", 25],
      ["Sliding Window problem 2", 25],
      ["Redo the 2 hardest problems of the week from a blank file", 20],
      ["Cards", 5]
    ],
    out: "Pattern sheet: two pointers, fast/slow, sliding window, each with its template." },
  build: { t: "review", title: "Portfolio + plan the next sprint",
    steps: [
      ["README + one screenshot each for: Strava pipeline, run coach, NAICS classifier results, triage agent", 35],
      ["Add the best two to the Projects section of rishikkolli.github.io", 20],
      ["Update resume project bullets with real numbers (accuracy, eval pass rate)", 20],
      ["Write next sprint's goals: what to keep, cut, add", 15]
    ],
    done: "Two new projects live on your site and a list of goals for the next sprint.",
    links: [["Your site","https://rishikkolli.github.io/"]] },
  cards: [
    ["Sliding window template?", "Expand right each step; while the window breaks the rule, shrink from the left; update the answer each step. O(n)."],
    ["Fixed vs. variable window?", "Fixed: size k, slide by one. Variable: grow/shrink to keep a condition true."]
  ]
}
];
