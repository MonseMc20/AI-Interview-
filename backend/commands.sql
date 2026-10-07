CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE interviews (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,

    job_position VARCHAR(150) NOT NULL,
    career VARCHAR(150) NOT NULL,

    difficulty VARCHAR(20) NOT NULL
        CHECK (difficulty IN ('easy', 'medium', 'hard')),

    interview_type VARCHAR(20) NOT NULL
        CHECK (interview_type IN ('behavioral', 'technical', 'mixed')),

    job_description TEXT,

    status VARCHAR(20) NOT NULL DEFAULT 'in_progress'
        CHECK (status IN ('in_progress', 'completed', 'abandoned')),

    overall_score NUMERIC(5,2),

    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE TABLE interview_questions (
    id SERIAL PRIMARY KEY,

    interview_id INTEGER NOT NULL
        REFERENCES interviews(id)
        ON DELETE CASCADE,

    question_number INTEGER NOT NULL,

    question_text TEXT NOT NULL,

    question_type VARCHAR(20) NOT NULL
        CHECK (
            question_type IN (
                'behavioral',
                'technical',
                'situational'
            )
        ),

    is_follow_up BOOLEAN NOT NULL DEFAULT FALSE,

    parent_question_id INTEGER
        REFERENCES interview_questions(id)
        ON DELETE CASCADE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE interview_answers (
    id SERIAL PRIMARY KEY,

    question_id INTEGER NOT NULL
        REFERENCES interview_questions(id)
        ON DELETE CASCADE,

    answer_text TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE answer_evaluations (
    id SERIAL PRIMARY KEY,

    answer_id INTEGER NOT NULL
        REFERENCES interview_answers(id)
        ON DELETE CASCADE,

    evaluation JSONB NOT NULL,

    score NUMERIC(5,2) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback_reports (
    id SERIAL PRIMARY KEY,

    user_id INTEGER NOT NULL
        REFERENCES users(id)
        ON DELETE CASCADE,

    interview_id INTEGER NOT NULL
        REFERENCES interviews(id)
        ON DELETE CASCADE,

    overall_score NUMERIC(5,2) NOT NULL,

    behavioral_score NUMERIC(5,2),
    technical_score NUMERIC(5,2),
    situational_score NUMERIC(5,2),

    strengths JSONB,
    areas_for_improvement JSONB,
    recommendations JSONB,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);