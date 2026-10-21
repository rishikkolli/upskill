// Upskill Lab curriculum. Each lesson: [phase, title, [learn objectives], [resource keys], build task, [[front, back], ...]]
window.RES = {
  pt:["Python Tutor","https://pythontutor.com/visualize.html","i"],
  cs50p:["CS50P lectures","https://cs50.harvard.edu/python/","v"],
  corey:["Corey Schafer","https://www.youtube.com/@coreyms","v"],
  pydoc:["Python tutorial","https://docs.python.org/3/tutorial/","r"],
  realpy:["Real Python","https://realpython.com/","r"],
  pytest:["pytest docs","https://docs.pytest.org/en/stable/getting-started.html","r"],
  neet:["NeetCode roadmap","https://neetcode.io/roadmap","v"],
  visu:["VisuAlgo","https://visualgo.net/en","i"],
  bigo:["Big-O cheat sheet","https://www.bigocheatsheet.com/","r"],
  tih:["Tech Interview Handbook","https://www.techinterviewhandbook.org/","r"],
  lgb:["Learn Git Branching","https://learngitbranching.js.org/","i"],
  missing:["MIT Missing Semester","https://missing.csail.mit.edu/","v"],
  fastapi:["FastAPI tutorial","https://fastapi.tiangolo.com/tutorial/","r"],
  docker:["Docker curriculum","https://docker-curriculum.com/","r"],
  bbg:["ByteByteGo","https://www.youtube.com/@ByteByteGo","v"],
  sdp:["System Design Primer","https://github.com/donnemartin/system-design-primer","r"],
  mdn:["MDN: HTTP overview","https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview","r"],
  gha:["GitHub Actions quickstart","https://docs.github.com/en/actions/writing-workflows/quickstart","r"],
  sqlbolt:["SQLBolt","https://sqlbolt.com/","i"],
  lemur:["DataLemur SQL","https://datalemur.com/","p"],
  mode:["Mode SQL tutorial","https://mode.com/sql-tutorial/","r"],
  zoom:["DE Zoomcamp","https://github.com/DataTalksClub/data-engineering-zoomcamp","v"],
  airflow:["Airflow tutorial","https://airflow.apache.org/docs/apache-airflow/stable/tutorial/fundamentals.html","r"],
  dbt:["dbt Learn","https://learn.getdbt.com/","v"],
  spark:["PySpark quickstart","https://spark.apache.org/docs/latest/api/python/getting_started/index.html","r"],
  kafka:["Kafka intro","https://kafka.apache.org/intro","r"],
  gcp:["Google Cloud Skills Boost","https://www.cloudskillsboost.google/","i"],
  tf:["Terraform tutorials","https://developer.hashicorp.com/terraform/tutorials","r"],
  pandas:["pandas getting started","https://pandas.pydata.org/docs/getting_started/index.html","r"],
  numpy:["NumPy for beginners","https://numpy.org/doc/stable/user/absolute_beginners.html","r"],
  b3b1:["3Blue1Brown: neural nets","https://www.3blue1brown.com/topics/neural-networks","v"],
  statq:["StatQuest","https://www.youtube.com/@statquest","v"],
  mlcc:["Google ML Crash Course","https://developers.google.com/machine-learning/crash-course","i"],
  skl:["scikit-learn getting started","https://scikit-learn.org/stable/getting_started.html","r"],
  karp:["Karpathy: Zero to Hero","https://karpathy.ai/zero-to-hero.html","v"],
  torch:["PyTorch basics","https://pytorch.org/tutorials/beginner/basics/intro.html","r"],
  tfplay:["TensorFlow Playground","https://playground.tensorflow.org/","i"],
  illus:["The Illustrated Transformer","https://jalammar.github.io/illustrated-transformer/","r"],
  texpl:["Transformer Explainer","https://poloclub.github.io/transformer-explainer/","i"],
  claude:["Claude API docs","https://docs.claude.com/","r"],
  prompt:["Prompt engineering guide","https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview","r"],
  agents:["Building effective agents","https://www.anthropic.com/research/building-effective-agents","r"],
  mcp:["Model Context Protocol","https://modelcontextprotocol.io/","r"],
  dlai:["DeepLearning.AI short courses","https://www.deeplearning.ai/short-courses/","v"],
  hf:["Hugging Face LLM course","https://huggingface.co/learn/llm-course","v"],
  lgraph:["LangGraph docs","https://langchain-ai.github.io/langgraph/","r"],
  owasp:["OWASP GenAI security","https://genai.owasp.org/","r"],
  mwml:["Made With ML (MLOps)","https://madewithml.com/","r"],
  trail:["Salesforce Trailhead","https://trailhead.salesforce.com/","i"],
  posting:["Salesforce careers","https://careers.salesforce.com/","r"]
};

window.PHASES = [
  {id:"launch", name:"Launch", color:"#7C8597", goal:"Set up and start applying to AI fellowships and new-grad AI roles"},
  {id:"py", name:"Python", color:"#C98A00", goal:"Write clean, tested Python without looking things up"},
  {id:"dsa", name:"Data structures & algorithms", color:"#D2553F", goal:"Solve interview-style problems with the right pattern"},
  {id:"swe", name:"Software engineering", color:"#2F6FD0", goal:"Ship a tested, containerized, deployed API"},
  {id:"de", name:"Data engineering", color:"#1E8A6E", goal:"Build an orchestrated cloud pipeline end to end"},
  {id:"ml", name:"ML foundations", color:"#B5458C", goal:"Train, evaluate and explain classic and neural models"},
  {id:"ai", name:"AI engineering", color:"#6B4FD8", goal:"Build, evaluate and deploy RAG apps and agents"},
  {id:"cap", name:"Capstone & interviews", color:"#A0682E", goal:"Demo-ready portfolio and interview reps"}
];

