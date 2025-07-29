-- Create database schema for aerospace dashboard
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'operator',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS missions (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    progress INTEGER DEFAULT 0,
    launch_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS telemetry_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mission_id VARCHAR(50) REFERENCES missions(id),
    timestamp TIMESTAMP DEFAULT NOW(),
    altitude DECIMAL(10,2),
    velocity DECIMAL(10,2),
    battery DECIMAL(5,2),
    temperature DECIMAL(6,2),
    signal_strength DECIMAL(5,2),
    data_rate DECIMAL(8,2)
);

CREATE TABLE IF NOT EXISTS mission_objectives (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mission_id VARCHAR(50) REFERENCES missions(id),
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample data
INSERT INTO missions (id, name, status, progress, launch_date) VALUES
('QS-001', 'Quantum Satellite Alpha', 'Active', 87, '2024-01-15'),
('QS-002', 'Orbital Mechanics Test', 'Pending', 45, '2024-03-20'),
('QS-003', 'Deep Space Probe', 'Complete', 100, '2023-08-10'),
('QS-004', 'Mars Communication Relay', 'Active', 72, '2024-02-01');

INSERT INTO mission_objectives (mission_id, task, completed) VALUES
('QS-001', 'Orbital insertion', TRUE),
('QS-001', 'Solar panel deployment', TRUE),
('QS-001', 'Communication test', TRUE),
('QS-001', 'Quantum processor calibration', FALSE),
('QS-001', 'Science operations', FALSE);
