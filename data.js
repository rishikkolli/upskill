// Upskill Lab: 2-week sprint, Mon Nov 16 to Sun Nov 29, 2026. Data engineering focus.
// 3 hours a day = 90 min Educative + 90 min hands-on project / online course.
// Each day: do the exercises, then 2–3 check questions.
window.SPRINT = { start: "2026-11-16", end: "2026-11-29", race: "2026-11-26" };

window.COURSES = {
  sdf: { name: "Grokking the Fundamentals of System Design", url: "https://www.educative.io/courses/grokking-system-design-fundamentals", color: "#2F6FD0" },
  def: { name: "Data Engineering Foundations in Python", url: "https://www.educative.io/courses/data-engineering-foundations", color: "#0E7C86" }
};

window.TRACKS = {
  docker: { name: "Docker + Postgres ingestion", color: "#2F6FD0" },
  airflow:{ name: "Airflow → GCS → BigQuery", color: "#E8590C" },
  bq:     { name: "BigQuery warehouse", color: "#1E8A5A" },
  dbt:    { name: "dbt modeling", color: "#C2410C" },
  db:     { name: "DB Systems Part 2", color: "#7C4DDB" },
  sql:    { name: "SQL interview drills", color: "#B4532A" },
  spark:  { name: "PySpark", color: "#D9480F" },
  kafka:  { name: "Kafka streaming", color: "#5F3DC4" },
  review: { name: "Portfolio", color: "#5B6475" }
};