window.LESSONS = [
// ---------- LAUNCH ----------
["launch","Set up your lab",["Install Python 3.12, VS Code, git; make a GitHub repo for daily work","Learn the daily rhythm: learn → build → flashcards"],["missing","pydoc"],"Create a public repo upskill-lab with a README and folders per phase. Commit and push a hello.py.",[
 ["What does a virtual environment (venv) do?","Gives a project its own isolated Python packages so versions don't clash between projects."],
 ["git commit vs git push","commit saves a snapshot locally; push uploads your commits to the remote (GitHub)."],
 ["Spaced repetition in one line","Review a card right before you'd forget it; intervals grow each time you get it right."]]],
["launch","Apply: AI fellowships and new-grad roles",["Target list: AI rotational fellowships, AI residencies, forward-deployed/solutions engineer and new-grad AI/data roles (Salesforce AI Labs closes Nov 6)","Map your experience to what they all ask for: Python, AI/ML, cloud & data pipelines, builder mindset","Write 3 STAR stories: a shipped project, a hard bug, explaining tech to a non-technical stakeholder"],["posting","tih"],"Build a tracker of 10 similar postings with deadlines. Tailor your resume once (Looker/BigQuery pipelines, GCP certs, React Native lead, Datafest) and submit Salesforce AI Labs before Nov 6.",[
 ["What AI fellowships and new-grad AI roles screen for","DS&A fundamentals, strong Python, applied AI/ML projects, cloud/data pipeline exposure, and clear communication."],
 ["Salesforce AI Labs: four rotations","Build (product engineering), Shape (product management), Deliver (FDE / builders), Transform (DET / Customer Zero)."],
 ["STAR method","Situation, Task, Action, Result. Spend most of the time on Action and a measurable Result."],
 ["What is a Forward Deployed Engineer (FDE)?","An engineer who works directly with customers to build and deploy solutions on top of the product."]]],
["launch","Portfolio polish",["Pick your 3 strongest repos and pin them","Every pinned repo gets a README: what, why, demo GIF, how to run"],["tih"],"Write READMEs with a screenshot or GIF for your site, the job board and basecamp. Record a 60-second demo of one.",[
 ["What 4 things belong in every project README?","What it does, why it exists, a screenshot/demo, and how to run it."],
 ["Why demo GIFs matter","Reviewers skim; a 10-second visual proves the thing works faster than any paragraph."]]],

// ---------- PYTHON ----------
["py","Variables, types, operators",["int, float, str, bool, None; dynamic typing","Arithmetic, //, %, **; comparison and boolean operators"],["cs50p","pt"],"Step through 5 snippets in Python Tutor. Write a pace calculator: distance + time → min/mile.",[
 ["7 // 2 and 7 % 2","3 (floor division) and 1 (remainder)."],
 ["Is Python statically or dynamically typed?","Dynamically typed: names point to objects; the object has the type, not the variable."],
 ["What does None mean?","The single 'no value' object. Test it with `is None`."]]],
["py","Strings and I/O",["Indexing, slicing, methods (split, join, strip, replace)","f-strings and formatting numbers"],["cs50p","corey"],"Build a run-log line parser: '2026-10-21, 6.2 mi, 52:10' → date, miles, pace.",[
 ["s[::-1] does what?","Reverses the string (slice with step -1)."],
 ["Are strings mutable?","No. Methods like replace() return a new string."],
 ["Format 3.14159 to 2 decimals in an f-string","f\"{x:.2f}\" → '3.14'"]]],
["py","Conditionals and loops",["if/elif/else, truthiness","for, while, range, break, continue, enumerate, zip"],["cs50p","pt"],"FizzBuzz, then a weekly mileage loop that flags days over 10 mi using enumerate.",[
 ["Falsy values in Python","False, None, 0, 0.0, '', [], {}, set(), range(0)."],
 ["enumerate(xs) yields what?","(index, item) pairs."],
 ["zip(a, b) stops when?","When the shortest iterable is exhausted."]]],
["py","Lists, tuples, comprehensions",["List methods, slicing, sorting; tuples and unpacking","List comprehensions with conditions"],["corey","pt"],"Given 30 days of runs, use comprehensions to get long runs, total miles and the 3 fastest paces.",[
 ["list.sort() vs sorted(list)","sort() changes the list in place and returns None; sorted() returns a new list."],
 ["Comprehension for squares of even numbers","[x*x for x in nums if x % 2 == 0]"],
 ["Why use a tuple over a list?","Immutable, hashable (can be a dict key), signals a fixed record."]]],
["py","Dicts and sets",["Dict CRUD, .get, .items, defaultdict, Counter","Set operations: union, intersection, difference"],["corey","realpy"],"Count words in a job posting with Counter; find skills in the posting that aren't on your resume using sets.",[
 ["Average lookup time in a dict or set","O(1) (hash table)."],
 ["d.get('k', 0) vs d['k']","get returns the default if missing; d['k'] raises KeyError."],
 ["What can be a dict key?","Any hashable (immutable) object: str, int, tuple of hashables."]]],
["py","Functions and scope",["Parameters, defaults, *args, **kwargs, return values","LEGB scope, pure functions, docstrings"],["cs50p","pt"],"Refactor your pace calculator and parser into small functions with docstrings.",[
 ["Mutable default argument trap","def f(x=[]) reuses the same list across calls. Use None and create inside."],
 ["LEGB","Name lookup order: Local, Enclosing, Global, Built-in."],
 ["*args and **kwargs","Extra positional args as a tuple; extra keyword args as a dict."]]],
["py","Files and exceptions",["open() with `with`, reading/writing text, CSV and JSON","try/except/else/finally, raising your own errors"],["corey","realpy"],"Save and load your run log to CSV and JSON. Handle a malformed line without crashing.",[
 ["Why use `with open(...)`?","It closes the file automatically, even if an error happens."],
 ["json.dumps vs json.dump","dumps returns a string; dump writes to a file object."],
 ["When does `else` run in try/except/else?","Only if the try block raised no exception."]]],
["py","Modules, packages, environments",["import styles, __name__ == '__main__'","pip, venv, requirements.txt, pyproject basics"],["realpy","missing"],"Turn your scripts into a package trail_log/ with a CLI entry point and requirements.txt.",[
 ["What does if __name__ == '__main__' do?","Runs that block only when the file is executed directly, not when imported."],
 ["pip freeze > requirements.txt","Writes the exact installed package versions so others can reproduce the environment."]]],
["py","OOP 1: classes",["class, __init__, self, attributes, methods","When to use a class vs functions"],["corey","pt"],"Model Run and Week classes; Week.total_miles() and Week.longest().",[
 ["What is self?","The instance the method was called on, passed in automatically."],
 ["Class attribute vs instance attribute","Class attributes are shared by all instances; instance attributes live on each object."]]],
["py","OOP 2: inheritance and dataclasses",["Inheritance, super(), composition over inheritance","@dataclass, __repr__, __eq__, ordering"],["corey","realpy"],"Rewrite Run as a @dataclass(order=True) and sort runs by date.",[
 ["What does @dataclass generate?","__init__, __repr__ and __eq__ (and ordering methods with order=True)."],
 ["Composition over inheritance","Build objects from parts they have, rather than deep is-a hierarchies."],
 ["super().__init__() is for?","Calling the parent class initializer from a subclass."]]],
["py","Iterators, generators, lambdas",["Iterables vs iterators, yield, generator expressions","lambda, sorted(key=...), map/filter, any/all"],["corey","pt"],"Write a generator that streams a huge CSV line by line and yields only runs over 8 mi.",[
 ["Generator advantage","Lazy: produces one item at a time, so memory stays constant."],
 ["Sort dicts by 'miles' descending","sorted(runs, key=lambda r: r['miles'], reverse=True)"],
 ["any() vs all()","any: at least one truthy; all: every item truthy (all([]) is True)."]]],
["py","Testing and type hints",["pytest: test functions, asserts, fixtures, parametrize","Type hints and mypy basics"],["pytest","realpy"],"Add 10 pytest tests to trail_log, including parametrized pace cases. Add type hints.",[
 ["How does pytest find tests?","Files named test_*.py, functions named test_*."],
 ["@pytest.mark.parametrize","Runs the same test with multiple input/expected pairs."],
 ["Do type hints change runtime behavior?","No. They're for readers, editors and checkers like mypy."]]],

// ---------- DSA ----------
["dsa","Big-O and complexity",["Time vs space; O(1), O(log n), O(n), O(n log n), O(n²)","Amortized cost; reading constraints to pick an approach"],["neet","bigo"],"Annotate the Big-O of 10 of your earlier functions. Solve Contains Duplicate.",[
 ["Binary search complexity","O(log n) time, O(1) space (iterative)."],
 ["n ≤ 10^5 suggests what complexity?","About O(n log n) or better."],
 ["Amortized O(1) example","Appending to a Python list (occasional resize is spread across appends)."]]],
["dsa","Arrays and hashing",["Hash maps for counting and lookup","Prefix sums"],["neet","visu"],"Two Sum, Valid Anagram, Group Anagrams.",[
 ["Two Sum pattern","One pass: store value→index in a dict; check if target - x is already seen."],
 ["Group anagrams key","sorted(word) as a tuple, or a 26-count tuple."],
 ["Prefix sum gives range sum how?","sum(i..j) = prefix[j+1] - prefix[i] in O(1)."]]],
["dsa","Hashing 2: top-k and sequences",["Bucket sort, heaps for top-k","Set-based sequence detection"],["neet"],"Top K Frequent Elements, Product of Array Except Self, Longest Consecutive Sequence.",[
 ["Longest consecutive sequence in O(n)","Put nums in a set; only start counting from x where x-1 isn't in the set."],
 ["Product except self without division","Left-prefix products times right-suffix products."]]],
["dsa","Two pointers",["Opposite-ends and same-direction pointers","When sorted input unlocks two pointers"],["neet","visu"],"Valid Palindrome, Two Sum II, 3Sum, Container With Most Water.",[
 ["Container With Most Water move rule","Move the pointer at the shorter line inward."],
 ["3Sum duplicate handling","Sort, then skip equal neighbors for the anchor and both pointers."]]],
["dsa","Sliding window",["Fixed vs variable windows","Expand right, shrink left while invalid"],["neet"],"Best Time to Buy/Sell Stock, Longest Substring Without Repeating Characters, Longest Repeating Character Replacement.",[
 ["Variable window template","Grow right each step; while window invalid, shrink left; record best."],
 ["Character replacement validity check","window length - max char count ≤ k."]]],
["dsa","Stacks",["LIFO; matching brackets; monotonic stacks","Evaluate expressions"],["neet","visu"],"Valid Parentheses, Min Stack, Daily Temperatures, Evaluate RPN.",[
 ["Monotonic stack is for…","Next greater/smaller element problems in O(n)."],
 ["Min Stack trick","Push (value, current_min) pairs so min is always on top."]]],
["dsa","Binary search",["Classic and 'search the answer space'","Rotated arrays; lo/hi invariants"],["neet","visu"],"Binary Search, Search a 2D Matrix, Koko Eating Bananas, Find Min in Rotated Sorted Array.",[
 ["Binary search on the answer","When feasibility is monotonic: search the smallest value that works."],
 ["Safe midpoint","mid = lo + (hi - lo) // 2"]]],
["dsa","Linked lists",["Pointers, dummy heads, fast/slow pointers","Reverse in place"],["neet","visu"],"Reverse Linked List, Merge Two Sorted Lists, Linked List Cycle, Reorder List.",[
 ["Detect a cycle","Floyd: slow moves 1, fast moves 2; they meet if there's a cycle."],
 ["Why a dummy head node?","Avoids special cases when the head itself changes."]]],
["dsa","Recursion",["Base case, recursive case, call stack","Memoization intro"],["pt","neet"],"Visualize factorial and fib in Python Tutor. Then Pow(x, n) and Fibonacci with @cache.",[
 ["Two parts of every recursive function","A base case that stops, and a step that moves toward it."],
 ["Python recursion limit default","About 1000 frames; deep recursion may need iteration."]]],
["dsa","Trees 1: DFS",["Binary trees, traversal orders","Recursive DFS returning values up"],["neet","visu"],"Invert Binary Tree, Max Depth, Diameter, Balanced Binary Tree.",[
 ["Inorder traversal of a BST gives?","Values in sorted order."],
 ["Diameter of a binary tree","Max over nodes of left height + right height."]]],
["dsa","Trees 2: BFS and BSTs",["Level-order with a queue (deque)","BST validation and lowest common ancestor"],["neet","visu"],"Level Order Traversal, Right Side View, Validate BST, LCA of a BST.",[
 ["Data structure for BFS","A queue: collections.deque with popleft()."],
 ["Validate BST correctly","Pass down (low, high) bounds; checking only children is wrong."]]],
["dsa","Heaps and priority queues",["heapq is a min-heap; push/pop O(log n)","Top-k and k-way merge"],["neet","visu"],"Kth Largest Element in a Stream, Last Stone Weight, K Closest Points to Origin.",[
 ["Max-heap with heapq","Push negated values."],
 ["Top-k largest with a heap","Keep a min-heap of size k: O(n log k)."]]],
["dsa","Graphs 1: BFS/DFS",["Adjacency lists, visited sets, grids as graphs","Connected components"],["neet","visu"],"Number of Islands, Clone Graph, Max Area of Island, Rotting Oranges.",[
 ["Shortest path in an unweighted graph","BFS."],
 ["Grid neighbors","(r±1, c) and (r, c±1), checking bounds."]]],
["dsa","Graphs 2: topological sort and union-find",["Kahn's algorithm, cycle detection","Union-find with path compression"],["neet","visu"],"Course Schedule I & II, Number of Connected Components, Redundant Connection.",[
 ["Topological sort with BFS (Kahn)","Start from in-degree 0 nodes; remove edges; if not all visited, there's a cycle."],
 ["Union-find operations","find (with path compression) and union (by rank/size)."]]],
["dsa","Backtracking",["Choose → explore → un-choose","Pruning"],["neet"],"Subsets, Combination Sum, Permutations, Word Search.",[
 ["Number of subsets of n items","2^n."],
 ["Backtracking template","Add choice, recurse, then remove the choice (undo)."]]],
["dsa","Dynamic programming 1",["Overlapping subproblems; top-down vs bottom-up","1-D DP"],["neet","visu"],"Climbing Stairs, House Robber, Coin Change, Longest Increasing Subsequence.",[
 ["When is DP applicable?","Optimal substructure plus overlapping subproblems."],
 ["House Robber recurrence","dp[i] = max(dp[i-1], dp[i-2] + nums[i])."]]],
["dsa","Dynamic programming 2",["2-D DP grids and strings","Space optimization"],["neet"],"Unique Paths, Longest Common Subsequence, Word Break, Edit Distance (stretch).",[
 ["LCS recurrence","If chars match: 1 + dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1])."],
 ["Unique paths cell value","paths[r][c] = paths[r-1][c] + paths[r][c-1]."]]],
["dsa","Intervals and greedy",["Sort by start; merge overlaps","Greedy choice proofs"],["neet"],"Merge Intervals, Insert Interval, Non-overlapping Intervals, Jump Game.",[
 ["Merge intervals first step","Sort by start time."],
 ["Non-overlapping intervals greedy","Sort by end time; keep the earliest-ending interval."]]],
["dsa","Mock interview day",["Talk through: clarify, examples, brute force, optimize, code, test","Timebox: 35 minutes per problem"],["tih","neet"],"Do 2 timed mediums out loud (record yourself). Write a one-page pattern cheat sheet.",[
 ["First thing to do in a coding interview","Clarify the problem and constraints with an example before coding."],
 ["What to do after coding","Walk through a test case and state time and space complexity."]]],

// ---------- SWE ----------
["swe","Shell and git workflow",["Navigate, pipes, grep, environment variables","Branches, merges, rebase, pull requests"],["missing","lgb"],"Finish the first 2 Learn Git Branching levels. Open a PR to your own repo and merge it.",[
 ["git merge vs git rebase","merge adds a merge commit preserving history; rebase replays your commits on top for a linear history."],
 ["What does `cmd1 | cmd2` do?","Sends cmd1's output as cmd2's input."]]],
["swe","HTTP and REST",["Requests, methods, status codes, headers, JSON","REST resource design, idempotency"],["mdn","bbg"],"Use requests to call a public API (e.g. weather) and print a summary. Explore it with curl.",[
 ["GET vs POST vs PUT vs PATCH vs DELETE","Read, create, replace, partial update, remove."],
 ["Which HTTP methods are idempotent?","GET, PUT, DELETE (and HEAD, OPTIONS). POST is not."],
 ["401 vs 403","401: not authenticated. 403: authenticated but not allowed."]]],
["swe","FastAPI basics",["Path and query params, request bodies with Pydantic","Auto docs at /docs"],["fastapi"],"Start run-api: GET /runs, POST /runs with a Pydantic model, in-memory storage.",[
 ["What does Pydantic do in FastAPI?","Validates and parses request/response data from type hints."],
 ["Where are FastAPI's interactive docs?","/docs (Swagger UI) and /redoc."]]],
["swe","Databases from Python",["SQL vs NoSQL; SQLite; SQLAlchemy or SQLModel","Migrations idea"],["fastapi","sqlbolt"],"Persist runs in SQLite. Add GET /runs/{id} and weekly totals.",[
 ["What is an ORM?","Maps database tables to classes so you work with objects instead of raw SQL."],
 ["Why database migrations?","Version-controlled, repeatable schema changes across environments."]]],
["swe","Config, secrets, auth basics",["Environment variables, .env, never commit secrets","API keys, OAuth at a high level, hashing passwords"],["fastapi","owasp"],"Move settings to env vars, add a simple API-key header check, add .env to .gitignore.",[
 ["Where should secrets live?","Environment variables or a secret manager, never in the repo."],
 ["Hashing vs encryption for passwords","Hash (one-way, salted, e.g. bcrypt/argon2); never store reversible passwords."]]],
["swe","Testing APIs and CI",["TestClient, unit vs integration tests","GitHub Actions: run tests on every push"],["pytest","gha"],"Write API tests and a GitHub Actions workflow that runs pytest on push.",[
 ["Unit vs integration test","Unit: one piece in isolation. Integration: pieces working together (API + DB)."],
 ["What is CI?","Continuous integration: automatically build and test every change."]]],
["swe","Docker",["Images vs containers, Dockerfile layers, ports","Small images, .dockerignore"],["docker","zoom"],"Write a Dockerfile for run-api and run it locally on port 8000.",[
 ["Image vs container","An image is the template; a container is a running instance of it."],
 ["Why order Dockerfile steps carefully?","Layers are cached; copy requirements and install before copying code."]]],
["swe","Docker Compose and Postgres",["Multi-container apps, volumes, networks","Switching SQLite to Postgres"],["docker","zoom"],"docker compose up runs run-api + Postgres with a volume.",[
 ["What does a Docker volume do?","Persists data outside the container's lifecycle."],
 ["Compose service names","Containers reach each other by service name as the hostname."]]],
["swe","Deploy to the cloud",["Cloud Run (or Render): build, deploy, env vars","Logs and health checks"],["gcp","docker"],"Deploy run-api publicly. Add the URL to its README.",[
 ["Serverless containers (Cloud Run) scale how?","Automatically by request load, down to zero when idle."],
 ["What is a health check endpoint?","A cheap route (e.g. /health) the platform pings to know the app is alive."]]],
["swe","System design 1",["Client-server, load balancers, caching, CDNs","Latency vs throughput, vertical vs horizontal scaling"],["bbg","sdp"],"Draw run-api at 1M users: load balancer, app servers, cache, database. Use Excalidraw.",[
 ["Cache-aside pattern","App reads cache first; on miss reads DB and fills cache."],
 ["Horizontal vs vertical scaling","Add more machines vs make one machine bigger."]]],
["swe","System design 2",["SQL vs NoSQL, replication, sharding, indexes","Queues and async processing, rate limiting"],["bbg","sdp"],"Design a URL shortener out loud in 30 minutes; write it up in one page.",[
 ["Why put a message queue between services?","Decouple producers and consumers, absorb spikes, retry failures."],
 ["CAP theorem in one line","During a network partition, choose consistency or availability."]]],
["swe","Ship week review",["Code review checklist, logging, error handling","README and architecture diagram"],["tih"],"Polish run-api: logging, error responses, README with diagram and live URL. Pin it on GitHub.",[
 ["What makes an API error response useful?","Correct status code, a clear message, and a stable error code."],
 ["Structured logging","Logs as key-value/JSON so they can be searched and aggregated."]]],

// ---------- DATA ENGINEERING ----------
["de","SQL refresher",["SELECT, WHERE, ORDER BY, GROUP BY, HAVING","NULL handling"],["sqlbolt","mode"],"Finish SQLBolt lessons 1–12. Solve 5 easy DataLemur problems.",[
 ["WHERE vs HAVING","WHERE filters rows before grouping; HAVING filters groups after."],
 ["COUNT(*) vs COUNT(col)","COUNT(*) counts rows; COUNT(col) skips NULLs."]]],
["de","Joins",["INNER, LEFT, RIGHT, FULL, CROSS, self joins","Join fan-out and duplicates"],["sqlbolt","lemur"],"5 DataLemur join problems. Explain one row-explosion bug you could cause.",[
 ["LEFT JOIN keeps what?","All rows from the left table; NULLs where the right side has no match."],
 ["Anti-join pattern","LEFT JOIN … WHERE right.key IS NULL (or NOT EXISTS)."]]],
["de","Window functions",["ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD","Running totals with SUM() OVER"],["mode","lemur"],"Weekly mileage with a 4-week rolling average; rank your fastest runs per month.",[
 ["RANK vs DENSE_RANK","RANK leaves gaps after ties (1,1,3); DENSE_RANK doesn't (1,1,2)."],
 ["Running total","SUM(x) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING)."]]],
["de","CTEs and query performance",["CTEs, subqueries, readability","Indexes, EXPLAIN, partitioning and clustering in BigQuery"],["mode","gcp"],"Rewrite a messy query with CTEs. Compare bytes scanned with and without partition filters in BigQuery.",[
 ["What does an index speed up?","Lookups and filters on the indexed columns, at the cost of slower writes."],
 ["BigQuery cost driver","Bytes scanned. Select only needed columns; filter on partitions."]]],
["de","Data modeling",["Normalization (1NF–3NF) vs denormalization","Star schema: facts and dimensions; slowly changing dimensions"],["zoom","dbt"],"Model your runs + races + shoes as a star schema. Draw it.",[
 ["Fact vs dimension table","Facts hold measurable events (miles, time); dimensions hold descriptive context (date, shoe, route)."],
 ["SCD Type 2","Keep history by adding a new row with valid_from/valid_to when an attribute changes."]]],
["de","Warehouses and lakes",["OLTP vs OLAP; columnar storage","Data lake, warehouse, lakehouse"],["zoom","gcp"],"Load a CSV into BigQuery; query it; note storage vs compute pricing.",[
 ["OLTP vs OLAP","OLTP: many small transactional reads/writes. OLAP: large analytical scans and aggregations."],
 ["Why columnar storage for analytics?","Reads only the columns a query needs and compresses well."]]],
["de","ETL, ELT, batch vs streaming",["Extract, load, transform order","Idempotency, backfills, late data"],["zoom","bbg"],"Write an idempotent Python job that pulls Strava (or any API) data for a date and overwrites that day's partition.",[
 ["ETL vs ELT","ETL transforms before loading; ELT loads raw data then transforms inside the warehouse."],
 ["Idempotent pipeline","Running it twice for the same input gives the same result (no duplicates)."]]],
["de","pandas for data work",["DataFrames, filtering, groupby, merge, pivot","Dates and time series"],["pandas","corey"],"Analyze your run log in pandas: weekly totals, pace trend, longest streak.",[
 ["df.groupby('week')['miles'].sum() returns?","A Series of total miles per week."],
 ["merge vs concat","merge joins on keys (like SQL); concat stacks frames along an axis."]]],
["de","Orchestration with Airflow",["DAGs, tasks, operators, schedules","Retries, sensors, backfills"],["airflow","zoom"],"Run Airflow locally (Docker). Build a DAG: extract → load to GCS → load to BigQuery, daily.",[
 ["What is a DAG?","A directed acyclic graph of tasks and their dependencies."],
 ["Airflow catchup/backfill","Runs past scheduled intervals that haven't run yet."]]],
["de","dbt",["Models, refs, sources, materializations","Tests and docs"],["dbt","zoom"],"Build staging → mart models for runs in dbt with not_null and unique tests.",[
 ["What does ref() do in dbt?","References another model and builds the dependency graph."],
 ["Two built-in dbt tests","unique and not_null (also accepted_values, relationships)."]]],
["de","Spark basics",["Driver/executors, DataFrames, lazy evaluation","Transformations vs actions"],["spark","zoom"],"Run PySpark locally on a large public CSV (NYC taxi). Group and aggregate.",[
 ["Transformation vs action","Transformations (select, filter) are lazy; actions (count, collect, write) trigger execution."],
 ["Why is Spark fast for big data?","Distributed, in-memory processing across executors."]]],
["de","Spark at scale",["Partitions, shuffles, joins, skew","Broadcast joins, caching"],["spark","bbg"],"Compare a regular vs broadcast join on taxi data; read the Spark UI.",[
 ["What causes a shuffle?","Wide transformations like groupBy and join that move data between partitions."],
 ["Broadcast join","Send the small table to every executor to avoid shuffling the big one."]]],
["de","Streaming and Kafka",["Topics, partitions, producers, consumers, offsets","Delivery guarantees"],["kafka","zoom"],"Run Kafka in Docker; produce fake run events and consume them into a file.",[
 ["Kafka topic partition","An ordered, append-only log; parallelism unit for consumers."],
 ["At-least-once delivery","No message lost, but duplicates possible; consumers must be idempotent."]]],
["de","Cloud and infrastructure as code",["GCS, BigQuery, IAM, service accounts","Terraform basics"],["tf","gcp"],"Create your bucket and dataset with Terraform instead of clicking.",[
 ["Principle of least privilege","Grant only the permissions a service actually needs."],
 ["terraform plan vs apply","plan previews changes; apply makes them."]]],
["de","Pipeline project: ship it",["Data quality checks, monitoring, alerts","Dashboard on top"],["zoom","dbt"],"Finish Trail Data Pipeline: Strava → GCS → BigQuery → dbt → Looker Studio dashboard. README + diagram.",[
 ["Data quality dimensions","Completeness, accuracy, freshness, uniqueness, validity, consistency."],
 ["What to alert on in a pipeline","Failures, freshness (data late), and volume anomalies."]]],

// ---------- ML ----------
["ml","NumPy",["Arrays, shapes, broadcasting, vectorization","Indexing and boolean masks"],["numpy","pt"],"Rewrite a loop-based pace calculation with NumPy vectorization; time both.",[
 ["Broadcasting","NumPy stretches compatible shapes so element-wise ops work without copying."],
 ["Why vectorize?","Operations run in optimized C instead of Python loops: much faster."]]],
["ml","Exploratory data analysis",["Distributions, outliers, correlations","Plotting with matplotlib/seaborn"],["pandas","statq"],"EDA notebook on your runs: pace vs distance, heat, elevation. 5 charts, 5 findings.",[
 ["Correlation vs causation","Two variables moving together doesn't mean one causes the other."],
 ["Median vs mean with outliers","Median is robust to outliers; the mean gets pulled."]]],
["ml","Statistics refresher",["Probability, distributions, sampling","Hypothesis tests, p-values, confidence intervals"],["statq","mlcc"],"Simulate 10,000 coin flips and a bootstrap confidence interval of your average pace.",[
 ["p-value","Probability of data at least this extreme if the null hypothesis were true."],
 ["Bootstrap","Resample your data with replacement many times to estimate uncertainty."]]],
["ml","The ML workflow",["Train/validation/test splits, leakage","Baselines first"],["mlcc","skl"],"Predict run pace with scikit-learn: baseline (mean) vs LinearRegression.",[
 ["Data leakage","Information from the test set (or future) sneaks into training, inflating scores."],
 ["Why start with a baseline?","Tells you whether the model is actually learning anything."]]],
["ml","Linear and logistic regression",["Loss functions, gradient descent","Regularization (L1/L2)"],["statq","mlcc"],"Logistic regression: classify job postings as good fit / not (use your job board data).",[
 ["Logistic regression outputs?","A probability via the sigmoid; threshold to classify."],
 ["L1 vs L2 regularization","L1 can zero out weights (feature selection); L2 shrinks them smoothly."]]],
["ml","Trees and ensembles",["Decision trees, random forests, gradient boosting","Feature importance"],["statq","skl"],"Compare tree, random forest and gradient boosting on the job-fit task.",[
 ["Random forest vs gradient boosting","RF averages many independent trees (bagging); boosting builds trees sequentially to fix errors."],
 ["Why do single trees overfit?","They can keep splitting until they memorize the training data."]]],
["ml","Evaluation and validation",["Precision, recall, F1, ROC-AUC, MAE/RMSE","Cross-validation, bias/variance"],["statq","mlcc"],"Add 5-fold cross-validation and a confusion matrix to your classifier.",[
 ["Precision vs recall","Precision: of predicted positives, how many were right. Recall: of actual positives, how many were found."],
 ["Overfitting sign","Training score much higher than validation score."]]],
["ml","Neural networks, visually",["Neurons, layers, activations","What training actually does"],["b3b1","tfplay"],"Watch 3Blue1Brown chapters 1–2. Train spirals in TensorFlow Playground and note what layers change.",[
 ["Why do we need activation functions?","Without nonlinearity, stacked layers collapse into one linear function."],
 ["Epoch","One full pass over the training data."]]],
["ml","Backprop and PyTorch",["Gradients, chain rule, optimizers","Tensors, autograd, training loop"],["b3b1","karp","torch"],"Watch Karpathy's micrograd video; train a small MLP in PyTorch on MNIST.",[
 ["Backpropagation","Applying the chain rule backward to get each weight's gradient of the loss."],
 ["PyTorch training loop steps","forward → loss → zero_grad → backward → optimizer.step"]]],
["ml","Embeddings",["Representing words/text as vectors","Cosine similarity, nearest neighbors"],["hf","illus"],"Embed 50 job titles; find nearest neighbors to 'AI engineer'; plot in 2-D with PCA.",[
 ["What is an embedding?","A dense vector where similar meanings are close together."],
 ["Cosine similarity","Angle-based similarity: dot(a,b) / (|a||b|), 1 = same direction."]]],
["ml","Transformers and attention",["Self-attention, Q/K/V, positional info","Why transformers scale"],["illus","texpl","b3b1"],"Read The Illustrated Transformer and play with Transformer Explainer. Sketch attention from memory.",[
 ["Self-attention in one line","Each token weighs every other token by how relevant it is (softmax(QKᵀ/√d)·V)."],
 ["Why transformers beat RNNs at scale","Attention runs in parallel across tokens and captures long-range context."]]],
["ml","ML project: ship it",["Model card, error analysis","Simple demo app"],["skl","mwml"],"Ship a job-fit classifier with a Streamlit or Gradio demo and a model card in the README.",[
 ["What goes in a model card?","Intended use, data, metrics, limitations, ethical considerations."],
 ["Error analysis","Look at the specific examples the model gets wrong to find patterns."]]],

// ---------- AI ENGINEERING ----------
["ai","How LLMs behave",["Tokens, context windows, sampling (temperature, top-p)","Hallucination and why it happens"],["hf","texpl"],"Count tokens for 3 texts; run one prompt at temperature 0 and 1 five times each; compare.",[
 ["Temperature","Controls randomness of sampling; low = more deterministic, high = more varied."],
 ["Context window","Maximum tokens (input + output) the model can attend to at once."]]],
["ai","Calling LLM APIs",["Messages, system prompts, streaming","Errors, retries, rate limits"],["claude","dlai"],"Build a CLI chat with the Claude API that streams responses and keeps history.",[
 ["Role of the system prompt","Sets persistent instructions, persona and constraints for the conversation."],
 ["Handling rate limits","Retry with exponential backoff and jitter."]]],
["ai","Prompt engineering",["Clear instructions, examples (few-shot), XML tags","Chain of thought, prompt templates"],["prompt","dlai"],"Write a prompt that turns a job posting into a JSON skills list; test it on 5 postings.",[
 ["Few-shot prompting","Including example input/output pairs to show the desired behavior."],
 ["Why structure prompts with XML tags?","Separates instructions, context and data so the model doesn't mix them up."]]],
["ai","Structured output and tool calling",["JSON schemas, validation with Pydantic","Tool/function calling loop"],["claude","agents"],"Give the model a get_weather tool; let it answer 'Should I run at 6am in Flagstaff?'",[
 ["Tool calling flow","Model requests a tool → your code runs it → you return the result → model answers."],
 ["Why validate model JSON?","Models can produce invalid or incomplete output; validate and retry."]]],
["ai","Embeddings and vector search",["Chunk → embed → index → query","Vector DBs: pgvector, Chroma, FAISS"],["dlai","hf"],"Index the Arizona Trail passage pages in Chroma; query 'where can I get water near Mormon Lake?'",[
 ["Approximate nearest neighbor (ANN)","Fast search for close vectors that trades a little accuracy for speed (e.g. HNSW)."],
 ["Why chunk documents?","Embeddings work best on focused passages and must fit model limits."]]],
["ai","RAG 1",["Retrieve-then-generate; grounding and citations","Chunk size and overlap"],["dlai","claude"],"Build Trail Guide v1: question → retrieve top-5 chunks → answer with citations.",[
 ["What problem does RAG solve?","Gives the model fresh/private knowledge at query time, reducing hallucinations."],
 ["Chunk overlap purpose","Keeps context that would be cut at chunk boundaries."]]],
["ai","RAG 2",["Hybrid search (BM25 + vectors), reranking","Query rewriting, metadata filters"],["dlai","hf"],"Add hybrid search and a reranker to Trail Guide; compare answers on 10 questions.",[
 ["Hybrid search","Combine keyword (BM25) and vector scores to catch exact terms and meaning."],
 ["Reranker","A second model that reorders retrieved chunks by true relevance."]]],
["ai","Evaluating LLM apps",["Golden datasets, LLM-as-judge, retrieval metrics","Regression testing prompts"],["dlai","mwml"],"Write 25 Q&A pairs for Trail Guide; score retrieval hit rate and answer correctness automatically.",[
 ["Why evals before shipping?","Prompts and models change; evals catch regressions you'd never notice by eye."],
 ["Retrieval hit rate","Share of questions where the right chunk appears in the top-k."]]],
["ai","Agents 1",["Agent loop: think → act (tool) → observe","Workflows vs agents"],["agents","dlai"],"Make Trail Guide an agent with tools: search_docs, get_weather, trail_mileage.",[
 ["Workflow vs agent (Anthropic)","Workflows follow predefined code paths; agents decide their own steps and tools."],
 ["When not to use an agent","When a fixed sequence of steps works: simpler, cheaper, more reliable."]]],
["ai","Agents 2",["Planning, memory, multi-step tasks","Orchestrator-workers, evaluator-optimizer patterns"],["agents","lgraph"],"Rebuild the agent in LangGraph with a plan step and a checker step.",[
 ["Orchestrator-workers pattern","A lead model breaks a task into subtasks and delegates them to worker calls."],
 ["Agent memory types","Short-term (conversation context) and long-term (stored and retrieved facts)."]]],
["ai","Model Context Protocol (MCP)",["MCP servers, tools, resources","Connecting agents to real systems"],["mcp"],"Write a small MCP server exposing your run log as a tool; use it from an MCP client.",[
 ["What is MCP?","An open protocol for connecting AI apps to tools and data sources in a standard way."],
 ["MCP server exposes…","Tools (actions), resources (data) and prompts."]]],
["ai","Safety and guardrails",["Prompt injection, data leakage, jailbreaks","Input/output filtering, least privilege for tools"],["owasp","prompt"],"Red-team Trail Guide with 10 injection attempts; add defenses and document them.",[
 ["Prompt injection","Untrusted content containing instructions that hijack the model's behavior."],
 ["Best defense for tool-using agents","Least-privilege tools, human confirmation for risky actions, and treating retrieved text as data."]]],
["ai","Cost, latency, caching",["Token budgets, model choice, batching","Prompt caching, response caching, streaming UX"],["claude","mwml"],"Measure cost and p50/p95 latency per Trail Guide query; cut cost 30% with caching or a smaller model.",[
 ["p95 latency","95% of requests are faster than this; shows tail slowness the average hides."],
 ["Prompt caching","Reuse processed prompt prefixes across calls to cut cost and latency."]]],
["ai","Fine-tuning vs RAG vs prompting",["When each wins","LoRA/PEFT at a high level"],["hf","dlai"],"Write a one-page decision guide with 3 real scenarios taken from AI job postings.",[
 ["Fine-tune when…","You need a consistent style/format or skill the base model lacks, with plenty of examples."],
 ["LoRA","Trains small low-rank adapter matrices instead of all weights: cheap fine-tuning."]]],
["ai","Deploying AI apps",["FastAPI + Docker + Cloud Run for an LLM app","Secrets, streaming endpoints, observability/tracing"],["fastapi","gcp"],"Deploy Trail Guide with a simple web UI; add request tracing and logging of tokens and latency.",[
 ["What to log for every LLM call","Prompt version, model, tokens in/out, latency, cost, and outcome."],
 ["Why version prompts?","So you can tie behavior changes and eval scores to specific prompt edits."]]],
["ai","MLOps",["Experiment tracking, model registry, CI/CD for ML","Monitoring and drift"],["mwml","zoom"],"Add an eval job to CI that fails the build if Trail Guide accuracy drops below your threshold.",[
 ["Data drift","Production inputs shift away from what the model was built/tested on."],
 ["CI/CD for ML adds…","Data and model validation steps, plus eval gates before deploy."]]],
["ai","Enterprise AI platforms",["How enterprise agents differ: trust, permissions, data grounding, auditability","Survey the platforms employers use: Salesforce Agentforce, cloud AI platforms (Vertex AI, Bedrock, Azure AI)"],["trail","gcp"],"Do 2 Trailhead Agentforce modules or a cloud AI lab. Write how Trail Guide would change for an enterprise customer.",[
 ["Einstein Trust Layer","Salesforce's safeguards for gen AI: data masking, zero retention, toxicity checks, audit trail."],
 ["Enterprise agent must-haves","Permissions, grounding in customer data, audit logs, human escalation."]]],
["ai","AI project: ship it",["Demo video, README, architecture diagram","Eval results table"],["agents","mwml"],"Finish Trail Guide: deployed URL, 2-minute demo video, eval table, diagram. Pin it.",[
 ["What makes an AI demo convincing?","A real task end to end, an edge case handled, and measured eval results."],
 ["One-sentence pitch formula","For [user] who [problem], [product] does [outcome] unlike [alternative]."]]],

// ---------- CAPSTONE ----------
["cap","Portfolio story",["Tie projects into one narrative: data → ML → agents","Resume bullets with impact numbers"],["tih"],"Update your resume and site with run-api, Trail Data Pipeline, job-fit model and Trail Guide.",[
 ["Strong resume bullet","Action verb + what you built + measurable impact + tech used."]]],
["cap","Behavioral prep",["6 STAR stories: ownership, ambiguity, conflict, failure, customer, learning fast","Why this company, why AI: one tailored answer per target"],["tih"],"Write and say out loud all 6 stories; time each to 2 minutes.",[
 ["Answering 'tell me about a failure'","Own it, show what you changed, and the better result after."]]],
["cap","Mock coding 1",["Mixed patterns under time","Communicate while coding"],["neet","tih"],"3 timed problems (easy, medium, medium). Review every miss into a flashcard.",[
 ["Stuck in an interview?","Say your current idea, try a smaller example, or start from brute force."]]],
["cap","Mock coding 2",["Graphs, DP and trees mix","Edge cases"],["neet"],"3 more timed problems with a friend or pramp-style partner.",[
 ["Edge cases to always check","Empty input, single element, duplicates, negatives, very large values."]]],
["cap","Mock system design",["Requirements → estimates → API → data → scale → trade-offs","Draw while talking"],["bbg","sdp"],"Design a job board that refreshes daily for 1M users (you already built one).",[
 ["First 5 minutes of system design","Clarify functional and non-functional requirements and rough scale."]]],
["cap","Mock AI system design",["Design an enterprise RAG assistant: data, retrieval, evals, safety, cost","Trade-offs you'd explain to a customer"],["agents","dlai"],"Design 'an agent that answers customer support tickets from a CRM'. Whiteboard it in 40 minutes.",[
 ["Components of a production RAG system","Ingestion, chunking/embedding, retrieval + rerank, generation, evals, guardrails, monitoring."]]],
["cap","Demo day",["Present your best project like a founder","Handle questions"],["tih"],"Record a 3-minute demo of Trail Guide and share it on LinkedIn.",[
 ["Demo structure","Problem → live demo → how it works → results → what's next."]]],
["cap","Retro and next 90 days",["What stuck, what didn't","Plan the next quarter"],["tih"],"Write a retro and pick 3 deeper topics for the next 90 days.",[
 ["Best predictor of learning","Consistent daily practice plus spaced review, not cramming."]]]
];

