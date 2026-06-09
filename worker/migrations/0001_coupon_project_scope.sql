PRAGMA foreign_keys = OFF;

CREATE TABLE coupons_scoped (
  code TEXT NOT NULL,
  discount_type TEXT NOT NULL,
  value INTEGER NOT NULL,
  min_amount INTEGER DEFAULT 0,
  max_discount INTEGER,
  active INTEGER DEFAULT 1,
  expires_at TEXT,
  project_id TEXT NOT NULL,
  id TEXT,
  discount_value REAL,
  PRIMARY KEY (project_id, code)
);

INSERT INTO coupons_scoped (code, discount_type, value, min_amount, max_discount, active, expires_at, project_id, id, discount_value)
SELECT code, discount_type, value, min_amount, max_discount, active, expires_at, COALESCE(project_id, 'ascendbeyond'), id, discount_value
FROM coupons;

DROP TABLE coupons;
ALTER TABLE coupons_scoped RENAME TO coupons;

CREATE INDEX IF NOT EXISTS idx_coupons_project_code ON coupons(project_id, code);
PRAGMA foreign_keys = ON;