// steps: [task, minutes]. cards: 2–3 check questions answered after the exercises.
window.DAYS = [
{
  date: "2026-11-16", theme: "System design: communication + storage starts · Postgres in Docker",
  edu: { c: "sdf", unit: "Module 3 · Communication (all 5) + Module 4 · Storage (lessons 1–3)",
    steps: [["Module 3, lessons 1–5 + quiz", 50], ["Module 4, lessons 1–3", 40]] },
  build: { t: "docker", title: "Run Postgres in Docker and load NYC taxi data with Python",
    steps: [
      ["Install/start Docker Desktop. Run `docker run -e POSTGRES_PASSWORD=root -p 5432:5432 -v pgdata:/var/lib/postgresql/data postgres:16`", 15],
      ["Download one month of NYC yellow taxi trips (Parquet) from the TLC trip record page", 10],
      ["Write ingest.py: read with pandas, write to Postgres in 100k-row chunks with SQLAlchemy `to_sql`", 35],
      ["Run 3 queries in psql: trips per day, avg fare by payment type, top 5 pickup zones", 20],
      ["Push to a new repo `de-lab` with a short README", 10]
    ],
    done: "`SELECT count(*) FROM yellow_trips` matches the row count of the file.",
    links: [["TLC trip data","https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"],["DE Zoomcamp · Module 1","https://github.com/DataTalksClub/data-engineering-zoomcamp"]] },
  cards: [
    ["When pick async messaging over a REST call?", "When the caller doesn't need the answer right away, or you want to absorb bursts and decouple failures (the queue keeps work if the consumer is down)."],
    ["Why load a big file in chunks?", "Keeps memory flat and lets a failed load resume from the last good chunk instead of starting over."]
  ]
},
{
  date: "2026-11-17", theme: "System design: storage + security · docker-compose + GCP setup",
  edu: { c: "sdf", unit: "Module 4 · Storage (lessons 4–8 + quiz) + Module 5 · Security (lessons 1–3)",
    steps: [["Module 4, lessons 4–8 + quiz", 55], ["Module 5, lessons 1–3", 35]] },
  build: { t: "docker", title: "docker-compose stack + GCP bucket and dataset with Terraform",
    steps: [
      ["Write docker-compose.yml: Postgres + pgAdmin on one network; move ingest.py into its own container", 30],
      ["Create a GCP project service account (Storage Admin, BigQuery Admin); save the key outside the repo", 15],
      ["Terraform: one GCS bucket + one BigQuery dataset; `terraform init / plan / apply`", 35],
      ["Commit compose + Terraform files (never the key)", 10]
    ],
    done: "`docker compose up` loads the data, and the bucket + dataset exist in GCP.",
    links: [["Docker Compose docs","https://docs.docker.com/compose/"],["Terraform GCP tutorial","https://developer.hashicorp.com/terraform/tutorials/gcp-get-started"]] },
  cards: [
    ["Replication vs. partitioning?", "Replication copies the same data to several nodes (availability, read scale). Partitioning splits data across nodes (write scale, size)."],
    ["AuthN vs. AuthZ?", "Authentication: who you are. Authorization: what you're allowed to do."],
    ["Why Terraform instead of clicking in the console?", "Infra is versioned, reviewable and reproducible; `plan` shows the change before it happens."]
  ]
},
{
  date: "2026-11-18", theme: "Finish System Design ✅ · first Airflow DAG",
  edu: { c: "sdf", unit: "Module 5 · Security (lessons 4–5) + Module 6 · Trade-offs (4) + Module 7 · Wrap-up (2)",
    steps: [["Module 5, lessons 4–5 + quiz", 20], ["Module 6, all 4 lessons", 45], ["Module 7, both lessons + any open quizzes. Course complete", 25]] },
  build: { t: "airflow", title: "Airflow DAG: download taxi month → GCS → BigQuery",
    steps: [
      ["`astro dev init` in a new folder and `astro dev start` (Astro CLI runs Airflow in Docker)", 15],
      ["DAG `taxi_ingest`: task 1 downloads the Parquet file for a month", 20],
      ["Task 2 uploads it to your GCS bucket (GCSHook or LocalFilesystemToGCSOperator)", 20],
      ["Task 3 loads it into BigQuery (GCSToBigQueryOperator)", 25],
      ["Trigger it in the UI and read each task's logs", 10]
    ],
    done: "One green DAG run and the table shows up in BigQuery.",
    links: [["Astro CLI","https://www.astronomer.io/docs/astro/cli/get-started-cli"],["Airflow tutorial","https://airflow.apache.org/docs/apache-airflow/stable/tutorial/fundamentals.html"]] },
  cards: [
    ["Consistency vs. latency trade-off?", "Strong consistency waits for replicas to agree (slower). Eventual consistency answers fast but may return stale data."],
    ["DAG vs. task in Airflow?", "A DAG is the whole workflow and its schedule; tasks are the steps, with dependencies between them."]
  ]
},
{
  date: "2026-11-19", theme: "DE Foundations: roles + life cycle · make the DAG idempotent",
  edu: { c: "def", unit: "Module 1 · Getting Started + Module 2 · Data Team Structure + Module 3 · Life Cycle",
    steps: [["Module 1 + Module 2 (3 lessons incl. quiz)", 30], ["Module 3, all 5 lessons + exercises", 60]] },
  build: { t: "airflow", title: "Parametrize, backfill and make loads idempotent",
    steps: [
      ["Use `{{ ds }}` / logical date so each run loads its own month", 20],
      ["Load into a month partition with WRITE_TRUNCATE so reruns don't duplicate rows", 25],
      ["Add retries=2 and retry_delay; force a failure and watch it retry", 15],
      ["Backfill Jan–Mar: `astro dev run dags backfill`", 20],
      ["Run March twice; confirm the row count doesn't change", 10]
    ],
    done: "3 months loaded and a rerun gives the same row count.",
    links: [["Airflow templates reference","https://airflow.apache.org/docs/apache-airflow/stable/templates-ref.html"]] },
  cards: [
    ["What makes a pipeline idempotent?", "Running it twice for the same input gives the same result, e.g. overwrite the partition instead of appending."],
    ["Stages of the data engineering life cycle?", "Generation → ingestion → storage → transformation → serving, with security, orchestration and data quality running underneath."]
  ]
},
{
  date: "2026-11-20", theme: "Cloud data architecture · BigQuery partitioning",
  edu: { c: "def", unit: "Module 4 · Cloud Data Architecture (all 6)",
    steps: [["Module 4, lessons 1–3", 45], ["Module 4, lessons 4–6 + exercises", 45]] },
  build: { t: "bq", title: "BigQuery: partitioned + clustered tables",
    steps: [
      ["Create `trips_part` partitioned by pickup date and clustered by PULocationID", 20],
      ["Run the same filtered query on the raw table vs. `trips_part`; note bytes processed for each", 25],
      ["Create an external table over the GCS files; compare it to the native table", 25],
      ["Save both queries + byte counts in the README", 20]
    ],
    done: "README shows the bytes-scanned drop from partitioning.",
    links: [["BigQuery partitioned tables","https://cloud.google.com/bigquery/docs/partitioned-tables"],["Clustered tables","https://cloud.google.com/bigquery/docs/clustered-tables"]] },
  cards: [
    ["Partitioning vs. clustering in BigQuery?", "Partitioning splits the table into segments (by date, say) that queries can skip. Clustering sorts data inside them by columns so filters read fewer blocks."],
    ["Data lake vs. warehouse vs. lakehouse?", "Lake: cheap raw files. Warehouse: modeled tables for SQL. Lakehouse: warehouse features (ACID, schema) on lake files."]
  ]
},
{
  date: "2026-11-21", theme: "Data ingestion I · dbt staging models",
  edu: { c: "def", unit: "Module 5 · Data Ingestion (lessons 1–5)",
    steps: [["Lessons 1–3", 45], ["Lessons 4–5 + exercises", 45]] },
  build: { t: "dbt", title: "dbt Fundamentals + staging layer on BigQuery",
    steps: [
      ["dbt Learn · dbt Fundamentals: first modules", 35],
      ["`dbt init` with dbt-bigquery; declare `trips_part` as a source", 15],
      ["Model `stg_trips`: rename columns, cast types, drop zero-distance rows", 25],
      ["`dbt run` and check the view in BigQuery", 15]
    ],
    done: "`dbt run` builds stg_trips without errors.",
    links: [["dbt Fundamentals","https://learn.getdbt.com/courses/dbt-fundamentals"],["dbt-bigquery setup","https://docs.getdbt.com/docs/core/connect-data-platform/bigquery-setup"]] },
  cards: [
    ["Batch vs. streaming ingestion?", "Batch moves data on a schedule in chunks; streaming moves each event as it happens. Streaming is fresher but harder to run."],
    ["What belongs in a dbt staging model?", "One per source table: renames, type casts, light cleanup. No joins or business logic."]
  ]
},
{
  date: "2026-11-22", theme: "Data ingestion II · dbt star schema + tests",
  edu: { c: "def", unit: "Module 5 · Data Ingestion (lessons 6–9)",
    steps: [["Lessons 6–7", 45], ["Lessons 8–9 + exercises", 45]] },
  build: { t: "dbt", title: "dbt: fact + dimension models, tests, docs",
    steps: [
      ["Seed the taxi zone lookup CSV; build `dim_zones`", 20],
      ["Build `fct_trips` joining stg_trips to pickup/dropoff zones", 25],
      ["Tests: unique + not_null on keys, relationships fct → dim", 25],
      ["`dbt docs generate && dbt docs serve`; screenshot the lineage graph", 20]
    ],
    done: "`dbt build` passes all tests and the lineage graph shows source → stg → fct/dim.",
    links: [["Taxi zone lookup","https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"],["dbt tests","https://docs.getdbt.com/docs/build/data-tests"]] },
  cards: [
    ["Fact vs. dimension table?", "Fact: events with numbers (one row per trip). Dimension: descriptive attributes you filter and group by (zones, dates)."],
    ["What does a relationships test catch?", "Fact rows whose foreign key has no match in the dimension (orphans)."]
  ]
},
{
  date: "2026-11-23", theme: "Data modeling I · DB project web app",
  edu: { c: "def", unit: "Module 6 · Data Modeling (lessons 1–4)",
    steps: [["Lessons 1–2", 45], ["Lessons 3–4 + exercises", 45]] },
  build: { t: "db", title: "CS-GY 6083 Part 2: app skeleton on the Part 1 schema",
    steps: [
      ["Sync with the team on stack and who owns which pages", 15],
      ["Flask app, DB connection from env vars, base template", 25],
      ["Login with hashed passwords (werkzeug.security) and sessions", 30],
      ["Parameterized queries only; try `' OR 1=1 --` in the login form", 20]
    ],
    done: "A seeded user can log in, and the injection attempt fails.",
    links: [["Flask tutorial","https://flask.palletsprojects.com/en/stable/tutorial/"]] },
  cards: [
    ["Star vs. snowflake schema?", "Star: the fact joins flat dimensions. Snowflake: dimensions are normalized into more tables (less duplication, more joins)."],
    ["Why parameterized queries?", "The database treats input as data, never as SQL, so it can't be injected."]
  ]
},
{
  date: "2026-11-24", theme: "Data modeling II · DB project CRUD",
  edu: { c: "def", unit: "Module 6 · Data Modeling (lessons 5–8)",
    steps: [["Lessons 5–6", 45], ["Lessons 7–8 + exercises", 45]] },
  build: { t: "db", title: "CS-GY 6083 Part 2: CRUD pages + a transaction",
    steps: [
      ["List + detail pages for the 2 main entities", 30],
      ["Create/edit forms with server-side validation", 25],
      ["Wrap a multi-table insert in one transaction; roll back on error", 25],
      ["Push", 10]
    ],
    done: "A record can be created and edited, and a forced error leaves no half-written rows.",
    links: [["Flask-SQLAlchemy","https://flask-sqlalchemy.readthedocs.io/"]] },
  cards: [
    ["SCD Type 1 vs. Type 2?", "Type 1 overwrites the old value. Type 2 adds a new row with valid-from/valid-to dates, keeping history."],
    ["ACID in a line each?", "Atomic: all or nothing. Consistent: rules hold. Isolated: concurrent transactions don't see half-done work. Durable: committed data survives crashes."]
  ]
},
{
  date: "2026-11-25", theme: "Race eve, keep it light · orchestration I + SQL drills",
  edu: { c: "def", unit: "Module 7 · Data Orchestration (lessons 1–4)",
    steps: [["Lessons 1–2", 45], ["Lessons 3–4 + exercises", 45]] },
  build: { t: "sql", title: "SQL interview drills",
    steps: [
      ["DataLemur: 3 window-function problems (ROW_NUMBER, LAG, running SUM)", 45],
      ["DataLemur: 2 CTE / self-join problems", 35],
      ["Lay out race kit. Bed early", 10]
    ],
    done: "5 problems solved.",
    links: [["DataLemur","https://datalemur.com/questions"],["Mode: window functions","https://mode.com/sql-tutorial/sql-window-functions/"]] },
  cards: [
    ["ROW_NUMBER vs. RANK vs. DENSE_RANK?", "ROW_NUMBER: always unique. RANK: ties share a rank and skip (1,1,3). DENSE_RANK: ties share, no skip (1,1,2)."],
    ["Running total in SQL?", "SUM(x) OVER (ORDER BY day ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)."]
  ]
},
{
  date: "2026-11-26", theme: "🦃 Race day: Thanksgiving 5K · learning after you're home",
  edu: { c: "def", unit: "Module 7 · Data Orchestration (lessons 5–8)",
    steps: [["Lessons 5–6", 45], ["Lessons 7–8 + exercises", 45]] },
  build: { t: "spark", title: "PySpark on the taxi data",
    steps: [
      ["`pip install pyspark`; start a local SparkSession", 10],
      ["Read 3 months of Parquet; trips and revenue per zone per day with groupBy", 30],
      ["`repartition` vs. `coalesce`; check the output file count", 20],
      ["`df.explain()` before and after a join; spot the shuffle", 20],
      ["Write results as partitioned Parquet; commit the notebook", 10]
    ],
    done: "A Spark job writes partitioned Parquet, and you can point to the shuffle in the plan.",
    links: [["PySpark quickstart","https://spark.apache.org/docs/latest/api/python/getting_started/index.html"]] },
  cards: [
    ["What causes a shuffle in Spark?", "Wide transformations like groupBy, join and repartition, which move rows between partitions over the network."],
    ["repartition vs. coalesce?", "repartition does a full shuffle to any count. coalesce only merges partitions down, with no full shuffle."]
  ]
},
{
  date: "2026-11-27", theme: "Educative project: Airflow ETL · Kafka basics",
  edu: { c: "def", unit: "Project · Mastering Airflow: Building an ETL Pipeline",
    steps: [["Project tasks 1–half", 45], ["Finish the project", 45]] },
  build: { t: "kafka", title: "Kafka: stream taxi events with Python",
    steps: [
      ["Run single-node Kafka (or Redpanda) with docker compose", 15],
      ["producer.py: send 1,000 trip rows as JSON to topic `trips`", 25],
      ["consumer.py in a consumer group: running count of trips per zone", 30],
      ["Start a second consumer in the same group and watch partitions rebalance", 20]
    ],
    done: "Two consumers split the partitions and the counts add up to 1,000.",
    links: [["Kafka quickstart","https://kafka.apache.org/quickstart"],["confluent-kafka Python","https://docs.confluent.io/kafka-clients/python/current/overview.html"]] },
  cards: [
    ["Topic vs. partition?", "A topic is a named stream. Partitions split it for parallelism; order is only guaranteed within a partition."],
    ["What does a consumer group do?", "Splits a topic's partitions across its consumers so each message is handled by one consumer in the group."]
  ]
},
{
  date: "2026-11-28", theme: "Data quality · test the pipeline",
  edu: { c: "def", unit: "Module 8 · Data Quality (all 4) + start the Formula 1 project",
    steps: [["Module 8, lessons 1–4 + exercises", 55], ["Formula 1 pipeline project: first tasks", 35]] },
  build: { t: "dbt", title: "Data quality on your own pipeline",
    steps: [
      ["dbt source freshness on the raw table", 20],
      ["Custom test: fare_amount >= 0 and trip_distance < 200", 20],
      ["Airflow: run `dbt build` after the load task so failed tests stop the DAG", 35],
      ["Break the data on purpose and watch the DAG fail", 15]
    ],
    done: "Bad data fails the DAG before it reaches fct_trips.",
    links: [["dbt source freshness","https://docs.getdbt.com/docs/deploy/source-freshness"],["Cosmos (dbt in Airflow)","https://astronomer.github.io/astronomer-cosmos/"]] },
  cards: [
    ["Dimensions of data quality?", "Accuracy, completeness, consistency, timeliness/freshness, uniqueness, validity."],
    ["Why run tests inside the DAG?", "Bad data stops before it reaches dashboards, instead of being found later by a user."]
  ]
},
{
  date: "2026-11-29", theme: "Finish DE Foundations ✅ · portfolio",
  edu: { c: "def", unit: "Formula 1 project (finish) + Epilogue + mock interview",
    steps: [["Finish the Formula 1 end-to-end pipeline project", 55], ["Epilogue + Data Engineering Fundamentals mock interview", 35]] },
  build: { t: "review", title: "Ship the taxi pipeline to your portfolio",
    steps: [
      ["README architecture diagram: Docker/Postgres → Airflow → GCS → BigQuery → dbt, + Spark and Kafka side labs", 35],
      ["Add de-lab to the Projects section of rishikkolli.github.io", 20],
      ["2 resume bullets with numbers (rows/month, bytes-scanned drop, tests)", 20],
      ["Pick next sprint's focus", 15]
    ],
    done: "The project is live on your site and in your resume.",
    links: [["Your site","https://rishikkolli.github.io/"]] },
  cards: [
    ["Walk through your pipeline in 30 seconds.", "Airflow pulls monthly taxi files to GCS and loads partitioned BigQuery tables idempotently; dbt builds tested star-schema models; quality checks gate the DAG."],
    ["ETL vs. ELT?", "ETL transforms before loading. ELT loads raw data into the warehouse first and transforms there (dbt), which suits cheap cloud compute."]
  ]
}
];