// Educative track: 1.5 h a day on lesson days. Lesson indexes are 0-based; each segment spreads its units across its days.
window.EDU = [
  {course:"Grokking System Design Fundamentals", url:"https://www.educative.io/courses/grokking-system-design-fundamentals", from:0, to:3,
   units:["Finish Distributed System Fundamentals, then Communication in Distributed Systems","Storage and Data Management","Security in System Design, then Trade-Offs and Real-World Design Principles","Wrapping Up, then redo the 4 quizzes"]},
  {course:"Learn Python 3 from Scratch", url:"https://www.educative.io/courses/learn-python-3-from-scratch", from:4, to:7,
   units:["Introduction to Python and Programming Concepts (lessons 1–3)","Introduction to Python and Programming Concepts (lessons 4–5) + quiz","User-Defined Functions and Data Types","Program Structures and Calculating Game"]},
  {course:"Grokking the Coding Interview Patterns in Python", url:"https://www.educative.io/courses/grokking-coding-interview-in-python", from:8, to:64,
   units:["Two Pointers","Fast and Slow Pointers","Sliding Window","Intervals","In-Place Manipulation of a Linked List","Two Heaps","K-way Merge","Top K Elements","Modified Binary Search","Subsets","Greedy Techniques","Backtracking","Dynamic Programming","Cyclic Sort","Topological Sort","Sort and Search","Matrices","Stacks","Graphs","Tree Depth-First Search","Tree Breadth-First Search","Trie","Hash Maps","Knowing What to Track","Union Find","Custom Data Structures","Bitwise Manipulation","Math and Geometry","Challenge Yourself"]},
  {course:"Grokking the Modern System Design Interview", url:"https://www.educative.io/courses/grokking-the-system-design-interview", from:65, to:81,
   units:["Introduction","System Design Interviews","Preliminary System Design Concepts","Non-Functional System Characteristics","Back-of-the-Envelope Calculations","Building Blocks","Domain Name System","Load Balancers","Databases","Key-Value Store","Content Delivery Network (CDN)","Sequencer","Distributed Monitoring","Monitor Server-Side Errors","Monitor Client-Side Errors","Distributed Cache","Distributed Messaging Queue","Pub-Sub","Rate Limiter","Blob Store","Distributed Search","Distributed Logging","Distributed Task Scheduler","Sharded Counters","Concluding the Building Blocks Discussion","Design YouTube","Design Quora","Design Google Maps","Design a Proximity Service/Yelp","Design Uber","Design Twitter","Design Newsfeed System","Design Instagram","Design a URL Shortening Service","Design a Web Crawler","Design WhatsApp","Design Typeahead Suggestion","Design Google Docs","Design a Deployment System","Design a Payment System","Design a LeetCode System","System Design Shift in AI","Design a ChatGPT System","Design a Data Infrastructure System","LLM-Powered Customer Support Bot","AI-Powered Code Assistant","Lessons from System Failures","Concluding Remarks"]},
  {course:"Grokking the Machine Learning Interview", url:"https://www.educative.io/courses/grokking-the-machine-learning-interview", from:82, to:91,
   units:["Introduction","Practical ML Techniques/Concepts","Search Ranking","Feed Based System","Recommendation System","Self-Driving Car: Image Segmentation","Entity Linking System","Ad Prediction System","Fraud Detection System","Hate Speech Detection + Dynamic Pricing Engine"]},
  {course:"Catch-up", url:"https://www.educative.io/learn", from:92, to:98,
   units:["Finish anything left in the Coding Patterns course","Finish anything left in the Coding Patterns course","Finish anything left in Modern System Design","Finish anything left in Modern System Design","Finish anything left in the ML Interview course","Redo 5 Coding Patterns problems you missed","Pick your next course (Low Level Design is a good next one)"]}
];
window.eduFor = function(i){
  const s = window.EDU.find(e => i >= e.from && i <= e.to); if (!s) return null;
  const days = s.to - s.from + 1, k = i - s.from, n = s.units.length;
  const a = Math.floor(k * n / days), b = Math.max(a, Math.floor((k + 1) * n / days) - 1);
  const units = s.units.slice(a, b + 1);
  return {course:s.course, url:s.url, units: units.length ? units : [s.units[Math.min(a, n - 1)] + " (continue)"], day:k + 1, days};
};

// Exact assignments for the first two weeks (lesson index → [what, link, minutes]).
(function(){
  const T = "https://docs.python.org/3/tutorial/", MS = "https://missing.csail.mit.edu/2026/", CS = "https://cs50.harvard.edu/python/weeks/", CY = "https://www.youtube.com/@coreyms/search?query=";
  window.DETAIL = {
    0:[["Watch Missing Semester 2026, lecture 1: Course Overview + Introduction to the Shell", MS+"course-shell/", 60],
       ["Watch Missing Semester 2026, lecture 5: Version Control and Git (first half: data model, basic commands)", MS+"version-control/", 45],
       ["Read Python tutorial §1–2: Whetting Your Appetite, Using the Interpreter", T+"appetite.html", 20],
       ["Do: install Python 3.12, VS Code + Python extension, git; set git config user.name/email", "https://code.visualstudio.com/docs/python/python-tutorial", 45]],
    1:[["Read Tech Interview Handbook: Resume guide (all sections)", "https://www.techinterviewhandbook.org/resume/", 45],
       ["Read Tech Interview Handbook: Behavioral interview guide", "https://www.techinterviewhandbook.org/behavioral-interview/", 30],
       ["Pick 3 questions from the behavioral question list and draft STAR answers", "https://www.techinterviewhandbook.org/behavioral-interview-questions/", 60],
       ["Re-read the Salesforce AI Labs posting and highlight every requirement you can prove", "https://careers.salesforce.com/", 20]],
    2:[["Read Tech Interview Handbook: Resume guide, 'projects' section again with your 3 repos open", "https://www.techinterviewhandbook.org/resume/", 20],
       ["Watch Missing Semester 2026, lecture 5: Version Control and Git (second half: branches, remotes)", MS+"version-control/", 40],
       ["Do: write 3 READMEs (what, why, screenshot/GIF, how to run) and pin the repos on your profile", "https://github.com/rishikkolli", 120]],
    3:[["Watch CS50P Week 0: Functions, Variables (full lecture)", CS+"0/", 90],
       ["Read Python tutorial §3: An Informal Introduction (numbers, text, lists)", T+"introduction.html", 40],
       ["Step through 5 of your own snippets in Python Tutor (watch the variables change)", "https://pythontutor.com/visualize.html", 30],
       ["Do CS50P Problem Set 0 (at least 3 of the problems)", CS+"0/", 60]],
    4:[["Watch Corey Schafer: Python Tutorial for Beginners 2: Strings", CY+"beginners+strings", 25],
       ["Read Python tutorial §7.1: Fancier Output Formatting (f-strings)", T+"inputoutput.html", 30],
       ["Skim the string methods reference: split, join, strip, replace, startswith, find", "https://docs.python.org/3/library/stdtypes.html#string-methods", 20],
       ["Do: 10 string exercises in Python Tutor or a REPL (slice, reverse, format paces)", "https://pythontutor.com/visualize.html", 60]],
    5:[["Watch CS50P Week 1: Conditionals", CS+"1/", 60],
       ["Watch CS50P Week 2: Loops", CS+"2/", 60],
       ["Read Python tutorial §4.1–4.5: if, for, range, break/continue, else on loops", T+"controlflow.html", 30],
       ["Do 2 problems from CS50P Problem Set 1 and 2 from Problem Set 2", CS+"2/", 60]],
    6:[["Read Python tutorial §5.1–5.3: lists, list comprehensions, del, tuples", T+"datastructures.html", 40],
       ["Watch Corey Schafer: Lists, Tuples, and Sets", CY+"beginners+lists+tuples+sets", 30],
       ["Watch Corey Schafer: List Comprehensions", CY+"list+comprehensions", 20],
       ["In Python Tutor, see why b = a then a.append(1) changes b (aliasing)", "https://pythontutor.com/visualize.html", 20]],
    7:[["Read Python tutorial §5.4–5.6: sets, dictionaries, looping techniques", T+"datastructures.html#sets", 35],
       ["Read collections docs: Counter and defaultdict sections only", "https://docs.python.org/3/library/collections.html#counter-objects", 25],
       ["Watch Corey Schafer: Dictionaries", CY+"beginners+dictionaries", 25],
       ["Do: word-count a job posting with Counter; skill gap with set difference", "https://pythontutor.com/visualize.html", 60]],
    8:[["Read Python tutorial §4.7–4.9: defining functions, default/keyword args, *args, **kwargs, docstrings", T+"controlflow.html#defining-functions", 45],
       ["Read Python tutorial §9.2: Python Scopes and Namespaces", T+"classes.html#python-scopes-and-namespaces", 25],
       ["Watch Corey Schafer: Functions", CY+"beginners+functions", 25],
       ["Do: refactor your pace calculator into functions with docstrings", "https://pythontutor.com/visualize.html", 60]],
    9:[["Watch CS50P Week 3: Exceptions", CS+"3/", 50],
       ["Watch CS50P Week 6: File I/O", CS+"6/", 60],
       ["Read Python tutorial §7.2 (reading and writing files) and §8 (errors and exceptions)", T+"errors.html", 40],
       ["Do 2 problems from CS50P Problem Set 6", CS+"6/", 60]],
    10:[["Watch CS50P Week 4: Libraries", CS+"4/", 60],
        ["Read Python tutorial §6: Modules (including packages and __name__)", T+"modules.html", 40],
        ["Read Python tutorial §12: Virtual Environments and Packages", T+"venv.html", 20],
        ["Do: make trail_log a package with a venv and requirements.txt", T+"venv.html", 60]],
    11:[["Watch CS50P Week 8: Object-Oriented Programming (first half, through properties)", CS+"8/", 75],
        ["Read Python tutorial §9.3: A First Look at Classes", T+"classes.html#a-first-look-at-classes", 30],
        ["Do: Run and Week classes with total_miles() and longest()", "https://pythontutor.com/visualize.html", 60]]
  };
})();

// Step-by-step labs for the first two weeks. Steps are plain text; links are [label, url].
(function(){
  const P = "https://cs50.harvard.edu/python/psets/", MS = "https://missing.csail.mit.edu/2026/";
  window.LAB = {
    0:{steps:[
      "Install Python 3.12 from python.org, then check it: python3 --version",
      "Install VS Code and its Python extension. Follow the VS Code Python tutorial up to \"Run Python code\".",
      "Install git, then run: git config --global user.name \"Rishik Kolli\", git config --global user.email you@example.com (use your own), git config --global init.defaultBranch main",
      "On GitHub, create a public repo upskill-lab with a README and the Python .gitignore. Clone it.",
      "Create folders: 00-launch, 01-python, 02-dsa, 03-swe, 04-de, 05-ml, 06-ai, notes",
      "Write 01-python/hello.py that prints your name and today's planned miles. Run it, commit \"Add hello\", push.",
      "In a terminal, do Missing Semester shell exercises 1–6. Paste each command and what it did into notes/shell.md.",
      "Do Version Control exercise 5: add a git graph alias (git log --all --graph --decorate --oneline) and try it."],
      done:"upskill-lab is on GitHub with the folders and hello.py, and git graph prints your history.",
      links:[["Python downloads","https://www.python.org/downloads/"],["VS Code Python tutorial","https://code.visualstudio.com/docs/python/python-tutorial"],["New GitHub repo","https://github.com/new"],["Shell exercises",MS+"course-shell/"],["Git exercises",MS+"version-control/"]]},
    1:{steps:[
      "Create 00-launch/targets.md with columns: company, program, link, deadline, status, referral.",
      "Add 10 rows: Salesforce AI Labs first, then similar programs. Search LinkedIn Jobs and your job board for: \"AI rotational program\", \"AI residency\", \"forward deployed engineer new grad\", \"new grad AI engineer\", \"applied AI engineer\".",
      "Copy your resume. Rewrite the top 3 bullets of each role as action + what you built + impact + tech (Tech Interview Handbook formula). Lead CommonSpirit with the BigQuery/Looker pipelines at 716-facility scale.",
      "Write 3 STAR stories (200 words max each) in 00-launch/stories.md: a shipped project, a hard bug, explaining tech to a non-technical stakeholder.",
      "Submit Salesforce AI Labs. Log the date and status in targets.md, then commit."],
      done:"Salesforce AI Labs submitted, 10 targets tracked with deadlines, 3 stories written.",
      links:[["Resume guide","https://www.techinterviewhandbook.org/resume/"],["Behavioral questions","https://www.techinterviewhandbook.org/behavioral-interview-questions/"],["LinkedIn Jobs","https://www.linkedin.com/jobs/"]]},
    2:{steps:[
      "Pick 3 repos to pin: your portfolio site, the job board, and your best NYU AI project. Keep basecamp off; it's meant to stay hidden.",
      "Give each a README with: a one-line pitch, a screenshot or GIF, 3 feature bullets, the tech stack, how to run it, and what you learned.",
      "Record a GIF of 10 seconds or less (Kap on Mac, ScreenToGif on Windows). Save it as docs/demo.gif and embed it at the top of the README.",
      "Pin the 3 repos: your GitHub profile → Customize your pins.",
      "Create a profile README (a repo named rishikkolli) with a 3-line intro and links to your site and LinkedIn."],
      done:"Your GitHub profile shows a profile README and 3 pinned repos, each with a visual.",
      links:[["Your GitHub profile","https://github.com/rishikkolli"],["Kap (Mac)","https://getkap.co/"],["ScreenToGif (Windows)","https://www.screentogif.com/"]]},
    3:{steps:[
      "Do CS50P Problem Set 0 in VS Code under 01-python/ps0/: Indoor Voice, Playback Speed, Making Faces, Einstein, Tip Calculator.",
      "Write 01-python/pace.py: ask for miles (float) and time as hh:mm:ss or mm:ss, convert to seconds, and print pace per mile and per km. Use // and %.",
      "Test it: 6.2 mi in 52:10 should print about 8:25 /mi (3130 s ÷ 6.2 = 504.8 s).",
      "Paste pace.py into Python Tutor and step through it. Watch each variable change.",
      "Commit \"PS0 + pace calculator\" and push."],
      done:"All 5 PS0 problems run, and pace.py gives about 8:25 /mi for 6.2 mi in 52:10.",
      links:[["Indoor Voice",P+"0/indoor/"],["Making Faces",P+"0/faces/"],["Tip Calculator",P+"0/tip/"],["Problem Set 0",P+"0/"],["Python Tutor","https://pythontutor.com/visualize.html"]]},
    4:{steps:[
      "Write 01-python/parse_run.py. Turn \"2026-10-21, 6.2 mi, 52:10\" into date, miles and seconds using split(','), strip() and replace(), then print f\"{date}: {miles:.1f} mi @ {pace} /mi\".",
      "Make it handle 3 messier inputs: \"6.2mi\", \" 6.2 MI \" and an hour-long time like \"1:05:10\".",
      "Do 10 string drills in the REPL: reverse a string, title-case it, count vowels, check a palindrome, right-align a number with f\"{x:>8.2f}\".",
      "Commit and push."],
      done:"parse_run.py handles all 4 input formats without crashing.",
      links:[["String methods","https://docs.python.org/3/library/stdtypes.html#string-methods"],["f-string spec","https://docs.python.org/3/library/string.html#format-specification-mini-language"]]},
    5:{steps:[
      "CS50P Problem Set 1: Deep Thought, Home Federal Savings Bank, Meal Time.",
      "CS50P Problem Set 2: camelCase, Vanity Plates.",
      "Write FizzBuzz from 1 to 100 three ways: if/elif, string building, and a dict of divisors.",
      "Write 01-python/week.py with your real week [6, 8, 6, 8, 3, 12, 5]. Use zip with day names and enumerate. Flag days over 10 mi as LONG and print the total and average.",
      "Commit and push."],
      done:"week.py prints 48 mi total, 6.9 average, and flags Saturday as LONG.",
      links:[["Deep Thought",P+"1/deep/"],["Bank",P+"1/bank/"],["Meal Time",P+"1/meal/"],["camelCase",P+"2/camel/"],["Vanity Plates",P+"2/plates/"]]},
    6:{steps:[
      "In 01-python/runs_data.py, generate 30 days of runs with random.seed(42) and random.uniform(3, 13) miles, as a list of dicts {date, miles, seconds}.",
      "Use comprehensions to get: runs over 10 mi, total miles, and the 3 fastest paces (sorted(..., key=...)[:3]).",
      "Convert the runs to tuples and loop with unpacking: for date, miles, secs in runs:",
      "In Python Tutor, run a = [1, 2]; b = a; a.append(3); c = a[:] and note which lists change.",
      "CS50P Problem Set 2: Coke Machine and Just setting up my twttr. Commit and push."],
      done:"runs_data.py prints long runs, total miles and the top 3 paces from one list.",
      links:[["Coke Machine",P+"2/coke/"],["twttr",P+"2/twttr/"],["Python Tutor","https://pythontutor.com/visualize.html"]]},
    7:{steps:[
      "Save the Salesforce AI Labs posting text as 01-python/posting.txt.",
      "Write skills.py: lowercase the text, strip punctuation, drop a set of stopwords, and print Counter(words).most_common(20).",
      "Make a set of your resume skills and a set of the posting's skills (python, sql, spark, mlops, gcp, aws, agents...). Print the intersection and the gap (posting − yours).",
      "Group your 30 runs by ISO week with defaultdict(list) using date.isocalendar().week, then print miles per week.",
      "CS50P: Nutrition Facts (Problem Set 2) and Grocery List (Problem Set 3). Commit and push."],
      done:"You have a printed skill-gap list. Add its top 3 gaps to targets.md as things to learn.",
      links:[["Counter","https://docs.python.org/3/library/collections.html#counter-objects"],["Nutrition Facts",P+"2/nutrition/"],["Grocery List",P+"3/grocery/"]]},
    8:{steps:[
      "Create the package folder trail_log/ with core.py containing parse_time(s) -> int, pace(miles, secs) -> int, format_pace(sec_per_mile) -> str and parse_line(line) -> dict. Each gets type hints and a docstring.",
      "Add an if __name__ == \"__main__\": demo that parses 3 lines.",
      "Reproduce the mutable-default bug: def add_run(run, log=[]), called twice. Then fix it with log=None.",
      "CS50P Problem Set 1: File Extensions and Math Interpreter. Commit and push."],
      done:"python trail_log/core.py prints 3 parsed runs, and the bug demo shows the shared list.",
      links:[["File Extensions",P+"1/extensions/"],["Math Interpreter",P+"1/interpreter/"],["Defining functions","https://docs.python.org/3/tutorial/controlflow.html#defining-functions"]]},
    9:{steps:[
      "Write trail_log/storage.py with save_csv / load_csv (csv.DictWriter and DictReader) and save_json / load_json.",
      "Create sample.csv with 2 malformed lines. load_csv should skip them with try/except ValueError and print \"skipped line N: ...\".",
      "CS50P Problem Set 3: Fuel Gauge and Outdated.",
      "CS50P Problem Set 6: Lines of Code and Scourgify. Commit and push."],
      done:"Loading sample.csv returns the good runs and reports exactly 2 skipped lines.",
      links:[["Fuel Gauge",P+"3/fuel/"],["Outdated",P+"3/outdated/"],["Lines of Code",P+"6/lines/"],["Scourgify",P+"6/scourgify/"],["csv module","https://docs.python.org/3/library/csv.html"]]},
    10:{steps:[
      "In upskill-lab: python3 -m venv .venv, activate it, pip install rich, pip freeze > requirements.txt. Add .venv/ to .gitignore.",
      "Finish the package: trail_log/__init__.py, core.py, storage.py and cli.py.",
      "Use argparse subcommands: python -m trail_log.cli add \"2026-11-02, 6 mi, 50:30\", plus week (a rich table of this week) and longest.",
      "CS50P Problem Set 4: Guessing Game and Little Professor. Commit and push."],
      done:"From a fresh clone, pip install -r requirements.txt and python -m trail_log.cli week both work.",
      links:[["venv tutorial","https://docs.python.org/3/tutorial/venv.html"],["argparse tutorial","https://docs.python.org/3/howto/argparse.html"],["Guessing Game",P+"4/game/"],["Little Professor",P+"4/professor/"]]},
    11:{steps:[
      "Add classes to core.py: Run(date, miles, seconds) with pace() and __str__, and Week(runs) with add(run), total_miles() and longest().",
      "Switch cli.py from dicts to Run and Week objects.",
      "CS50P Problem Set 8: Cookie Jar.",
      "Commit, then tag a release: git tag v0.1 && git push --tags."],
      done:"trail_log v0.1 is tagged on GitHub and the CLI uses Run/Week objects.",
      links:[["Cookie Jar",P+"8/jar/"],["Classes tutorial","https://docs.python.org/3/tutorial/classes.html#a-first-look-at-classes"]]}
  };
})();
